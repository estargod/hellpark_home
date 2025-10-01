export default function SensitiveEn() {
  return (
    <section className="section">
      <h2 className="h2">Sensitive Information Processing Policy</h2>
      <p className="muted">Last update: October 2, 2025</p>

      <p>
        Waine (hereinafter referred to as the “Company”) complies with the restrictions on handling sensitive information
        under applicable laws such as the <i>Personal Information Protection Act</i>, <i>Sensitive Information Protection Act</i>,
        <i>Protection of Communications Secrets Act</i>, and <i>Telecommunications Business Act</i>, which information and
        communications service providers are obligated to observe. In accordance with these laws, the Company has established
        this Sensitive Information Processing Policy to protect the rights and interests of users.
      </p>
      <p>
        This Sensitive Information Processing Policy applies to the HellPark application service (hereinafter referred to as
        the “Service”) provided by the Company and includes the following:
      </p>

      <hr className="hr" />

      <h3 className="h3">1. Purpose of Collection and Use of Sensitive Information</h3>
      <p>
        The Company collects and uses sensitive information for the following purposes. The collected sensitive information will
        not be used for purposes other than those specified below. If the purpose of use is changed in the future, the Company
        will obtain prior consent from the user.
      </p>

      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid var(--border)" }}>
          <thead>
            <tr>
              <th style={cell}>Category</th>
              <th style={cell}>Items Collected</th>
              <th style={cell}>Purpose of Use</th>
              <th style={cell}>Retention Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={cell}>Personal Information (Required)</td>
              <td style={cell}>Gender, age, height, weight</td>
              <td style={cell}>Service provision such as membership registration and personalized goal setting</td>
              <td style={cell}>Retained until membership withdrawal</td>
            </tr>
            <tr>
              <td style={cell}>Health Information (Optional)</td>
              <td style={cell}>
                Exercise records, diet records, medical history and condition information, basal metabolic rate, body fat
                percentage, skeletal muscle mass, allergy information
              </td>
              <td style={cell}>Analysis and statistics for providing personalized health services</td>
              <td style={cell}>
                Retained until membership withdrawal (However, if retention is required by relevant laws, it will be retained
                for the period specified by those laws)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="hr" />

      <h3 className="h3">2. Provision to Third Parties and Right to Refuse Consent</h3>
      <p>
        The Company does not provide the above sensitive information to third parties without the user’s consent. Users have
        the right to refuse consent to the collection and use of sensitive information; however, refusal of consent will make
        it impossible to use the HellPark Service.
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