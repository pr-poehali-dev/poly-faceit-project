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
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="text-center w-full max-w-sm mx-auto">
          <div className="mb-8">
            <Icon name="CheckCircle" size={60} className="text-primary mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">
              Регистрация 
              <span className="text-primary block">завершена!</span>
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Спасибо за регистрацию! Мы свяжемся с вами в ближайшее время.
            </p>
            <div className="w-32 h-1 bg-primary rounded-full mx-auto mb-8"></div>
          </div>
          
          <Button 
            onClick={() => setIsRegistered(false)}
            className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-3"
          >
            Продолжить
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">


      {/* Mobile Content */}
      <div className="px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Добро пожаловать
            <span className="text-primary block">POLY FACEIT</span>
          </h1>
          <div className="w-32 h-1 bg-primary rounded-full mx-auto"></div>
        </div>

        {/* Registration Form */}
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 max-w-sm mx-auto">
          <form onSubmit={handleRegistration} className="space-y-4">
            <div>
              <Input 
                placeholder="Ваше имя"
                className="bg-black/50 border-primary/30 text-white placeholder:text-gray-400 py-6"
                required
              />
            </div>
            <div>
              <Input 
                type="email"
                placeholder="Email"
                className="bg-black/50 border-primary/30 text-white placeholder:text-gray-400 py-6"
                required
              />
            </div>
            <div>
              <Input 
                type="tel"
                placeholder="Телефон"
                className="bg-black/50 border-primary/30 text-white placeholder:text-gray-400 py-6"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-black font-semibold py-6 text-lg">
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;