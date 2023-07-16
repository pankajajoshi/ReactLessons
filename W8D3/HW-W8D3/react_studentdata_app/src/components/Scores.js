import React from 'react'

function Scores(scoreData) {
  console.log(scoreData)
  return (
    <div>


      {scoreData?.scoreData?.map((score, index) => (
        <ul>
           <br></br>
          <li>
           Date:  {score.date}
           </li>
          
           <br></br>
           <li>
            
           Score : {score.score}
           </li>
        </ul>
      )
      )}

    </div>
  )
}

export default Scores;