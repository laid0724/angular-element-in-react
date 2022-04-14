import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [isOpen, setModalState] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const angularElement = document.querySelector('angular-modal');
      // angular @Output events turns into CustomEvents, and you have to manually listen to them.
      // the output value will be returned as 'detail' property from the CustomEvent object
      angularElement.addEventListener('modalOpenState', ({ detail }) => {
        setModalState(detail);
      });
    }
  });

  const openModal = () => {
    setModalState(true);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <button onClick={openModal}>
          Click Me To Open Angular Element Modal
        </button>
      </header>
      {/*
        NOTE: angular @Input name turns into kebab-case when turned into web components,
        e.g., isOpen => is-open
       */}
      {isOpen && (
        <angular-modal is-open={isOpen}>
          <div className='title'>Hello Word</div>
          <div className='body'>I am a modal created from Angular!</div>
        </angular-modal>
      )}
    </div>
  );
};

export default App;
