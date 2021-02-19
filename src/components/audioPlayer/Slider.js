import React from 'react';

import { GlobalContext } from '../../GlobalContext';
import styled from 'styled-components';

const SliderWrapper = styled.div`
    width: 100%;    
    --progress-bar-height: 4px;
    transform: translate(0, -50%);
    --thumb-width: 6px;
    --thumb-height: 6px;
    position: absolute;
    z-index: 2;

    &:before {
        content: '';
        background-color: gray;
        width: 100%;
        height: calc(var(--progress-bar-height) - 1px);
        position: absolute;
        border-radius: 10px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        opacity: 1;
    }
`;

const Range = styled.input`
    -webkit-appearance: none;
    background-color: rgba(49, 214, 8, 0.644);
    height: 10px;
    width: 100%;
    cursor: pointer;
    opacity: 0;
    margin: 0 auto;
    outline: none;

    &:-webkit-slider-thumb {
        -webkit-appearance: none;
        width: var(--thumb-width);
        height: var(--thumb-height);
    
        background-color: #0097ff;
        border-radius: 50%;
        cursor: pointer;
`;

const ProgressBarCover = styled.div`
    background: linear-gradient( 90deg, rgba(9,85,121,1) 38%, rgba(58,95,172,1) 57%, rgba(0,151,255,1) 92%);
    width: 100%;
    height: var(--progress-bar-height);
    position: absolute;
    border-radius: 10px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    user-select: none;
    pointer-events: none;
`;

const Thumb = styled.div`
    width: var(--thumb-width);
    height: var(--thumb-height);
    box-shadow: 0 0 2px 1px #0097ff;
    z-index: 3;
    background-color: #0097ff;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    transform: translate(0%, -50%);
    pointer-events: none;
    user-select: none;
`;

function Slider() {
    const [position, setPosition] = React.useState(0);
    const [marginLeft, setMarginLeft] = React.useState(0);
    const [progressBarWidth, setProgressBarWidth] = React.useState(0);

    const { audioRef, setPercentage, percentage} = React.useContext(GlobalContext)

    const onChange = (event) => {
        const audio = audioRef.current
        audio.currentTime = (audio.duration / 100) * event.target.value
        setPercentage(event.target.value);
    }

    const rangeRef = React.useRef();
    const thumbRef = React.useRef();
    React.useEffect(() => {
       
        const rangeWidth = rangeRef.current.getBoundingClientRect().width;
        const thumbWidth = thumbRef.current.getBoundingClientRect().width;
        const centerThumb = (thumbWidth / 100) * percentage * -1;
        const centerProgressBar = thumbWidth + (rangeWidth /100) * percentage - (thumbWidth/100 * percentage);
        
        setPosition(percentage);
        setMarginLeft(centerThumb);
        setProgressBarWidth(centerProgressBar)
    }, [percentage]);

    return (
        <SliderWrapper >
            <ProgressBarCover  
                style={{
                width: `${progressBarWidth}px`
            }}>
            </ProgressBarCover>

            <Thumb 
                ref={thumbRef} style={{
                left: `${position}%`,
                marginLeft: `${marginLeft}px`
            }}>
            </Thumb>

            <Range 
                type='range' 
                value={position}
                step='0.01' 
                ref={rangeRef} 
                className='range' 
                onChange={onChange}
            />
        </SliderWrapper>
    )
}

export default Slider;