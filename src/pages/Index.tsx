import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Index = () => {
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

          
          <form className="space-y-4">
            <div>
              <Input 
                placeholder="Ваше имя"
                className="bg-black/50 border-primary/30 text-white placeholder:text-gray-400"
              />
            </div>
            <div>
              <Input 
                type="email"
                placeholder="Email"
                className="bg-black/50 border-primary/30 text-white placeholder:text-gray-400"
              />
            </div>
            <div>
              <Input 
                type="tel"
                placeholder="Телефон"
                className="bg-black/50 border-primary/30 text-white placeholder:text-gray-400"
              />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 text-black font-semibold">
              Зарегистрироваться
            </Button>
          </form>
          
          <p className="text-sm text-gray-400 mt-4 text-center">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;