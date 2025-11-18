import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Radio" size={28} className="text-primary" />
              <span className="text-2xl font-bold text-primary">AssoTele</span>
            </div>
            <div className="hidden md:flex gap-8">
              <button 
                onClick={() => scrollToSection('solutions')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Кооперативные решения
              </button>
              <button 
                onClick={() => scrollToSection('client-center')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Клиент-центр
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                О компании
              </button>
            </div>
            <Button onClick={() => scrollToSection('contact')} className="hidden md:block">
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Надёжная связь<br />
                <span className="text-primary">для бизнеса</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Телекоммуникационные решения корпоративного класса. 
                Обеспечиваем стабильную связь и профессиональное обслуживание.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('solutions')}>
                  Наши решения
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
                  Консультация
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/5 rounded-xl">
                    <div className="text-3xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground mt-1">Uptime</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-xl">
                    <div className="text-3xl font-bold text-secondary">24/7</div>
                    <div className="text-sm text-muted-foreground mt-1">Поддержка</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-xl">
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground mt-1">Клиентов</div>
                  </div>
                  <div className="text-center p-4 bg-secondary/5 rounded-xl">
                    <div className="text-3xl font-bold text-secondary">15+</div>
                    <div className="text-sm text-muted-foreground mt-1">Лет опыта</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Кооперативные решения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные телекоммуникационные услуги для организаций любого масштаба
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary/20">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Network" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Корпоративная связь</h3>
              <p className="text-muted-foreground mb-4">
                Мобильная и фиксированная связь для сотрудников. 
                Единая биллинговая система и управление тарифами.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">Корпоративные тарифы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">Единый личный кабинет</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">Детализация звонков</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary/20">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Globe" size={28} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Интернет-решения</h3>
              <p className="text-muted-foreground mb-4">
                Высокоскоростной интернет для офисов и производственных площадок. 
                Гарантированная скорость и техническая поддержка.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm">Выделенная линия</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm">VPN и защищённые каналы</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={18} className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-sm">Резервные каналы связи</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow border-2 hover:border-primary/20">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Icon name="Server" size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Облачные сервисы</h3>
              <p className="text-muted-foreground mb-4">
                Виртуальные АТС, облачная телефония и интеграция с CRM. 
                Масштабируемая инфраструктура без капитальных затрат.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">Виртуальная АТС</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">IP-телефония</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm">Интеграция с 1С и CRM</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section id="client-center" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Клиент-центр</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Полный контроль над услугами в едином личном кабинете. 
                Управляйте счетами, тарифами и получайте техподдержку 24/7.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="LayoutDashboard" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Личный кабинет</h3>
                    <p className="text-muted-foreground text-sm">
                      Онлайн-доступ к детализации, счетам и управлению услугами
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Headphones" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Техподдержка 24/7</h3>
                    <p className="text-muted-foreground text-sm">
                      Квалифицированные специалисты готовы помочь в любое время
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Bell" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Уведомления</h3>
                    <p className="text-muted-foreground text-sm">
                      SMS и email оповещения о балансе, акциях и технических работах
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="FileText" size={24} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Электронный документооборот</h3>
                    <p className="text-muted-foreground text-sm">
                      Акты, счета и договоры в цифровом виде с ЭЦП
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Icon name="Monitor" size={80} className="text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Удобный интерфейс</h3>
                  <p className="text-muted-foreground">
                    Интуитивно понятная панель управления всеми услугами
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">О компании</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AssoTele — надёжный партнёр в области телекоммуникаций с 2009 года
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent border-2">
              <Icon name="Target" size={40} className="text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Наша миссия</h3>
              <p className="text-muted-foreground leading-relaxed">
                Обеспечивать стабильную и качественную связь для бизнеса. 
                Мы создаём инфраструктуру, которая позволяет компаниям работать эффективно, 
                не беспокоясь о технических вопросах коммуникаций.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-secondary/5 to-transparent border-2">
              <Icon name="Award" size={40} className="text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Наши ценности</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Надёжность и стабильность работы сервисов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Профессиональная техническая поддержка</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-secondary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Индивидуальный подход к каждому клиенту</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Корпоративных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime сервисов</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Техподдержка</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку и наш специалист свяжется с вами в ближайшее время
            </p>
          </div>

          <Card className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    placeholder="Иван Петров"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="ivan@company.ru"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea
                  placeholder="Расскажите о вашей задаче..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Отправить заявку
                <Icon name="Send" size={20} className="ml-2" />
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Icon name="Phone" size={24} className="text-primary mx-auto mb-2" />
                <div className="font-medium">+7 (495) 123-45-67</div>
                <div className="text-sm text-muted-foreground">Круглосуточно</div>
              </div>
              <div className="text-center">
                <Icon name="Mail" size={24} className="text-primary mx-auto mb-2" />
                <div className="font-medium">info@assotele.com</div>
                <div className="text-sm text-muted-foreground">Ответим в течение часа</div>
              </div>
              <div className="text-center">
                <Icon name="MapPin" size={24} className="text-primary mx-auto mb-2" />
                <div className="font-medium">Москва, ЦАО</div>
                <div className="text-sm text-muted-foreground">Офис и дата-центр</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Radio" size={24} />
                <span className="text-xl font-bold">AssoTele</span>
              </div>
              <p className="text-sm text-gray-400">
                Корпоративные телекоммуникационные решения
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#solutions" className="hover:text-white transition-colors">Корпоративная связь</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Интернет</a></li>
                <li><a href="#solutions" className="hover:text-white transition-colors">Облачные сервисы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#client-center" className="hover:text-white transition-colors">Клиент-центр</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@assotele.com</li>
                <li>Москва, ЦАО</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© 2024 AssoTele. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
