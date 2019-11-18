import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Breadcrumbs, Paper, Link, Typography } from '@material-ui/core';

import WhatshotIcon from '@material-ui/icons/Whatshot'
import GrainIcon from '@material-ui/icons/Grain'
import HomeIcon from '@material-ui/icons/Home'

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1, 2),
    },
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}));


const HeaderComponent = () => {
    const classes = useStyles();

    const handleClick = (event) => {

    };

    return (
        <header>
            <Paper elevation={0} className={classes.root}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
                        <HomeIcon className={classes.icon} />
                        Videos
                    </Link>
                    <Link
                        color="inherit"
                        href="/getting-started/installation/"
                        onClick={handleClick}
                        className={classes.link}>
                        <WhatshotIcon className={classes.icon} />
                        Core
                    </Link>
                    <Typography color="textPrimary" className={classes.link}>
                        <GrainIcon className={classes.icon} />
                        Breadcrumb
                    </Typography>
                </Breadcrumbs>
            </Paper>
        </header>
    );
}

export default HeaderComponent