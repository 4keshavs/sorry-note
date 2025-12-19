import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  char: string;
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  const chars = ['0', '1', '<', '>', '/', '{', '}', ';', '(', ')', '💚', '❤️'];

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 7,
      char: chars[Math.floor(Math.random() * chars.length)],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="absolute text-primary/20 text-sm"
          style={{
            left: `${particle.left}%`,
            bottom: '-20px',
            animation: `float-up ${particle.duration}s linear infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.char}
        </span>
      ))}
    </div>
  );
};

export default FloatingParticles;
