import React from "react";
import Button from "@material-ui/core/Button"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import './Home.css';
import {Link } from "react-router-dom";


const Home = () => {
    return ( 
        <>
        <Link className="LinkStart" to = "/start">
            <Button exact className="PlayButton" variant="contained" style = {{fontSize:'50px'}}>
                <PlayArrowIcon className="Arrow" style = {{fontSize:'50px'}}/>
                PLAY
            </Button>
        </Link>
        </>
     );
}
 
export default Home;