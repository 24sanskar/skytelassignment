import { useState } from "react";

const MultiSelect = ({ data, value, readonly, onValueChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (event) => {
    const selectedValue = parseInt(event.target.value, 10);
    const currentValue = [...value];

    if (currentValue.includes(selectedValue)) {
      const updatedValue = currentValue.filter((val) => val !== selectedValue);
      onValueChange(updatedValue);
    } else if (currentValue.length < 2) {
      const updatedValue = [...currentValue, selectedValue];
      onValueChange(updatedValue);
    }
  };

  const toggleDropdown = () => {
    if (!readonly) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="dropdown-container">
      <div
        className={`dropdown ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        <div className="selected-options">
          {value.map((selectedValue) => (
            <div key={selectedValue} className="selected-option">
              {data.find((item) => item.value === selectedValue)?.text}
            </div>
          ))}
        </div>
        <div className="dropdown-arrow"></div>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {data.map((item) => (
            <label key={item.value}>
              <input
                className="checkbox"
                type="checkbox"
                value={item.value}
                checked={value.includes(item.value)}
                disabled={
                  readonly || (value.length >= 2 && !value.includes(item.value))
                }
                onChange={handleCheckboxChange}
              />
              {item.text}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
