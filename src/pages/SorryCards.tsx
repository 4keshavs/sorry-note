import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import SorryCard from '@/components/SorryCard';
import FloatingParticles from '@/components/FloatingParticles';
import { ChevronRight, Heart, Terminal } from 'lucide-react';

const sorryCards = [
  {
    code: `// TODO: Stop being an idiot
// Priority: CRITICAL
// Assigned to: Me`,
    message: "I know I messed up, and I'm working on a patch update for myself. You deserve so much better than how I acted. 🔧"
  },
  {
    code: `git commit -m "I'm truly sorry"
git push origin my-heart`,
    message: "Every moment without talking to you feels like an infinite loop I can't break out of. I miss our conversations so much."
  },
  {
    code: `while(alive) {
  miss_you();
  think_about_you();
}`,
    message: "You're the only exception in my error-free code of life. Without you, nothing compiles the way it should. 💕"
  },
  {
    code: `try {
  hurt_you();
} catch (mistake) {
  apologize(deeply);
  promise(toBeBetter);
}`,
    message: "I caught my mistake, and I promise to handle it better next time. Please give me the chance to prove it."
  },
  {
    code: `console.log("I miss you");
console.log("Every single day");
console.log("More than you know");`,
    message: "My days don't compile properly without you in them. You bring meaning to everything I do."
  },
  {
    code: `if (you.forgive(me)) {
  happiness = true;
  smile = restored;
  heart = complete;
}`,
    message: "You're the only condition that makes my life return true. Without your forgiveness, I'm stuck in an endless error state. ❤️"
  },
  {
    code: `// Bug Report #001
// Issue: Brain wasn't connected
//        to heart
// Status: Fixing immediately`,
    message: "I've identified the issue and I'm deploying a fix immediately! I should have thought about your feelings first."
  },
  {
    code: `import { SecondChance } from 'please';
import { Forgiveness } from 'hope';

await SecondChance.request();`,
    message: "I'm hoping you'll give me one more chance to make things right. I'll do whatever it takes."
  },
  {
    code: `function myHeart() {
  return "only beats for you";
}

export default myHeart;`,
    message: "You're not just in my thoughts, you're in every line of my code. My heart has been exported only to you. 💗"
  },
  {
    code: `// Final commit message:
// "I promise to be better"
// 
// Signed-off-by: Someone who
// truly cares about you ❤️`,
    message: "I'll debug every flaw in myself if it means seeing your smile again. You mean everything to me, Shreya."
  }
];

const SorryCardsPage = () => {
  const navigate = useNavigate();
  const [currentCard, setCurrentCard] = useState(0);
  const [visibleCards, setVisibleCards] = useState<number[]>([0]);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    // Show next button after viewing current card
    const timer = setTimeout(() => {
      setShowNext(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, [currentCard]);

  const handleNext = () => {
    if (currentCard < sorryCards.length - 1) {
      const nextCard = currentCard + 1;
      setCurrentCard(nextCard);
      setVisibleCards(prev => [...prev, nextCard]);
      setShowNext(false);
    } else {
      navigate('/contact');
    }
  };

  const progress = ((currentCard + 1) / sorryCards.length) * 100;

  return (
    <div className="min-h-screen bg-background p-4 relative overflow-hidden scanlines">
      <FloatingParticles />
      
      <div className="relative z-10 max-w-4xl mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-8 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Terminal className="w-6 h-6 text-primary" />
            <h1 className="text-2xl md:text-3xl font-bold text-glow">
              Loading Apology...
            </h1>
            <Heart className="w-6 h-6 text-terminal-pink animate-heartbeat" />
          </div>
          
          {/* Progress bar */}
          <div className="max-w-md mx-auto space-y-2">
            <Progress value={progress} className="h-2 bg-secondary" />
            <p className="text-muted-foreground text-sm">
              Card {currentCard + 1} of {sorryCards.length}
            </p>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {sorryCards.map((card, index) => (
            <SorryCard
              key={index}
              index={index}
              code={card.code}
              message={card.message}
              isVisible={visibleCards.includes(index)}
              delay={index === currentCard ? 0 : 0}
            />
          ))}
        </div>

        {/* Next button */}
        {showNext && (
          <div className="fixed bottom-8 left-0 right-0 flex justify-center animate-fade-in">
            <Button
              onClick={handleNext}
              className="bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow"
              size="lg"
            >
              {currentCard < sorryCards.length - 1 ? (
                <>
                  Next Card
                  <ChevronRight className="w-4 h-4 ml-2" />
                </>
              ) : (
                <>
                  <Heart className="w-4 h-4 mr-2" />
                  What's Next?
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SorryCardsPage;
