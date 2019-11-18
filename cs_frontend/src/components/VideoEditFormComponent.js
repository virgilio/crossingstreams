import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { FormGroup, FormControl, InputLabel, Select, MenuItem, Input, FormHelperText, Paper, Button, Card, CardContent } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const VideoAction = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = event => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return <div>
        <FormGroup>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Type</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={age}
                    onChange={handleChange} >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Quiz</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Time</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Question</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
            <Paper style={{ background: "#eee" }}>
                <Button>
                    New Option
                </Button>
                <Card>
                    <CardContent>
                        <h4>Option 1</h4>
                        <p>Action: <span>Go to</span> <span>VideoID X</span></p>
                        <Button>Edit</Button>
                    </CardContent>
                </Card>
            </Paper>
        </FormGroup>
    </div>
};

export default VideoAction;
