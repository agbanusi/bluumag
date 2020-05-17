import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'

function AppBar(props) {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant='h3'>
                    Logo
                </Typography>
            </Toolbar>
        </AppBar>
    )
}