import "./App.css";
import { useState, useEffect } from "react";
import CreditCardForm from "./components/CreditCardForm";

import LuhnAlgoCheck from "./components/LuhnAlgoCheck";

export default function App() {
  const [validateNum, setNum] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  
  const getNum = async (validateNum) => {
    console.log('in getNum');
      try {
      setNum(validateNum)
    } catch (ererrorMessager) {
      console.error(errorMessage)
      setErrorMessage(errorMessage.message)
    }
  }

  useEffect(() => {
    console.log('in useEffect() calling get Num', validateNum);
    getNum(validateNum);
  }, [validateNum]);

const [cardValidity, setCardValidity] = useState(null);

let sum = 0;
  useEffect(() => {
    console.log('in useEffect setCardNum', validateNum)
    const nums=validateNum;
    if(nums!=0) {

        //split number into individual string elements in array
          const newNum = nums.toString().split("");
          //revers split array, map each element, converting each element to a number
          const reversed = newNum.reverse().map(Number);
          //cycling through array, multiply every second element by 2
          for (let i = 1; i < reversed.length; i += 2) {
            reversed[i] = reversed[i] * 2;
            if (reversed[i] > 9) {
              const containerArr = reversed[i].toString().split("").map(Number);
              containerArr.forEach((i) => {
                sum += i;
              });
            }
          }
          //adding the numbers less than or equal to 9 to the sum
          for (let i = 0; i < reversed.length; i++) {
            if (reversed[i] <= 9) {
              sum += reversed[i];
            }
          }




        console.log(sum);
        if (sum % 10 === 0 && nums.length === 16) {
          console.log("Valid Card Number");
          setCardValidity('true');
          
        } else {
          console.log("Invalid Card Number");
          setCardValidity('false');
        }

    }
  });
  return (
    <div className="cardheader">
      <h1>CREDIT CARD VALIDATOR</h1>
      <div className="card"></div>
      <CreditCardForm cardSearch={setNum} />
      <LuhnAlgoCheck display={cardValidity} />
    
     
    </div>
    
  );
}
