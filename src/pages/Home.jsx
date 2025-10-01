import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <section className="section">
      <h1 className="h1">헬파크 웹 홈페이지 · Hellpark Web Homepage</h1>
      <p className="muted">iOS & Android App Coming Soon</p>

      <div className="badges">
        <span className="badge">iOS 출시 심사중 · iOS Coming Soon</span>
        <span className="badge">Android 출시 심사중 · Android Coming Soon</span>
      </div>

      <div className="list">
        <p>
          인스타그램 · Instagram{" "}
          <a
            href="https://instagram.com/hellpark_official"
            target="_blank"
            rel="noreferrer"
          >
            @hellpark_official
          </a>
        </p>
      </div>

      <hr className="hr" />

      <div className="company">
        <h3 className="h3">회사 정보</h3>
        <p>개인사업자 상호명: wAIne</p>
        <p>공동대표자: 신동성, 신기수</p>
        <p>
          주소: 서울시 관악구 남부순환로 247길 14-6
        </p>
        <p>
          이메일:{" "}
          <a href="mailto:estargod107@gmail.com">estargod107@gmail.com</a>,{" "}
          <a href="mailto:sgs8769@naver.com">sgs8769@naver.com</a>
        </p>
      </div>

      <hr className="hr" />

      {/* 한국어 문서 버튼 */}
      <div className="nav-buttons" style={{ marginBottom: 8 }}>
        <NavLink className="btn" to="/terms">서비스 이용약관</NavLink>
        <NavLink className="btn" to="/privacy">개인정보처리방침</NavLink>
        <NavLink className="btn" to="/sensitive">민감정보 처리방침</NavLink>
        <NavLink className="btn" to="/support">지원 · 연락처</NavLink>
      </div>

      {/* 영어 문서 버튼 */}
      <div className="nav-buttons">
        <NavLink className="btn" to="/terms-en">Terms (EN)</NavLink>
        <NavLink className="btn" to="/privacy-en">Privacy (EN)</NavLink>
        <NavLink className="btn" to="/sensitive-en">Sensitive Info (EN)</NavLink>
        <NavLink className="btn" to="/support-en">Support (EN)</NavLink>
      </div>
    </section>
  );
}