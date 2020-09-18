import React from "react";

export default function Form({ inputVal, change, submit, disabled }) {
  const sendSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  return (
    <div className="App">
      <div className="item">
        <h2>BUILD YOUR PIZZA!</h2>
        <img
          src="https://www.washingtonpost.com/resizer/M-WnldvRmvg3qyWg0Om8ssM6E3M=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/UM4VXMMJ5Y7T5MPQALWPL73RGM.jpg"
          alt="Pizza"
        />
        <h3>Start here!</h3>
        <form onSubmit={sendSubmit}>
          <div>
            <p>Choice of Size</p>
            <p>Required</p>
            <div className="item">
              <select name="size" onChange={change} value={inputVal.size}>
                <option value="">-Select Size-</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
          </div>
          <div className="item">
            <p>Choice of Sause</p>
            <p>Required</p>
            <label>
              Red Sause
              <input
                type="radio"
                name="sause"
                value="red"
                onChange={change}
                checked={inputVal.sause === "red"}
              />
            </label>
            <label>
              Garlic Ranch
              <input
                type="radio"
                name="sause"
                value="garlic"
                checked={inputVal.sause === "garlic"}
                onChange={change}
              />
            </label>
            <label>
              BBQ Sause
              <input
                type="radio"
                name="sause"
                value="bbq"
                onChange={change}
                checked={inputVal.sause === "bbq"}
              />
            </label>
            <label>
              Alfredo
              <input
                type="radio"
                name="sause"
                value="alfredo"
                onChange={change}
                checked={inputVal.sause === "alfredo"}
              />
            </label>
          </div>
          <div className="item">
            <p>Choice of Toppings</p>
            <p>Choose up to 10</p>
            <label>
              Salami
              <input
                type="checkbox"
                name="salami"
                checked={inputVal.salami}
                onChange={change}
              />
            </label>
            <label>
              Parm
              <input
                type="checkbox"
                name="parm"
                checked={inputVal.parm}
                onChange={change}
              />
            </label>
            <label>
              Chicken
              <input
                type="checkbox"
                name="chicken"
                checked={inputVal.chicken}
                onChange={change}
              />
            </label>
            <label>
              Onions
              <input
                type="checkbox"
                name="onions"
                checked={inputVal.onions}
                onChange={change}
              />
            </label>
          </div>
          <div className="label">
            <input
              type="text"
              name="name"
              value={inputVal.name}
              onChange={change}
              placeholder="Name"
            />
          </div>
          <div className="label">
            <input
              type="text"
              name="instruct"
              value={inputVal.instruct}
              onChange={change}
              placeholder="Extra Instructions"
            />
          </div>
          <div className="item">
            <button disabled={disabled} id="subutton">
              Add Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
