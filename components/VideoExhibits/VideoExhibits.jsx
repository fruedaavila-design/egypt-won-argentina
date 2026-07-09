import "./VideoExhibits.css";

const exhibits = [
  {
    id: "A",
    title: "CASE INTRO",
    kicker: "The case starts here",
    description: "A short visual introduction to the incidents now under public review.",
    status: "PUBLIC",
    source: "Case Footage",
    duration: "00:15",
    video: "/videos/exhibit-a.mp4",
    featured: true,
  },
  {
    id: "B",
    title: "THE MESSI PENALTY",
    kicker: "Penalty decision",
    description: "The decision that gave Argentina a crucial advantage.",
    video: "/videos/exhibit-b.mp4",
  },
  {
    id: "C",
    title: "DISALLOWED GOAL",
    kicker: "Egypt goal cancelled",
    description: "The goal that never counted.",
    video: "/videos/exhibit-c.mp4",
  },
  {
    id: "D",
    title: "NO VAR REVIEW",
    kicker: "Possible penalty for Egypt",
    description: "The incident Egypt fans believe deserved a formal review.",
    video: "/videos/exhibit-d.mp4",
  },
  {
    id: "E",
    title: "FINAL WHISTLE",
    kicker: "Player reaction",
    description: "Egypt's frustration after the match.",
    video: "/videos/exhibit-e.mp4",
  },
];

function ExhibitVideo({ exhibit, featured = false }) {
  return (
    <article className={featured ? "ewaExhibitMain" : "ewaExhibitItem"}>
      <div className="ewaExhibitHeader">
        <span>EXHIBIT {exhibit.id}</span>
        <span>{featured ? "CASE INTRO" : "CASE MATERIAL"}</span>
      </div>

      <video
        className="ewaExhibitVideo"
        src={exhibit.video}
        controls
        playsInline
        preload="metadata"
      />

      <div className="ewaExhibitCopy">
        <div>
          <p>{exhibit.kicker}</p>
          <h2>{exhibit.title}</h2>
        </div>
        <p>{exhibit.description}</p>
      </div>

      {featured && (
        <div className="ewaExhibitData">
          <div>
            <span>Status</span>
            <b>{exhibit.status}</b>
          </div>
          <div>
            <span>Source</span>
            <b>{exhibit.source}</b>
          </div>
          <div>
            <span>Duration</span>
            <b>{exhibit.duration}</b>
          </div>
          <a href="/evidence">View complete exhibit →</a>
        </div>
      )}
    </article>
  );
}

export default function VideoExhibits() {
  const [main, ...rest] = exhibits;

  return (
    <section id="exhibit-a" className="ewaVideoExhibits">
      <ExhibitVideo exhibit={main} featured />

      <div className="ewaMoreExhibits">
        <div className="ewaSectionIntro">
          <p>CASE EVIDENCE</p>
          <h2>Four incidents currently under public review.</h2>
        </div>

        <div className="ewaExhibitGrid">
          {rest.map((exhibit) => (
            <ExhibitVideo key={exhibit.id} exhibit={exhibit} />
          ))}
        </div>
      </div>
    </section>
  );
}