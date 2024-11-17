import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { IoIosMenu } from "react-icons/io";
function Navbar() {
    return (
        <>
            {/* <AppBar
                position={'relative'}
                component={'div'}
                sx={{
                    width: {
                        lg: '95%',
                        md: '100%',
                        sm: '100%',
                        xs: '100%',
                    },
                    justifySelf: 'center',
                    borderRadius: '10px',
                    mt: {
                        lg: 2,
                        md: 0,
                        sm: 0,
                        xs: 0,
                    },
                    bgcolor: 'transparent',
                }}
            >

                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                    >
                        <IoIosMenu />
                    </IconButton>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >


                    </Box>

                </Toolbar>
            </AppBar> */}
        </>
    )
}

export default Navbar