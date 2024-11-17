import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'

function SocialAccountCard(props) {


    const { Icon, link, text, bgColor, bgImage } = props;
    return (

        <Grid2
            size={12}
        >
            <Box
                display={'flex'}
                bgcolor={bgColor}
                sx={{
                    backgroundImage: bgImage,
                }}
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'0.5em'}
                p={1}
                height={55}
                className='social-account-card'
            >
                <Icon
                    color='white'

                    className="social-account-card-icon"
                >
                </Icon>

                <Box
                    ml={1}
                    className='social-account-card-text'
                >
                    <Typography
                        variant='body1'
                        fontSize={20}
                        color='white'
                    >
                        {text}
                    </Typography>
                </Box>

            </Box>

            <Box

            >

            </Box>

        </Grid2 >


    )
}

export default SocialAccountCard