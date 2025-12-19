import { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
  showCursor?: boolean;
}

const TypingText = ({ 
  text, 
  speed = 50, 
  onComplete, 
  className = "",
  showCursor = true 
}: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [displayedText, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span className={`cursor-blink ${isComplete ? 'text-primary' : 'text-foreground'}`}>
          █
        </span>
      )}
    </span>
  );
};

export default TypingText;
