import React from 'react';
import axios from 'axios';

const OptionEditor = (props) => {
    const [optionState, setOptionState] = React.useState({
        option: {
            option_text: '',
            action: '',
            jump_to_video: '',
            jump_to_time: 0,
            activity: props.activity.id,
        }
    });

    const saveOptionHandler = (event) => { };

    const optionTextHandler = (event) => { };

    const actionSelectedHandler = (event) => { };

    const changeVideoTextHandler = (event) => { };

    const timeJumpToTimeHandler = (event) => { };

    return (
        <div className="list-group-item list-group-item-action">
            <div className={`card alpha-0.5 ${!optionState.option.id ? "bg-light" : "bg-warning"}`}>
                <form>
                    <div className="card-body">
                    <div className="form-group row">
                        <div className="form-group col-md-10">
                            <label htmlFor="inputOptionTitle">Option text to be choose</label>
                            <input type="text" onChange={optionTextHandler}
                                value={optionState.option ? optionState.option.option_text : ''} className="form-control"
                                id="inputOptionTitle" placeholder="Option Text" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="optionAction">Select an Action if option choose</label>
                            <select className="form-control" id="optionAction" onSelect={actionSelectedHandler}>
                                <option value="continue">Continue the Video</option>
                                <option value="change_video">Go to another Video</option>
                                <option value="jump_to">Jump to Time</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputChangeVideo">Video</label>
                            <input type="text" onChange={changeVideoTextHandler}
                                value={optionState.option ? optionState.option.jump_to_video : ''} className="form-control"
                                id="inputChangeVideo" placeholder="Youtube Video ID.. it's right after the v= in the url" />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputJumpToTime">Time</label>
                            <input type="number" value={optionState.option.jump_to_time}
                                onChange={timeJumpToTimeHandler} className="form-control"
                                id="inputJumpToTime" placeholder="Jump to Time" />
                        </div>
                    </div>
                    </div>
                    <div className="card-footer">
                        {/* <button type="button" onClick={deleteOptionHandler}
                            className="btn btn-sm btn-danger float-right">Delete</button> */}
                        <button disabled={optionState.option.option_text === ''}
                            type="button" onClick={saveOptionHandler}
                            className="btn btn-sm btn-success ">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OptionEditor;
