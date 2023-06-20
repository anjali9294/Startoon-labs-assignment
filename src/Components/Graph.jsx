import React, { useState } from "react";

const Graph = () => {
  const [input, setInput] = useState("");
  const [max, setMax] = useState("");
  const percent = (input / max) * 100;
  console.log(percent);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input < max) {
      alert("input cannot be greater then max");
    } else {
      alert(`${percent}%`);
    }
  };

  return (
    <>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Input Name
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Input Value"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Max Value
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Max value"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Graph;
