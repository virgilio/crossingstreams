import React from 'react';
import axios from 'axios';
import OptionEditor from './OptionsEditor';
import TimeChooser from './TimeChooser';

const ActivityEditor = (props) => {
    const [activityState, setActivityState] = React.useState({
        activity: {
            id: undefined,
            activity_text: '',
            prompt_time: 0,
            activity_type: 'question',
            video: props.video.id,
            options: []
        },
    });

    const [ptime, setPTime] = React.useState(0);

    const saveActivityHandler = (event) => {
        if (!activityState.activity.id) {
            axios.post('/api/activity/', activityState.activity)
                .then(res => props.onActivityChange(activityState.activity))
                .catch(err => console.log(err));
        } else {
            axios.put(`/api/activity/${activityState.activity.id}`, activityState.activity)
                .then(res => {
                    setActivityState({
                        ...activityState,
                        activity: res.data,
                    }, (activityState) => props.onActivityChange(activityState.activity));

                })
                .catch(err => console.log(err));
        }
    }

    const timeChooserHandler = (event) => {
        let activity = props.video.activities
            .filter((a) => a.prompt_time === Number(event.target.value))
            .shift();
        if (!activity) {
            setActivityState({
                activity: {
                    ...activityState.activity,
                    id: undefined,
                    activity_text: '',
                    prompt_time: Number(event.target.value),
                    options: []
                },
            });
        } else {
            setActivityState({
                ...activityState,
                activity: activity
            });
        }
    }

    const activityTextHandler = (event) => {
        setActivityState({
            ...activityState,
            activity: {
                ...activityState.activity,
                activity_text: event.target.value
            }
        });
    }

    const optionChangeHandler = (newOption) => {
        let option = activityState.options
            .filter((o) => o.id === newOption.id)
            .shift();
        let options = option ?
            [...activityState.options.filter(o => o.id !== newOption.id)] :
            [...activityState.options];
        setActivityState({
            ...activityState,
            activity: {
                ...activityState.activity,
                options: [
                    ...options,
                    newOption
                ]
            }
        }, (activityState) => props.onActivityChange(activityState.activity));
    }

    return (
        <div>
            <hr />
            <label htmlFor="inputQuestionTime">Choose a time! <span className="badge badge-secondary">{ptime} s</span></label>
            <TimeChooser onChange={(e) => setPTime(Number(e.target.value))}
                onTimeChose={timeChooserHandler}
                duration={props.video.duration} />
            <hr />
            <h5>{activityState.activity.id ? "Edit" : "Create new"} Activity</h5>
            <div className={`card alpha-0.5 ${!activityState.activity.id ? "bg-light" : "bg-warning"}`}>
                <form>
                    <div className="card-body">
                        <div className="form-row">
                            <div className="form-group col-md-8">
                                <label htmlFor="inputQuestionTitle">Write here a question or a call to action!</label>
                                <input type="text" onChange={activityTextHandler}
                                    value={activityState.activity ? activityState.activity.activity_text : ''} className="form-control"
                                    id="inputQuestion" placeholder="Activity Text" />
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlFor="inputQuestionTime">Time</label>
                                <input type="number" readOnly value={activityState.activity.prompt_time}
                                    className="form-control" id="inputTime" placeholder="Time" />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        {/* <button type="button" onClick={deleteActivityHandler}
                            className="btn btn-sm btn-danger float-right">Delete</button> */}
                        <button disabled={activityState.activity.activity_text === ''}
                            type="button" onClick={saveActivityHandler}
                            className="btn btn-sm btn-success ">Save</button>
                    </div>
                </form>
            </div>
            <hr />
            <h4>Options</h4>
            <div>
                <ul className="list-group">
                    {activityState.activity.options.map(q => (
                        <OptionEditor
                            onOptionChange={optionChangeHandler}
                            activity={activityState.activity} video={props.video}
                            key={`${q.id}`}
                            q={q} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ActivityEditor;