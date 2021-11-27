import React from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

import './styles.scss';

import ManAvatar from '../Avatars/ManAvatar';
import WomanAvatar from '../Avatars/WomanAvatar';

const Welcome = () => {
  const navigate = useNavigate();

  const { gender,
    hair,
    skin,
    clothe
  } = useSelector(state => state.avatar);

  return (
    <div className="welcome">
      <p className="welcome__text">Bienvenue !</p>
      <div className="avatars__container">
        {
          gender === 'male' &&
          <ManAvatar 
            hair={ hair }
            skin={ skin }
            clothe={ clothe }
          />
        }

        {
          gender === 'female' &&
          <WomanAvatar
            hair={ hair }
            skin={ skin }
            clothe={ clothe }
          />
        }
      </div>
      <button
        className="app__button"
        onClick={() => {
          navigate('/');
        }}
      >
        Retour
      </button>
    </div>
  );
};

export default Welcome;