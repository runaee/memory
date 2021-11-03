import React from "react";
import './Start.css';
import {Link } from "react-router-dom";
import List from "../components/List";

    function StartPage() {

        return (
          <div className="StartPage" style={{backgroundColor:'black',}}>
           <header className="Start-header">
            <p>
              <div className="Start-title">
                <h1> 🧠 MEMORY GAME 🧠</h1>
              </div>
            <br />
              <div className="Start-grid" style={{display:'flex'}}>
                <List/>
              </div>
            <br/>
            </p>
            <button className="ShuffleButton">
              SHUFFLE
            </button>
            <br/>
            <Link to="/"><button className="RestartButton">
              RESTART
            </button>
            </Link>
           </header>
          </div>
        );

    }

export default StartPage;