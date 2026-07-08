import Header from "../components/Header";
import Hero from "../components/Hero";
import SignatureStats from "../components/SignatureStats";
import SignatureForm from "../components/SignatureForm";
import Footer from "../components/Footer";

const evidence = [
  ["001", "The Match", "Official score recorded. Internet disagreement initiated."],
  ["002", "VAR Review", "Key decisions collected for public inspection."],
  ["003", "Visual Evidence", "Clips, angles and disputed moments."],
  ["004", "AI Responses", "Artificial intelligence enters the case file."],
  ["005", "Public Testimonies", "Fans submit their verdict worldwide."],
  ["006", "Argentina Files", "Related controversies under review."]
];

export default function Home() {
  return (
    <>
      <StatusBar />
      <Header />

      <main>
        <section className="hero">
          <p className="caseTag">OFFICIAL CASE FILE · EWA-2026-001</p>
          <h1>EGYPT WON ARGENTINA</h1>
          <p className="heroText">
            The official result has been recorded. The Internet respectfully disagrees.
          </p>
          <div className="heroButtons">
            <a href="/sign" className="primaryBtn">Sign The Internet Verdict</a>
            <a href="/evidence" className="secondaryBtn">Review Evidence</a>
          </div>
        </section>

        <section className="missionPanel">
          <div>
            <p className="sectionLabel">MISSION PROGRESS</p>
            <h2>24,381 verified signatures</h2>
            <div className="progress"><span /></div>
            <p>Objective: 1,000,000 signatures before the Internet Verdict is formally delivered.</p>
          </div>
          <div className="statsGrid">
            <SignatureStats />
          </div>
        </section>

        <section className="gridSection">
          <div className="sectionHead">
            <p className="sectionLabel">GLOBAL CONSENSUS</p>
            <h2>The world is recording its position.</h2>
          </div>
          <div className="mapBox">
            <div className="fakeMap">GLOBAL CONSENSUS MAP</div>
            <div className="countryList">
              <h3>Top Supporting Countries</h3>
              <p>Egypt · Spain · Mexico · USA · Brazil · Argentina</p>
              <small>Latest signature: Mexico · 2 minutes ago</small>
            </div>
          </div>
        </section>

        <section className="gridSection">
          <div className="sectionHead">
            <p className="sectionLabel">CASE EVIDENCE</p>
            <h2>Six items currently under public review.</h2>
          </div>
          <div className="evidenceGrid">
            {evidence.map(([id, title, text]) => (
              <a href="/evidence" className="evidenceCard" key={id}>
                <span>Evidence #{id}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="signPanel">
          <p className="sectionLabel">RECORD YOUR POSITION</p>
          <h2>Sign the Internet Verdict.</h2>
          <SignatureForm />
        </section>

        <section className="sharePanel">
          <h2>Help the Internet reach one million signatures.</h2>
          <div>
            <a href="https://twitter.com/intent/tweet?text=Egypt%20Won%20Argentina.%20The%20Internet%20respectfully%20disagrees.%20https%3A%2F%2Fegyptwonargentina.com">Share on X</a>
            <a href="https://wa.me/?text=Egypt%20Won%20Argentina.%20The%20Internet%20respectfully%20disagrees.%20https%3A%2F%2Fegyptwonargentina.com">WhatsApp</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
