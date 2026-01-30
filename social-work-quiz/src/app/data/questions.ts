// app/data/questions.ts

export type Question = {
  id: number;
  category: string;
  question: string;
  blank_id: string;
  answer: string;
};

export const questions: Question[] = [
  {
    id: 1,
    category: "日本の社会福祉理論",
    question: "岡村重夫は、社会関係の主体的側面に焦点を当てた「( A ) 論」を提唱し、社会福祉固有の視点を確立した。",
    blank_id: "A",
    answer: "固有"
  },
  {
    id: 2,
    category: "日本の社会福祉理論",
    question: "竹内愛二は、『ケース・ワークの理論と実際』を著し、日本に初めて( B ) 理論を導入した。",
    blank_id: "B",
    answer: "ケースワーク"
  },
  {
    id: 3,
    category: "日本の社会福祉理論",
    question: "仲村優一は、『公的扶助とケースワーク』や『( C )』などの著書で知られる。",
    blank_id: "C",
    answer: "社会福祉概論"
  },
  {
    id: 4,
    category: "アドボカシーの定義",
    question: "宮川教君は、アドボカシーを「社会的弱者を擁護し、時には彼らに( D ) それらを主張すること」と定義した。",
    blank_id: "D",
    answer: "代わって（代弁して）"
  },
  {
    id: 5,
    category: "アドボカシーの定義",
    question: "小松源助は、アドボカシーを「( E ) 機能」としてとらえ、権利としてのサービス確保を重視した。",
    blank_id: "E",
    answer: "弁護的"
  },
  {
    id: 6,
    category: "アドボカシーの定義",
    question: "北野誠一は、アドボカシーを「個人や仲間が( F ) することを支援する技術」とした。",
    blank_id: "F",
    answer: "エンパワメント"
  },
  {
    id: 7,
    category: "社会学理論",
    question: "ブルデューは、過去の経験によって形成され、身体化された知覚・思考・行為の図式を「( G )」と呼んだ。",
    blank_id: "G",
    answer: "ハビトゥス"
  },
  {
    id: 8,
    category: "社会学理論",
    question: "デュルケムは『社会分業論』で、社会の連帯が「機械的連帯」から「( H ) 連帯」へ変化すると説いた。",
    blank_id: "H",
    answer: "有機的"
  },
  {
    id: 9,
    category: "福祉レジーム",
    question: "エスピン・アンデルセンの「福祉レジーム論」では、スウェーデンなどは「( I )」レジームに分類される。",
    blank_id: "I",
    answer: "社会民主主義"
  },
  {
    id: 10,
    category: "法改正・時事",
    question: "障害者差別解消法は2013年に成立し、( J )年に施行された。",
    blank_id: "J",
    answer: "2016"
  },
  {
    id: 11,
    category: "法改正・時事",
    question: "2024年4月施行の改正障害者差別解消法により、民間事業者による合理的配慮の提供は「( K )」となった。",
    blank_id: "K",
    answer: "義務"
  },
  {
    id: 12,
    category: "財源・国庫負担",
    question: "「基礎年金」の国庫負担割合は「( L )」である。",
    blank_id: "L",
    answer: "1/2"
  },
  {
    id: 13,
    category: "財源・国庫負担",
    question: "「年金生活者支援給付金」の財源は、「( M )」国庫負担である。",
    blank_id: "M",
    answer: "全額"
  },
  {
    id: 14,
    category: "財源・国庫負担",
    question: "「生活保護費」（生活扶助など）の国庫負担割合は「( N )」である。",
    blank_id: "N",
    answer: "3/4"
  },
  {
    id: 15,
    category: "財源・国庫負担",
    question: "「児童扶養手当」の国庫負担割合は「( O )」である。",
    blank_id: "O",
    answer: "1/3"
  },
  {
    id: 16,
    category: "福祉計画",
    question: "市町村が「指定障害福祉サービスの種類ごとの必要な見込量」について定める計画を「( P )」という。",
    blank_id: "P",
    answer: "市町村障害福祉計画"
  },
  {
    id: 17,
    category: "福祉計画",
    question: "都道府県が「介護保険事業に係る保険給付の円滑な実施の支援」について定める計画を「( Q )」という。",
    blank_id: "Q",
    answer: "都道府県介護保険事業支援計画"
  },
  {
    id: 18,
    category: "援助技術・アプローチ",
    question: "グレイザーとストラウスが提唱した、質的なデータを基に理論構築を行う手法を「( R ) アプローチ」という。",
    blank_id: "R",
    answer: "グラウンデッド・セオリー"
  },
  {
    id: 19,
    category: "援助技術・アプローチ",
    question: "パールマンの「4つのP」とは、Person、Problem、Place、と「( S )」である。",
    blank_id: "S",
    answer: "Process（過程）"
  },
  {
    id: 20,
    category: "援助技術・アプローチ",
    question: "ランクやタフトは、診断主義に対抗して「( T ) 主義（機能派）」を牽引した。",
    blank_id: "T",
    answer: "機能"
  },
  {
    id: 21,
    category: "社会学理論",
    question: "コントは、知識の発展段階を「神学的」→「形而上学的」→「( U )」段階と説いた。",
    blank_id: "U",
    answer: "実証的"
  },
  {
    id: 22,
    category: "社会学理論",
    question: "スペンサーは社会進化論を唱え、社会は「軍事型」から「( V )」へと進化するとした。",
    blank_id: "V",
    answer: "産業"
  },
  {
    id: 23,
    category: "社会学理論",
    question: "マッキーバーは、社会集団を「コミュニティ」と、特定の目的で結びついた「( W )」に分類した。",
    blank_id: "W",
    answer: "アソシエーション"
  },
  {
    id: 24,
    category: "社会学理論",
    question: "サムナーは、集団を愛情を持つ「内集団」と、敵対関係にある「( X )」に分けた。",
    blank_id: "X",
    answer: "外集団"
  },
  {
    id: 25,
    category: "社会学理論",
    question: "ワースは「( Y ) 論」を唱え、都市特有の生活様式を分析した。",
    blank_id: "Y",
    answer: "アーバニズム"
  },
  {
    id: 26,
    category: "社会システム",
    question: "パーソンズは、二者の相互行為が互いの期待に依存し合う状態を「( Z )」と呼んだ。",
    blank_id: "Z",
    answer: "ダブル・コンティンジェンシー"
  },
  {
    id: 27,
    category: "社会システム",
    question: "ルーマンは社会の分化を「環節的」→「階層的」→「( a )」分化と整理した。",
    blank_id: "a",
    answer: "機能的"
  },
  {
    id: 28,
    category: "逸脱行動",
    question: "ゴフマンは、他者からの否定的なレッテルにより属性が汚名となることを「( b )」と呼んだ。",
    blank_id: "b",
    answer: "スティグマ"
  },
  {
    id: 29,
    category: "逸脱行動",
    question: "レマートは、レッテル貼りがなされて逸脱が常習化することを「( c )」と呼んだ。",
    blank_id: "c",
    answer: "二次的逸脱"
  },
  {
    id: 30,
    category: "ノーマライゼーション",
    question: "バンク＝ミケルセン（デンマーク）は、1959年法において「( d )」の提供を提唱した。",
    blank_id: "d",
    answer: "生活条件"
  },
  {
    id: 31,
    category: "ノーマライゼーション",
    question: "ニィリエ（スウェーデン）は、ノーマルな生活の指針として「( e )」を整理した。",
    blank_id: "e",
    answer: "8原理"
  },
  {
    id: 32,
    category: "ノーマライゼーション",
    question: "ヴォルフェンスベルガー（北米）は、障害者が「( f )」と平等な立場で参加できる社会を目指した。",
    blank_id: "f",
    answer: "一般市民"
  },
  {
    id: 33,
    category: "ノーマライゼーション",
    question: "バンクスは、「すべての人が社会で( g ) 扱われるべき」と説いた。",
    blank_id: "g",
    answer: "平等に"
  },
  {
    id: 34,
    category: "セツルメント",
    question: "1884年、ロンドンに世界初のセツルメント「トインビー・ホール」を創設したのは ( h ) 夫妻である。",
    blank_id: "h",
    answer: "バーネット"
  },
  {
    id: 35,
    category: "セツルメント",
    question: "シカゴに「ハル・ハウス」を設立したのは ( i ) である。",
    blank_id: "i",
    answer: "アダムス"
  },
  {
    id: 36,
    category: "セツルメント",
    question: "ニューヨークに「ネイバーフッド・ギルド」を設立したのは ( j ) である。",
    blank_id: "j",
    answer: "コイト"
  },
  {
    id: 37,
    category: "セツルメント",
    question: "日本で神田に「キングスレー館」を設立したのは ( k ) である。",
    blank_id: "k",
    answer: "片山潜"
  },
  {
    id: 38,
    category: "ソーシャルワーク史",
    question: "フレックスナーは1915年の講演で「ソーシャルワークはまだ( l ) ではない」と断じた。",
    blank_id: "l",
    answer: "専門職"
  },
  {
    id: 39,
    category: "福祉政策理論",
    question: "ウェッブ夫妻は『産業民主制論』で、生活の最低水準を保障する「( m )」を提唱した。",
    blank_id: "m",
    answer: "ナショナル・ミニマム"
  },
  {
    id: 40,
    category: "福祉政策理論",
    question: "マーシャルは、シティズンシップを市民的権利→政治的権利→「( n ) 権利」と整理した。",
    blank_id: "n",
    answer: "社会的"
  },
  {
    id: 41,
    category: "福祉政策理論",
    question: "ローズは、福祉の総量は家族、市場、国家の総和であるとする「( o )」を論じた。",
    blank_id: "o",
    answer: "福祉ミックス論"
  },
  {
    id: 42,
    category: "福祉政策理論",
    question: "ギデンズは、市場の効率性と社会的公正の双方を重視する「( p )」を提唱した。",
    blank_id: "p",
    answer: "第三の道"
  },
  {
    id: 43,
    category: "援助モデル",
    question: "パールマンは、個人のワーカビリティを重視する「( q ) アプローチ」を提唱した。",
    blank_id: "q",
    answer: "問題解決"
  },
  {
    id: 44,
    category: "援助モデル",
    question: "ハミルトンやホリスは、診断主義の流れを汲む「( r ) アプローチ」を提唱した。",
    blank_id: "r",
    answer: "心理社会的"
  },
  {
    id: 45,
    category: "地域援助",
    question: "ロスマンは、地域援助技術を「地域開発」「社会計画」「( s )」の3モデルに分類した。",
    blank_id: "s",
    answer: "ソーシャル・アクション"
  },
  {
    id: 46,
    category: "アセスメントツール",
    question: "ハートマンが考案した、利用者と環境（社会資源）の関係を図式化したものを「( t )」という。",
    blank_id: "t",
    answer: "エコマップ"
  },
  {
    id: 47,
    category: "アセスメントツール",
    question: "ボーエンらが開発した、家族の世代間関係を表す図を「( u )」という。",
    blank_id: "u",
    answer: "ジェノグラム"
  },
  {
    id: 48,
    category: "身体機能",
    question: "脳の機能局在において、側頭葉は「聴覚」、後頭葉は「( v )」をつかさどる。",
    blank_id: "v",
    answer: "視覚"
  },
  {
    id: 49,
    category: "発達理論",
    question: "スキャモンの発育曲線で、6歳ですでに成人の90％に達するのは「( w ) 型」である。",
    blank_id: "w",
    answer: "神経"
  },
  {
    id: 50,
    category: "心理学",
    question: "デシの自己決定理論において、行為そのものを目的とするものを「( x ) 動機づけ」という。",
    blank_id: "x",
    answer: "内発的"
  },
  {
    id: 51,
    category: "身体機能",
    question: "加齢に伴い筋肉量が減少し、身体機能が低下する状態を「( y )」という。",
    blank_id: "y",
    answer: "サルコペニア"
  },
  {
    id: 52,
    category: "統計・データ",
    question: "令和7年版高齢社会白書によると、高齢化率は ( z ) ％である。",
    blank_id: "z",
    answer: "29.3"
  },
  {
    id: 53,
    category: "介護保険制度",
    question: "介護サービスの「介護報酬の基準額」を定めるのは「( A1 )」である。",
    blank_id: "A1",
    answer: "厚生労働大臣"
  },
  {
    id: 54,
    category: "介護保険制度",
    question: "介護事業者は、請求・審査・支払業務を「( A2 )」に委託する。",
    blank_id: "A2",
    answer: "国民健康保険団体連合会（国保連）"
  },
  {
    id: 55,
    category: "ICF",
    question: "ICF（国際生活機能分類）において、「職業」は「( A3 ) 因子」に分類される。",
    blank_id: "A3",
    answer: "個人"
  },
  {
    id: 56,
    category: "法制度の歴史",
    question: "2005年、応益負担を導入した「( A4 ) 法」が成立した。",
    blank_id: "A4",
    answer: "障害者自立支援"
  },
  {
    id: 57,
    category: "法制度の歴史",
    question: "2012年、障害者自立支援法は「( A5 ) 法」へと改正された。",
    blank_id: "A5",
    answer: "障害者総合支援"
  },
  {
    id: 58,
    category: "社会システム",
    question: "パーソンズのAGIL図式において、Lは「( A6 ) パターンの維持」を指す。",
    blank_id: "A6",
    answer: "潜在的"
  },
  {
    id: 59,
    category: "援助モデル",
    question: "シュワルツは、個人と社会の媒介に注目する「( A7 ) モデル（媒介モデル）」を提唱した。",
    blank_id: "A7",
    answer: "相互作用"
  },
  {
    id: 60,
    category: "アセスメントツール",
    question: "集団内の構成員同士の選択・拒否関係を図式化したものを「( A8 )」という。",
    blank_id: "A8",
    answer: "ソシオグラム"
  },
  {
    id: 61,
    category: "発達理論",
    question: "スキャモンの発育曲線で、12歳頃にピーク（180%）になるのは「( A9 ) 型」である。",
    blank_id: "A9",
    answer: "リンパ"
  },
  {
    id: 62,
    category: "法制度の歴史",
    question: "1949年に制定された、日本初の身体障害者に関する福祉法は「( B1 )」である。",
    blank_id: "B1",
    answer: "身体障害者福祉法"
  },
  {
    id: 63,
    category: "社会学理論",
    question: "パーソンズは、社会システムの4機能要件をAGIL図式とした。「適応」「( B2 )」「統合」「潜在的パターンの維持」である。",
    blank_id: "B2",
    answer: "目標達成"
  },
  {
    id: 64,
    category: "介護保険制度",
    question: "介護保険の公費負担50%の内訳は、国が25%、都道府県が12.5%、市町村が( B3 )%である。",
    blank_id: "B3",
    answer: "12.5"
  },
  {
    id: 65,
    category: "ノーマライゼーション",
    question: "ヴォルフェンスベルガーは、後にSRV（( B4 )）という概念を提唱した。",
    blank_id: "B4",
    answer: "社会的役割の獲得"
  },
  {
    id: 66,
    category: "アドボカシー",
    question: "アドボカシーの種類には、個人の権利を守る「ケースアドボカシー」と、制度改善を目指す「( B5 ) アドボカシー」などがある。",
    blank_id: "B5",
    answer: "コーズ"
  },
  {
    id: 67,
    category: "心理学",
    question: "ドゥエックは、有能さを認めさせようとする遂行目標と、能力を伸ばそうとする「( B6 ) 目標」を提唱した。",
    blank_id: "B6",
    answer: "学習"
  },
  {
    id: 68,
    category: "SDGs",
    question: "SDGs推進本部の本部長は「( B7 )」である。",
    blank_id: "B7",
    answer: "内閣総理大臣"
  },
  {
    id: 69,
    category: "社会調査",
    question: "質的調査において、データをコード化しカテゴリー化していく手法を「( B8 ) 法」とも呼ぶ。",
    blank_id: "B8",
    answer: "KJ"
  },
  {
    id: 70,
    category: "社会学理論",
    question: "フィッシャーは「都市では多様な( B9 ) が形成される」と説いた。",
    blank_id: "B9",
    answer: "下位文化（サブカルチャー）"
  },
  {
    id: 71,
    category: "社会学理論",
    question: "鈴木栄太郎は、都市を社会的交流の結節機能が集積している「( C1 )」と捉えた。",
    blank_id: "C1",
    answer: "聚落（しゅうらく）社会"
  }
];