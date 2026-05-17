import { Character } from '../types';
import { CharacterCard } from './CharacterCard';

interface CharacterGridProps {
  characters: Character[];
}

export function CharacterGrid({ characters }: CharacterGridProps) {
  return (
    <div className="bg-gradient-to-b from-stone-900 to-slate-900 py-12">
      <div className="container mx-auto px-4">
        {/* Result Count */}
        <div className="mb-8">
          <p className="text-lg font-semibold text-gray-200">
            Showing <span className="text-yellow-400">{characters.length}</span>{' '}
            {characters.length === 1 ? 'character' : 'characters'}
          </p>
        </div>

        {/* Grid */}
        {characters.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-400 mb-2">No characters found</p>
            <p className="text-gray-500">Try adjusting your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
