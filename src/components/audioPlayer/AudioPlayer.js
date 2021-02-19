import React from 'react';
import ControlsPanel from './ControlsPanel';
import TimePanel from './TimePanel';
import { GlobalContext } from '../../GlobalContext';
import Slider from './Slider';

const AudioPlayer = () => {

    const {audioRef, setCurrentTime, setPercentage, setDuration} = React.useContext(GlobalContext)

    const getCurrDuration = (event) => {
      const percent = ((event.currentTarget.currentTime / event.currentTarget.duration) * 100).toFixed(2)
      const time = event.currentTarget.currentTime;
      if(!+percent) {
        return
      }

      setPercentage(+percent)
      setCurrentTime(time.toFixed(2))
    }

    return (
      <>
        <audio ref={audioRef} 
          onLoadedData={(event) => {
          setDuration(event.currentTarget.duration.toFixed(2))
        }}
        onTimeUpdate={getCurrDuration}   >
      </audio>
      <Slider  />
      <TimePanel />
      <ControlsPanel />
      </>
    )
}

export default AudioPlayer;