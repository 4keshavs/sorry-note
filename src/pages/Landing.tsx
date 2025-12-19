import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TypingText from '@/components/TypingText';
import FloatingParticles from '@/components/FloatingParticles';
import { Play, Terminal } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();
  const [typingComplete, setTypingComplete] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden scanlines">
      <FloatingParticles />
      
      {/* Terminal window */}
      <div className="relative z-10 w-full max-w-2xl">
        {/* Terminal header */}
        <div className="bg-secondary/50 rounded-t-lg px-4 py-2 flex items-center gap-2 border border-b-0 border-primary/30">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/70" />
            <div className="w-3 h-3 rounded-full bg-terminal-yellow/70" />
            <div className="w-3 h-3 rounded-full bg-primary/70" />
          </div>
          <div className="flex-1 text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
            <Terminal className="w-3 h-3" />
            apology.exe
          </div>
        </div>

        {/* Terminal body */}
        <div className="bg-card/80 backdrop-blur-sm rounded-b-lg p-8 border border-primary/30 box-glow">
          {/* Terminal prompt */}
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <span className="text-terminal-cyan">$</span>
              <span className="text-muted-foreground">./initialize_apology.sh</span>
            </div>

            <div className="text-primary/70 text-sm">
              [INFO] Loading heartfelt message...
            </div>

            <div className="py-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-glow leading-relaxed">
                <TypingText 
                  text="Since you're a computer science student, so this is my CS way..."
                  speed={60}
                  onComplete={() => setTypingComplete(true)}
                />
              </h1>
            </div>

            {typingComplete && (
              <div className="space-y-4 animate-fade-in">
                <div className="text-terminal-cyan text-sm">
                  [SUCCESS] Message loaded successfully ✓
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <span className="text-terminal-cyan">$</span>
                  <span>Ready to execute apology protocol...</span>
                </div>

                <Button 
                  onClick={() => navigate('/access')}
                  className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow group"
                  size="lg"
                >
                  <Play className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Execute Program ▶
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer hint */}
      <p className="absolute bottom-8 text-muted-foreground/50 text-xs z-10">
        Press execute to continue...
      </p>
    </div>
  );
};

export default Landing;
