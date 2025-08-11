import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  
  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
  };

  if (isRegistered) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <div className="mb-8">
            <Icon name="CheckCircle" size={80} className="text-primary mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Регистрация 
              <span className="text-primary block">завершена!</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Спасибо за регистрацию! Мы свяжемся с вами в ближайшее время.
            </p>
            <div className="w-48 h-1 bg-primary rounded-full mx-auto mb-8"></div>
          </div>
          
          <div className="space-y-4">
            <Button 
              onClick={() => setIsRegistered(false)}
              className="bg-primary hover:bg-primary/90 text-black font-semibold px-8"
            >
              Продолжить
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-8 flex justify-between items-center">
        <img 
          src="https://cdn.poehali.dev/files/770c0483-d28e-4bd3-be81-de1ee9a24643.png" 
          alt="Logo" 
          className="h-10 w-auto"
        />
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-primary transition-colors">Главная</a>
          <a href="#" className="hover:text-primary transition-colors">Услуги</a>
          <a href="#" className="hover:text-primary transition-colors">О нас</a>
          <a href="#" className="hover:text-primary transition-colors">Контакты</a>
        </nav>
        <Button variant="outline" className="md:hidden">
          <Icon name="Menu" size={20} />
        </Button>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Добро пожаловать
            <span className="text-primary block">POLY FACEIT</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            
          </p>
          <div className="w-80 h-1 bg-primary rounded-full"></div>

        </div>

        {/* Registration Panel */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-8">

          
          <form onSubmit={handleRegistration} className="space-y-4">
            <div>
              <Input 
                placeholder="Ваше имя"
                className="bg-black/50 border-primary/30 text-white placeholder:text-gray-400"
                required
              />
            </div>
            <div>
              <Input 
                type="email"
                placeholder="Email"
                className="bg-black/50 border-primary/30 text-white placeholder:text-gray-400"
                required
              />
            </div>
            <div>
              <Input 
                type="tel"
                placeholder="Телефон"
                className="bg-black/50 border-primary/30 text-white placeholder:text-gray-400"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-black font-semibold">
              Зарегистрироваться
            </Button>
          </form>
          

        </div>
      </section>
    </div>
  );
};

export default Index;