import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TestTube, BookOpen, Users, Clock, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const labFields = {
  "Basic Medical Sciences": [
    "Anatomy",
    "Histology",
    "Physiology",
    "Biochemistry",
    "Pathology",
    "Microbiology",
    "Immunology",
    "Parasitology",
    "Genetics",
    "Molecular Biology"
  ],
  "Core Laboratory Sciences": [
    "Hematology",
    "Clinical Chemistry (Clinical Biochemistry)",
    "Medical Microbiology",
    "Immunohematology (Blood Banking & Transfusion)",
    "Histopathology",
    "Cytology",
    "Clinical Parasitology",
    "Virology",
    "Mycology"
  ],
  "Advanced / Applied Courses": [
    "Molecular Diagnostics",
    "Laboratory Management",
    "Research Methodology",
    "Biostatistics",
    "Quality Control & Quality Assurance",
    "Toxicology",
    "Instrumentation & Laboratory Technology"
  ]
};

const MedicalLaboratory = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Simple Navigation Header */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => navigate("/")}
              className="hover:bg-secondary/10"
            >
              <ArrowRight className="ml-2 h-5 w-5" />
              العودة للرئيسية
            </Button>

            <div className="flex items-center gap-2 md:gap-3">
              <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-l from-secondary to-primary bg-clip-text text-transparent">
                المختبرات الطبية
              </h1>
              <TestTube className="h-6 w-6 md:h-8 md:w-8 text-secondary" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <TestTube className="h-8 w-8 md:h-10 md:w-10 text-secondary" />
              <Badge variant="secondary" className="text-base md:text-lg px-4 py-2">
                المختبرات الطبية
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-l from-secondary to-primary bg-clip-text text-transparent">
                تخصص المختبرات الطبية
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              تعلم أحدث تقنيات التشخيص المخبري والتحاليل الطبية مع أفضل المعدات والأساتذة المتخصصين
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white"
                onClick={() => window.open('https://wa.me/qr/SCKB4GXG2LACG1', '_blank')}
              >
                ابدأ التعلم الآن
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary/10 mx-auto mb-3">
                <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-secondary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-secondary">26+</div>
              <div className="text-sm md:text-base text-muted-foreground">مادة دراسية</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 mx-auto mb-3">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary">8+</div>
              <div className="text-sm md:text-base text-muted-foreground">أستاذ متخصص</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary/10 mx-auto mb-3">
                <Clock className="h-6 w-6 md:h-8 md:w-8 text-secondary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-secondary">4</div>
              <div className="text-sm md:text-base text-muted-foreground">سنوات دراسية</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 mx-auto mb-3">
                <TestTube className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary">200+</div>
              <div className="text-sm md:text-base text-muted-foreground">طالب مسجل</div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              المنهج الدراسي للمختبرات الطبية
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              برنامج شامل يغطي جميع جوانب علوم المختبرات الطبية والتشخيص المعملي
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(labFields).map(([category, courses], index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-right flex items-center justify-between">
                    <Badge variant={index % 2 === 0 ? "secondary" : "default"} className="mr-3">
                      {courses.length} مادة
                    </Badge>
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {courses.map((course, courseIndex) => (
                      <div
                        key={courseIndex}
                        className="flex items-center gap-2 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth"
                      >
                        <span className="font-medium text-right flex-1">{course}</span>
                        <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-l from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ابدأ رحلتك في تعلم المختبرات الطبية
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            كن جزءاً من فريق التشخيص الطبي وتعلم أحدث تقنيات المختبرات
          </p>
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white"
            onClick={() => window.open('https://wa.me/qr/SCKB4GXG2LACG1', '_blank')}
          >
            التسجيل في البرنامج
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MedicalLaboratory;