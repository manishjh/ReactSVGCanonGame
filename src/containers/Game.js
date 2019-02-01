import { connect } from 'react-redux';
import React, { Component } from 'react';
import {moveObjects, startGame} from '../actions';

import App from '../App';

const mapStateToProps = state => ({
    angle: state.reducer.angle,
    gameState: state.reducer.gameState,
});

const mapDispatchToProps = dispatch => ({
    moveObjects: (mousePosition) => {
      dispatch(moveObjects(mousePosition));
    },
    startGame:()=>{
        dispatch(startGame());
    },
  });

class Game extends Component {
    render() {
        return (
            <div>
                <App angle={this.props.angle} 
                moveObjects={this.props.moveObjects} 
                gameState={this.props.gameState}
                startGame={this.props.startGame}/>                
            </div>
        );
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(Game);