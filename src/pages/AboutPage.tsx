import Navbar from "@/components/Navbar";
import AboutPage from "@/components/AboutPage";
import Footer from "@/components/Footer";

const AboutPageWrapper = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AboutPage />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPageWrapper;
