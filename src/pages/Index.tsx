import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const benefits = [
    {
      icon: 'Clock',
      title: 'Увеличение срока хранения',
      description: 'Продукты сохраняют свежесть в 3-5 раз дольше благодаря вакуумной упаковке'
    },
    {
      icon: 'Shield',
      title: 'Защита от бактерий',
      description: 'Герметичная упаковка предотвращает окисление и развитие микроорганизмов'
    },
    {
      icon: 'DollarSign',
      title: 'Экономия бюджета',
      description: 'Снижение потерь продукции и оптимизация складских расходов'
    },
    {
      icon: 'Package',
      title: 'Компактное хранение',
      description: 'Уменьшение объёма упакованных продуктов до 50% экономит место'
    }
  ];

  const products = [
    {
      title: 'Промышленные вакууматоры',
      description: 'Для крупных производств и торговых сетей',
      image: 'https://cdn.poehali.dev/projects/0dd5069f-f9fb-40f4-b840-80c4727252e5/files/dfe215ff-47c1-497f-9faf-38705aac0ead.jpg'
    },
    {
      title: 'Настольные модели',
      description: 'Идеальны для кафе, ресторанов и небольших цехов',
      image: 'https://cdn.poehali.dev/projects/0dd5069f-f9fb-40f4-b840-80c4727252e5/files/775df12b-deb9-4552-bacb-5c8ba7b5befc.jpg'
    },
    {
      title: 'Камерные вакууматоры',
      description: 'Максимальная производительность и надёжность',
      image: 'https://cdn.poehali.dev/projects/0dd5069f-f9fb-40f4-b840-80c4727252e5/files/dfe215ff-47c1-497f-9faf-38705aac0ead.jpg'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-heading font-bold text-primary">VacuumPack</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">Продукция</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild>
            <a href="#contact">Оставить заявку</a>
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl lg:text-6xl font-heading font-bold text-secondary mb-6 leading-tight">
                Вакуумная упаковка для вашего бизнеса
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Профессиональное оборудование для сохранения свежести продуктов. 
                Увеличьте срок хранения в 5 раз и сократите потери.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg" asChild>
                  <a href="#contact">Получить консультацию</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg" asChild>
                  <a href="#products">Смотреть каталог</a>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/0dd5069f-f9fb-40f4-b840-80c4727252e5/files/dfe215ff-47c1-497f-9faf-38705aac0ead.jpg"
                alt="Вакуумное оборудование"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-heading font-bold text-center mb-4 text-secondary">
            Преимущества вакуумной упаковки
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Современные технологии для максимальной сохранности ваших продуктов
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in border-2">
                <CardContent className="pt-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} className="text-primary" size={28} />
                  </div>
                  <h4 className="font-heading font-bold text-xl mb-2 text-secondary">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-heading font-bold text-center mb-4 text-secondary">
            Наша продукция
          </h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Широкий выбор вакуумных упаковщиков для любых задач
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-cover"
                />
                <CardContent className="p-6">
                  <h4 className="font-heading font-bold text-2xl mb-3 text-secondary">
                    {product.title}
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#contact">Узнать подробнее</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl font-heading font-bold text-center mb-4 text-secondary">
            Свяжитесь с нами
          </h3>
          <p className="text-center text-muted-foreground mb-12">
            Оставьте заявку, и наш специалист проконсультирует вас по выбору оборудования
          </p>
          <Card className="animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о ваших задачах..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <h4 className="text-2xl font-heading font-bold mb-4">VacuumPack</h4>
          <p className="text-secondary-foreground/80 mb-6">
            Профессиональное вакуумное оборудование для вашего бизнеса
          </p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#benefits" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
              Преимущества
            </a>
            <a href="#products" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
              Продукция
            </a>
            <a href="#contact" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
              Контакты
            </a>
          </div>
          <p className="text-sm text-secondary-foreground/60">
            © 2024 VacuumPack. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
