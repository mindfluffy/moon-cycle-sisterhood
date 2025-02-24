
import { Button } from "@/components/ui/button";
import { Moon, ChevronLeft, ChevronRight, Star, Droplet } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";

const Calendar = () => {
  const currentMonth = "Mai 2024";
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const [moonPhaseUrl, setMoonPhaseUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchMoonImage = async () => {
      try {
        const { data: { publicUrl } } = await supabase
          .storage
          .from('images')
          .getPublicUrl('nouvelle-lune.jpg');

        setMoonPhaseUrl(publicUrl);
        console.log('Moon image URL:', publicUrl);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchMoonImage();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-night-800 via-night-700 to-night-800 relative">
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
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

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <Link to="/dashboard">
            <Button variant="ghost" className="text-silver-200">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Retour
            </Button>
          </Link>
          <h1 className="text-2xl font-playfair font-bold text-cream-100">Calendrier Lunaire</h1>
          <div className="w-20" />
        </div>

        <div className="glass-card rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <Button variant="ghost" size="icon" className="text-silver-200">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <h2 className="text-xl font-medium text-silver-100">{currentMonth}</h2>
            <Button variant="ghost" size="icon" className="text-silver-200">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"].map((day) => (
              <div key={day} className="text-center text-sm text-silver-400 py-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {days.map((day) => (
              <div
                key={day}
                className="aspect-square rounded-lg border border-white/10 p-2 hover:bg-white/5 transition-colors cursor-pointer relative group"
              >
                <div className="text-sm text-silver-300">{day}</div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex flex-col items-center gap-1">
                    {moonPhaseUrl ? (
                      <img 
                        src={moonPhaseUrl} 
                        alt="Phase lunaire"
                        className="w-6 h-6 object-contain"
                      />
                    ) : (
                      <Moon className="w-4 h-4 text-silver-400" />
                    )}
                    {day % 7 === 0 && <Droplet className="w-4 h-4 text-rose-300" />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Droplet className="w-4 h-4 text-rose-300" />
              <span className="text-sm text-silver-300">Règles</span>
            </div>
            <div className="flex items-center gap-2">
              {moonPhaseUrl ? (
                <img 
                  src={moonPhaseUrl} 
                  alt="Phase lunaire"
                  className="w-4 h-4 object-contain"
                />
              ) : (
                <Moon className="w-4 h-4 text-silver-400" />
              )}
              <span className="text-sm text-silver-300">Phase lunaire</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
