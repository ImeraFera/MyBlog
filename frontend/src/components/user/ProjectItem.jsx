import { Box, Grid2, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { FaFolderOpen } from 'react-icons/fa'

function ProjectItem(props) {
    return (

        <Grid2
            size={{
                lg: 6,
                md: 6,
                sm: 12,
                xs: 12,
            }}
        >
            <Grid2
                container
                sx={{
                    bgcolor: '#313131',
                    borderRadius: '0.5em',
                    border: '1em'
                }}
                className='project-item'
                p={1}

            >
                <Grid2
                    size={{
                        lg: 2,
                        md: 2,
                        sm: 0,
                        xs: 0,
                    }}
                >
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        width={'100%'}
                        height={'100%'}
                    >
                        <FaFolderOpen
                            color='white'
                            size={25}
                        ></FaFolderOpen>
                    </Box>
                </Grid2>
                <Grid2
                    size={{
                        lg: 10,
                        md: 10,
                        sm: 12,
                        xs: 12,
                    }}
                >
                    <Grid2
                        size={12}
                    >
                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            width={'100%'}
                            justifyContent={'space-between'}
                        >
                            <Typography
                                variant='h6'
                                color='white'
                                fontWeight={300}
                            >
                                Project Name
                            </Typography>
                            <Typography
                                variant='caption'
                                color='white'
                            >
                                12/03/2009
                            </Typography>
                        </Box>
                    </Grid2>
                    <Grid2
                        size={12}
                    >
                        <Box
                            display={'flex'}
                        >
                            <Stack
                                spacing={1}
                            >
                                <Box>
                                    <Typography
                                        variant='body2'
                                        color='white'
                                    >
                                        Status: Finished
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        variant='body2'
                                        color='white'
                                    >
                                        Languages:
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        variant='body2'
                                        color='white'
                                    >
                                        Keywords:
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        variant='body2'
                                        color='white'
                                    >
                                        Github: <Link
                                            href='a'
                                        >
                                            Github Repo Name
                                        </Link>
                                    </Typography>
                                </Box>

                            </Stack>
                        </Box>
                    </Grid2>

                </Grid2>

            </Grid2>
        </Grid2>

    )
}

export default ProjectItem