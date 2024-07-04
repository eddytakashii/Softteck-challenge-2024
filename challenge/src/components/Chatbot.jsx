import React, { useState } from 'react';

const Chatbot = ({ addEvent }) => {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {
        if (message.trim() === '') return;
        addEvent(message);
        setMessage('');
    };

    return (
        <div className="flex flex-col p-4">
            <input
                type="text"
                placeholder="Escreva seu texto aqui"
                className="p-2 w-full rounded border border-gray-300"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
                className="mt-2 p-2 bg-blue-600 text-white rounded hover:bg-blue-500"
                onClick={handleSendMessage}
            >
                Enviar
            </button>
        </div>
    );
};

export default Chatbot;
