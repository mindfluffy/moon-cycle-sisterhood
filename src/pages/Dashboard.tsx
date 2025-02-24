
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  Moon, 
  Settings, 
  User, 
  Star,
  Sun,
  Cloud,
  Droplet,
  Heart,
  Smile,
  Frown,
  Meh,
  Wind
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-moonblue-900 via-moonblue-800 to-moonblue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Star
            key={i}
            className={`absolute text-silver-200/30 animate-twinkle`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
        <div className="absolute top-20 right-20 opacity-10">
          <Cloud className="w-32 h-32 text-silver-200 animate-float" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-10">
          <Wind className="w-24 h-24 text-silver-200 animate-float" style={{ animationDelay: "1s" }} />
        </div>
      </div>

      <nav className="glass-card border-b border-moonsilver-200/20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="text-2xl font-bold text-white">
              Moon is a Girl
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-moonsilver-100">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-moonsilver-100">
                <User className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-xl p-6 animate-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Phase Lunaire</h2>
              <Moon className="w-8 h-8 text-moonsilver-100" />
            </div>
            <div className="text-center py-8">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-silver-400 to-silver-100 animate-glow" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-l from-night-800 via-transparent to-transparent animate-phase" />
                <Sun className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-cream-100/50" />
              </div>
              <p className="text-lg text-white font-medium">Pleine Lune</p>
              <p className="text-moonsilver-200">Jour 14 de votre cycle</p>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 animate-in" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Symptômes & Humeurs</h2>
              <Heart className="w-8 h-8 text-rose-300" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {symptoms.map((symptom, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center p-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <symptom.icon className={`w-6 h-6 ${symptom.color}`} />
                  <span className="text-xs text-silver-200 mt-2">{symptom.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 glass-card rounded-xl p-6 animate-in" style={{ animationDelay: "200ms" }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-white">Journal</h2>
            <Calendar className="w-8 h-8 text-moonsilver-100" />
          </div>
          <div className="grid md:grid-cols-7 gap-2">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg border border-white/10 p-2 hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="text-sm text-silver-300 mb-1">{i + 1}</div>
                <div className="flex gap-1 flex-wrap">
                  <Moon className="w-4 h-4 text-silver-400" />
                  <Droplet className="w-4 h-4 text-rose-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const symptoms = [
  { icon: Droplet, label: "Crampes", color: "text-rose-300" },
  { icon: Heart, label: "Énergie", color: "text-rose-400" },
  { icon: Smile, label: "Joyeuse", color: "text-silver-300" },
  { icon: Frown, label: "Fatiguée", color: "text-silver-300" },
  { icon: Moon, label: "Sommeil", color: "text-silver-400" },
  { icon: Meh, label: "Stress", color: "text-silver-300" },
  { icon: Cloud, label: "Calme", color: "text-silver-300" },
  { icon: Wind, label: "Légère", color: "text-silver-300" },
];

export default Dashboard;
