/**
 * 育毛整体ビオ接骨院 ランディングページ
 * Figmaデザイン忠実再現版
 * - 背景色: #eaf4e7
 * - コンテンツ幅: 690px (モバイルファースト)
 * - LINEボタンリンク: https://lin.ee/nDByzfQ (同一タブ遷移)
 */

const LINE_URL = "https://lin.ee/nDByzfQ";

// Asset URL mapping (manus-storage paths)
const ASSETS = {
  fv: "/manus-storage/188-31_33e78537.webp",          // FV (ファーストビュー)
  price1: "/manus-storage/180-12_32bd831a.webp",       // このページ限定 初回2,980円
  lineBtn1: "/manus-storage/180-14_9081dab2.webp",     // LINE予約ボタン
  clinic: "/manus-storage/180-17_0b5d3bc9.webp",       // 院内写真
  sec19: "/manus-storage/180-19_ac18034e.webp",        // セクション
  sec21: "/manus-storage/180-21_2f332db9.webp",        // セクション
  sec23: "/manus-storage/180-23_e32e5b17.webp",        // セクション
  enpo: "/manus-storage/196-4_0fe64547.webp",          // 遠方からの来院
  price2: "/manus-storage/180-27_ee7b6718.webp",       // 価格バナー繰り返し
  lineBtn2: "/manus-storage/180-29_8e75f7de.webp",     // LINE予約ボタン繰り返し
  sec31: "/manus-storage/180-31_62ad23c7.webp",        // セクション
  sec33: "/manus-storage/180-33_2a4a81bd.webp",        // セクション
  sec35: "/manus-storage/180-35_ab037c2b.webp",        // セクション
  sec37: "/manus-storage/180-37_1b81913b.webp",        // セクション
  sec39: "/manus-storage/180-39_06a776ae.webp",        // セクション
  sec41: "/manus-storage/180-41_84334858.webp",        // セクション
  sec43: "/manus-storage/180-43_04c19874.webp",        // セクション
  price3: "/manus-storage/180-45_e0c25987.webp",       // 価格バナー繰り返し
  lineBtn3: "/manus-storage/180-47_dbeffb2c.webp",     // LINE予約ボタン繰り返し
  sec49: "/manus-storage/180-49_b7ba6514.webp",        // セクション
  sec51: "/manus-storage/180-51_322f348c.webp",        // セクション
  price4: "/manus-storage/180-53_6ad2f165.webp",       // 価格バナー繰り返し
  sec55: "/manus-storage/180-55_89f04758.webp",        // セクション
  lineBtn4: "/manus-storage/180-57_669bb234.webp",     // LINE予約ボタン繰り返し
  sec59: "/manus-storage/180-59_28241ef9.webp",        // セクション（大）
  caution: "/manus-storage/188-26_189d93f8.webp",      // 注意点（限定5名様）
  price5: "/manus-storage/180-63_b0cd541f.webp",       // 価格バナー繰り返し
  lineBtn5: "/manus-storage/180-65_290872fd.webp",     // LINE予約ボタン繰り返し
  lineBtnLg: "/manus-storage/180-67_d86e8a5e.webp",   // LINE予約ボタン（大）
  sec69: "/manus-storage/180-69_64d16e31.webp",        // セクション
  price6: "/manus-storage/180-71_f0a416b2.webp",       // 価格バナー繰り返し
  lineBtn6: "/manus-storage/180-73_a991e775.webp",     // LINE予約ボタン繰り返し
  store: "/manus-storage/196-8_18ef378a.webp",         // 店舗情報
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
