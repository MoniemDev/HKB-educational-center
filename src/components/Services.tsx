import { GraduationCap, Stethoscope } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-lg">خدماتنا</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            نقدم أفضل الخدمات الطبية والتعليمية
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="shadow-card hover:shadow-hover transition-smooth border-2">
            <CardContent className="p-10 text-right">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                <GraduationCap className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-4">التعليم الطبي</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                دورات تعليمية شاملة لجميع التخصصات الطبية مع أساتذة متميزين، 
                بأسلوب مبسط يساعدك على الفهم والتفوق في دراستك
              </p>
              <ul className="space-y-3 mb-8 text-muted-foreground text-right">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span>محاضرات فيديو عالية الجودة</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span>ملفات PDF ومراجع علمية</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span>اختبارات وتقييمات دورية</span>
                </li>
              </ul>
              <Button
                className="w-full gradient-primary text-white"
                onClick={() => {
                  const specialtiesSection = document.getElementById('specialties');
                  specialtiesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                استكشف الدورات
              </Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-card hover:shadow-hover transition-smooth border-2">
            <CardContent className="p-10 text-right">
              <div className="w-20 h-20 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 mx-auto">
                <Stethoscope className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold mb-4">الاستشارات الطبية</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                نوفر خدمات استشارات طبية للمرضى مع أطباء متخصصين، 
                لضمان دعم المجتمع صحياً وتقديم الرعاية اللازمة
              </p>
              <ul className="space-y-3 mb-8 text-muted-foreground text-right">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                  <span>استشارات فورية مع أطباء متخصصين</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                  <span>متابعة طبية مستمرة</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0" />
                  <span>سرية وخصوصية تامة</span>
                </li>
              </ul>
              <Button
                className="w-full bg-secondary hover:bg-secondary/90 text-white"
                onClick={() => window.open('https://wa.me/qr/SCKB4GXG2LACG1', '_blank')}
              >
                احجز استشارة
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;