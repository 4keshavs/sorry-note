import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FloatingParticles from '@/components/FloatingParticles';
import { Lock, AlertTriangle, CheckCircle, Terminal } from 'lucide-react';

const Access = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const errorMessages = [
    "❌ Error 403: Only Shreya can access my heart",
    "⚠️ Authentication failed! Hint: She's special 💕",
    "🔒 Access Denied! This apology is exclusively for someone amazing",
    "💔 Wrong key! Think about who this message is really for...",
    "🚫 Permission denied! Only one person can unlock this...",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (name.toLowerCase().trim() === 'shreya') {
      navigate('/sorry-cards');
    } else {
      setShake(true);
      setError(errorMessages[attempts % errorMessages.length]);
      setAttempts(prev => prev + 1);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden scanlines">
      <FloatingParticles />
      
      {/* Terminal window */}
      <div className="relative z-10 w-full max-w-md">
        {/* Terminal header */}
        <div className="bg-secondary/50 rounded-t-lg px-4 py-2 flex items-center gap-2 border border-b-0 border-primary/30">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/70" />
            <div className="w-3 h-3 rounded-full bg-terminal-yellow/70" />
            <div className="w-3 h-3 rounded-full bg-primary/70" />
          </div>
          <div className="flex-1 text-center text-xs text-muted-foreground flex items-center justify-center gap-2">
            <Lock className="w-3 h-3" />
            access_control.exe
          </div>
        </div>

        {/* Terminal body */}
        <div className={`bg-card/80 backdrop-blur-sm rounded-b-lg p-8 border border-primary/30 box-glow ${shake ? 'animate-shake' : ''}`}>
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Terminal className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold text-glow">Access Control</h2>
              </div>
              <p className="text-muted-foreground text-sm">
                This message is encrypted for someone special
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-terminal-cyan text-sm flex items-center gap-2">
                  <span className="text-muted-foreground">$</span>
                  Enter access_key:
                </label>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setError('');
                  }}
                  placeholder="Who is this apology for?"
                  className="bg-background border-primary/30 focus:border-primary focus:ring-primary text-foreground placeholder:text-muted-foreground/50"
                  autoFocus
                />
              </div>

              {/* Error message */}
              {error && (
                <div className="flex items-start gap-2 text-destructive text-sm animate-fade-in bg-destructive/10 p-3 rounded-md border border-destructive/30">
                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Hint after 2 attempts */}
              {attempts >= 2 && (
                <div className="text-terminal-cyan text-xs animate-fade-in">
                  💡 Hint: Her name starts with 'S' and ends with 'a'...
                </div>
              )}

              <Button 
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Authenticate
              </Button>
            </form>

            {/* Attempt counter */}
            {attempts > 0 && (
              <div className="text-center text-muted-foreground/50 text-xs">
                Attempts: {attempts}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Access;
