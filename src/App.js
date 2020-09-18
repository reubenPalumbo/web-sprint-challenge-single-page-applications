import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Form from "./from";
import * as yup from "yup";
import axios from "axios";

const emptyInput = {
  name: "",
  instruct: "",
  sause: "",
  size: "",
  salami: false,
  onions: false,
  parm: false,
  chicken: false,
};

const App = () => {
  const [inputVal, setInputVal] = useState(emptyInput);
  const [disabled, setDisabled] = useState(true);

  const change = (evt) => {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setInputVal({ ...inputVal, [name]: valueToUse });
  };

  const checks = yup.object().shape({
    name: yup
      .string()
      .required("Username is required")
      .min(2, "Name must be 2 chars or longer"),
    sause: yup.string().required("Sause is required"),
    size: yup.string().required("Size is required"),
  });

  const submit = () => {
    const newOrder = {
      name: inputVal.name.trim(),
      instruct: inputVal.instruct.trim(),
      sause: inputVal.sause,
      size: inputVal.size,
      salami: inputVal.salami,
      onions: inputVal.onions,
      parm: inputVal.parm,
      chicken: inputVal.chicken,
    };

    sendOrder(newOrder);
  };
  const sendOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/users", newOrder)
      .then((res) => {
        console.log(res.data);
        setInputVal(emptyInput);
        setDisabled(!disabled);
      })
      .catch((err) => {
        debugger; // eslint-disable-line
        console.log(err);
      });
  };

  useEffect(() => {
    checks.isValid(inputVal).then((valid) => {
      setDisabled(!valid);
    });
  }, [inputVal]);

  return (
    <>
      <header className="App-header">
        <h1>Lambda Eats</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/order">Pizza!</Link>
        </div>
      </header>

      <Route path="/order">
        <Form
          inputVal={inputVal}
          change={change}
          submit={submit}
          disabled={disabled}
        />
      </Route>
    </>
  );
};
export default App;
