import React from 'react'
import { Container } from '@mui/material'
function PageContainer({ children }) {
    return (
        <Container maxWidth={false}
            style={{
                paddingInline: 0,
            }}
        >
            {children}
        </Container >
    )
}

export default PageContainer