import { Button } from './components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from './components/ui/badge.jsx'
import { Phone, Mail, MessageCircle, GraduationCap, Award, BookOpen } from 'lucide-react'
import '../App.css'

function App() {
  const services = [
    {
      id: 1,
      title: "استشارة أكاديمية نصف ساعة",
      price: "60 ريال",
      description: "استشارة متخصصة لمدة 30 دقيقة في مجال البحث الأكاديمي"
    },
    {
      id: 2,
      title: "استشارة أكاديمية ساعة كاملة",
      price: "90 ريال",
      description: "استشارة شاملة لمدة 60 دقيقة في مجال البحث الأكاديمي"
    },
    {
      id: 3,
      title: "تنسيق رسالة قبل أو بعد تعديلات لجنة المناقشة",
      price: "500 - 800 ريال",
      description: "تنسيق احترافي للرسائل العلمية وفقاً لمعايير الجامعات"
    },
    {
      id: 4,
      title: "تنسيق عرض تقديمي للمناقشة",
      price: "800 ريال",
      description: "إعداد عرض تقديمي احترافي متناسب مع فكرة البحث"
    },
    {
      id: 5,
      title: "عمل المراجع للرسالة ببرنامج EndNote",
      price: "حسب الطلب",
      description: "إدارة المراجع في المتن وقائمة الفهرس باستخدام EndNote"
    },
    {
      id: 6,
      title: "شرح برنامج EndNote مع التطبيق العملي",
      price: "500 ريال",
      description: "تدريب مبسط على EndNote وكيفية استخدامه مع Word (خصم للمجموعات)"
    },
    {
      id: 7,
      title: "شرح فكرة الـ Proposal وأهدافه",
      price: "200 ريال",
      description: "شرح مفصل لمقترح البحث والتقنيات المطروحة فيه"
    },
    {
      id: 8,
      title: "شرح مبدأ PCR و Real-time PCR",
      price: "300 ريال",
      description: "شرح تفصيلي لمبادئ PCR وكيفية سير الجزء العملي"
    },
    {
      id: 9,
      title: "شرح نتائج Real-time PCR وتحليلها",
      price: "حسب الطلب",
      description: "تحليل ورسم نتائج Real-time PCR باستخدام برنامج Prism"
    },
    {
      id: 10,
      title: "شرح مبدأ Western Blot",
      price: "500 ريال",
      description: "شرح تفصيلي لمبدأ Western blot وكيفية سير الجزء العملي"
    },
    {
      id: 11,
      title: "شرح نتائج Western Blot وتحليلها",
      price: "500 ريال",
      description: "تحليل ورسم نتائج Western blot باستخدام برامج متخصصة"
    }
  ];

  const generateWhatsAppLink = (serviceName) => {
    const message = `أرغب بالخدمة ${serviceName}`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/966555020733?text=${encodedMessage}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-100 to-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-4">
            <GraduationCap className="w-12 h-12 text-purple-600 ml-4" />
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">د. عائشة القرني</h1>
              <p className="text-xl text-purple-600 font-semibold">دكتوراه بيولوجيا الخلية والوراثة والأنسجة</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-5 h-5" />
              <span dir="ltr">+966 555 020 733</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-5 h-5" />
              <span>alqarni-aisha@hotmail.com</span>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">نبذة عن الدكتورة</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">الخبرة</h3>
                <p className="text-gray-600">أكثر من 12 سنة في البحث الأكاديمي والتدريس</p>
              </div>
              <div className="text-center">
                <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">التخصص</h3>
                <p className="text-gray-600">بيولوجيا الخلية والوراثة والأنسجة</p>
              </div>
              <div className="text-center">
                <GraduationCap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">التعليم</h3>
                <p className="text-gray-600">دكتوراه من جامعة الملك سعود بتقدير ممتاز مع مرتبة الشرف الأولى</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              باحثة متخصصة تجاوزت خبرتها 12 سنة قضت العديد منها في إجراء تجارب بحثية متقدمة داخل مختبرات علم الخلية والوراثة والأنسجة، 
              إلى جانب تدريس طلبة البكالوريوس والماجستير وتقديم الاستشارات الأكاديمية للعديد من الباحثين والمهتمين بالمجال.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">الخدمات المقدمة</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service) => (
              <Card key={service.id} className="bg-white border border-gray-200 shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-800 leading-relaxed">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800 font-semibold">
                      {service.price}
                    </Badge>
                  </div>
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => window.open(generateWhatsAppLink(service.title), '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 ml-2" />
                    طلب الخدمة
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-purple-50 to-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">تواصل معنا</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              للحصول على استشارة أكاديمية متخصصة أو لمزيد من المعلومات حول خدماتنا، لا تتردد في التواصل معنا
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open('https://wa.me/966555020733?text=أرغب%20في%20الحصول%20على%20معلومات%20أكثر%20عن%20الخدمات', '_blank')}
              >
                <MessageCircle className="w-5 h-5 ml-2" />
                تواصل عبر واتساب
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-purple-600 text-purple-600 hover:bg-purple-50"
                onClick={() => window.location.href = 'tel:+966555020733'}
              >
                <Phone className="w-5 h-5 ml-2" />
                اتصال مباشر
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold mb-2">د. عائشة القرني</p>
          <p className="text-gray-300 mb-4">استشارات أكاديمية متخصصة في علوم الحياة</p>
          <div className="flex justify-center items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span dir="ltr">+966 555 020 733</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>alqarni-aisha@hotmail.com</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © 2025 د. عائشة القرني. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
