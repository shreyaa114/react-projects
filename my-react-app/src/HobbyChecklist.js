import React, { useState } from "react";
import "./HobbyCheckList.css";

export function Hobby() {
  const hobbies = ["Reading", "Cooking", "Traveling"];
  const [isChecked, setIsChecked] = useState({});

  function handleChange(e) {
    const name = e.target.name;
    const checked = !isChecked[name];
    setIsChecked(values => ({ ...values, [name]: checked }));
  }

  const selected = Object.keys(isChecked).filter(key => isChecked[key]);

  return (
    <div className="container">
      <h2>Select Your Hobbies</h2>

      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index} className="item">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name={hobby}
                checked={isChecked[hobby] || false}
                onChange={handleChange}
              />
              <span className="text">
                {isChecked[hobby] ? <s>{hobby}</s> : hobby}
              </span>
            </label>
          </li>
        ))}
      </ul>

      <h3>Selected Hobbies are:</h3>
      <textarea
        className="output"
        value={selected.join(", ")}
        placeholder="No hobbies selected..."
        readOnly
      />
    </div>
  );
}
