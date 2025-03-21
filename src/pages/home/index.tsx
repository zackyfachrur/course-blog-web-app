import Navbar from "@layouts/Navbar";
import HeroSection from "./HeroSection";
import VideoListSection from "./VideoListSection";
import Footer from "@layouts/Footer";

const HomePages = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <VideoListSection />
      <Footer />
    </>
  );
};

export default HomePages;
