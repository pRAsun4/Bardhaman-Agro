import useSmoothScroll from "./hooks/useSmoothScroll";
import { ScrollProgress, BackToTop } from "./components/Chrome";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Why from "./components/Why";
import Products from "./components/Products";
import Chairman from "./components/Chairman";
import Numbers from "./components/Numbers";
import Process from "./components/Process";
import Popular from "./components/Popular";
import Marquee from "./components/Marquee";
import Testimonials from "./components/Testimonials";
import News from "./components/News";
import Facts from "./components/Facts";
import Gallery from "./components/Gallery";
import Brands from "./components/Brands";
import Accred from "./components/Accred";
import Footer from "./components/Footer";

export default function App() {
  useSmoothScroll();
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Welcome />
        <Why />
        <Products />
        <Chairman />
        <Numbers />
        <Process />
        <Popular />
        <Marquee />
        <Testimonials />
        <News />
        <Facts />
        <Gallery />
        <Brands />
        <Accred />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
