import React from 'react';
import face1 from './images/face1.jpg';
import './styles/Machine.css';

class Machine extends React.Component{
    render(){
        // console.log(this.props);
        const {s1, s2, s3} = this.props;
        const isWin = (s1 === s2) && (s2 === s3);
        return(
            <div className="Machine">
                <img src={face1} alt="jhgfhg"/>
                <p>{this.props.s1} {s2} {s3}</p>
                <p className={isWin ? 'winner' : 'loser'}> {isWin ? 'Win!' : 'Lose!'} </p>
            </div>
        )
    }
}
export default Machine;