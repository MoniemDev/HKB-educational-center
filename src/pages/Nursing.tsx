import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, BookOpen, Clock, Heart, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const nursingFields = {
  "Core Nursing Sciences": [
    "Fundamentals of Nursing",
    "Medical-Surgical Nursing",
    "Pediatric Nursing",
    "Obstetrics & Gynecology Nursing",
    "Psychiatric & Mental Health Nursing",
    "Community Health Nursing",
    "Geriatric Nursing",
    "Critical Care Nursing",
    "Emergency & Trauma Nursing"
  ],
  "Supporting Courses": [
    "Nursing Ethics & Professionalism",
    "Communication Skills",
    "Health Assessment",
    "Epidemiology",
    "Nursing Research & Biostatistics",
    "Nursing Management & Leadership",
    "Education in Nursing",
    "First Aid & Basic Life Support"
  ]
};

const Nursing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="h-8 w-8 md:h-10 md:w-10 text-primary" />
              <Badge variant="default" className="text-base md:text-lg px-4 py-2">
                التمريض
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
                تخصص التمريض
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              تعلم مهنة التمريض مع أحدث الممارسات والمعايير العالمية لتقديم رعاية صحية متميزة
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white">
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
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 mx-auto mb-3">
                <BookOpen className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary">17+</div>
              <div className="text-sm md:text-base text-muted-foreground">مادة دراسية</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary/10 mx-auto mb-3">
                <Users className="h-6 w-6 md:h-8 md:w-8 text-secondary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-secondary">12+</div>
              <div className="text-sm md:text-base text-muted-foreground">أستاذ متخصص</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 mx-auto mb-3">
                <Clock className="h-6 w-6 md:h-8 md:w-8 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary">4</div>
              <div className="text-sm md:text-base text-muted-foreground">سنوات دراسية</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-secondary/10 mx-auto mb-3">
                <Heart className="h-6 w-6 md:h-8 md:w-8 text-secondary" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-secondary">350+</div>
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
              المنهج الدراسي للتمريض
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              برنامج شامل يعدك لتصبح ممرض محترف قادر على تقديم أفضل رعاية للمرضى
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(nursingFields).map(([category, courses], index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-smooth">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl text-right flex items-center justify-between">
                    <Badge variant={index % 2 === 0 ? "default" : "secondary"} className="mr-3">
                      {courses.length} مادة
                    </Badge>
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {courses.map((course, courseIndex) => (
                    <div
                      key={courseIndex}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth cursor-pointer"
                    >
                      <Button variant="ghost" size="sm" className="text-primary">
                        تفاصيل
                      </Button>
                      <span className="font-medium text-right">{course}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-l from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ابدأ رحلتك في تعلم التمريض
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            كن جزءاً من فريق الرعاية الصحية وأحدث فرقاً في حياة المرضى
          </p>
          <Button size="lg" className="gradient-primary text-white">
            التسجيل في البرنامج
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nursing;