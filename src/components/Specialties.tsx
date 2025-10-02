import { Stethoscope, Pill, TestTube, Heart, Users, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const specialties = [
  {
    icon: Stethoscope,
    title: "الطب البشري",
    description: "محتوى شامل لجميع التخصصات الطبية بأسلوب مبسط واحترافي",
    color: "text-primary",
    bgColor: "bg-primary/10",
    path: "/medicine"
  },
  {
    icon: Heart,
    title: "طب الأسنان",
    description: "دورات متخصصة في طب الأسنان من أساتذة متميزين",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    path: "/dentistry"
  },
  {
    icon: Pill,
    title: "الصيدلة",
    description: "تعليم صيدلاني شامل يغطي جميع جوانب المهنة",
    color: "text-primary",
    bgColor: "bg-primary/10",
    path: "/pharmacy"
  },
  {
    icon: TestTube,
    title: "المختبرات الطبية",
    description: "برامج تدريبية عملية في التحاليل والفحوصات المخبرية",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    path: "/medical-laboratory"
  },
  {
    icon: Users,
    title: "التمريض",
    description: "محتوى تعليمي متكامل لممارسي مهنة التمريض",
    color: "text-primary",
    bgColor: "bg-primary/10",
    path: "/nursing"
  }
];

const Specialties = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <span className="text-secondary font-semibold text-base md:text-lg">تخصصاتنا</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-3 md:mb-4">
            محتوى طبي شامل لكل التخصصات
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            نقدم محتوى تعليمي عالي الجودة لجميع التخصصات الطبية والصحية
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {specialties.map((specialty, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-hover transition-smooth border-2"
            >
              <CardContent className="p-4 md:p-6 lg:p-8 text-center sm:text-right">
                <div className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl ${specialty.bgColor} flex items-center justify-center mb-4 md:mb-5 lg:mb-6 mx-auto sm:mr-auto sm:ml-0`}>
                  <specialty.icon className={`h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 ${specialty.color}`} />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">{specialty.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-4 md:mb-6">{specialty.description}</p>
                <Button
                  onClick={() => navigate(specialty.path)}
                  className={`w-full ${index % 2 === 0 ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'} text-white`}
                >
                  <BookOpen className="ml-2 h-4 w-4" />
                  عرض الدورات
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;