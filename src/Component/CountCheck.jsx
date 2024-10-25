import React, { useState } from "react";

const countCheck = () => {

  // State to manage the checkboxes
  const [checkboxes, setCheckboxes] = useState ([false, false, false]);

  // Function to handle checkbox change
  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = checkboxes.map((checkbox, idx) => {
      if (idx === index) {
        return !checkbox; // Toggle the checkbox at the clicked index
      }
      return checkbox; // Keep the state of other checkboxes unchanged
    });
    setCheckboxes(updatedCheckboxes);
  };

  // Calculate the count of checked checkboxes
  const countChecked = checkboxes.filter((checked) => checked).length;

  return (
    <div>
      {checkboxes.map((isChecked, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => handleCheckboxChange(index)}
          />
          Checkbox {index + 1}
        </label>
      ))}
      <div>
        Checked Count: {countChecked}
        {/* Display the count of checked checkboxes */}
      </div>
    </div>
  );
};

export default countCheck;
