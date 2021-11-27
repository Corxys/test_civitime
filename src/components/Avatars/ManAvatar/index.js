import React from 'react';

import './styles.scss';

const ManAvatar = ({ hair, skin, clothe }) => {
  return (
    <svg version="1.1" id="man_avatar" className="avatars__src" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 135 136">
    <g>
      <path className="st0" d="M67.5,135c37.3,0,67.5-30.2,67.5-67.5C135,30.2,104.8,0,67.5,0C30.2,0,0,30.2,0,67.5
        C0,104.8,30.2,135,67.5,135z"/>
    </g>
    <defs>
      <filter id="Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x="31.6" y="5.5" width="71.8" height="133.7">
        <feColorMatrix  type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/>
      </filter>
    </defs>
    <mask maskUnits="userSpaceOnUse" x="31.6" y="5.5" width="71.8" height="133.7" id="mask0_1_">
      <path className="st1" d="M67.5,135c37.3,0,67.5-30.2,67.5-67.5C135,30.2,104.8,0,67.5,0C30.2,0,0,30.2,0,67.5
        C0,104.8,30.2,135,67.5,135z"/>
    </mask>
    <g className="st2">
      <path className="skin" style={{ fill: `#${ skin }` }} d="M78.1,96.2c-5.9-3-4.8-7.4-4.8-7.4H61.7c0,0,1.1,4.3-4.8,7.4c-7.6,3.9-15.6,4.5-12.3,42.1c21,0,24.7,0,45.8,0
        C93.7,100.7,85.7,100.1,78.1,96.2z"/>
      <path className="skin" style={{ fill: `#${ skin }` }} d="M67.6,7.7c-2.1-0.1-29-0.6-29,32.5c0,40.2,4.2,49.5,29,49.5c24.7,0,28.9-9.2,28.9-49.5
        C96.5,7.2,69.6,7.6,67.6,7.7z"/>
      <path className="skin" style={{ fill: `#${ skin }` }} d="M81.3,51c0.7-0.8,2.5-2.8,5.6,0.5"/>
      <path className="skin" style={{ fill: `#${ skin }` }} d="M53.7,51c-0.7-0.8-2.5-2.8-5.6,0.5"/>
      <path className="st4" d="M63.2,73h8.6"/>
      <path className="hair" style={{ fill: `#${ hair }` }} d="M97.2,21.6C97.2,21.7,97.2,21.7,97.2,21.6c-0.8-2.4-2.2-4.7-4.1-6.9c-5.2-5.6-13-8.6-20.3-8.7
        C65.1,6,58.2,8.7,51,11c-2.6,0.8-5.4,1.7-8.2,1.6c-1.3,0-2.4-0.3-3.5-0.8c-0.3,0-0.8-0.8-1.1-0.7c-2.3,0.3-4.1,6.6-4.6,8.4
        c-0.7,3.3-0.8,7.6,0.6,10.7c0.1,0.3,0.2,0.5,0.4,0.7c-1,6.1-0.3,18.3,0.9,24.1c0.8-0.4,1.7-0.5,2.6-0.4c0.3,0.1,0.6,0.2,0.9,0.4
        c-0.3-4.3-0.4-9.1-0.4-14.6c0-2,0.1-3.9,0.3-5.7c4.8,1.9,11.6,0.3,16.3,0.3c13.5,0,27.8,7.3,40.8,0.9c0,0.6,0.1,0.7,0.4,0.6
        c0.1,1.3,0.2,2.6,0.2,3.9c0,5.6-0.1,10.6-0.3,15c0.2-0.2,0.4-0.3,0.6-0.4c0.4-0.2,0.9-0.2,1.3-0.2c0.3,0,0.7,0.1,1,0.1
        C101.9,46.5,103.9,28.1,97.2,21.6z"/>
      <path className="skin" style={{ fill: `#${ skin }` }} d="M102.9,59.1c-0.2-2.3-1.3-4.9-3.6-5.6c-1.3-0.4-2.1,0.3-3,0.7c-0.2,4.4-0.5,8.4-1,11.8
        C99.3,65.9,103.2,64.1,102.9,59.1z"/>
      <path className="skin" style={{ fill: `#${ skin }` }} d="M38.8,54.3c-0.9-0.5-1.7-1.1-3-0.7c-2.4,0.7-3.4,3.3-3.6,5.6c-0.5,5,3.5,6.8,7.6,6.9
        C39.3,62.7,39,58.7,38.8,54.3z"/>
      <path className="clothe" style={{ fill: `#${ clothe }` }}d="M78.6,96.1c-0.1,0-0.1-0.1-0.2-0.1c-1.8,3.5-5.9,6-10.7,6c-4.8,0-8.9-2.5-10.7-6c-0.1,0-0.1,0.1-0.2,0.1
        c-7.7,4-15.9,4.6-12.5,42.8c21.4,0,25.2,0,46.6,0C94.5,100.7,86.3,100.1,78.6,96.1z"/>
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
      <path className="st8" d="M51.9,111.8c0.4,5,0.9,12.5,1,27.1"/>
      <path className="st9" d="M79.3,96.5c-0.2-0.1-0.5-0.2-0.7-0.4c-0.1,0-0.1-0.1-0.2-0.1c-1.8,3.5-5.9,6-10.7,6c-4.8,0-8.8-2.5-10.7-5.9
        c-7.7,4-15.9,4.6-12.5,42.8h46.4C94.4,101.9,86.8,100.2,79.3,96.5z"/>
      <path className="st4" d="M83,111.6c-0.4,4.9-0.9,12.3-1,26.6"/>
      <path className="st4" d="M52,111.6c0.4,4.9,0.9,12.3,1,26.6"/>
      <path className="st10" d="M84.5,55.9c-1,0-1.8,0.8-2.3,1.4c-0.2,0.3-0.2,0.6,0,0.9c0.4,0.5,1.3,1.4,2.3,1.4c1.4,0,2.6-1.8,2.6-1.8
        S85.9,55.9,84.5,55.9z"/>
      <path d="M84.6,59.4c0.8,0,1.4-0.8,1.4-1.8s-0.6-1.8-1.4-1.8s-1.4,0.8-1.4,1.8S83.8,59.4,84.6,59.4z"/>
      <path className="st11" d="M83.6,57.7c0.3,0,0.6-0.3,0.6-0.6s-0.3-0.6-0.6-0.6S83,56.7,83,57.1S83.3,57.7,83.6,57.7z"/>
      <path className="st10" d="M50.6,55.9c1,0,1.8,0.8,2.3,1.4c0.2,0.3,0.2,0.6,0,0.9c-0.4,0.5-1.3,1.4-2.3,1.4c-1.4,0-2.6-1.8-2.6-1.8
        S49.1,55.9,50.6,55.9z"/>
      <path d="M50.4,59.4c0.8,0,1.4-0.8,1.4-1.8s-0.6-1.8-1.4-1.8S49,56.7,49,57.7S49.7,59.4,50.4,59.4z"/>
      <path className="st11" d="M51.4,57.7c0.3,0,0.6-0.3,0.6-0.6s-0.3-0.6-0.6-0.6c-0.3,0-0.6,0.3-0.6,0.6S51.1,57.7,51.4,57.7z"/>
      <path className="skin" style={{ fill: `#${ skin }` }} d="M66.8,56.1c-0.3,2.8-2.1,6.5,0,6.9c2.1,0.4,4.1,0,4.1,0"/>
    </g>
    </svg>
  );
};

export default ManAvatar;