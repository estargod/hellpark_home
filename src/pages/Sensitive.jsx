// src/pages/Sensitive.jsx
export default function Sensitive() {
  return (
    <section className="section">
      <h2 className="h2">민감정보 처리방침</h2>
      <p className="muted">최종 업데이트: 2025-10-01</p>

      <p>
        Waine(이하 &quot;회사&quot;)은 「개인정보 보호법」, 「민감정보 보호법」, 「통신비밀보호법」,
        「전기통신사업법」 등 정보통신서비스 제공자가 준수하여야 할 관련 법령상의 민감정보 처리 제한
        규정을 준수하며, 관련 법령에 의거한 개인 민감정보 처리방침을 수립하여 이용자 권익 보호에
        최선을 다하고 있습니다.
      </p>
      <p>
        본 개인 민감정보 처리방침은 회사가 제공하는 헬파크 애플리케이션 서비스(이하 &quot;서비스&quot;)에
        적용되며, 다음과 같은 내용을 담고 있습니다.
      </p>

      <hr className="hr" />

      <h3 className="h3">1. 민감정보 수집 및 이용 목적</h3>
      <p>
        회사는 민감정보를 다음 목적을 위해 수집·이용합니다. 수집된 민감정보는 아래 명시한 목적 이외의
        용도로는 사용되지 않으며, 향후 이용 목적이 변경될 경우 사전에 이용자의 동의를 구할 예정입니다.
      </p>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid var(--border)" }}>
          <thead>
            <tr>
              <th style={cell}>구분</th>
              <th style={cell}>수집 항목</th>
              <th style={cell}>이용 목적</th>
              <th style={cell}>보유 기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cell}>개인 정보 (필수)</td>
              <td style={cell}>성별, 나이, 키, 몸무게</td>
              <td style={cell}>회원가입 및 맞춤 목표 설정 등 서비스 제공</td>
              <td style={cell}>회원 탈퇴 시까지 보유</td>
            </tr>
            <tr>
              <td style={cell}>건강 정보 (선택)</td>
              <td style={cell}>
                운동 기록, 식단 기록, 지병 및 질환 정보, 기초대사량, 체지방률, 골격근량, 알레르기 정보
              </td>
              <td style={cell}>맞춤 건강 서비스 제공을 위한 분석 및 통계</td>
              <td style={cell}>
                회원 탈퇴 시까지 보유 (단, 관련 법령에 따라 보관이 필요한 경우 해당 법령에서 정한 기간 동안 보관)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="hr" />

      <h3 className="h3">2. 제3자 제공 및 동의 거부 안내</h3>
      <p>
        회사는 상기 민감정보를 이용자 동의 없이 제3자에게 제공하지 않습니다. 또한 이용자는 민감정보
        수집·이용에 대한 동의를 거부할 권리가 있으나, 동의 거부 시 헬파크 서비스 이용이 불가능합니다.
      </p>
    </section>
  );
}

const cell = {
  border: "1px solid var(--border)",
  padding: "8px",
  textAlign: "left",
  verticalAlign: "top",
  fontSize: "14px",
};