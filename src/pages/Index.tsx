
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const fullMoonUrl = "https://wdpawlpaqqwbnsmylxeq.supabase.co/storage/v1/object/public/images/pleine-lune.jpg";

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond avec halo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${fullMoonUrl}')`,
        }}
      >
        {/* Overlay pour assurer la lisibilité du texte */}
        <div className="absolute inset-0 bg-night-800/30 backdrop-blur-sm"></div>
      </div>

      {/* Contenu centré */}
      <div className="relative z-10 text-center px-4">
        <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6 text-cream-100 drop-shadow-lg">
          Moon is a Girl
        </h1>
        <p className="text-lg md:text-xl mb-12 text-silver-200 max-w-xl mx-auto">
          Découvrez l'harmonie entre votre cycle menstruel et les phases de la lune
        </p>
        <Link to="/auth">
          <Button 
            className="bg-white/20 backdrop-blur-md border border-white/40 text-white hover:bg-white/30 transition-all duration-300 text-lg px-8 py-6 rounded-xl font-medium shadow-lg"
            size="lg"
          >
            Commencer mon voyage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
