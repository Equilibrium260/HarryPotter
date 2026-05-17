import { Character, House } from '../types';

interface CharacterCardProps {
  character: Character;
}

export function CharacterCard({ character }: CharacterCardProps) {
  const houseColors: Record<House, string> = {
    Gryffindor: 'border-gryffindor bg-red-950',
    Slytherin: 'border-slytherin bg-green-950',
    Hufflepuff: 'border-hufflepuff bg-yellow-950',
    Ravenclaw: 'border-ravenclaw bg-blue-950',
  };

  const houseBadgeColors: Record<House, string> = {
    Gryffindor: 'bg-gryffindor text-white',
    Slytherin: 'bg-slytherin text-white',
    Hufflepuff: 'bg-hufflepuff text-gray-900',
    Ravenclaw: 'bg-ravenclaw text-white',
  };

  const imageSrc = character.imageUrl ?? `/images/${character.image}`;

  return (
    <div
      className={`rounded-xl overflow-hidden shadow-2xl hover:shadow-2xl transition border-l-4 border-t-2 ${houseColors[character.house]} hover:scale-105 transform transition bg-gradient-to-b from-gray-800 to-gray-900`}
    >
      {/* Image */}
      <div className="h-56 bg-gray-700 overflow-hidden flex items-center justify-center">
        <img
          src={imageSrc}
          alt={character.name}
          className="max-w-full max-h-full object-contain"
          loading="lazy"
          onError={(e) => {
            // Fallback image if not found
            (e.target as HTMLImageElement).src =
              'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect fill=%22%23333%22 width=%22200%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23999%22%3E[image]%3C/text%3E%3C/svg%3E';
          }}
        />
      </div>

      {/* Content */}
      <div className="p-5 bg-gradient-to-b from-gray-800 to-gray-900">
        <h3 className="text-2xl font-bold mb-4 text-yellow-300" style={{
          textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
        }}>{character.name}</h3>

        <div className="space-y-2">
          {/* House Badge */}
          <div className="flex gap-2 flex-wrap">
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${houseBadgeColors[character.house]}`}
            >
              {character.house}
            </span>
          </div>

          {/* Role Badge */}
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gray-600 text-gray-100">
              {character.role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
