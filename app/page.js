const videos = [
  { title: "Possible penalty not reviewed", tag: "VAR", note: "Add YouTube / X / TikTok embed here" },
  { title: "The decision everyone is debating", tag: "Referee", note: "Add clip here" },
  { title: "Final minutes controversy", tag: "90+ min", note: "Add clip here" }
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="nav">
          <span>EgyptWonArgentina.com</span>
          <a href="#sponsor">Sponsor</a>
        </div>

        <div className="eyebrow">fan-made internet verdict</div>
        <h1>EGYPT WON ARGENTINA</h1>
        <p className="lead">
          Officially, Argentina won 3–2. But the internet is here to correct history.
        </p>

        <div className="heroActions">
          <a className="primary" href="#sign">Correct history</a>
          <a className="secondary" href="#evidence">Watch evidence</a>
        </div>
      </section>

      <section className="verdict">
        <div>
          <p className="label">Official result</p>
          <h2>Argentina 3–2 Egypt</h2>
        </div>
        <div>
          <p className="label">Internet verdict</p>
          <h2>Egypt 82%</h2>
          <div className="bar"><span /></div>
        </div>
      </section>

      <section id="sign" className="panel split">
        <div>
          <p className="label">the movement</p>
          <h2>Sign the Internet Verdict</h2>
          <p>
            Join thousands of football fans saying the same thing: the score was official,
            but the story was different.
          </p>
        </div>
        <form>
          <input placeholder="Name" />
          <input placeholder="Country" />
          <input placeholder="Email (optional)" />
          <textarea placeholder="Your message to football history" />
          <button type="button">Sign now</button>
        </form>
      </section>

      <section id="evidence" className="panel">
        <p className="label">watch the evidence</p>
        <h2>The controversial moments</h2>
        <div className="videoGrid">
          {videos.map((v) => (
            <article className="videoCard" key={v.title}>
              <span>{v.tag}</span>
              <h3>{v.title}</h3>
              <p>{v.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel timeline">
        <p className="label">match timeline</p>
        <h2>Why people are still talking</h2>
        <div className="item"><b>Minute 34</b><span>Debated contact inside the box.</span></div>
        <div className="item"><b>Minute 67</b><span>VAR decision sparks online debate.</span></div>
        <div className="item"><b>90+4</b><span>Final whistle. Internet chaos begins.</span></div>
      </section>

      <section className="quotes">
        <blockquote>“Argentina won the score. Egypt won the people.”</blockquote>
        <blockquote>“Official football ended. Internet football begins.”</blockquote>
        <blockquote>“We all saw it.”</blockquote>
      </section>

      <section id="sponsor" className="sponsor">
        <p className="label">brand space</p>
        <h2>Sponsor the internet’s loudest football debate.</h2>
        <p>Promoted slots, video sponsorships and social posts available if this catches fire.</p>
        <a href="mailto:sponsor@egyptwonargentina.com">Contact sponsors</a>
      </section>

      <footer>
        Fan-made satirical project. Not affiliated with FIFA, Egypt, Argentina or any official organization.
      </footer>
    </main>
  );
}
