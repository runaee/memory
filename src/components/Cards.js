import React, {useState, useEffect} from "react";
import './Cards.css';
import CardFlip  from './CardFlip.js';
import contents from './contents.js';

const Cards = () => {

    const [cardsFlipped, setCardsFlipped] = useState({});
    const [cardsMatched, setCardsMatched] = useState({});

    const setCardFlipped = (id, flipped) => {
      setCardsFlipped(cardsFlipped => ({...cardsFlipped, [id]: flipped}))
    }

    const setCardMatched = (id) => {
      setCardsMatched(cardsMatched => ({...cardsMatched, [id]: true}))
    }
    
    //verifico se ho due carte girate e se le ho le rigiro tutte
    //se ho due carte girate verifico la vittoria
    
    useEffect(() =>{

      let countFlipped = 0;

      let flippeds = [];

      contents.forEach((content) => {

        if (cardsFlipped[content.id]) {
          countFlipped++;
          flippeds.push(content);
        }
      })

      if (countFlipped == 2) {
        let match = true;
        let idle = false;
        let previousFlipped = flippeds[0];
        flippeds.forEach(flipped => {
          if (match && flipped.type == previousFlipped.type) {
            match = true;
            idle = false;
            previousFlipped = flipped;
          } else {
            match = false;
            idle = true;
          }
        });

        if (match) {
          flippeds.forEach(flipped => {
            setCardMatched(flipped.id);
          })
        }
        
        if (idle === false) {
          setTimeout (() => {setCardsFlipped({});
          },500);
        }
      }

      if (countFlipped == 2) {
        setTimeout (() => {setCardsFlipped({});
        },500);
      }

      console.log(cardsMatched);
    },[cardsFlipped]);

    return (
        <>
        {contents.map((content)=>{
          return <CardFlip 
            id={content.id}
            type={content.type}
            image={content.image}
            flipped={typeof(cardsFlipped[content.id]) !== `undefined` ? cardsFlipped[content.id] : false}
            matched={typeof(cardsMatched[content.id]) !== `undefined` ? cardsMatched[content.id] : false}
            color={content.color}
            setCardFlipped={setCardFlipped}
          /> 
        })}
        </>
    );
 }

export default Cards;
