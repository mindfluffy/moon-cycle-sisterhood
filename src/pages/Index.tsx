
import { Button } from "@/components/ui/button";
import { Moon, Star, HomeIcon, Calendar, BookOpen, Info } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Placeholder pour les futures données dynamiques
  const currentPhase = {
    name: "Premier Quartier",
    description: "Phase d'énergie croissante",
    date: "15 Mai 2024",
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-night-800 via-night-700 to-night-800">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center relative overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <Star
              key={i}
              className="absolute text-silver-200/30 animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="container px-4 mx-auto">
          <div className="relative max-w-2xl mx-auto text-center">
            {/* En-tête avec phase lunaire */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12">
              <div className="relative">
                <Moon className="w-16 h-16 text-silver-400 animate-float" />
                <Star className="absolute -top-4 -right-2 w-6 h-6 text-silver-300 animate-pulse" />
                <Star className="absolute -bottom-2 -left-4 w-4 h-4 text-silver-200 animate-pulse delay-75" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="text-sm text-silver-300">{currentPhase.name}</span>
                </div>
              </div>
            </div>
            
            {/* Carte principale */}
            <div className="glass-card rounded-2xl p-8 mt-20 animate-in">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-cream-100">
                Moon is a Girl
              </h1>
              <p className="font-sans text-lg md:text-xl mb-8 text-silver-200 max-w-xl mx-auto">
                Découvrez l'harmonie entre votre cycle menstruel et les phases de la lune. 
                Une approche holistique pour mieux comprendre votre corps.
              </p>
              {/* Zone d'aperçu de la phase lunaire actuelle */}
              <div className="mb-8 p-4 rounded-lg bg-white/5 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-3 text-silver-300">
                  <Info className="w-4 h-4" />
                  <span className="text-sm">
                    Phase actuelle : {currentPhase.name}
                  </span>
                </div>
                <p className="text-xs text-silver-400 mt-1">
                  {currentPhase.description} • {currentPhase.date}
                </p>
              </div>
              <Link to="/auth">
                <Button 
                  className="bg-rose-300 text-night-800 hover:bg-rose-400 transition-all duration-300 text-lg px-8 py-6 rounded-xl font-medium"
                  size="lg"
                >
                  Commencer mon voyage
                </Button>
              </Link>
            </div>
            
            {/* Grille des fonctionnalités */}
            <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-xl animate-in h-full flex flex-col justify-between"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div>
                    <div className="flex justify-center mb-4">
                      <feature.icon className="w-8 h-8 text-silver-300" />
                    </div>
                    <h3 className="font-playfair text-lg font-semibold mb-2 text-cream-100">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-silver-200 text-sm">
                      {feature.description}
                    </p>
                  </div>
                  {feature.comingSoon && (
                    <div className="mt-3 inline-flex items-center justify-center">
                      <span className="text-xs px-2 py-1 rounded-full bg-rose-300/20 text-rose-300">
                        Bientôt disponible
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Barre de navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-night-800/90 backdrop-blur-lg border-t border-white/10 md:hidden">
        <div className="flex justify-around items-center py-3 px-6">
          <Link to="/" className="flex flex-col items-center text-silver-300 hover:text-rose-300 transition-colors">
            <HomeIcon className="w-6 h-6" />
            <span className="text-xs mt-1">Accueil</span>
          </Link>
          <Link to="/calendar" className="flex flex-col items-center text-silver-300 hover:text-rose-300 transition-colors">
            <Calendar className="w-6 h-6" />
            <span className="text-xs mt-1">Calendrier</span>
          </Link>
          <Link to="/dashboard" className="flex flex-col items-center text-silver-300 hover:text-rose-300 transition-colors">
            <BookOpen className="w-6 h-6" />
            <span className="text-xs mt-1">Journal</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

const features = [
  {
    icon: Moon,
    title: "Phases Lunaires",
    description: "Synchronisez votre cycle avec les phases de la lune",
    comingSoon: false
  },
  {
    icon: Star,
    title: "Suivi Personnalisé",
    description: "Enregistrez vos symptômes et votre humeur quotidiennement",
    comingSoon: true
  },
  {
    icon: Moon,
    title: "Prédictions",
    description: "Anticipez les moments clés de votre cycle grâce à l'analyse de vos données",
    comingSoon: true
  },
];

export default Index;
