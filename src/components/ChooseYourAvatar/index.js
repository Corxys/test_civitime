import React from 'react';
import { useNavigate } from 'react-router';

import './styles.scss';

import Avatars from '../Avatars';
import Settings from '../Settings';

const ChooseYourAvatar = () => {
  const navigate = useNavigate ();

  return (
    <>
      <p className="app__text">
        Lequel de ces deux avatars préfèrez-vous ?
      </p>
      <Avatars />
      <div className="app__separator" />
      <Settings />
      <button
        className="app__button"
        onClick={() => {
          navigate('/bienvenue');
        }}
      >
        Valider
      </button>
    </>
  );
};

export default ChooseYourAvatar;