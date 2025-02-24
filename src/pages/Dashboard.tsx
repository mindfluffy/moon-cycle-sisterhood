
import { Button } from "@/components/ui/button";
import { Calendar, Moon, Settings, User } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-moonblue-900 via-moonblue-800 to-moonblue-900">
      <nav className="glass-card border-b border-moonsilver-200/20">
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

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-xl p-6 animate-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Phase Lunaire</h2>
              <Moon className="w-8 h-8 text-moonsilver-100" />
            </div>
            <div className="text-center py-8">
              <div className="w-32 h-32 rounded-full bg-moonsilver-100 mx-auto mb-4" />
              <p className="text-lg text-white font-medium">Pleine Lune</p>
              <p className="text-moonsilver-200">Jour 14 de votre cycle</p>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 animate-in" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Calendrier</h2>
              <Calendar className="w-8 h-8 text-moonsilver-100" />
            </div>
            <div className="text-center py-8">
              <p className="text-moonsilver-100">
                Fonctionnalité de calendrier à venir...
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 glass-card rounded-xl p-6 animate-in" style={{ animationDelay: "200ms" }}>
          <h2 className="text-xl font-semibold text-white mb-6">Journal</h2>
          <div className="text-center py-8">
            <p className="text-moonsilver-100">
              Fonctionnalité de journal à venir...
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
