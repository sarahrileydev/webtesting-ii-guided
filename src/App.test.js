import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import 'jest-dom/extend-expect';

import App from "./App";

describe("<App />", () => {
 

  it('renders without crashing', () => {
    render(<App/>);
    cleanup(); //this function removes residual tests so next test can start with clean slate
  })

  it('renders "Hello world"', () => {
    const  {getByText} = render(<App/>);
    const text = getByText(/hello world/i); //i flag means I don't care about the case

    expect(text).toBeInTheDocument();
    cleanup();
  })

  it('greets the team', () => {
    const {getByText} = render(<App/>);
    const greetButton = getByText(/greet/i);

    fireEvent.click(greetButton);
    
    getByText(/hello web students/i);
    cleanup();
  })
});
