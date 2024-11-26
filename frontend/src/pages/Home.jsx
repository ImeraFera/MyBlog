import { Avatar, Box, Button, CircularProgress, Divider, Grid2, IconButton, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import HomeScrollButton from '../components/user/HomeScrollButton';
import ProjectItem from '../components/user/ProjectItem';
import SocialAccountCard from '../components/user/SocialAccountCard';
import { IoLogoInstagram } from 'react-icons/io';
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoMedium } from "react-icons/io5";
import {
    Swiper, SwiperSlide,

} from 'swiper/react';
import { Autoplay, } from 'swiper/modules'
import 'swiper/css';
import CustomSwiperItem from '../components/user/CustomSwiperItem';
import 'swiper/css/effect-fade'
import { Scrollbars } from 'react-custom-scrollbars-2';
import ReactMarkdown from 'react-markdown';
import { FaLightbulb } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { getRepositories, setTheme } from '../redux/slices/appSlice';
const markdownContent = `
# 👨‍💻 **Ahmet Furkan Sayan**  
Hi there! I'm a passionate **Web Developer** with expertise in building dynamic, scalable, and user-friendly web applications. I enjoy bringing ideas to life through code and collaborating on innovative projects.

---

## 🛠️ **Skills & Technologies**

### **Frontend Development**
- **Languages**: JavaScript, TypeScript, HTML5, CSS3, SCSS  
- **Frameworks & Libraries**: React, Redux, MUI  
- **Tools**: Vite

### **Backend Development**
- **Languages**: Java, JavaScript (Node.js)  
- **Frameworks**: Spring Boot, Express.js  
- **Databases**: PostgreSQL, MySQL, MongoDB, Firebase  

### **Other Tools & Skills**
- Git & GitHub  
- API Development (REST)  

---

## 🌟 **What I Love**
- Crafting clean and reusable code.  
- Exploring new web technologies.  
- Enhancing user experience through intuitive designs.  
- Solving complex problems with simple solutions.  

---

## 📫 **Contact Me**
- **Email**: [ahmet.sayan331@gmail.com](mailto:ahmet.sayan331@gmail.com)  
- **GitHub**: [github.com/imerafera](https://github.com/imerafera)  
- **LinkedIn**: [linkedin.com/in/ahmetfsayan](https://linkedin.com/in/ahmetfsayan)  
- **Portfolio**: [www.yourportfolio.com](https://www.yourportfolio.com)

---

Feel free to check out my GitHub or reach out for collaborations or opportunities!
`;

