import { AnimatedSection } from './AnimatedSection';
import { AchievementCard } from './AchievementCard';

export function Achievements() {
  const achievements = [
    {
      title: 'Idea-Thon',
      description: 'Presented Final Year Project (May 2024)',
      icon: '🏆'
    },
    {
      title: 'IEEE Organizer',
      description: 'Led Model United Nation event',
      icon: '🎯'
    },
    {
      title: 'IN IT TO WIN IT',
      description: 'Runner-up in a competitive software challenge',
      icon: '🥈'
    }
  ];

  return (
    <section id="achievements" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Achievements</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <AchievementCard key={achievement.title} {...achievement} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}