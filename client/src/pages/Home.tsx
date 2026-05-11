/**
 * 育毛整体ビオ接骨院 ランディングページ
 * Figmaデザイン忠実再現版
 * - 背景色: #eaf4e7
 * - コンテンツ幅: 690px (モバイルファースト)
 * - LINEボタンリンク: https://lin.ee/nDByzfQ (同一タブ遷移)
 * - 画像: /images/ ディレクトリ（GitHub Pages対応）
 */

const LINE_URL = "https://lin.ee/nDByzfQ";

// Asset paths (public/images/ directory - works on both local dev and GitHub Pages)
const BASE = import.meta.env.BASE_URL;
const img = (filename: string) => `${BASE}images/${filename}`;

const ASSETS = {
  fv: img("188-31.webp"),          // FV (ファーストビュー)
  price1: img("180-12.webp"),       // このページ限定 初回2,980円
  lineBtn1: img("180-14.webp"),     // LINE予約ボタン
  clinic: img("180-17.webp"),       // 院内写真
  sec19: img("180-19.webp"),        // セクション
  sec21: img("180-21.webp"),        // セクション
  sec23: img("180-23.webp"),        // セクション
  enpo: img("196-4.webp"),          // 遠方からの来院
  price2: img("180-27.webp"),       // 価格バナー繰り返し
  lineBtn2: img("180-29.webp"),     // LINE予約ボタン繰り返し
  sec31: img("180-31.webp"),        // セクション
  sec33: img("180-33.webp"),        // セクション
  sec35: img("180-35.webp"),        // セクション
  sec37: img("180-37.webp"),        // セクション
  sec39: img("180-39.webp"),        // セクション
  sec41: img("180-41.webp"),        // セクション
  sec43: img("180-43.webp"),        // セクション
  price3: img("180-45.webp"),       // 価格バナー繰り返し
  lineBtn3: img("180-47.webp"),     // LINE予約ボタン繰り返し
  sec49: img("180-49.webp"),        // セクション
  sec51: img("180-51.webp"),        // セクション
  price4: img("180-53.webp"),       // 価格バナー繰り返し
  sec55: img("180-55.webp"),        // セクション
  lineBtn4: img("180-57.webp"),     // LINE予約ボタン繰り返し
  sec59: img("180-59.webp"),        // セクション（大）
  caution: img("188-26.webp"),      // 注意点（限定5名様）
  price5: img("180-63.webp"),       // 価格バナー繰り返し
  lineBtn5: img("180-65.webp"),     // LINE予約ボタン繰り返し
  lineBtnLg: img("180-67.webp"),    // LINE予約ボタン（大）
  sec69: img("180-69.webp"),        // セクション
  price6: img("180-71.webp"),       // 価格バナー繰り返し
  lineBtn6: img("180-73.webp"),     // LINE予約ボタン繰り返し
  store: img("196-8.webp"),         // 店舗情報
};

// LINEボタンコンポーネント（同一タブ遷移）
function LineButton({ src, alt = "LINE予約はこちら" }: { src: string; alt?: string }) {
  return (
    <a href={LINE_URL} style={{ display: "block", width: "100%" }}>
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", display: "block" }}
      />
    </a>
  );
}

