import { Avatar, Box, Button, Divider, Grid2, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { FaArrowAltCircleDown } from "react-icons/fa";
import { scrollBottom } from '../utils/scrollTo';
import { motion } from 'framer-motion';
import HomeScrollButton from '../components/user/HomeScrollButton';
import { FaFolderOpen } from "react-icons/fa";
import ProjectItem from '../components/user/ProjectItem';
import SocialAccountCard from '../components/user/SocialAccountCard';
import { IoLogoInstagram } from 'react-icons/io';
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoMedium } from "react-icons/io5";

function Home() {
    return (

        <>
            <Grid2
                container
                my={1}
            >
                <Grid2
                    size={12}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            height: '100vh',
                            justifyContent: 'center',
                            position: 'relative',
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1600 900\'%3E%3Cg transform=\'scale(1, -1) translate(0, -900)\'%3E%3Cpolygon fill=\'%23005bba\' points=\'957 450 539 900 1396 900\'/%3E%3Cpolygon fill=\'%23007dff\' points=\'957 450 872.9 900 1396 900\'/%3E%3Cpolygon fill=\'%23005bba\' points=\'-60 900 398 662 816 900\'/%3E%3Cpolygon fill=\'%23007dff\' points=\'337 900 398 662 816 900\'/%3E%3Cpolygon fill=\'%23005bba\' points=\'1203 546 1552 900 876 900\'/%3E%3Cpolygon fill=\'%23007dff\' points=\'1203 546 1552 900 1162 900\'/%3E%3Cpolygon fill=\'%23005bba\' points=\'641 695 886 900 367 900\'/%3E%3Cpolygon fill=\'%23007dff\' points=\'587 900 641 695 886 900\'/%3E%3Cpolygon fill=\'%23005bba\' points=\'1710 900 1401 632 1096 900\'/%3E%3Cpolygon fill=\'%23007dff\' points=\'1710 900 1401 632 1365 900\'/%3E%3Cpolygon fill=\'%23005bba\' points=\'1210 900 971 687 725 900\'/%3E%3Cpolygon fill=\'%23007dff\' points=\'943 900 1210 900 971 687\'/%3E%3C/g%3E%3C/svg%3E")',
                            backgroundSize: 'fill',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <Box
                            className='home-profile-card'
                        >
                            <Avatar
                                sx={{
                                    width: {
                                        lg: 150,
                                        md: 100,
                                        sm: 100,
                                        xs: 100
                                    },
                                    height: {
                                        lg: 150,
                                        md: 100,
                                        sm: 100,
                                        xs: 100
                                    },
                                }}
                            ></Avatar>

                            <Box
                                mt={2}
                            >
                                <Typography
                                    variant='h5'
                                    color='textPrimary'
                                >
                                    Ahmet Furkan Sayan
                                </Typography>
                                <Typography
                                    textAlign={'center'}
                                    variant='body1'
                                    color='textPrimary'
                                >
                                    Full Stack Web Developer
                                </Typography>
                            </Box>

                        </Box>
                        <HomeScrollButton></HomeScrollButton>
                    </Box>

                </Grid2>

            </Grid2>

            <Grid2
                container
                my={1}
                spacing={1}

            >
                <Grid2
                    size={{
                        lg: 9,
                        md: 9,
                        xs: 12,
                        sm: 12,
                    }}
                    p={1}
                >
                    <Box>
                        <Typography
                            variant='h5'
                            fontWeight={'500'}
                            color='white'
                            textAlign={'center'}
                        >
                            My Projects
                        </Typography>
                        <Divider
                            variant='middle'
                            sx={{
                                bgcolor: 'white',
                                my: 1,
                            }}
                        ></Divider>

                        <Stack
                            px={1}
                            my={2}

                        >
                            <Grid2
                                container
                                spacing={1}
                                flexDirection={'row'}
                            >

                                <ProjectItem ></ProjectItem>
                                <ProjectItem ></ProjectItem>
                                <ProjectItem ></ProjectItem>

                            </Grid2>
                        </Stack>
                    </Box>
                </Grid2>
                <Grid2
                    size={{
                        lg: 3,
                        md: 3,
                        xs: 12,
                        sm: 12,
                    }}
                    p={1}
                >
                    <Box>
                        <Typography
                            variant='h5'
                            fontWeight={'500'}
                            color='white'
                            textAlign={'center'}
                        >
                            Social Accounts
                        </Typography>
                        <Divider
                            variant='middle'
                            sx={{
                                bgcolor: 'white',
                                my: 1,
                            }}
                        ></Divider>

                        <Stack
                            px={1}
                            my={2}

                        >
                            <Grid2
                                container
                                spacing={1}
                                flexDirection={'row'}
                            >

                                <SocialAccountCard
                                    Icon={IoLogoInstagram}
                                    text='selamknk'
                                    bgImage="linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)"
                                ></SocialAccountCard>
                                <SocialAccountCard
                                    Icon={IoLogoGithub}
                                    text='selamknk'
                                    bgColor={'#0D1117'}
                                ></SocialAccountCard>
                                <SocialAccountCard
                                    Icon={IoLogoLinkedin}
                                    text='selamknk'
                                    bgColor='#0882BD'
                                ></SocialAccountCard>
                                <SocialAccountCard
                                    Icon={IoLogoMedium}
                                    text='selamkndsadsa '
                                    bgColor={'gray'}

                                ></SocialAccountCard>
                            </Grid2>
                        </Stack>
                    </Box>
                </Grid2>
            </Grid2 >

        </>
    )
}

export default Home