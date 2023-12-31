import { useState } from "react";

export default function Form(props) {
  const [nums, setNumber] = useState("");

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('nums', nums, ' props: ', props);
          props.cardSearch(nums);
        }}
      >
        <div className="input">
          <p className="usermsg">Enter Credit Card Number</p>
          <input
            className="field"
            type="number"
            onChange={handleChange}
            value={nums}
          />
          <input className="submitbutton" type="submit" value="submit" />
          
        </div>
      </form>
      <footer className="footer">@Luhn Algorithm Validator</footer>
    </div>
  );
}
