import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import HeaderComponent from '../../components/HeaderComponent'
import axios from "axios";

import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignIn = (props) => {
    const classes = useStyles();
    let history = useHistory();

    const [credentials, setCredential] = React.useState({
        email: '',
        password: ''
    });

    const handleSubmit = () => {
        console.log('armaria');
        axios.post('/api/auth/login/', credentials)
            .then((response) => {
                props.onLoginSuccess({
                    email: credentials.email,
                    auth_token: response.data.key
                });
                history.push('/videos');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const emailChangeHandler = (e) => {
        setCredential({
            email: e.target.value,
            password: credentials.password
        });
    }

    const passwordChangeHandler = (e) => {
        setCredential({
            email: credentials.email,
            password: e.target.value
        });
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <HeaderComponent></HeaderComponent>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={credentials.email}
                        onChange={emailChangeHandler}
                        autoComplete="email"
                        autoFocus />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        value={credentials.password}
                        onChange={passwordChangeHandler}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password" />
                    {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me" /> */}
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={() => { handleSubmit(); return false; }}
                        className={classes.submit}>
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            {/* <Link href="#" variant="body2">
                                Forgot password?
                            </Link> */}
                        </Grid>
                        <Grid item>
                            <Link href="/join" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

const stateProps = state => {
    return {
        user: state.user,
    }
};

const dispatchProps = dispatch => {
    return {
        onLoginSuccess: (payload) => dispatch({
            type: actions.LOGIN,
            payload: payload
        }),
    }
};

export default connect(stateProps, dispatchProps)(SignIn);