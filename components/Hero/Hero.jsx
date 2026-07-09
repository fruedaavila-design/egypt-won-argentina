import "./Hero.css";

export default function Hero() {
  return (
    <section className="ewaHero">

      <p className="ewaCaseLabel">
        CASE FILE EWA-2026-001
      </p>

      <h1>
        EGYPT
        <span>WON</span>
        ARGENTINA
      </h1>

      <p className="ewaHeroSubtitle">
        We're taking FIFA to court.
      </p>

      <p className="ewaHeroSmall">
        Egypt wants the win back.
      </p>

      <a
        href="#exhibit-a"
        className="ewaHeroLink"
      >
        ↓ VIEW THE EVIDENCE
      </a>

    </section>
  );
}