// src/pages/Support.jsx
export default function Support() {
  return (
    <section className="section">
      <h2 className="h2">지원 · 연락처</h2>

      <div className="card">
        <h3 className="h3">Contact</h3>
        <ul className="ul">
          <li>
            email:{" "}
            <a href="mailto:estargod107@gmail.com">estargod107@gmail.com</a>
            <a> / </a>
            <a href="mailto:sgs8762@naver.com">sgs8762@naver.com</a>
          </li>
          <li>
            휴대폰:{" "}
            <a href="tel:+821087690682">+82 010-8769-0682</a>
          </li>
        </ul>
      </div>

      <hr className="hr" />

      <div className="card">
        <p className="muted">last update: 2025-09-23</p>
      </div>
    </section>
  );
}