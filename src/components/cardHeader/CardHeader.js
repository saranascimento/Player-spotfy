import React from 'react';


import { GlobalContext } from '../../GlobalContext';
import TopBar from './TopBar';

import styled from 'styled-components';

const CardHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1f272a;
  height: 18rem;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  border-bottom: 1px solid #1a1a1b;
`;

const ImageWrapper = styled.div`
  width: 8rem;
  height: 8rem;
  margin-bottom: 16px;
  margin-top: 16px;
  background: chocolate;
  filter: drop-shadow(0 0 36.5px #000000);

  img {
    height: 100%;
    width: 100%;
  }
`;

const ImageDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Gothic A1', sans-serif;

  p {
    font-size: 12px;
    color: #a8a7a7;
    margin-top: 4px;
  }
`;

const Header = () => {
  const { currentTrack } = React.useContext(GlobalContext);

  return (
    <CardHeaderWrapper>
      <TopBar />

      {currentTrack && (
        <>
          <ImageWrapper>
            <img src={currentTrack.track.album.images[1].url} alt="album" />
          </ImageWrapper>

          <ImageDescription>
            <h4>{currentTrack.track.album.artists[0].name} </h4>
            <p>{currentTrack.track.name}</p>
          </ImageDescription>
        </>
      )}
    </CardHeaderWrapper>
  );
};

export default Header;
