import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react"
import CreditCardForm from "./components/CreditCardForm";

export default function App () {
  const [num, setNum] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [popup, setPopup] = useState(false)

  const validateNumber = async (validateNum) => {
    try {
    setNum(validateNum)
  } catch (err) {
    console.error(err)
    setErrorMessage(err.message)
  }
}

  return (
    <>
      <h1 className="title">Luhn Algorithm</h1>
      <CreditCardForm numberValidated={validateNumber}/>
      <div>{errorMessage ? `Error:${errorMessage}` : ""}</div>
     
    </>
  )
}



 