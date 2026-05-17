export function Header() {
  return (
    <header className="bg-gradient-to-b from-stone-900 to-gray-900 text-white py-12 text-center border-b-4 border-yellow-500 shadow-2xl">
      <div className="container mx-auto px-4">
        <div className="mb-4 text-4xl">✨</div>
        <h1 className="text-6xl font-bold mb-2 text-yellow-400 drop-shadow-lg" style={{
          textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(234,179,8,0.3)'
        }}>
          Harry Potter Characters
        </h1>
        <p className="text-xl text-gray-300 font-serif italic">Explore the Wizarding World</p>
        <div className="mt-4 text-3xl">🪄</div>
      </div>
    </header>
  );
}
