import Link from 'next/link';

interface GameCardProps {
  title: string;
  description: string;
  genre: string;
  image?: string;
  link: string;
}

export function GameCard({ title, description, genre, image, link }: GameCardProps) {
  return (
    <Link href={link}>
      <div className="glass rounded-lg overflow-hidden hover:border-primary transition-all duration-300 group cursor-pointer h-full flex flex-col">
        {image && (
          <div className="relative w-full h-48 bg-secondary-dark overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-2">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
              {genre}
            </span>
          </div>

          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>

          <p className="text-foreground/70 text-sm flex-grow">{description}</p>

          <div className="mt-4 flex items-center text-primary font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
            Learn More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
