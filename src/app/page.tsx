'use client'
import './styles/home.css'

export default function HomePage() {
  return (
    <main className="page">
      {/* ===== 홈 페이지 바탕 블록 ===== */}
      <div className="home-block">

        {/* ===== 사용법 카드 ===== */}
        <section className="content-area">
          <h2 className="content-title">사용법</h2>
          <p className="tab-content">
            정보 탭에 본인 스펙 입력 후, 계산기를 활용하세요.<br />
            예) 채광 / 재배 / 해양 정보 입력 → 결과 확인
          </p>
        </section>

        {/* ===== 최신 업데이트 배너 ===== */}
        <section className="update-banner">
          <div className="update-banner-badge">최신 업데이트</div>
          <div className="update-banner-title">해양 수정</div>
          <div className="update-banner-desc">가격 / 전문가 / 레시피 등</div>
          <div className="update-banner-date">2025.01.07</div>
        </section>

        {/* ===== 업데이트 내역 카드 ===== */}
        <section className="content-area">
          <h3 className="content-title">업데이트 내역</h3>

          <div className="update-list">
            <div className="update-item">
              <div className="update-content">
                <div className="update-title">요리 가격 수정 06~09</div>
                <div className="update-meta">2025.01.03</div>
              </div>
            </div>

            <div className="update-item">
              <div className="update-content">
                <div className="update-title">해양 계산기 조합법 추가</div>
                <div className="update-meta">2025.12.31 · 업데이트</div>
              </div>
            </div>

            <div className="update-item">
              <div className="update-content">
                <div className="update-title">재배 디자인 수정</div>
                <div className="update-meta">2025.12.31 · 개선</div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
