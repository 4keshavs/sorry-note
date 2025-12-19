import { useState } from 'react';
import { Button } from '@/components/ui/button';
import FloatingParticles from '@/components/FloatingParticles';
import { Phone, MessageCircle, Heart, Sparkles, Terminal } from 'lucide-react';

const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);

  // Replace these with your actual contact info
  const phoneNumber = "+919326005217";
  const whatsappNumber = "919326005217";

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hey... I saw your apology website 💚");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden scanlines">
      <FloatingParticles />
      
      <div className="relative z-10 w-full max-w-lg text-center space-y-8">
        {/* Success animation */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(8)].map((_, i) => (
              <Heart
                key={i}
                className="absolute text-terminal-pink animate-float-up opacity-60"
                style={{
                  left: `${10 + i * 10}%`,
                  animationDelay: `${i * 0.5}s`,
                  fontSize: `${12 + Math.random() * 8}px`
                }}
              />
            ))}
          </div>
          
          <div className="relative bg-card/80 backdrop-blur-sm rounded-lg p-8 border border-primary/30 box-glow">
            {/* Terminal header */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-card px-4 py-1 rounded-full border border-primary/30 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">program_complete.exe</span>
            </div>

            <div className="space-y-6 pt-4">
              {/* Success message */}
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-primary">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-sm">EXECUTION COMPLETE</span>
                  <Sparkles className="w-5 h-5" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-glow">
                  The program has completed
                </h1>
                <p className="text-muted-foreground">
                  The next step is up to you...
                </p>
              </div>

              {/* Heartfelt message */}
              <div className="py-4 px-6 bg-secondary/30 rounded-lg border border-primary/20">
                <p className="text-foreground leading-relaxed text-sm md:text-base">
                  Shreya, I know code can't express everything, but I hope this shows how much I care.
                  I miss talking to you, and I truly am sorry for everything.
                  <span className="text-terminal-pink"> 💕</span>
                </p>
              </div>

              {/* Contact buttons styled as functions */}
              <div className="space-y-4">
                <p className="text-terminal-cyan text-sm">
                  // Choose an action to execute:
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button
                    onClick={handleCall}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 h-auto py-4 flex-col gap-2 box-glow"
                    size="lg"
                  >
                    <Phone className="w-6 h-6" />
                    <span className="font-mono text-sm">callMe()</span>
                  </Button>

                  <Button
                    onClick={handleWhatsApp}
                    className="bg-terminal-cyan text-primary-foreground hover:bg-terminal-cyan/90 h-auto py-4 flex-col gap-2"
                    style={{
                      boxShadow: '0 0 15px hsl(180 70% 45% / 0.3), 0 0 30px hsl(180 70% 45% / 0.2)'
                    }}
                    size="lg"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span className="font-mono text-sm">messageMe()</span>
                  </Button>
                </div>
              </div>

              {/* Waiting message */}
              <button
                onClick={() => setShowMessage(!showMessage)}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <p className="text-sm">
                  I'll be waiting... <span className="text-terminal-pink animate-heartbeat inline-block">💚</span>
                </p>
              </button>

              {showMessage && (
                <div className="animate-fade-in text-terminal-pink text-sm">
                  ✨ You mean the world to me, Shreya ✨
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Return code */}
        <div className="text-muted-foreground/50 text-xs font-mono">
          <span className="text-terminal-cyan">return</span> {" "}
          <span className="text-terminal-pink">"hoping for your forgiveness"</span>;
        </div>
      </div>
    </div>
  );
};

export default Contact;
