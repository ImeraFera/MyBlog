import React from 'react'
import { Container } from '@mui/material'
function PageContainer({ children }) {
    return (
        <Container maxWidth={false}
            sx={{
                m: 0,
                px: 0,
            }}
        >
            {children}
        </Container>
    )
}

export default PageContainer