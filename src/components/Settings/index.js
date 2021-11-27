import React from 'react';

import './styles.scss';

import skinAvatar from '../../assets/skin.svg';
import clotheAvatar from '../../assets/t-shirt.svg';

import { skinColors, clotheColors } from '../../data/colors';

const Settings = ({ setSkinColor, setClotheColor }) => {
  return (
    <div className="app__settings">
      <div className="app__skin">
        <div className="app__svg">
          <img src={ skinAvatar } alt="Tracé vectoriel d'un visage" />
        </div>
        <div className="app__colors">
          {
            skinColors.map((skinColor) =>{
              return (
                <div
                  key={ skinColor.hexa }
                  className="app__color"
                >
                  <img
                    id={ skinColor.hexa }
                    src={ skinColor.src }
                    alt={ `Bouton pour choisir la couleur de peau ${ skinColor.name }` }
                    onClick={(event) => {
                      setSkinColor(event.target.id);
                    }}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="app__clothe">
        <div className="app__svg">
          <img src={ clotheAvatar } alt="Tracé vertoriel d'un t-shirt" />
        </div>
        <div className="app__colors">
          {
            clotheColors.map((clotheColor) => {
              return (
                <div
                  key={ clotheColor.hexa }
                  className="app__color"
                >
                  <img
                    id={ clotheColor.hexa }
                    src={ clotheColor.src }
                    alt={ `Bouton pour choisir la couleur de t-shirt ${ clotheColor.name }` }
                    onClick={(event) => {
                      setClotheColor(event.target.id);
                    }}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Settings;