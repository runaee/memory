import React, { useMemo } from "react";
import { Card } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { Button } from '@material-ui/core';
import './Cards.css';

import blank from '../images/blank.png';


const CardComponent = (props) => {
    
    const flipped = props.flipped;
    const matched = props.matched;

    const isNotFlipped = useMemo(() => {
        return !props.flipped && !props.matched;
    }, [props.flipped, props.matched])
    
    const toggleFlip = () => {
        props.setCardFlipped(props.id, !flipped);
    }


    return (
        <>
        <div className="CardContainer">
        <Card className={"CardSide CardStyleFront " + (isNotFlipped ? 'Hidden' : "")} style={{backgroundColor:props.color}}> 
            <Button className="Button"
                disabled={matched}
                onClick={toggleFlip}
            > <CardMedia className="CardMedia"
            type={props.type}
            component="img"
            image={props.image}
            alt="arcade"
            /></Button>
       </Card>
       <Card className={"CardSide CardStyleBack " + (!isNotFlipped ? 'Hidden' : "")} style={{backgroundColor:'white'}}> 
            <Button className="Button"
                onClick={toggleFlip}
            > <CardMedia className="CardMedia"
            type="blank"
            component="img"
            image={blank}
            alt="blank"
            /></Button>
        </Card>
        </div>
       </>
       
     );
}
 
export default CardComponent;