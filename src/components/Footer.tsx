import { Heart, MessageCircle, Instagram, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-right mb-6 md:mb-8">
          <div className="text-center md:text-right">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 bg-gradient-to-l from-primary to-primary-glow bg-clip-text text-transparent">
              منصة HKB الطبية
            </h3>
            <p className="text-muted-foreground text-sm md:text-base">
              منصة طبية متكاملة لتبسيط العلوم الطبية وتوفير بيئة تعليمية احترافية
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">روابط سريعة</h4>
            <ul className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base">
              <li><a href="#" className="hover:text-primary transition-smooth">الرئيسية</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">التخصصات</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">من نحن</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">الاستشارات</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-right">
            <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">تواصل معنا</h4>
            <ul className="space-y-1 md:space-y-2 text-muted-foreground text-sm md:text-base">
              <li>البريد: info@hkbmedical.com</li>
              <li>الهاتف: +123 456 7890</li>
              <li>العنوان: المملكة العربية السعودية</li>
            </ul>
            <div className="mt-4 md:mt-6">
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">تابعنا على وسائل التواصل</h4>
              <ul className="space-y-2 md:space-y-3 text-muted-foreground text-sm md:text-base">
                <li>
                  <a href="https://www.tiktok.com/@hkb.center?_t=ZS-909njQIqZAT&_r=1" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-smooth">
                    <Music className="h-4 w-4" />
                    TikTok
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/hkb_center?igsh=MTR4cXZ1ZmF4emdhMQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-smooth">
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://whatsapp.com/channel/0029Vb6iil6Fsn0WgygBni1g" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-smooth">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-6 md:pt-8 text-center">
          <p className="text-muted-foreground flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-sm md:text-base">
            <span className="flex items-center gap-1">
              صُنع بـ <Heart className="h-4 w-4 text-destructive fill-current" /> في منصة HKB
            </span>
            <span className="hidden sm:inline mx-2">•</span>
            <span>جميع الحقوق محفوظة © 2025</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;