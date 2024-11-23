import { Box, Grid2, Link, List, ListItem, Stack, Typography } from '@mui/material'
import React from 'react'
import { FaFolderOpen } from 'react-icons/fa'

function ProjectItem(props) {


    const { description, github, language, stargazersCount, name, updatedAt } = props;

    return (


        <Grid2
            size={{
                lg: 6,
                md: 6,
                sm: 12,
                xs: 12,
            }}
            bgcolor={'#313131'}
            borderRadius={'0.5em'}
            className='project-item'
        >
            <Grid2
                container
                height={'100%'}
                width={'100%'}
                p={1}
            >

                <Grid2
                    size={12}
                    display={'flex'}

                >
                    <Grid2
                        size={12}
                    >
                        <Box
                            display={'flex'}
                            flexDirection={'row'}
                            justifyContent={'space-between'}
                            width={'100%'}
                            alignItems={'center'}
                        >
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                            >
                                <Box
                                    display={{
                                        xs: 'none',
                                        md: 'flex',
                                        lg: 'flex',
                                    }}
                                    mr={{
                                        xs: 0,
                                        md: 1,
                                        lg: 1,
                                    }}
                                >
                                    <FaFolderOpen color={'white'}
                                    />
                                </Box>
                                <Typography
                                    color='white'
                                    variant="body1"
                                    fontWeight={'bold'}
                                    sx={{
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                        width: {
                                            xs: '177px',
                                            lg: '320px',
                                        },
                                    }}
                                >
                                    {name}
                                </Typography>
                            </Box>

                            <Typography
                                textOverflow={'ellipsis'}
                                color='white'
                                variant='caption'
                                component={'span'}
                            >
                                {updatedAt.split('T')[0]}
                            </Typography>


                        </Box>

                        <Box
                            display={'flex'}
                            p={1}
                        >
                            <Stack
                                spacing={1}
                            >
                                <Box>
                                    <Typography
                                        variant='body2'
                                        fontWeight={'bold'}
                                        color='white'
                                    >
                                        Description:
                                        <Typography
                                            variant='body2'
                                            color='white'
                                            component={'span'}
                                        >
                                            {description}
                                        </Typography>
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        variant='body2'
                                        color='white'
                                        fontWeight={'bold'}
                                    >
                                        Github: {' '}
                                        <Typography
                                            variant='body2'
                                            component={'a'}
                                            color='white'
                                            href={github.link}
                                        >
                                            {github.fullName}
                                        </Typography>
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        variant='body2'
                                        color='white'
                                        fontWeight={'bold'}
                                    >
                                        Stars: {' '}
                                        <Typography
                                            variant='body2'
                                            color='white'
                                            component={'span'}
                                        >
                                            {stargazersCount}
                                        </Typography>
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography
                                        variant='body2'
                                        color='white'
                                        fontWeight={'bold'}
                                    >
                                        Language: {' '}
                                        <Typography
                                            variant='body2'
                                            color='white'
                                            component={'span'}
                                        >
                                            {language}
                                        </Typography>
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