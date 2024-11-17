import { Box, Typography } from '@mui/material'
import React from 'react'

function Footer() {
    return (


        <footer>
            <Box
                display="flex"

                m={2} justifyContent={'center'}
            >
                <Typography
                    variant='body1'
                    color='white'
                >
                    All rights reserved by Ahmet Furkan Sayan
                </Typography>
            </Box>

        </footer>
    )
}

export default Footer