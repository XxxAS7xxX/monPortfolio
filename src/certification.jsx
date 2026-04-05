import useOverflow from "./useOverflow";
import certif1 from "./assets/getting-started-with-artificial-intelligence.png";
import certif2 from "./assets/artificial-intelligence-fundamentals.png";
import certif3 from "./assets/get-started-with-google-workspace-tools-skill-badge.png";
import certif4 from "./assets/Certificate_green1.jpg";
import certif5 from "./assets/Certificate_green2.jpg";
import styles from "./styles/certification.module.css";

const certifications = [
  {
    img: certif1,
    title: "Getting Started with AI",
    issuer: "IBM",
  },
  {
    img: certif2,
    title: "AI Fundamentals",
    issuer: "IBM",
  },
  {
    img: certif3,
    title: "Google Workspace Tools",
    issuer: "Google",
  },
  {
    img: certif4,
    title: "Certificate Green Computing",
    issuer: "Microsoft",
  },
  {
    img: certif5,
    title: "Certificate Green Computing et IA",
    issuer: "Microsoft",
  }

];

const Certification = () => {
  useOverflow("scroll");
  return (
    <div className={styles.certification}>
      <h1>Certifications</h1>
      <div className={styles.grid}>
        {certifications.map((c, i) => (
          <div className={styles.card} key={i}>
            <img src={c.img} alt={c.title} className={styles.img} />
            <h2>{c.title}</h2>
            <h5>{c.issuer}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;