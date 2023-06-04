import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';

const MainPage = () => {

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h2 style={{margin: "30px"}}>Reading Tracker - Stay on Top of Your Reading Goals</h2>
            <div style={{display: "flex", gap: "30px", justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
                <Card sx={{maxWidth: 345}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image='/books.jpg'
                            alt="books"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Daily reading
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                With us you are able to track your reading habits. Capture details and monitor your
                                progress.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{maxWidth: 345}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image='/analitics.jpg'
                            alt="books"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Let's start
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Sign in and effortlessly record your reading statistics to improve your reading habits.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{maxWidth: 345}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image='/time.jpg'
                            alt="books"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Work with us
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                You can regurarly add your time spent reading and the number of pages conquered.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{maxWidth: 345}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image='/achievment.jpg'
                            alt="books"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Your statistics
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Based on the data you provide, we will visualize you your statistics and achievements.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
};

export default MainPage;
