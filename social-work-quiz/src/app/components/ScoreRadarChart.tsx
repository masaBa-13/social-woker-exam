// app/components/ScoreRadarChart.tsx
'use client';

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

// 受け取るデータの型定義
type AnswerHistory = {
  questionId: number;
  category: string;
  isCorrect: boolean;
};

type Props = {
  results: AnswerHistory[];
};

export default function ScoreRadarChart({ results }: Props) {
  // 1. 結果を集計してカテゴリごとの正答率を算出するロジック
  const categoryStats = results.reduce((acc, curr) => {
    const category = curr.category.split('：')[0]; // "第1部：..." のような長い名前を短縮する場合
    
    if (!acc[category]) {
      acc[category] = { total: 0, correct: 0 };
    }
    acc[category].total += 1;
    if (curr.isCorrect) {
      acc[category].correct += 1;
    }
    return acc;
  }, {} as Record<string, { total: number; correct: number }>);

  // 2. Recharts用のデータ形式に変換
  const data = Object.keys(categoryStats).map((key) => {
    const stat = categoryStats[key];
    const percentage = Math.round((stat.correct / stat.total) * 100);
    return {
      subject: key,   // カテゴリ名
      A: percentage,  // 正答率（0-100）
      fullMark: 100,  // 満点
      total: stat.total,
      correct: stat.correct
    };
  });

  // カスタムツールチップ（ホバー時に詳細を表示）
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-slate-200 shadow-lg rounded-lg text-sm">
          <p className="font-bold text-slate-700 mb-1">{label}</p>
          <p className="text-blue-600">正答率: {dataPoint.A}%</p>
          <p className="text-slate-500 text-xs">
            ({dataPoint.correct} / {dataPoint.total} 問正解)
          </p>
        </div>
      );
    }
    return null;
  };

  // カテゴリ名が長い場合は短縮表示
  const formatLabel = (label: string) => {
    // 長いカテゴリ名を短縮（8文字まで）
    if (label.length > 8) {
      return label.substring(0, 8) + '...';
    }
    return label;
  };

  return (
    <div className="w-full h-[400px] md:h-[500px] flex flex-col items-center justify-center px-2">
      <h3 className="text-lg font-bold text-slate-700 mb-3">分野別 成績分析</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="55%" data={data}>
          <PolarGrid stroke="#e2e8f0" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ 
              fill: '#64748b', 
              fontSize: 9,
              fontWeight: 500,
            }}
            tickFormatter={formatLabel}
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 100]} 
            tick={false} 
            axisLine={false} 
          />
          <Radar
            name="正答率"
            dataKey="A"
            stroke="#3b82f6"
            strokeWidth={2}
            fill="#3b82f6"
            fillOpacity={0.4}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
      <p className="text-xs text-slate-400 mt-2">※各頂点のタップで詳細を表示</p>
    </div>
  );
}