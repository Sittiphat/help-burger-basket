import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Story from "./components/Story";
import Photos from "./components/Photos";
import Evidence from "./components/Evidence";
import Coverage from "./components/Coverage";
import Observations from "./components/Observations";
import Updates from "./components/Updates";
import Comments from "./components/Comments";
import Help from "./components/Help";
import Social from "./components/Social";
import DevCredits from "./components/DevCredits";
import Forum from "./components/Forum";
import Footer from "./components/Footer";
import ScrollObserver from "./components/ScrollObserver";

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Nav />
      <Hero />
      <Mission />
      <Story />
      <Photos />
      <Evidence />
      <Coverage />
      <Observations />
      <Updates />
      <Comments />
      <Help />
      <Social />
      <DevCredits />
      <Forum />
      <Footer />
    </>
  );
}
