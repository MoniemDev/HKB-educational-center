import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LearningMethods from "@/components/LearningMethods";
import Specialties from "@/components/Specialties";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="learning-methods">
          <LearningMethods />
        </section>
        <section id="specialties">
          <Specialties />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;