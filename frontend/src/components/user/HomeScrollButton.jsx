import React from 'react';
import { Box, IconButton } from '@mui/material';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { scrollBottom } from '../../utils/scrollTo';

const HomeScrollButton = () => {
    // Animasyon kontrolü için
    const controls = useAnimation();

    // Hover'da animasyonu durdurma
    const handleMouseEnter = () => {
        controls.stop();
    };

    // Hover'dan çıkınca animasyonu başlatma
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
                        y: [0, -15, 0], // Yukarı-aşağı hareket
                        transition: {
                            duration: 1, // Animasyon süresi
                            repeat: Infinity, // Sürekli tekrar
                            ease: 'easeInOut', // Yumuşak geçiş
                        },
                    },
                }}
            >
                <IconButton
                    onClick={() => scrollBottom(100)}
                    sx={{ p: 0 }}
                >
                    <FaArrowAltCircleDown
                        color='white'
                        size={50}
                    />
                </IconButton>
            </motion.div>
        </Box>
    );
};

export default HomeScrollButton;
