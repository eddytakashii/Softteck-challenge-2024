
const historyEvents = [
  { id: 1, date: '2024-01-01', description: 'Event 1 description' },
  { id: 2, date: '2024-02-01', description: 'Event 2 description' },
  { id: 3, date: '2024-03-01', description: 'Event 3 description' },
  // Adicione mais eventos conforme necessário
];

const Historico = () => {
  return (
    <div className="flex">
      <div className="w-64 h-screen bg-gray-800 text-white overflow-y-auto">
        <div className="p-4">
          <h1 className="text-2xl font-bold">History</h1>
        </div>
        <ul className="p-4">
          {historyEvents.map(event => (
            <li key={event.id} className="mb-4">
              <div className="p-2 bg-gray-700 rounded">
                <p className="text-sm text-gray-400">{event.date}</p>
                <p className="mt-1">{event.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-10">
        {/* Conteúdo principal aqui */}
        <h1>Aqui ficará o conteúdo principal</h1>

        <div className="flex flex-auto">
            <input id="style" type="text" placeholder="Escreva seu texto aqui"/>
        </div>

      </div>
    </div>
  );
};

export default Historico;