// 通常セクション画像コンポーネント
function SectionImage({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", display: "block" }}
    />
  );
}

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "#eaf4e7",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* コンテンツ幅コンテナ */}
      <div
        style={{
          width: "100%",
          maxWidth: "690px",
          backgroundColor: "#eaf4e7",
        }}
      >
        {/* ヘッダー */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "8px 16px",
            borderBottom: "1px solid #bdcea6",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              color: "#333333",
              fontFamily: "Lato, sans-serif",
              fontWeight: "normal",
            }}
          >
            小牧口駅【薄毛に特化】育毛整体
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "#333333",
              fontFamily: "Lato, sans-serif",
              fontWeight: "normal",
              backgroundColor: "rgba(189, 206, 166, 0.4)",
              textShadow: "1px 2px 0px rgba(255,255,255,1)",
              marginTop: "2px",
            }}
          >
            愛知県小牧市で話題の育毛整体はビオ接骨院
          </div>
        </div>

        {/* FV（ファーストビュー） */}
        <SectionImage src={ASSETS.fv} alt="育毛治療院 ファーストビュー" />

        {/* このページ限定 初回2,980円バナー */}
        <SectionImage src={ASSETS.price1} alt="このページ限定 初回2,980円" />

        {/* LINEボタン1 */}
        <LineButton src={ASSETS.lineBtn1} />

        {/* 院内写真 */}
        <div style={{ backgroundColor: "#ffffff", padding: "8px" }}>
          <SectionImage src={ASSETS.clinic} alt="院内写真" />
        </div>

        {/* セクション19 */}
        <SectionImage src={ASSETS.sec19} alt="" />

        {/* セクション21 */}
        <SectionImage src={ASSETS.sec21} alt="" />

        {/* セクション23 */}
        <SectionImage src={ASSETS.sec23} alt="" />

        {/* 遠方からの来院 */}
        <SectionImage src={ASSETS.enpo} alt="遠方からの来院" />

        {/* 価格バナー2 */}
        <SectionImage src={ASSETS.price2} alt="このページ限定 初回2,980円" />

        {/* LINEボタン2 */}
        <LineButton src={ASSETS.lineBtn2} />

        {/* セクション31 */}
        <SectionImage src={ASSETS.sec31} alt="" />

        {/* セクション33 */}
        <SectionImage src={ASSETS.sec33} alt="" />

        {/* セクション35 */}
        <SectionImage src={ASSETS.sec35} alt="" />

        {/* セクション37 */}
        <SectionImage src={ASSETS.sec37} alt="" />

        {/* セクション39 */}
        <SectionImage src={ASSETS.sec39} alt="" />

        {/* セクション41 */}
        <SectionImage src={ASSETS.sec41} alt="" />

        {/* セクション43 */}
        <SectionImage src={ASSETS.sec43} alt="" />

        {/* 価格バナー3 */}
        <SectionImage src={ASSETS.price3} alt="このページ限定 初回2,980円" />

        {/* LINEボタン3 */}
        <LineButton src={ASSETS.lineBtn3} />

        {/* セクション49 */}
        <SectionImage src={ASSETS.sec49} alt="" />

        {/* セクション51 */}
        <SectionImage src={ASSETS.sec51} alt="" />

        {/* 価格バナー4 */}
        <SectionImage src={ASSETS.price4} alt="このページ限定 初回2,980円" />

        {/* セクション55 */}
        <SectionImage src={ASSETS.sec55} alt="" />

        {/* LINEボタン4 */}
        <LineButton src={ASSETS.lineBtn4} />

        {/* セクション59（大） */}
        <SectionImage src={ASSETS.sec59} alt="" />

        {/* 注意点（限定5名様） */}
        <SectionImage src={ASSETS.caution} alt="注意点（限定5名様）" />

        {/* 価格バナー5 */}
        <SectionImage src={ASSETS.price5} alt="このページ限定 初回2,980円" />

        {/* LINEボタン5 */}
        <LineButton src={ASSETS.lineBtn5} />

        {/* LINEボタン（大） */}
        <LineButton src={ASSETS.lineBtnLg} alt="LINE予約はこちら（大）" />

        {/* セクション69 */}
        <SectionImage src={ASSETS.sec69} alt="" />

        {/* 価格バナー6 */}
        <SectionImage src={ASSETS.price6} alt="このページ限定 初回2,980円" />

        {/* LINEボタン6 */}
        <LineButton src={ASSETS.lineBtn6} />

        {/* 店舗情報 */}
        <SectionImage src={ASSETS.store} alt="店舗情報" />
      </div>
    </div>
  );
}
