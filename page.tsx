import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Section } from '@/components/Section';
import { GameCard } from '@/components/GameCard';
import { Footer } from '@/components/Footer';

export default function Home() {
  const games = [
    {
      title: 'Luminous Depths',
      description: 'A atmospheric puzzle-adventure exploring bioluminescent underwater worlds.',
      genre: 'Adventure',
      link: '/games/luminous-depths',
    },
    {
      title: 'Void Runner',
      description: 'High-speed action game where you navigate through dimensional rifts.',
      genre: 'Action',
      link: '/games/void-runner',
    },
    {
      title: 'Echoes of Time',
      description: 'Story-driven adventure featuring time manipulation mechanics.',
      genre: 'Puzzle',
      link: '/games/echoes-of-time',
    },
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <Hero
        subtitle="Welcome to Xilver Games"
        title="Where Innovation Meets Imagination"
        description="We craft unforgettable gaming experiences that push creative boundaries and immerse players in breathtaking virtual worlds."
        cta={{
          text: 'Explore Our Games',
          href: '/games',
          secondary: {
            text: 'Learn More',
            href: '/about',
          },
        }}
      />

      {/* Featured Games Section */}
      <Section id="games" className="border-t border-border">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Games</h2>
          <p className="text-foreground/70 max-w-2xl">
            Discover our latest creations, each designed to deliver unique gameplay and immersive storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}
        </div>
      </Section>

      {/* Studio Section */}
      <Section className="border-t border-border bg-gradient-to-b from-background to-secondary-dark/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Xilver Games</h2>
            <p className="text-foreground/70 mb-4 leading-relaxed">
              Founded by industry veterans, Xilver Games is dedicated to creating innovative and immersive gaming
              experiences. We believe in the power of interactive storytelling and cutting-edge game design.
            </p>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Our team brings together diverse talents in programming, art, sound design, and narrative development to
              craft games that resonate with players worldwide.
            </p>
            <a href="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              Read Our Story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="glass rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <p className="text-sm text-foreground/70">Games Released</p>
            </div>
            <div className="glass rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">10K+</div>
              <p className="text-sm text-foreground/70">Active Players</p>
            </div>
            <div className="glass rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-sm text-foreground/70">Team Members</p>
            </div>
            <div className="glass rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-sm text-foreground/70">Passion Driven</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="border-t border-border text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Our Universe?</h2>
        <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
          Get in touch with us for collaborations, inquiries, or just to say hello.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-primary text-background font-semibold rounded-md hover:bg-primary-dark transition-colors"
        >
          Get In Touch
        </a>
      </Section>

      <Footer />
    </>
  );
}
