export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="badge">According to the Internet</div>
        <h1>EGYPT<br />WON<br />ARGENTINA</h1>
        <p className="tagline">Officially? No. Morally? That’s up to you.</p>
        <a href="#sign" className="cta">CORRECT HISTORY</a>
      </section>

      <section className="card verdict">
        <h2>The Internet Verdict</h2>
        <div className="score-grid">
          <div>
            <span>Official Result</span>
            <strong>ARG 3–2 EGY</strong>
          </div>
          <div>
            <span>Internet Result</span>
            <strong>EGY 82% — ARG 18%</strong>
          </div>
        </div>
        <div className="bar"><div /></div>
        <p>12,481 people have already corrected history.</p>
      </section>

      <section id="sign" className="card">
        <h2>Sign the Internet Verdict</h2>
        <p>Join fans around the world who believe Egypt deserved better.</p>
        <form>
          <input placeholder="Your name" />
          <input placeholder="Country" />
          <input placeholder="Email (optional)" />
          <textarea placeholder="Your comment (optional)" />
          <button type="button">SIGN</button>
        </form>
      </section>

      <section className="card">
        <h2>The Controversial Moments</h2>
        <p>Add the most debated clips, tweets, TikToks or YouTube videos here.</p>
        <div className="videos">
          <div className="video">Video 1 placeholder</div>
          <div className="video">Video 2 placeholder</div>
          <div className="video">Video 3 placeholder</div>
        </div>
      </section>

      <section className="card">
        <h2>Fan Reactions</h2>
        <blockquote>“Argentina won the score. Egypt won the people.”</blockquote>
        <blockquote>“Football lost that day.”</blockquote>
        <blockquote>“We all saw it.”</blockquote>
      </section>

      <section className="card sponsor">
        <h2>Sponsor This Movement</h2>
        <p>Want your brand seen by football fans worldwide?</p>
        <a href="mailto:sponsor@egyptwonargentina.com">Contact sponsorships</a>
      </section>

      <footer>
        Fan-made satirical project. Not affiliated with FIFA, Egypt, Argentina or any official organization.
      </footer>
    </main>
  );
}
