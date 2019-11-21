import React from 'react';

const TimeChooser = (props) => (
    <input id="rangeSlider" onChange={props.onChange} onMouseUp={props.onTimeChose} start="0"
        type="range" className="custom-range" min="0" max={`${props.duration}`} step="1" />
);

export default TimeChooser;


