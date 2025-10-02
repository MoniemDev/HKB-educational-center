import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, BookOpen, Users, Clock, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const dentistryFields = {
  "Basic Medical Sciences (Pre-Clinical)": [
    "Anatomy",
    "Histology",
    "Embryology",
    "Physiology",
    "Biochemistry",
    "Pathology",
    "Microbiology",
    "Pharmacology",
    "Community Dentistry / Public Health",
    "Behavioral Science & Medical Ethics"
  ],
  "Basic Dental Sciences": [
    "Dental Anatomy & Occlusion",
    "Oral Histology",
    "Oral Physiology",
    "Dental Materials",
    "Preclinical Operative Dentistry",
    "Preclinical Prosthodontics",
    "Preclinical Endodontics"
  ],
  "Clinical Dental Sciences": [
    "Oral Pathology",
    "Oral Medicine & Radiology",
    "Conservative Dentistry & Endodontics",
    "Prosthodontics",
    "Orthodontics",
    "Pedodontics (Pediatric Dentistry)",
    "Periodontology",
    "Oral & Maxillofacial Surgery",
    "Community Dentistry",
    "Forensic Odontology"
  ]
};

const Dentistry = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="h-8 w-8 md:h-10 md:w-10 text-secondary" />
              <Badge variant="secondary" className="text-base md:text-lg px-4 py-2">
                طب الأسنان
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-l from-secondary to-primary bg-clip-text text-transparent">
                تخصص طب الأسنان
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              تعلم طب الأسنان مع أحدث التقنيات والأساليب العلمية المتطورة لتصبح طبيب أسنان محترف
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                ابدأ التعلم الآن
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                تصفح المنهج
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/")}>
                <Home className="ml-2 h-5 w-5" />
                العودة للرئيسية
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
              <div className="text-2xl md:text-3xl font-bold text-secondary">27+</div>
              <div className="text-sm md:text-base text-muted-foreground">مادة دراسية</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 mx-auto mb-3">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary">12+</div>
              <div className="text-sm md:text-base text-muted-foreground">أستاذ متخصص</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary/10 mx-auto mb-3">
                <Clock className="h-6 w-6 md:h-8 md:w-8 text-secondary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-secondary">5</div>
              <div className="text-sm md:text-base text-muted-foreground">سنوات دراسية</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 mx-auto mb-3">
                <Heart className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary">300+</div>
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
              المنهج الدراسي لطب الأسنان
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              منهج شامل يغطي جميع التخصصات في طب الأسنان من الأساسيات إلى الممارسة السريرية
            </p>
          </div>

          <div className="space-y-8">
            {Object.entries(dentistryFields).map(([category, courses], index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-right flex items-center justify-between">
                    <Badge variant={index % 2 === 0 ? "default" : "secondary"} className="mr-3">
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
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth cursor-pointer"
                      >
                        <Button variant="ghost" size="sm" className="text-secondary">
                          تفاصيل
                        </Button>
                        <span className="font-medium text-right flex-1 mr-3">{course}</span>
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
            ابدأ رحلتك في تعلم طب الأسنان
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            انضم إلى برنامجنا المتميز وتعلم على أيدي نخبة من أساتذة طب الأسنان
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
            التسجيل في البرنامج
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dentistry;