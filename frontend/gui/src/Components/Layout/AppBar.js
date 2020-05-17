import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'

function MenuAppBar(props) {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h3'>
                    Logo
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default MenuAppBar;