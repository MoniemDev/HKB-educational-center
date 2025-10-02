import physicalVideo from "@/assets/videos/physical.mp4";
import onlineVideo from "@/assets/videos/online.mp4";

const LearningMethods = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <span className="text-secondary font-semibold text-base md:text-lg">طرق التعليم</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-3 md:mb-4">
            تعلم بالطريقة التي تناسبك
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            نوفر لك خيارين للتعلم: حضورياً في المركز أو عن بُعد عبر الإنترنت
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Physical Learning Video */}
          <div className="relative rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-smooth group">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
              <video
                src={physicalVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="bg-white/95 backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-lg transform group-hover:scale-105 transition-smooth">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-primary text-center">
                    التعليم الحضوري في المركز
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6 bg-card">
              <p className="text-sm sm:text-base text-muted-foreground text-center">
                تعلم وجهاً لوجه مع أساتذة متخصصين في بيئة تعليمية احترافية
              </p>
            </div>
          </div>

          {/* Online Learning Video */}
          <div className="relative rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-smooth group">
            <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
              <video
                src={onlineVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-secondary/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="bg-white/95 backdrop-blur-sm px-4 py-3 sm:px-6 sm:py-4 rounded-full shadow-lg transform group-hover:scale-105 transition-smooth">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-secondary text-center">
                    التعليم عن بُعد - أونلاين
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6 bg-card">
              <p className="text-sm sm:text-base text-muted-foreground text-center">
                ادرس من أي مكان وفي أي وقت يناسبك مع محتوى تفاعلي عالي الجودة
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningMethods;
