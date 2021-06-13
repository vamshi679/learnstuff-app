import React from 'react';
import { Card, CardContent, CardMedia, CardActionArea } from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    cardColor: {
        backgroundColor: '#424242',
        color: 'white'
    },
    spacingTop: {
        marginTop: '14px'
    },
    media: {
        height: 135,
        width: '100%',
        backgroundSize: 'contain',
        marginTop: '5px'
    },
    [theme.breakpoints.down('sm')]: {
        media : {
            height:75,
            marginTop: '10px'
        },
        contentadjust:{
            paddingTop:'0px',
            paddingBottom:'0px',
        }
    },
}))

const theme = createMuiTheme({
    typography: {
        fontFamily: 'Poppins'
    }
});

const Coursecard = ({ cardData }) => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.spacingTop}>
                <Card className={classes.cardColor}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={cardData.url}
                            title={cardData.title}
                        />
                        <CardContent className={classes.contentadjust}>
                            <h2 className="center">{cardData.title}</h2>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </ThemeProvider>
    )
}

export default Coursecard;