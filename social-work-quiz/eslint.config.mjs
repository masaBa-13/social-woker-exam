/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // これが必須！静的ファイルとして出力する設定
  images: {
    unoptimized: true, // GitHub PagesではNext.jsの画像最適化が使えないためOFFにする
  },
  // 注意: リポジトリ名が 'username.github.io' ではなく 'social-work-quiz' のようなサブディレクトリの場合、
  // 以下のコメントアウトを外してリポジトリ名を設定する必要があります。
  // basePath: "/social-work-quiz",
};

export default nextConfig;