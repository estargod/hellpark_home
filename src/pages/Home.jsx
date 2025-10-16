import { NavLink } from "react-router-dom";
import HellparkIcon from "../assets/HELLPARK_ICON_V1_1024.png";
import AppleIcon from "../assets/apple.png";
import GooglePlayIcon from "../assets/googleplay.png";

export default function Home() {
  return (
    <section className="section">

<section className="section" style={{ textAlign: "center" }}>
  <h1
    className="h1"
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      fontSize: 36,
      fontWeight: 700,
    }}
  >
    <img
      src={HellparkIcon}
      alt="Hellpark App Icon"
      style={{
        width: 60,
        height: 60,
        borderRadius: 12,
      }}
    />
    헬파크
  </h1>

  {/* 스토어 다운로드 영역 */}
  <div
    className="nav-buttons"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 12,
      marginTop: 16,
      flexWrap: "wrap",
    }}
  >
    <a
      className="btn"
      href="https://apps.apple.com/kr/app/%ED%97%AC%ED%8C%8C%ED%81%AC/id6751828086"
      target="_blank"
      rel="noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        width: 200,
        padding: "10px 16px",
        borderRadius: 8,
        background:
          "linear-gradient(135deg, #9b5de5 0%, #6c5ce7 50%, #a29bfe 100%)",
        color: "white",
        fontWeight: 600,
        textDecoration: "none",
        boxShadow: "0 2px 8px rgba(108, 92, 231, 0.4)",
        transition: "transform 0.15s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <img src={AppleIcon} alt="App Store" style={{ width: 22, height: 22 }} />
      App Store
    </a>

    <a
      className="btn"
      href="#"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        width: 200,
        padding: "10px 16px",
        borderRadius: 8,
        background:
          "linear-gradient(135deg, #b388ff 0%, #a29bfe 50%, #dcd6ff 100%)",
        color: "white",
        fontWeight: 600,
        textDecoration: "none",
        opacity: 0.8,
        cursor: "default",
        boxShadow: "0 2px 8px rgba(155, 89, 182, 0.3)",
      }}
    >
      <img
        src={GooglePlayIcon}
        alt="Google Play"
        style={{ width: 22, height: 22 }}
      />
      Google Play (예정)
    </a>
  </div>
</section>

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

      {/* 앱 소개 섹션 */}
      <section className="section" style={{ marginTop: 24 }}>
        <h2 className="h2">사진 한 장으로 식단을 기록하고, AI 코치와 함께 건강을 설계하세요!</h2>

        <ol className="list" style={{ marginTop: 12 }}>
          <li>
            <strong>사진 한 장으로 끝내는 식단 기록</strong><br />
            음식 사진만으로 이름, 양, 칼로리, 탄수화물, 단백질, 지방 등 영양정보를 자동 분석합니다.
          </li>
          <li style={{ marginTop: 8 }}>
            <strong>내 하루의 칼로리를 한눈에!</strong><br />
            섭취한 칼로리와 소모한 칼로리를 자동 계산해, 하루 균형을 직관적으로 확인할 수 있습니다.
          </li>
          <li style={{ marginTop: 8 }}>
            <strong>AI 건강 코치 헬파크의 개인 맞춤 피드백</strong><br />
            당신의 기록과 생활 패턴을 학습한 AI가 운동, 식단, 생활 습관 전반을 분석하고 맞춤 피드백을 제공합니다.
          </li>
        </ol>

        <p className="muted" style={{ marginTop: 12 }}>
          모든 기능은 무료로 제공되지만, 일일/월간 사용 횟수에는 제한이 있습니다. 더 자유롭게 이용하고 싶다면 정기 멤버십 구독을 통해 사용량을 확장할 수 있습니다.
        </p>

        {/* 스토어 링크 영역 삭제됨 */}
      </section>

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