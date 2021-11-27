import React, { useState } from 'react';

import './styles.scss';

import Avatars from '../Avatars';
import Settings from '../Settings';

const App = () => {
  const [skinColor, setSkinColor] = useState('FCD7B8');
  const [clotheColor, setClotheColor] = useState('B2C7C7');

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
          <Avatars
            skinColor={ skinColor }
            clotheColor={ clotheColor }
          />
          <div className="app__separator" />
          <Settings
            setSkinColor={ setSkinColor }
            setClotheColor={ setClotheColor }
          />
          <button className="app__button">
            Valider
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;