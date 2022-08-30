import React, { Component } from "react";

class Scores extends Component {
    constructor(){
        super();
        this.state = {
            players: []
        };
        this.getInfo = this.getInfo.bind(this);
    }

    getInfo(){
        fetch('/api')
        .then((data) => data.json)
        .then((players) => {
            console.log('hello???',players)
            let i = 0;
            const updatedPlayers = [];
            while(i < 3){
                updatedPlayers.push(players[i]);
                i++
            }
            return this.setState({
                players: updatedPlayers
            })
        })
        .catch(err => console.log('Error found in updated players', err))
    }

    render() {
        this.getInfo()
        return(
        <section>
            <header>
                <h2>SCORES</h2>
                {/* {console.log(this.state)} */}
            </header>
            <div>
                <ul>
                    <li>{this.state.players[0].name},{this.state.players[0].score} </li>
                    <li>{this.state.players[1].name},{this.state.players[1].score} </li>
                    <li>{this.state.players[2].name},{this.state.players[2].score} </li>
                </ul>
            </div>
        </section>
        )
    }
}


export default Scores;