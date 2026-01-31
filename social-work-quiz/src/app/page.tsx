// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { questions, Question } from './data/questions';
import { CheckCircle2, XCircle, RefreshCw, Eye, Trophy, PauseCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
// @ts-ignore
import ScoreRadarChart from './components/ScoreRadarChart';

// 履歴データの型定義
type AnswerResult = {
  questionId: number;
  category: string;
  isCorrect: boolean;
};

export default function Home() {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [results, setResults] = useState<AnswerResult[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    resetQuiz();
  }, []);

  const resetQuiz = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentIndex(0);
    setIsAnswerRevealed(false);
    setScore(0);
    setResults([]);
    setIsFinished(false);
  };

  const handleReveal = () => {
    setIsAnswerRevealed(true);
  };

  // 中断ハンドラー
  const handleInterrupt = () => {
    // まだ1問も解いていない場合は何もしない、またはリセット
    if (results.length === 0) return;
    setIsFinished(true);
  };

  const handleJudge = (isCorrect: boolean) => {
    const currentQ = shuffledQuestions[currentIndex];
    
    // 履歴を更新（非同期の罠を避けるため、更新後の値を計算して利用）
    const newResult = {
      questionId: currentQ.id,
      category: currentQ.category,
      isCorrect: isCorrect,
    };
    
    setResults((prev) => [...prev, newResult]);

    if (isCorrect) setScore((prev) => prev + 1);

    // 次の問題へ
    if (currentIndex < shuffledQuestions.length - 1) {
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setIsAnswerRevealed(false);
      }, 300);
    } else {
      // 最後の問題を解いた場合
      setIsFinished(true);
      // 今回の正解を含めて全問正解か判定
      const finalScore = score + (isCorrect ? 1 : 0);
      if (finalScore === shuffledQuestions.length) {
        triggerConfetti();
      }
    }
  };

  const triggerConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  if (shuffledQuestions.length === 0) return <div className="flex h-screen items-center justify-center text-xl text-gray-600">Loading...</div>;

  const currentQuestion = shuffledQuestions[currentIndex];
  
  // 進捗バーの計算
  const progress = ((currentIndex) / shuffledQuestions.length) * 100;

  // 結果画面用：分母を「回答済み数」にする
  const totalAnswered = results.length;
  // まだ1問も解いていない状態で中断した場合のゼロ除算対策
  const accuracy = totalAnswered > 0 ? Math.round((score / totalAnswered) * 100) : 0;
  // 全問完走したかどうか
  const isCompleteRun = totalAnswered === shuffledQuestions.length;

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center py-10 px-4 text-slate-800">
      
      {/* ヘッダー */}
      <div className="w-full max-w-2xl mb-6 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">社会福祉士 直前総仕上げ</h1>
          <p className="text-slate-500 text-sm">
            {!isFinished ? `第${currentIndex + 1}問 / 全${shuffledQuestions.length}問` : '結果発表'}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className="text-2xl font-bold text-blue-600">{score}</span>
            <span className="text-slate-400 text-sm"> / {shuffledQuestions.length}</span>
          </div>
          {/* 中断ボタン（クイズ中のみ表示） */}
          {!isFinished && results.length > 0 && (
            <button
              onClick={handleInterrupt}
              className="ml-2 px-3 py-2 text-xs font-bold text-slate-500 bg-white border border-slate-200 rounded-lg hover:bg-slate-100 hover:text-red-500 transition-colors flex items-center gap-1"
              title="ここまでの成績で終了する"
            >
              <PauseCircle className="w-4 h-4" />
              中断
            </button>
          )}
        </div>
      </div>

      {/* プログレスバー */}
      <div className="w-full max-w-2xl h-2 bg-slate-200 rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${isFinished ? 100 : progress}%` }}
        />
      </div>

      {!isFinished ? (
        /* クイズカードエリア */
        <div className="w-full max-w-2xl perspective-1000">
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden min-h-[400px] flex flex-col">
            
            {/* カテゴリバッジ */}
            <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex justify-between items-center">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Q{currentIndex + 1} : {currentQuestion.category}
              </span>
              <span className="text-xs text-slate-400">Blank ID: {currentQuestion.blank_id}</span>
            </div>

            {/* 問題文 */}
            <div className="p-8 grow flex items-center justify-center">
              <p className="text-xl md:text-2xl font-medium leading-relaxed text-center text-slate-800">
                {(() => {
                  const blankPattern = new RegExp(`\\(\\s*${currentQuestion.blank_id}\\s*\\)`, 'g');
                  const parts = currentQuestion.question.split(blankPattern);
                  
                  if (parts.length > 1) {
                    return parts.map((part, i) => (
                      <span key={i}>
                        {part}
                        {i < parts.length - 1 && (
                          <span className={`inline-block mx-1 px-4 py-1 rounded-md font-bold transition-all duration-300 ${isAnswerRevealed ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-slate-200 text-slate-500 border border-slate-300'}`}>
                            {isAnswerRevealed ? currentQuestion.answer : `( ${currentQuestion.blank_id} )`}
                          </span>
                        )}
                      </span>
                    ));
                  } else {
                    return (
                      <>
                        {currentQuestion.question}
                        <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                          <span className="font-bold text-slate-400 mr-2">({currentQuestion.blank_id})</span>
                          {isAnswerRevealed ? (
                            <span className="text-green-600 font-bold text-xl">{currentQuestion.answer}</span>
                          ) : (
                            <span className="text-slate-400">???</span>
                          )}
                        </div>
                      </>
                    );
                  }
                })()}
              </p>
            </div>

            {/* 操作エリア */}
            <div className="p-6 bg-slate-50 border-t border-slate-100">
              {!isAnswerRevealed ? (
                <button 
                  onClick={handleReveal}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2"
                >
                  <Eye className="w-5 h-5" />
                  答えを見る
                </button>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => handleJudge(false)}
                    className="py-4 bg-red-100 hover:bg-red-200 text-red-600 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <XCircle className="w-6 h-6" />
                    間違えた...
                  </button>
                  <button 
                    onClick={() => handleJudge(true)}
                    className="py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-green-200 transition-all flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 className="w-6 h-6" />
                    正解！
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* 結果画面 */
        <div className="w-full max-w-4xl animate-in fade-in zoom-in duration-500 pb-20">
          <div className="bg-white rounded-3xl shadow-xl border-2 border-blue-100 p-6 md:p-8 text-center">
            
            {/* メッセージ分岐: 完走して満点ならトロフィー、それ以外や中断はスコア表示 */}
            {isCompleteRun && score === shuffledQuestions.length ? (
               <div className="mb-6">
                 <Trophy className="w-24 h-24 text-yellow-400 mx-auto mb-4 animate-bounce" />
                 <h2 className="text-3xl font-extrabold text-slate-800 mb-2">パーフェクト！</h2>
                 <div className="mt-6 py-6 bg-blue-50 rounded-xl border border-blue-100 px-4">
                   <p className="text-2xl font-bold text-blue-600 mb-2 leading-relaxed">
                     かりんなら絶対合格できるよ！<br/>試験頑張って！
                   </p>
                   <p className="text-lg text-slate-700 font-bold mb-4">
                     試験おわったら一緒にhulu見ようね！
                   </p>
                   <a 
                     href="https://giftee.com/r/D8YKnW3kBxZ8MZcjccnsdpgxkQU8cuUC" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-blue-500 hover:text-blue-700 underline break-all text-sm block"
                   >
                     https://giftee.com/r/D8YKnW3kBxZ8MZcjccnsdpgxkQU8cuUC
                   </a>
                 </div>
               </div>
            ) : (
              <div className="mb-4">
                 {/* 得点率（分母は回答済み数） */}
                 <div className="text-6xl font-bold text-slate-800 mb-2">
                   {accuracy}<span className="text-2xl text-slate-400 ml-1">点</span>
                 </div>
                 
                 <div className="text-slate-500 space-y-1">
                    <p className="font-bold text-lg">
                      {score} / {totalAnswered} 問正解
                    </p>
                    {!isCompleteRun && (
                      <p className="text-xs text-amber-600 bg-amber-50 inline-block px-2 py-1 rounded">
                        ※途中中断したため、ここまでの成績で計算しています
                      </p>
                    )}
                    {isCompleteRun && score > shuffledQuestions.length * 0.8 && (
                      <p>その調子！あと少し！</p>
                    )}
                 </div>
              </div>
            )}

            {/* レーダーチャート: 渡している results は回答済みのものだけなので、自動的に「ここまでの範囲」で描画されます */}
            {results.length > 0 && (
              <div className="mb-6 border-t border-slate-100 pt-6">
                <ScoreRadarChart results={results} />
              </div>
            )}

            <button 
              onClick={resetQuiz}
              className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-bold transition-all flex items-center justify-center gap-2 mx-auto"
            >
              <RefreshCw className="w-5 h-5" />
              もう一度挑戦する
            </button>
          </div>
        </div>
      )}
    </main>
  );
}