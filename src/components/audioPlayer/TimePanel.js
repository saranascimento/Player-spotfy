import React from 'react';

import styled from 'styled-components';
import { GlobalContext } from '../../GlobalContext';

const TimeContainer = styled.div`
        font-size: 8px;
        line-height: 8px;
        padding: 8px 8px 0 8px;
        letter-spacing: 1px;
        font-family: 'Gothic A1', sans-serif;
        display: flex;
        justify-content: flex-end;
    `

const TimePanel = () => {

    const {duration, currentTime} = React.useContext(GlobalContext)
    
    const secondsToMinutes = (time) =>  {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`
      }

    return (
        <>
            <TimeContainer>
                <span>{secondsToMinutes(currentTime)} / {secondsToMinutes(duration)}</span>
            </TimeContainer>
        </>
    )
      
}

export default TimePanel;