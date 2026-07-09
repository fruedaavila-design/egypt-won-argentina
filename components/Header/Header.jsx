import "./Header.css";
import SignatureStats from "../SignatureStats";

export default function Header() {
  return (
    <header className="ewaHeader">
      <div className="ewaTopBar">
        <span>
          CASE STATUS <b>● ACTIVE</b>
        </span>

        <span>
          <SignatureStats compact />
        </span>
      </div>

      <div className="ewaNav">
        <a className="ewaBrand" href="/">
          Egypt Won Argentina
        </a>

        <a className="ewaSignNow" href="#sign">
          Sign now →
        </a>
      </div>
    </header>
  );
}