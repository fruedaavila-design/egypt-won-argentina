import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import VideoExhibits from "../components/VideoExhibits/VideoExhibits";
import GlobalHeatMap from "../components/GlobalHeatMap/GlobalHeatMap";
import SignatureForm from "../components/SignatureForm";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <VideoExhibits />

        <GlobalHeatMap />

        <section id="sign" className="signPanel">
          <div>
            <p className="sectionLabel">RECORD YOUR POSITION</p>
            <h2>Sign the Internet Verdict.</h2>
          </div>

          <SignatureForm />
        </section>
      </main>

      <Footer />
    </>
  );
}