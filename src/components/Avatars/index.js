import React from 'react';

import './styles.scss';

import ManAvatar from './ManAvatar';
import WomanAvatar from './WomanAvatar';

const Avatars = ({ skinColor, clotheColor }) => {
  return (
    <div className="avatars">
      <div className="avatars__container">
        <ManAvatar
          skinColor={ skinColor }
          clotheColor={ clotheColor }
        />
      </div>
      <div className="avatars__container">
        <WomanAvatar
          skinColor={ skinColor }
          clotheColor={ clotheColor }
        />
      </div>
    </div>
  );
};

export default Avatars;