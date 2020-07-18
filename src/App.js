import React, { Component } from "react";
import { render } from "react-dom";
import "./styles.css";
import { styledAgain } from "./styled-again";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <StyledHello colr="red" name={`Styled-${this.state.name}`} />
      </div>
    );
  }
}

const Hello = ({ name, ...restProps }) => <h1 {...restProps}>Hello {name}!</h1>;

const textColor = "black";
const StyledHello = styledAgain(Hello)`
  font-style: italic;
  color: ${({ colr }) => (colr ? colr : textColor)}; 
  font-weight: bold
`;

render(<App />, document.getElementById("root"));
