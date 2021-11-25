import React from 'react';

import './styles.scss';

import manAvatar from '../../assets/man.svg';
import womanAvatar from '../../assets/woman.svg';
import skinAvatar from '../../assets/skin.svg';
import clotheAvatar from '../../assets/t-shirt.svg';

import skinColorOne from '../../assets/color-FCD7B8.svg';
import skinColorTwo from '../../assets/color-E0A39A.svg';
import skinColorThree from '../../assets/color-FCCC84.svg';
import skinColorFour from '../../assets/color-533724.svg';

import clotheColorOne from '../../assets/color-B2C7C7.svg';
import clotheColorTwo from '../../assets/color-88C10F.svg';
import clotheColorThree from '../../assets/color-FF1414.svg';
import clotheColorFour from '../../assets/color-striped.svg';

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
          <div className="app__avatars">
            <div className="app__avatar">
              <img className="app__src" src={ manAvatar } alt="Avatar pour le genre masculin" />
            </div>
            <div className="app__avatar">
              <img className="app__src" src={ womanAvatar } alt="Avatar pour le genre féminin" />
            </div>
          </div>
          <div className="app__separator" />
          <div className="app__settings">
            <div className="app__skin">
              <div className="app__svg">
                <img src={ skinAvatar } alt="Tracé vectoriel d'un visage" />
              </div>
              <div className="app__colors">
                <div className="app__color">
                  <img src={ skinColorOne } alt="Bouton pour choisir la couleur de peau rose pâle" />
                </div>
                <div className="app__color">
                  <img src={ skinColorTwo } alt="Bouton pour choisir la couleur de peau rose" />
                </div>
                <div className="app__color">
                  <img src={ skinColorThree } alt="Bouton pour choisir la couleur de peau jaune" />
                </div>
                <div className="app__color">
                  <img src={ skinColorFour } alt="Bouton pour choisir la couleur de peau marron" />
                </div>
              </div>
            </div>
            <div className="app__clothe">
              <div className="app__svg">
                <img src={ clotheAvatar } alt="Tracé vertoriel d'un t-shirt" />
              </div>
              <div className="app__colors">
                <div className="app__color">
                  <img src={ clotheColorOne } alt="Bouton pour choisir la couleur de t-shirt bleu clair" />
                </div>
                <div className="app__color">
                  <img src={ clotheColorTwo } alt="Bouton pour choisir la couleur de t-shirt vert" />
                </div>
                <div className="app__color">
                  <img src={ clotheColorThree } alt="Bouton pour choisir la couleur de t-shirt rouge" />
                </div>
                <div className="app__color">
                  <img src={ clotheColorFour } alt="Bouton pour choisir la couleur de t-shirt bleu clair avec des rayures bleues foncées" />
                </div>
              </div>
            </div>
          </div>
          <button className="app__button">
            Valider
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;