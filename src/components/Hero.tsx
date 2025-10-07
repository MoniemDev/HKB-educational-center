import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-right space-y-4 md:space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="text-secondary font-semibold text-base md:text-lg">منصة HKB الطبية</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-l from-primary to-primary-glow bg-clip-text text-transparent">
                تعليم طبي
              </span>
              <br />
              احترافي ومبسّط
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              منصّة متكاملة لتبسيط العلوم الطبية وتوفير بيئة تعليمية احترافية لجميع التخصصات الصحية
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="gradient-primary text-white shadow-hover transition-smooth hover:scale-105 text-sm md:text-base"
                onClick={() => {
                  const specialtiesSection = document.getElementById('specialties');
                  specialtiesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                ابدأ رحلتك التعليمية
                <ArrowLeft className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-accent transition-smooth text-sm md:text-base"
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  aboutSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                تعرّف على المنصة
              </Button>
            </div>

            <div className="flex gap-4 sm:gap-6 md:gap-8 pt-6 md:pt-8 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">+5</div>
                <div className="text-xs sm:text-sm text-muted-foreground">تخصصات طبية</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">+50</div>
                <div className="text-xs sm:text-sm text-muted-foreground">محاضر متخصص</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">+1000</div>
                <div className="text-xs sm:text-sm text-muted-foreground">طالب مسجل</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img
                src={heroImage}
                alt="التعليم الطبي الاحترافي"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;