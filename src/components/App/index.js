import React from 'react';

import './styles.scss';

import Avatars from '../Avatars';
import Settings from '../Settings';

const App = () => {
  return (
    <div className="app">
      <div className="app__profile">
        <header className="app__header">
          PROFIL
        </header>
        <div className="app__content">
          <p className="app__text">
            Lequel de ces deux avatars préfèrez-vous ?
          </p>
          <Avatars />
          <div className="app__separator" />
          <Settings />
          <button className="app__button">
            Valider
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;