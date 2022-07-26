import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#fff3f4">
            <Stack gap="40px" alignItems="center" px="40px" pt="24px">
                <Typography sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center">
                    Have fun working out!
                </Typography>
                <Typography sx={{ fontSize: { lg: '28px', xs: '20px' } }} textAlign="center" pb="40px">
                    By Hakyung (Peter) Yun
                </Typography>
            </Stack>
        </Box>
    )
}

export default Footer
