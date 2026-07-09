import "./MissionStatus.css";
import SignatureStats from "../SignatureStats";

export default function MissionStatus() {
  return (
    <section className="missionStatus">
      <div className="missionStatusIntro">
        <p className="sectionLabel">MISSION STATUS</p>
        <h2>Verified support is now being recorded.</h2>
        <p>
          Objective: 1,000,000 signatures before the case file is formally delivered.
        </p>
      </div>

      <div className="statsGrid">
        <SignatureStats />
      </div>
    </section>
  );
}