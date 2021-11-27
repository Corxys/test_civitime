import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './styles.scss';

import ChooseYourAvatar from '../ChooseYourAvatar';
import Welcome from '../Welcome';

const App = () => {
  return (
    <div className="app">
      <div className="app__container">
        <div className="app__profile">
          <header className="app__header">
            PROFIL
          </header>
        </div>
        <div className="app__content">
          <Routes>
            <Route exact path="/" element={ <ChooseYourAvatar /> } />
            <Route exact path="/bienvenue" element={ <Welcome /> } />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;