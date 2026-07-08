export default function Header() {
  return (
    <header className="siteHeader">
      <a className="brand" href="/">EGYPT WON ARGENTINA</a>
      <nav>
        <a href="/case-file">Case File</a>
        <a href="/evidence">Evidence</a>
        <a href="/archive">Archive</a>
        <a href="/mission">Mission</a>
        <a className="signLink" href="/sign">Sign</a>
      </nav>
    </header>
  );
}
