import { House, Role } from '../types';

interface FilterBarProps {
  selectedHouse: House | null;
  selectedRole: Role | null;
  onHouseChange: (house: House | null) => void;
  onRoleChange: (role: Role | null) => void;
  onReset: () => void;
}

export function FilterBar({
  selectedHouse,
  selectedRole,
  onHouseChange,
  onRoleChange,
  onReset,
}: FilterBarProps) {
  const houses: House[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];
  const roles: Role[] = ['Student', 'Teacher', 'Other'];

  const houseColors = {
    Gryffindor: 'bg-gryffindor hover:bg-red-900',
    Slytherin: 'bg-slytherin hover:bg-green-900',
    Hufflepuff: 'bg-hufflepuff hover:bg-yellow-600 text-gray-900',
    Ravenclaw: 'bg-ravenclaw hover:bg-blue-900',
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-stone-800 to-gray-900 py-8 border-b-2 border-yellow-600 shadow-lg">
      <div className="container mx-auto px-4">
        {/* House Filter */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-yellow-400 uppercase tracking-wider">🏰 Select a House</h3>
          <div className="flex flex-wrap gap-2">
            {houses.map((house) => (
              <button
                key={house}
                onClick={() => onHouseChange(selectedHouse === house ? null : house)}
                className={`px-4 py-2 rounded font-semibold transition ${
                  selectedHouse === house
                    ? `${houseColors[house]} text-white ring-2 ring-offset-1 ring-yellow-400`
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}
              >
                {house}
              </button>
            ))}
          </div>
        </div>

        {/* Role Filter */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 text-yellow-400 uppercase tracking-wider">👤 Filter by Role</h3>
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => onRoleChange(selectedRole === role ? null : role)}
                className={`px-4 py-2 rounded font-semibold transition ${
                  selectedRole === role
                    ? 'bg-yellow-500 text-gray-900 ring-2 ring-offset-1 ring-yellow-300'
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Reset / Show All Button */}
        <button
          onClick={onReset}
          className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-gray-900 rounded-lg font-bold uppercase tracking-wider transition transform hover:scale-105 shadow-lg"
        >
          ✨ Show All Characters
        </button>
      </div>
    </div>
  );
}
