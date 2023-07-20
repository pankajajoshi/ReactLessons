


export default function LuhnAlgoCheck (props) {
   console.log(props,props.display);
// let sum=validateNum;

  return (
    <div>
      {props.display === 'true'? 
        <h2 className='valid'> Valid Card Number</h2> : <h2 className="invalid"> Invalid Card Number </h2>  
    }
      </div>
    

  )
}








// import { useState, useEffect} from "react"

// export default function LuhnAlgoCheck({cardNum}){
//     const nums =cardNum;
//     // const [cardNum, setCardNum] = useState("");

//     const validCard = (nums) => {
//       let sum = 0;
//       //split number into individual string elements in array
//       const newNum = nums.toString().split("");
//       //revers split array, map each element, converting each element to a number
//       const reversed = newNum.reverse().map(Number);
//       //cycling through array, multiply every second element by 2
//       for (let i = 1; i < reversed.length; i += 2) {
//         reversed[i] = reversed[i] * 2;
//         if (reversed[i] > 9) {
//           const smallArr = reversed[i].toString().split("").map(Number);
//           smallArr.forEach((i) => {
//             sum += i;
//           });
//         }
//       }
//       //adding the numbers less than or equal to 9 to the sum
//       for (let i = 0; i < reversed.length; i++) {
//         if (reversed[i] <= 9) {
//           sum += reversed[i];
//         }
//       }
//       //check if number is true or false
//       console.log(sum);
//       if (sum % 10 === 0) {
//         setCardNum("Valid Card Number");
//       } else {
//         setCardNum("Invalid Card Number");
//       }
//     };
// }