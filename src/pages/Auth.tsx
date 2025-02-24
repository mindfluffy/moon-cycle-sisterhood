
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Moon, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-night-800 via-night-700 to-night-800 relative overflow-hidden">
      {/* Background Elements */}
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

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-md mx-auto">
          <div className="relative mb-8">
            <div className="flex justify-center mb-4">
              <Moon className="w-12 h-12 text-silver-400 animate-float" />
            </div>
            <h1 className="text-3xl font-playfair font-bold text-center text-cream-100 mb-2">
              {isLogin ? "Connexion" : "Inscription"}
            </h1>
            <p className="text-center text-silver-200">
              {isLogin
                ? "Retrouvez votre cycle lunaire"
                : "Commencez votre voyage lunaire"}
            </p>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-silver-200">Email</label>
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-silver-400"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-silver-200">Mot de passe</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="bg-white/10 border-white/20 text-white placeholder:text-silver-400"
                />
              </div>

              <Button
                className="w-full bg-rose-300 text-night-800 hover:bg-rose-400 transition-all duration-300"
                size="lg"
              >
                {isLogin ? "Se connecter" : "S'inscrire"}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-silver-300 hover:text-silver-100 text-sm"
              >
                {isLogin
                  ? "Pas encore de compte ? S'inscrire"
                  : "Déjà un compte ? Se connecter"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
