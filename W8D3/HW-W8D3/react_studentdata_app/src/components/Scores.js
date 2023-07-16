import React from 'react'

function Scores(scoreData) {
  console.log(scoreData)
  return (
    <div>


      {scoreData?.scoreData?.map((score, index) => (
        <ul>
          <td>
           <tr>Date:  {score.date}</tr>
            <br ></br>
           <tr>Score : {score.score}</tr>
           <br></br>
           </td>
        </ul>
      )
      )}

    </div>
  )
}

export default Scores;