
import { Button } from "@/components/ui/button";
import { Moon, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-moonblue-900 via-moonblue-800 to-moonblue-900">
      <div className="container px-4 mx-auto">
        <div className="relative max-w-2xl mx-auto text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12">
            <div className="relative">
              <Moon className="w-16 h-16 text-moonsilver-100 animate-float" />
              <Star className="absolute -top-4 -right-2 w-6 h-6 text-moonsilver-200 animate-pulse" />
              <Star className="absolute -bottom-2 -left-4 w-4 h-4 text-moonsilver-300 animate-pulse delay-75" />
            </div>
          </div>
          
          <div className="glass-card rounded-2xl p-8 mt-16 animate-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Moon is a Girl
            </h1>
            <p className="text-lg md:text-xl mb-8 text-moonsilver-100">
              Découvrez l'harmonie entre votre cycle menstruel et les phases de la lune. 
              Une approche holistique pour mieux comprendre votre corps.
            </p>
            <Link to="/dashboard">
              <Button 
                className="bg-moonsilver-100 text-moonblue-900 hover:bg-moonsilver-200 transition-all duration-300 text-lg px-8 py-6 rounded-xl"
                size="lg"
              >
                Commencer mon voyage
              </Button>
            </Link>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-xl animate-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-moonsilver-100" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-moonsilver-200 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: Moon,
    title: "Phases Lunaires",
    description: "Synchronisez votre cycle avec les phases de la lune",
  },
  {
    icon: Star,
    title: "Suivi Personnalisé",
    description: "Enregistrez vos symptômes et votre humeur quotidiennement",
  },
  {
    icon: Moon,
    title: "Prédictions",
    description: "Anticipez les moments clés de votre cycle",
  },
];

export default Index;
