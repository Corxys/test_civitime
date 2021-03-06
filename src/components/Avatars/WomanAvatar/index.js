import React from 'react';

import './styles.scss';

const WomanAvatar = ({ hair, skin, clothe }) => {
  return (
    <svg version="1.1" id="woman_avatar" className="avatars__src" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 135 135.5">
    <g>
      <path className="st0" d="M67.5,135c37.3,0,67.5-30.2,67.5-67.5C135,30.2,104.8,0,67.5,0C30.2,0,0,30.2,0,67.5
        C0,104.8,30.2,135,67.5,135z"/>
    </g>
    <defs>
      <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="31" y="5" width="73" height="135">
        <feColorMatrix  type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/>
      </filter>
    </defs>
    <mask maskUnits="userSpaceOnUse" x="31" y="5" width="73" height="135" id="mask0_1_">
      <path className="st1" d="M67.5,135c37.3,0,67.5-30.2,67.5-67.5C135,30.2,104.8,0,67.5,0C30.2,0,0,30.2,0,67.5
        C0,104.8,30.2,135,67.5,135z"/>
    </mask>
    <g className="st2">
      <path className="hair" style={{ fill: `#${ hair }` }} d="M99.5,62.8h-64c0,0-10.7,44.7,1,49.6c7,3,12.8-0.9,31-0.9s24,3.8,31,0.9C110.3,107.5,99.5,62.8,99.5,62.8z"/>
      <path className="skin" style={{ fill: `#${ skin }`}} d="M78.3,96.7c-6-3.1-4.9-7.5-4.9-7.5H61.6c0,0,1.1,4.4-4.9,7.5c-7.7,4-15.9,4.6-12.5,42.8c21.3,0,25.1,0,46.5,0
        C94.1,101.3,86,100.7,78.3,96.7z"/>
      <path className="skin" style={{ fill: `#${ skin }`}} d="M67.5,6.7c-2-0.1-29.4-0.6-29.4,33.1c0,40.9,4.3,50.4,29.4,50.4c25.1,0,29.4-9.5,29.4-50.4
        C96.9,6.1,69.6,6.6,67.5,6.7z"/>
      <path className="st5" d="M81.6,50.7c0.7-0.8,2.5-2.9,5.7,0.5"/>
      <path className="st5" d="M53.4,50.7c-0.7-0.8-2.5-2.9-5.7,0.5"/>
      <path className="st5" d="M63,73.1h8.9"/>
      <path className="st6" d="M84.7,55.7c-1,0-1.8,0.8-2.3,1.4c-0.2,0.3-0.2,0.6,0,0.9c0.4,0.5,1.3,1.4,2.3,1.4c1.4,0,2.6-1.8,2.6-1.8
        S86.1,55.7,84.7,55.7z"/>
      <path d="M84.8,59.3c0.8,0,1.4-0.8,1.4-1.8c0-1-0.6-1.8-1.4-1.8c-0.8,0-1.4,0.8-1.4,1.8C83.4,58.5,84,59.3,84.8,59.3z"/>
      <path className="st7" d="M83.9,57.5c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6c-0.3,0-0.6,0.3-0.6,0.6
        C83.3,57.2,83.5,57.5,83.9,57.5z"/>
      <path className="st6" d="M50.2,55.7c1,0,1.8,0.8,2.3,1.4c0.2,0.3,0.2,0.6,0,0.9c-0.4,0.5-1.3,1.4-2.3,1.4c-1.4,0-2.6-1.8-2.6-1.8
        S48.9,55.7,50.2,55.7z"/>
      <path d="M50.1,59.3c0.8,0,1.4-0.8,1.4-1.8c0-1-0.6-1.8-1.4-1.8c-0.8,0-1.4,0.8-1.4,1.8C48.8,58.5,49.4,59.3,50.1,59.3z"/>
      <path className="st7" d="M51.1,57.5c0.3,0,0.6-0.3,0.6-0.6c0-0.3-0.3-0.6-0.6-0.6c-0.3,0-0.6,0.3-0.6,0.6
        C50.5,57.2,50.8,57.5,51.1,57.5z"/>
      <path className="hair" style={{ fill: `#${ hair }` }} d="M66.9,5.5C35.1,0.3,32.5,46.8,35,55.2c1.3,3.7,0.5,7.6,0.5,7.6h3c0,0-0.2-2.4,0.2-3.9c1-3.8,3.5-9.8,9.1-19.4
        c12-20.4,19.5-22.3,18.9-24.6c-0.7-2.2,0.9-7.2,0.9-7.2c1.1,1.8-0.5,6.1,1.8,8.6c22.8,25,26.9,42.8,27,43.2
        c0.1,0.5,0.3,3.2,0.3,3.2h3c0,0,1.4-5.3,1.3-8.9C102.6-3.4,66.9,5.5,66.9,5.5z"/>
      <path className="clothe" style={{ fill: `#${ clothe }`}} d="M78.3,96.7c-0.1,0-0.1-0.1-0.2-0.1c-1.8,3.5-5.9,6-10.7,6c-4.8,0-8.9-2.5-10.7-6c-0.1,0-0.1,0.1-0.2,0.1
        c-7.7,4-15.9,4.6-12.5,42.8c21.3,0,25.1,0,46.5,0C94.1,101.3,85.9,100.7,78.3,96.7z"/>
        <path className="stripes" style={ clothe === '1C3E8E' ? { display: 'block' } : { display: 'none' }} d="M78.6,96.1c-0.1,0-0.1-0.1-0.2-0.1c-0.6,1.2-1.5,2.2-2.6,3.1c2.4-0.2,4.7-0.5,6.9-1
        C81.4,97.4,80,96.8,78.6,96.1z"/>
      <path className="stripes" style={ clothe === '1C3E8E' ? { display: 'block' } : { display: 'none' }} d="M57,96c-0.1,0-0.1,0.1-0.2,0.1c-1.4,0.7-2.8,1.3-4.1,2.1c2.2,0.4,4.5,0.7,6.8,1C58.5,98.2,57.6,97.2,57,96z"/>
      <path className="stripes" style={ clothe === '1C3E8E' ? { display: 'block' } : { display: 'none' }} d="M90,107.3c-0.5-1.5-1-2.7-1.6-3.8c-4.4,1.6-11.3,2.9-20.5,2.9c-9.4,0-16.4-1.4-20.8-3c-0.6,1-1.2,2.3-1.7,3.7
        c5.8,2.2,14.2,3.4,22.5,3.4C76,110.5,84.2,109.4,90,107.3z"/>
      <path className="stripes" style={ clothe === '1C3E8E' ? { display: 'block' } : { display: 'none' }} d="M91.6,117.6c-0.1-1.6-0.2-3-0.4-4.4c-3.9,2.1-11.8,4.2-23.3,4.2c-11.9,0-20-2.2-23.8-4.4
        c-0.2,1.3-0.3,2.8-0.4,4.3c5.8,2.7,15,4.1,24.2,4.1C76.8,121.5,85.8,120.2,91.6,117.6z"/>
      <path className="stripes" style={ clothe === '1C3E8E' ? { display: 'block' } : { display: 'none' }} d="M91.6,128.4c0.1-1.6,0.1-3.2,0.1-4.6c-3.7,2.2-11.8,4.5-24,4.5c-12.5,0-20.8-2.4-24.3-4.7c0,1.5,0,3,0.1,4.7
        c5.8,2.7,15,4.1,24.2,4.1C76.8,132.4,85.8,131.1,91.6,128.4z"/>
      <path className="stripes" style={ clothe === '1C3E8E' ? { display: 'block' } : { display: 'none' }} d="M44,134.9c0.1,1.3,0.2,2.6,0.3,4c6.3,0,11,0,15.1,0C52,138.2,46.8,136.5,44,134.9z"/>
      <path className="stripes" style={ clothe === '1C3E8E' ? { display: 'block' } : { display: 'none' }} d="M90.9,138.9c0.1-1.3,0.2-2.6,0.3-3.8c-2.9,1.5-8,3.1-15.2,3.8C80.1,138.9,84.8,138.9,90.9,138.9z"/>
      <path className="st5" d="M83.3,112.4c-0.4,5-0.9,12.5-1,27.1"/>
      <path className="st5" d="M51.7,112.4c0.4,5,0.9,12.5,1,27.1"/>
      <path className="st5" d="M66.7,56.4c-0.3,2.9-2.1,6.6,0,7c2.1,0.4,4.2,0,4.2,0"/>
      <path className="skin" style={{ fill: `#${ skin }`}} d="M103.3,59c-0.2-2.3-1.3-5-3.7-5.7c-1.3-0.4-2.1,0.3-3.1,0.7c-0.2,4.5-0.5,8.5-1,12
        C99.7,65.9,103.8,64.1,103.3,59z"/>
      <path className="skin" style={{ fill: `#${ skin }`}} d="M38.3,54.1c-0.9-0.5-1.7-1.1-3.1-0.7c-2.3,0.6-3.4,3.3-3.6,5.6c-0.5,5.1,3.6,6.9,7.7,7
        C38.8,62.6,38.5,58.6,38.3,54.1z"/>
    </g>
    </svg>
  );
};

export default WomanAvatar;