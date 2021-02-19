import React from 'react';

import { GlobalContext } from '../../GlobalContext';

import styled from 'styled-components';
import AudioPlayer from '../audioPlayer/AudioPlayer';


const Container = styled.div`
  width: 100%;
  height: 18rem;
  background-color: #2e3738;
  color: #e3e3df;
  border-top: 1px solid #1a1a1b; 
  position: relative;
`

const BodyBottom = styled.div`
  padding-right: 8px;
`

const BottomList = styled.ul`
  overflow: auto;
  height: 11rem;
  padding-left: 1rem;
  padding-right: 1rem;

  &::-webkit-scrollbar {
    width: 3px;              
  }
  
  &::-webkit-scrollbar-track {
    background: #1f272a;
    height: 29px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #000000;
    border-radius: 40px;
  }
`
const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid #1f272a;
  font-size: 0.8rem;
  font-family: 'Gothic A1', sans-serif;
`

const NameItem = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: auto;
  cursor: pointer;
  line-height: 1.6rem;
`

const DurationItem = styled.span`
  margin-left: 4rem;
`

const CardBody = () => {
  const {
    tracks,
    setCurrentTrack,
  } = React.useContext(GlobalContext);

  function convertsTimeTrack(millisec) {
    if(!millisec) return `00:00`

    var seconds = (millisec / 1000).toFixed(0);
    var minutes = Math.floor(seconds / 60);
    var hours = '';

    if (minutes > 59) {
      hours = Math.floor(minutes / 60);
      hours = hours >= 10 ? hours : '0' + hours;
      minutes = minutes - hours * 60;
      minutes = minutes >= 10 ? minutes : '0' + minutes;
    }

    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : '0' + seconds;

    if (hours !== '') {
      return `${hours}:${minutes}:${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }


  return (
    <Container >
     <AudioPlayer />
      <BodyBottom >
        <BottomList>
          {tracks &&
            tracks.map((track) => {
              return (
                <ListItem onClick={() => setCurrentTrack(track) } key={track.track.id}>
                  <NameItem>{track.track.name}</NameItem>{' '}
                  <DurationItem>{convertsTimeTrack(track.track.duration_ms)}</DurationItem>
                </ListItem>
              );
            })}
        </BottomList>
      </BodyBottom>
    </Container>
  );
};

export default CardBody;
