import SignatureStats from "./SignatureStats";

export default function Header() {
  return (
    <header className="ewaHeader">
      <div className="ewaTopBar">
        <span>CASE STATUS <b>● ACTIVE</b></span>
        <span><SignatureStats compact /></span>
      </div>

      <div className="ewaNav">
        <a className="ewaBrand" href="/">Egypt Won Argentina</a>

        <nav>
          <a href="/case-file">Case</a>
          <a href="/evidence">Evidence</a>
          <a href="/updates">Updates</a>
          <a className="ewaNavSign" href="/sign">Sign</a>
        </nav>
      </div>
    </header>
  );
}
