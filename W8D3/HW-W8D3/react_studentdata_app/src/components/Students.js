import React from 'react'
import Scores from './Scores';


function Students({ studentData }) {
    console.log(studentData)

    return (
        <div> 
            {studentData.students[0].map((student, index) => (
                <ul key={index}>
                    <div>

                        <li>{student?.name}</li>
                        <br ></br>
                    </div>
                    
                    <div>
                        <ul>{student?.bio}</ul>
                        <br ></br>
                    </div>
                    <div>
                        <ol><Scores scoreData={student.scores}/></ol></div>

                </ul>
            ))}
        </div>
    )
}



export default Students;