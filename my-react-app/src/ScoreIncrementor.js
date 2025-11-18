// score tracker that increments the score of a user when a button is clicked adding name.
import React, { useState } from 'react'

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
        <div>
            <div>
                <input type='text' value={name} placeholder='enter the name' onChange={updateName} />
                <br />
                <button type='submit' onClick={(e) => handleSubmit(name, e)}>Submit</button>
            </div>
            <p>Scores are: {scores.map((score)=>(
                <p>{score.name}: {score.point}</p>
            ))}</p>

        </div>
    )
}

export default ScoreIncrementor