function Home() {

    const dispatch = useDispatch();
    const status = useSelector(({ app }) => app.status);

    const theme = useSelector(({ app }) => app.theme);

    const handleChangeTheme = () => {
        dispatch(setTheme(!theme));
    }

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getRepositories()).unwrap();
        };
        fetchData();
    }, []);


    const repositories = useSelector(({ app }) => app.repositories);
    return (

        <>
            <Grid2
                container
            >
                <Grid2
                    size={12}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            height: '100vh',
                            justifyContent: 'center',
                            position: 'relative',
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1600 900\'%3E%3Cg transform=\'scale(1, -1) translate(100, -900)\'%3E%3Cpolygon fill=\'%23005bba\' points=\'957 450 539 900 1396 900\'/%3E%3Cpolygon fill=\'%23007dff\' points=\'957 450 872.9 900 1396 900\'/%3E%3Cpolygon fill=\'%23005bba\' points=\'-60 900 398 662 816 900\'/%3E%3Cpolygon fill=\'%23007dff\' points=\'337 900 398 662 816 900\'/%3E%3Cpolygon fill=\'%23005bba\' points=\'1203 546 1552 900 876 900\'/%3E%3Cpolygon fill=\'%23007dff\' points=\'1203 546 1552 900 1162 900\'/%3E%3Cpolygon fill=\'%23005bba\' points=\'641 695 886 900 367 900\'/%3E%3Cpolygon fill=\'%23007dff\' points=\'587 900 641 695 886 900\'/%3E%3Cpolygon fill=\'%23005bba\' points=\'1710 900 1401 632 1096 900\'/%3E%3Cpolygon fill=\'%23007dff\' points=\'1710 900 1401 632 1365 900\'/%3E%3Cpolygon fill=\'%23005bba\' points=\'1210 900 971 687 725 900\'/%3E%3Cpolygon fill=\'%23007dff\' points=\'943 900 1210 900 971 687\'/%3E%3C/g%3E%3C/svg%3E")',
                            backgroundSize: { md: 'fill', lg: 'cover' },
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <Box
                            position={'absolute'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                        >
                            <IconButton
                                onClick={handleChangeTheme}
                            >
                                {!theme ? (
                                    <Box
                                        display={'flex'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        width={{
                                            lg: '1.5em',
                                            md: '1em',
                                            sm: '1em',
                                            xs: '1em',
                                        }}
                                        height={{
                                            lg: '1.5em',
                                            md: '1em',
                                            sm: '1em',
                                            xs: '1em',
                                        }}
                                    >
                                        <FaLightbulb
                                            color='white'
                                        ></FaLightbulb>
                                    </Box>
                                ) : (

                                    <Box
                                        display={'flex'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        width={{
                                            lg: '1.5em',
                                            md: '1em',
                                            sm: '1em',
                                            xs: '1em',
                                        }}
                                        height={{
                                            lg: '1.5em',
                                            md: '1em',
                                            sm: '1em',
                                            xs: '1em',
                                        }}

                                    >
                                        <FaRegLightbulb
                                            color='white'
                                        ></FaRegLightbulb>
                                    </Box>

                                )}
                            </IconButton>

                        </Box>
                        <Box
                            className='home-profile-card'
                        >
                            <Avatar
                                sx={{
                                    width: {
                                        xl: 300,
                                        lg: 150,
                                        md: 100,
                                        sm: 100,
                                        xs: 100
                                    },
                                    height: {
                                        xl: 300,
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
                            color='textPrimary'
                            textAlign={'center'}
                        >
                            My Projects
                        </Typography>
                        <Divider
                            variant='middle'
                        ></Divider>


                        <Scrollbars
                            style={{
                                height: '320px',
                            }}

                            renderThumbVertical={({ style, ...props }) => (
                                <div
                                    {...props}
                                    style={{
                                        ...style,
                                        backgroundColor: 'white',
                                        borderRadius: '4px',
                                        width: '2px',
                                        left: 7
                                    }}
                                />

                            )}
                            autoHide

                        >
                            <Stack
                                px={1}
                                flexWrap={'wrap'}
                                width={'100%'}
                            >
                                <Grid2
                                    container
                                    spacing={1}
                                >
                                    {status === 'loading' ? (
                                        <Box
                                            width={'100%'}
                                            display={'flex'}
                                            justifyContent={'center'}
                                            alignItems={'center'}
                                        >
                                            <CircularProgress
                                                color='primary'
                                            />
                                        </Box>

                                    ) : repositories.map((repository, index) => {
                                        return (
                                            <ProjectItem
                                                name={repository.name}
                                                key={index}
                                                github={{
                                                    link: repository.html_url,
                                                    fullName: repository.full_name,
                                                }}
                                                updatedAt={repository.updated_at}
                                                description={repository.description}
                                                stargazersCount={repository.stargazers_count}
                                                language={repository.language}
                                            ></ProjectItem>
                                        )
                                    })}



                                </Grid2>

                            </Stack>
                        </Scrollbars>

                    </Box>
                </Grid2 >



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
                            color='textPrimary'
                            textAlign={'center'}
                        >
                            Social Accounts
                        </Typography>
                        <Divider
                            variant='middle'

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
                                    link={'https://instagram.com/' + 'user1'}
                                    text='selamknk'
                                    bgImage="linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)"
                                ></SocialAccountCard>
                                <SocialAccountCard
                                    Icon={IoLogoGithub}
                                    link={'https://instagram.com/' + 'user2'}
                                    text='selamknk'
                                    bgColor={'#0D1117'}
                                ></SocialAccountCard>
                                <SocialAccountCard
                                    Icon={IoLogoLinkedin}
                                    link={'https://instagram.com/' + 'user3'}
                                    text='selamknk'
                                    bgColor='#0882BD'
                                ></SocialAccountCard>
                                <SocialAccountCard
                                    Icon={IoLogoMedium}
                                    link={'https://instagram.com/' + 'user4'}
                                    text='selamkndsadsa '
                                    bgColor={'gray'}

                                ></SocialAccountCard>
                            </Grid2>
                        </Stack>
                    </Box>
                </Grid2>
            </Grid2 >

            <Grid2
                container
                spacing={1}
                my={1}
            >
                <Grid2
                    size={12}
                >
                    <Box
                    >
                        <Typography
                            variant='h5'
                            fontWeight={'500'}
                            color='textPrimary'
                            textAlign={'center'}
                        >
                            My Tech Stack
                        </Typography>
                        <Divider
                            variant='middle'

                        ></Divider>
                    </Box>

                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        autoplay={{
                            delay: 2500,
                        }}
                        loop
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            320: {
                                slidesPerView: 1,
                            }
                        }}
                        modules={[Autoplay,]}
                    >
                        <SwiperSlide>
                            <CustomSwiperItem
                                icon={'/img/nodejs-icon.svg'}
                            ></CustomSwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CustomSwiperItem
                                icon={'/img/react-icon.svg'}
                            ></CustomSwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CustomSwiperItem
                                icon={'/img/spring-icon.svg'}
                            ></CustomSwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CustomSwiperItem
                                icon={'/img/mysql-icon.svg'}
                            ></CustomSwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CustomSwiperItem
                                icon={'/img/html-icon.svg'}
                            ></CustomSwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CustomSwiperItem
                                icon={'/img/css-icon.svg'}
                            ></CustomSwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CustomSwiperItem
                                icon={'/img/js-icon.svg'}
                            ></CustomSwiperItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CustomSwiperItem
                                icon={'/img/java-icon.svg'}
                            ></CustomSwiperItem>
                        </SwiperSlide>
                    </Swiper>
                </Grid2>
            </Grid2 >

            <Grid2
                container
                spacing={1}
                p={1}

            >
                <Grid2
                    size={12}
                >
                    <Box>
                        <Typography
                            variant='h5'
                            fontWeight={'500'}
                            color='textPrimary'
                            textAlign={'center'}
                        >
                            About Me
                        </Typography>
                        <Divider
                            variant='middle'

                        ></Divider>

                        <Box
                            p={2}

                        >
                            <Box
                                display={'flex'}
                                alignItems={'center'}
                                justifyContent={'center'}
                                flexDirection={'column'}
                            >

                                <ReactMarkdown

                                >
                                    {markdownContent}
                                </ReactMarkdown>
                            </Box>

                        </Box>
                    </Box>
                </Grid2>
            </Grid2>

        </>
    )
}

export default Home