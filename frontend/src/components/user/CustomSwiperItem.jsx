import { Box } from '@mui/material';
import React from 'react'
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

function CustomSwiperItem(props) {

    const { icon, experience } = props;
    return (
        <SwiperSlide>
            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <img src={icon}
                    width={100}
                    alt="" />
            </Box>
        </SwiperSlide>

    )
}

export default CustomSwiperItem