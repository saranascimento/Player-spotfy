import React from 'react';

import { FaRandom } from 'react-icons/fa';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { FaInfinity } from 'react-icons/fa';

import styled from 'styled-components';
import { GlobalContext } from '../../GlobalContext';


const Controls = styled.div`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const WrapperIcon = styled.span`
    border: 1px solid #307ebb9e;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    color: white;
    cursor: pointer;

    &:not(:last-child) {
        margin-right: 16px;
    }

    &:hover {
      background: #307ebb1a;
    }
`

const ControlsPanel = () => {
  const {isPlaying, setIsPlaying, tracks, setCurrentTrack, audioRef, setTracks,  play, pause } = React.useContext(GlobalContext)
  
  const [count, setCount] = React.useState(0);


  const next = () => {
    setCount((count) => count +1);
    if(count === tracks.length -1) {
      setCount(count)
      return
    } else {
      setCurrentTrack(tracks[count +1])
    }
    setIsPlaying(true);
  }
  
  React.useEffect(() => {
    const audio = audioRef.current;
    if(audio.ended) {
      next();
    } 
  })

  const previous = () => {
    setCount((count) => count -1);

    if(count === 0) {
      setCount(0)
      setCurrentTrack(tracks[0])
      
      return
    } else {
      setCurrentTrack(tracks[count])
    }
    setIsPlaying(true);
  }
  const [ isActive, setIsActive ] = React.useState(false)
  
  const loop = () => {
    const audio = audioRef.current;
    if(isActive) {
      audio.loop = false;
    } else {
      audio.loop = true;
    }
    setIsActive(!isActive) 
  }

  const shuffle = (tracks) => {
    let shuffledTracks = null;

    if(tracks) shuffledTracks = tracks.sort((a,b) => 0.5 - Math.random())
    setTracks(shuffledTracks)
    
  }

    return (
      <Controls>
        <WrapperIcon  
          title="embaralhar" 
          onClick={() => shuffle(tracks)}>
            <FaRandom />
        </WrapperIcon>

        <WrapperIcon 
          title="Anterior" 
          onClick={() => previous()}>
            <FaAngleDoubleLeft />
        </WrapperIcon>

        <WrapperIcon  
          >
            {isPlaying 
              ?  <FaPause 
                    onClick={() => pause()} 
                    title="Pausar" />
              : <FaPlay  
                  onClick={() => play()} 
                  style={{paddingLeft: "4px"}} 
                  title="Começar"/> 
            }
        </WrapperIcon>

        <WrapperIcon  
          title="próximo" 
          onClick={() => next() }>
            <FaAngleDoubleRight />
        </WrapperIcon>

        <WrapperIcon 
          title="Infinito" 
          onClick={() => loop() }
          >
            <FaInfinity  
              color={isActive ? '#307ebb' : 'white'}
              />
        </WrapperIcon>
      </Controls>
    )
}

export default ControlsPanel;