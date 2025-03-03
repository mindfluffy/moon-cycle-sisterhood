
import { Button } from "@/components/ui/button";
import { Moon, ChevronLeft, ChevronRight, Star, Droplet } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

// Types pour les phases lunaires
type MoonPhase = {
  name: string;
  image: string;
  startDay: number;
};

const Calendar = () => {
  const currentMonth = "Mai 2024";
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const [moonPhases, setMoonPhases] = useState<Record<number, string>>({});
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  // Configuration des phases lunaires pour Mai 2024
  // Source : https://www.calendrier-lunaire.fr/
  const lunarPhases: MoonPhase[] = [
    { name: "Dernier Croissant", image: "dernier-croissant.jpg", startDay: 4 },
    { name: "Nouvelle Lune", image: "nouvelle-lune.jpg", startDay: 8 },
    { name: "Premier Croissant", image: "premier-croissant.jpg", startDay: 11 },
    { name: "Premier Quartier", image: "premier-quartier.jpg", startDay: 15 },
    { name: "Lune Gibbeuse Croissante", image: "gibbeuse-croissante.jpg", startDay: 18 },
    { name: "Pleine Lune", image: "pleine-lune.jpg", startDay: 23 },
    { name: "Lune Gibbeuse Décroissante", image: "gibbeuse-decroissante.jpg", startDay: 26 },
    { name: "Dernier Quartier", image: "dernier-quartier.jpg", startDay: 30 }
  ];

  const getMoonPhaseForDay = (day: number): MoonPhase => {
    // Parcourir les phases dans l'ordre inverse pour trouver la phase active
    for (let i = lunarPhases.length - 1; i >= 0; i--) {
      if (day >= lunarPhases[i].startDay) {
        return lunarPhases[i];
      }
    }
    // Si le jour est avant la première phase du mois, utiliser le dernier croissant
    return lunarPhases[0];
  };

  useEffect(() => {
    const fetchMoonPhases = async () => {
      try {
        const phaseUrls: Record<number, string> = {};
        
        // Pour chaque jour du mois
        for (let day = 1; day <= 31; day++) {
          const currentPhase = getMoonPhaseForDay(day);
          
          // Obtenir l'URL publique de l'image
          const { data: { publicUrl } } = await supabase
            .storage
            .from('images')
            .getPublicUrl(currentPhase.image);

          phaseUrls[day] = publicUrl;
        }

        setMoonPhases(phaseUrls);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchMoonPhases();
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
                className="aspect-square rounded-lg border border-white/10 p-2 hover:bg-white/5 transition-colors cursor-pointer relative"
                onClick={() => setSelectedDay(day)}
              >
                <div className="text-sm text-silver-300 mb-2">{day}</div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-1">
                    {moonPhases[day] ? (
                      <img 
                        src={moonPhases[day]} 
                        alt="Phase lunaire"
                        title={getMoonPhaseForDay(day).name}
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
              <Moon className="w-4 h-4 text-silver-400" />
              <span className="text-sm text-silver-300">Phase lunaire</span>
            </div>
          </div>
        </div>
      </div>

      <Sheet open={selectedDay !== null} onOpenChange={() => setSelectedDay(null)}>
        <SheetContent className="bg-gradient-to-br from-night-800 via-night-700 to-night-800 border-none">
          <SheetHeader>
            <SheetTitle className="text-cream-100">
              {selectedDay && `${selectedDay} ${currentMonth}`}
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-center justify-center mt-8">
            {selectedDay && moonPhases[selectedDay] && (
              <>
                <img 
                  src={moonPhases[selectedDay]} 
                  alt="Phase lunaire"
                  className="w-32 h-32 object-contain mb-4"
                />
                <p className="text-silver-200 text-lg font-medium">
                  {getMoonPhaseForDay(selectedDay).name}
                </p>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Calendar;
