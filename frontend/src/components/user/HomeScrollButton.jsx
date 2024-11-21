import React from 'react';
import { Box, IconButton } from '@mui/material';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { scrollBottom } from '../../utils/scrollTo';

const HomeScrollButton = () => {

    const controls = useAnimation();

    // Hover'da animasyonu durdurma
    const handleMouseEnter = () => {
        controls.stop();
    };

    const handleMouseLeave = () => {
        controls.start('bounce');
    };

    return (
        <Box
            top={'80%'}
            position={'absolute'}
            className='scroll-button'
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <motion.div
                initial="bounce"
                animate={controls}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                variants={{
                    bounce: {
                        y: [0, -15, 0],
                        transition: {
                            duration: 1,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        },
                    },
                }}
            >
                <IconButton
                    onClick={() => scrollBottom(800)}
                    sx={{ p: 0 }}
                >
                    <FaArrowAltCircleDown
                        size={50}
                    />
                </IconButton>
            </motion.div>
        </Box>
    );
};

export default HomeScrollButton;
