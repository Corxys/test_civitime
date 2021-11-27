import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSkin, changeClothe, changeHair } from '../../features/avatar/avatarSlice';

import './styles.scss';

import hairAvatar from '../../assets/hair.svg';
import skinAvatar from '../../assets/skin.svg';
import clotheAvatar from '../../assets/t-shirt.svg';

import { hairColors, skinColors, clotheColors } from '../../data/colors';

const Settings = () => {
  const dispatch = useDispatch();

  const {
    hair,
    skin, 
    clothe
  } = useSelector(state => state.avatar)

  return (
    <div className="settings">
      <div className="settings__hair">
        <div className="settings__svg">
          <img src={ hairAvatar } alt="Tracé vectoriel des cheveux" />
        </div>
        <div className="settings__colors">
          {
            hairColors.map((hairColor) => {
              return (
                <div
                  key={ hairColor.hexa } 
                  className={ hairColor.hexa === hair ? 'settings__color settings__color--selected' : 'settings__color' }
                >
                  <img
                  id={ hairColor.hexa }
                  src={ hairColor.src }
                  alt={ `Bouton pour choisir la couleur de cheveux ${ hairColor.name }` }
                  onClick={(event) => {
                    dispatch(
                      changeHair(event.target.id),
                    );
                  }}
                />
                </div>
              )
            })
          }
        </div>
      </div>  
      <div className="settings__skin">
        <div className="settings__svg">
          <img src={ skinAvatar } alt="Tracé vectoriel d'un visage" />
        </div>
        <div className="settings__colors">
          {
            skinColors.map((skinColor) => {
              return (
                <div
                  key={ skinColor.hexa }
                  className={ skinColor.hexa === skin ? 'settings__color settings__color--selected' : 'settings__color' }
                >
                  <img
                    id={ skinColor.hexa }
                    src={ skinColor.src }
                    alt={ `Bouton pour choisir la couleur de peau ${ skinColor.name }` }
                    onClick={(event) => {
                      dispatch(
                        changeSkin(event.target.id),
                      );
                    }}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="settings__clothe">
        <div className="settings__svg">
          <img src={ clotheAvatar } alt="Tracé vertoriel d'un t-shirt" />
        </div>
        <div className="settings__colors">
          {
            clotheColors.map((clotheColor) => {
              return (
                <div
                  key={ clotheColor.hexa }
                  className={ clotheColor.hexa === clothe ? 'settings__color settings__color--selected' : 'settings__color' }
                >
                  <img
                    id={ clotheColor.hexa }
                    src={ clotheColor.src }
                    alt={ `Bouton pour choisir la couleur de t-shirt ${ clotheColor.name }` }
                    onClick={(event) => {
                      dispatch(
                        changeClothe(event.target.id),
                      );
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