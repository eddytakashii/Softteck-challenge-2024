
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
      <div className="flex-1 p-10 bg-slate-500 m-auto">

        <div className="flex">
            {/* Conteúdo principal aqui */}
        <h1>Olá, sobre o que gostaria de perguntar hoje</h1>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4 mt-9">
            <div class="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-400">
              Esqueci minha senha
            </div>
            <div class="bg-green-500 text-white p-4 rounded-md hover:bg-green-400">
              Como funciona o chatbot
            </div>
            <div class="bg-red-500 text-white p-4 rounded-md hover:bg-red-400">
              Duvida 3
            </div>
            <div class="bg-yellow-500 text-white p-4 rounded-md hover:bg-yellow-400">
              Duvida 4
            </div>
          </div>
        </div>
        

        <div className="flex flex-col mt-96 p-4">
            <input id="footer" type="text" placeholder="Escreva seu texto aqui"/>
            <button id="btn-click" className="m-auto rounded mt-9 max-h-26 max-w-32 bg-blue-600">Clique aqui</button>
        </div>

      </div>
    </div>
  );
};

export default Historico;
