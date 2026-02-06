import React from 'react';
import { Card, CardContent, CardMedia, CardActionArea, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins'
    }
});

const Coursecard = ({ cardData }) => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ marginTop: '14px' }}>
                <Card sx={{ backgroundColor: '#424242', color: 'white' }}>
                    <CardActionArea>
                        <CardMedia
                            sx={{ 
                                height: { xs: 75, sm: 135 },
                                width: '100%',
                                backgroundSize: 'contain',
                                marginTop: { xs: '10px', sm: '5px' }
                            }}
                            image={cardData.url}
                            title={cardData.title}
                        />
                        <CardContent sx={{ 
                            paddingTop: { xs: '0px' }, 
                            paddingBottom: { xs: '0px' } 
                        }}>
                            <h2 className="center">{cardData.title}</h2>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </ThemeProvider>
    )
}

export default Coursecard;