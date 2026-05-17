import { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { CharacterGrid } from './components/CharacterGrid';
import { characters } from './data/characters';
import { House, Role } from './types';
import './App.css';

function App() {
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const filteredCharacters = useMemo(() => {
    return characters.filter((char) => {
      const houseMatch = !selectedHouse || char.house === selectedHouse;
      const roleMatch = !selectedRole || char.role === selectedRole;
      return houseMatch && roleMatch;
    });
  }, [selectedHouse, selectedRole]);

  const handleReset = () => {
    setSelectedHouse(null);
    setSelectedRole(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-stone-900 to-slate-900">
      <Header />
      <FilterBar
        selectedHouse={selectedHouse}
        selectedRole={selectedRole}
        onHouseChange={setSelectedHouse}
        onRoleChange={setSelectedRole}
        onReset={handleReset}
      />
      <CharacterGrid characters={filteredCharacters} />
    </div>
  );
}

export default App;
