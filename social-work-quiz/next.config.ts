/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // リポジトリ名に合わせて設定（先頭に / を忘れずに）
  basePath: "/social-woker-exam",
};

export default nextConfig;
