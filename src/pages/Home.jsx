export default function Home() {
  return (
    <section className="section">
      <h1 className="h1">헬파크 웹 홈페이지</h1>

      <div className="badges">
        <span className="badge">iOS 어플 출시 준비중</span>
        <span className="badge">Android 어플 출시 준비중</span>
      </div>

      <div className="list">
        <p>
          인스타그램{" "}
          <a
            href="https://instagram.com/hellpark_official"
            target="_blank"
            rel="noreferrer"
          >
            @hellpark_official
          </a>
        </p>
        <p>
          <a href="#" onClick={(e) => e.preventDefault()}>
            English Documents: Preparing
          </a>
        </p>
      </div>

      <hr className="hr" />

      <div className="company">
        <p>개인사업자 상호명: wAIne</p>
        <p>공동대표자: 신동성, 신기수</p>
        <p>주소: 서울시 관악구 남부순환로 247길 14-6</p>
        <p>
          이메일:{" "}
          <a href="mailto:estargod107@gmail.com">estargod107@gmail.com, sgs8769@naver.com</a>
        </p>
      </div>

      <hr className="hr" />

      <div className="nav-buttons">
        <a className="btn" href="/terms">서비스 이용약관</a>
        <a className="btn" href="/privacy">개인정보처리방침</a>
        <a className="btn" href="/sensitive">민감정보 처리방침</a>
        <a className="btn" href="/support">지원 · 연락처</a>
      </div>
    </section>
  );
}