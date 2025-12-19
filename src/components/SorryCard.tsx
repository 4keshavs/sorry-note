import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Heart } from 'lucide-react';

interface SorryCardProps {
  index: number;
  code: string;
  message: string;
  isVisible: boolean;
  delay?: number;
}

const SorryCard = ({ index, code, message, isVisible, delay = 0 }: SorryCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  if (!isVisible) return null;

  return (
    <div
      className="animate-flip-in cursor-pointer perspective-1000"
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <Card 
        className={`
          relative p-6 bg-card border-primary/30 hover:border-primary transition-all duration-300
          hover:box-glow min-h-[200px] flex flex-col justify-between
          ${isFlipped ? 'bg-primary/10' : ''}
        `}
      >
        {/* Card number badge */}
        <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
          {index + 1}
        </div>

        {!isFlipped ? (
          // Front of card - Code
          <div className="space-y-4">
            <pre className="text-terminal-cyan text-sm overflow-x-auto">
              <code>{code}</code>
            </pre>
            <p className="text-muted-foreground text-xs text-center mt-4">
              Click to reveal message 💚
            </p>
          </div>
        ) : (
          // Back of card - Message
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <Heart className="w-8 h-8 text-terminal-pink animate-heartbeat" />
            <p className="text-foreground leading-relaxed">{message}</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default SorryCard;
