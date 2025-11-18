// score tracker that increments the score of a user when a button is clicked adding name.
import React, { useState } from 'react';
import './ScoreIncrementer.css'

const ScoreIncrementor = () => {
    const [scores, setScores] = useState([{
        name: 'shreya',
        point: 6
    },
    {
        name: 'pratheeth',
        point: 7
    }])

    const [name, setName] = useState();

    function updateName(e) {
        setName(e.target.value);
        console.log(e.target.value);
    }

    function handleSubmit(name, e) {
        const updatedScore = scores.map((score) => {
            if (score.name === name) return { ...score, point: score.point + 1 }
            else return score;
        })
        setScores(updatedScore);
    }

    return (
        <div className='box'>
            <div className='main-div'>
                <input className='text' type='text' value={name} placeholder='Enter the name' onChange={updateName} />
                <br />
                <button className='btn' type='submit' onClick={(e) => handleSubmit(name, e)}>Submit</button>
            </div>
            <p><b><u>Scores are:</u></b> {scores.map((score) => (
                <p>{score.name}: {score.point}</p>
            ))}</p>

        </div>
    )
}

export default ScoreIncrementor
