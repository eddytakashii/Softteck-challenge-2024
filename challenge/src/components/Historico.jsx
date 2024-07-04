import React, { useState } from 'react';
import Chatbot from './Chatbot';
import Header from './Header';

const Historico = ({ username }) => {
    const [events, setEvents] = useState([]);
    const [label, setLabel] = useState('');

    const addEvent = (text) => {
        const newEvent = {
            id: events.length + 1,
            date: new Date().toLocaleString(),
            description: text
        };
        setEvents([...events, newEvent]);
    };

    const handlePasswordReset = () => {
        setLabel('Para alterar sua senha você deve primeiramente ir para a área X');
    };

    const handleChat = () => {
        setLabel('O chatbot funciona da seguinte maneira, ');
    };

    const Duvida3 = () => {
        setLabel('Duvida3 ficará aqui');
    };

    const Duvida4 = () => {
        setLabel('Duvida4 ficará aqui');
    };



    return (
        
        <div className="flex overflow-y-auto">
            <div className="w-64 h-screen bg-gray-800 text-white overflow-y-auto">
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Histórico</h1>
                </div>
                <ul className="p-4">
                    {events.map(event => (
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
                <Header/>
                <div className="flex flex-col items-center mt-10">
                    <h1>Olá {username}, sobre o que gostaria de perguntar hoje?</h1>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4 mt-9">
                        <div className="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-400" onClick={handlePasswordReset}>
                            Esqueci minha senha
                        </div>
                        <div className="bg-green-500 text-white p-4 rounded-md hover:bg-green-400" onClick={handleChat}>
                            Como funciona o chatbot
                        </div>
                        <div className="bg-red-500 text-white p-4 rounded-md hover:bg-red-400" onClick={Duvida3}>
                            Dúvida 3
                        </div>
                        <div className="bg-yellow-500 text-white p-4 rounded-md hover:bg-yellow-400" onClick={Duvida4}>
                            Dúvida 4
                        </div>
                    </div>
                    <div className="mt-40 p-10 border-solid border-2  border-white ">
                        <form>
                            <label htmlFor="setSelectText">{label}</label>
                        </form>
                    </div>
                </div>
                <Chatbot addEvent={addEvent} />
            </div>
        </div>
    );
};

export default Historico;


