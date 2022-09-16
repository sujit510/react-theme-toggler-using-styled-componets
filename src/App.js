import "./styles.css";
import { styled, createGlobalStyle } from "styled-components";
import { Fragment, useState } from "react";

const GlobalStyle = createGlobalStyle`
  body, button {
    color: ${(props) => (props.darkTheme ? "white" : "black")};
    background-color: ${(props) => (props.darkTheme ? "black" : "white")};
  }
  button {
    border: 1px solid ${(props) => (props.darkTheme ? "white" : "black")};
  }
`;
export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => {
    setIsDarkTheme((theme) => !theme);
  };
  return (
    <Fragment>
      <GlobalStyle darkTheme={isDarkTheme} />
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={toggleTheme}>
          {isDarkTheme ? "Light" : "Dark"} Theme
        </button>
      </div>
    </Fragment>
  );
}
