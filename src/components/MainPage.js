import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Footer from "./Footer";

const MainPage = () => {

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h2 style={{margin: "40px"}}>Reading Tracker - Stay on Top of Your Reading Goals</h2>
            <Typography gutterBottom variant="subtitle1" component="div" m={2}>
                Our website is designed to help you keep track of your reading progress effortlessly.
                Easily log your daily reading sessions, record important details such as reading time and number of pages,
                and gain valuable insights into your reading habits. Whether you're a book enthusiast, a student, or
                simply aiming to read more, our app is here to support your reading journey.
            </Typography>

            <Typography gutterBottom variant="subtitle2" component="div" m={2}>
                Ready to get started? Create your account now and unlock the full potential of our reading tracker.
                Sign up today and embark on a personalized reading experience like never before.
            </Typography>
            <div style={{display: "flex", gap: "30px", justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
                <Card sx={{maxWidth: 345, backgroundColor: '#ba8fcc'}}>
                        <CardMedia
                            component="img"
                            height="140"
                            image='/books.jpg'
                            alt="books"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="white">
                                Daily reading
                            </Typography>
                            <Typography variant="body2" color="white">
                                With us you are able to track your reading habits. Capture details and monitor your
                                progress.
                            </Typography>
                        </CardContent>
                </Card>
                <Card sx={{maxWidth: 345, backgroundColor: '#ba8fcc'}}>
                        <CardMedia
                            component="img"
                            height="140"
                            image='/analitics.jpg'
                            alt="books"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="white">
                                Let's start
                            </Typography>
                            <Typography variant="body2" color="white">
                                Sign in and effortlessly record your reading statistics to improve your reading habits.
                            </Typography>
                        </CardContent>
                </Card>
                <Card sx={{maxWidth: 345, backgroundColor: '#ba8fcc'}}>
                        <CardMedia
                            component="img"
                            height="140"
                            image='/time.jpg'
                            alt="books"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="white">
                                Work with us
                            </Typography>
                            <Typography variant="body2" color="white">
                                You can regurarly add your time spent reading and the number of pages conquered.
                            </Typography>
                        </CardContent>
                </Card>
                <Card sx={{maxWidth: 345, backgroundColor: '#ba8fcc'}}>
                        <CardMedia
                            component="img"
                            height="140"
                            image='/achievment.jpg'
                            alt="books"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" color="white">
                                Your statistics
                            </Typography>
                            <Typography variant="body2" color="white">
                                Based on the data you provide, we will visualize you your statistics and achievements.
                            </Typography>
                        </CardContent>
                </Card>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;
