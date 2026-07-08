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
      <Header />

      <main>
        <Hero />

        <section className="missionPanel">
          <div>
            <p className="sectionLabel">MISSION STATUS</p>
            <h2>Verified support is now being recorded.</h2>
            <div className="progress"><span /></div>
            <p>Objective: 1,000,000 signatures before the case file is formally delivered.</p>
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
              <p>Live ranking connected to verified signatures.</p>
              <small>Updated automatically from Supabase.</small>
            </div>
          </div>
        </section>

        <section className="gridSection">
          <div className="sectionHead">
            <p className="sectionLabel">CASE EVIDENCE</p>
            <h2>Six exhibits currently under public review.</h2>
          </div>

          <div className="evidenceGrid">
            {evidence.map(([id, title, text]) => (
              <a href="/evidence" className="evidenceCard" key={id}>
                <span>Exhibit {id}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="signPanel">
          <p className="sectionLabel">RECORD YOUR POSITION</p>
          <h2>Sign the case.</h2>
          <SignatureForm />
        </section>

        <section className="sharePanel">
          <h2>Help Egypt get the win back.</h2>
          <div>
            <a href="https://twitter.com/intent/tweet?text=Egypt%20Won%20Argentina.%20We%E2%80%99re%20taking%20FIFA%20to%20court.%20https%3A%2F%2Fegyptwonargentina.com">Share on X</a>
            <a href="https://wa.me/?text=Egypt%20Won%20Argentina.%20We%E2%80%99re%20taking%20FIFA%20to%20court.%20https%3A%2F%2Fegyptwonargentina.com">WhatsApp</a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
