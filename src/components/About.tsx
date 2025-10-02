import { BookOpen, Users, Award, MessageCircle } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "محتوى تعليمي شامل",
    description: "مواد علمية مبسطة من أساتذة متخصصين"
  },
  {
    icon: Users,
    title: "أساتذة متميزون",
    description: "نخبة من الأطباء والمحاضرين المحترفين"
  },
  {
    icon: MessageCircle,
    title: "استشارات طبية",
    description: "خدمات استشارية للمرضى مع أطباء متخصصين"
  },
  {
    icon: Award,
    title: "تعليم احترافي",
    description: "منهجية تعليمية حديثة ومعتمدة"
  }
];

const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-secondary font-semibold text-lg">من نحن</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            منصة HKB الطبية
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            منصة HKB هي منصّة طبية متكاملة هدفها تبسيط العلوم الطبية وتوفير بيئة تعليمية 
            احترافية لكل الطلاب والمهتمين بالمجال الصحي. نقدم محتوى طبي شامل لجميع التخصصات 
            الطبية بأسلوب سهل ومبسط يساعدك على فهم المادة وتجاوز أي صعوبة دراسية.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl hover:bg-accent transition-smooth"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-10 rounded-3xl gradient-primary text-white text-center">
          <h3 className="text-3xl font-bold mb-4">🎯 رسالتنا</h3>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            نربط بين العلم والتطبيق العملي، ونفتح أبواب المعرفة الطبية للجميع
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;