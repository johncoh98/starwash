import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  };

  return (
    <form className='w-50' onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-zinc-50 font-bold mb-2">
          Nom
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full border rounded py-2 px-3 ${
            email ? 'border-cyan-500' : 'border-gray-300'
          } transition-all duration-300 focus:outline-none focus:border-cyan-500`}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-zinc-50 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full border rounded py-2 px-3 ${
            email ? 'border-cyan-500' : 'border-gray-300'
          } transition-all duration-300 focus:outline-none focus:border-cyan-500`}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-zinc-50 font-bold mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`w-full border rounded py-2 px-3 ${
            email ? 'border-cyan-500' : 'border-gray-300'
          } transition-all duration-300 focus:outline-none focus:border-cyan-500`}
          rows={5}
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-cyan-400 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
