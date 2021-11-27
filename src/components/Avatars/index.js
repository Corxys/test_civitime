import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeGender } from '../../features/avatar/avatarSlice';

import './styles.scss';

import ManAvatar from './ManAvatar';
import WomanAvatar from './WomanAvatar';

const Avatars = () => {
  const dispatch = useDispatch();

  const {
    gender,
    hair, 
    skin,
    clothe
  } = useSelector(state => state.avatar);

  return (
    <div className="avatars">
      <div
        id="male"
        className={ gender === 'male' ? 'avatars__container avatars__container--selected'  : 'avatars__container' }
        onClick={(event) => {
            // when we click, the action targets the SVG
            // in our case, we want to retrieve the id that is on the tag "avatars__container" so we go back to the DOM with the "closest()" function
            const avatar = event.target.closest('.avatars__container');

            // and we dispatch the action to the reducer
            dispatch(
              changeGender(avatar.id)
            );
          }
        }
      >
        <ManAvatar
          hair={ hair }
          skin={ skin }
          clothe={ clothe }
        />
      </div>
      <div
        id="female"
        className={ gender === 'female' ? 'avatars__container avatars__container--selected'  : 'avatars__container' }
        onClick={(event) => {
            const avatar = event.target.closest('.avatars__container');

            dispatch(
              changeGender(avatar.id)
            );
          }
        }
      >
        <WomanAvatar
          hair={ hair }
          skin={ skin }
          clothe={ clothe }
        />
      </div>
    </div>
  );
};

export default Avatars;