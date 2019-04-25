import React from "react";
import { render, fireEvent } from "react-testing-library";
import App from "./components/App";

describe("App test", () => {
  const wrapper = render(<App />);
  const { getByText, getByTestId } = wrapper;

  it("renders properly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("generates number when the generate number button is clicked", () => {
    const numberValue = getByTestId("number");
    fireEvent.change(numberValue, { target: { value: 5 } });
    const generateRandomNumberButton = getByText("Generate Number");
    const number = getByTestId("number");
    fireEvent.click(generateRandomNumberButton);

    expect(number).toBeTruthy();
  });

  it("shows the maximum number when the max button is clicked", () => {
    const generateRandomNumberButton = getByText("Generate Number");
    fireEvent.click(generateRandomNumberButton);
    const maxNumberButton = getByText("Max");
    const number = getByTestId("number");
    fireEvent.click(maxNumberButton);

    expect(number).toBeTruthy();
  });

  it("shows the minimum number when the min button is clicked", () => {
    const generateRandomNumberButton = getByText("Generate Number");
    fireEvent.click(generateRandomNumberButton);
    const minNumberButton = getByText("Min");
    const number = getByTestId("number");
    fireEvent.click(minNumberButton);

    expect(number).toBeTruthy();
  });

  it("sort numbers when the ascending button is clicked", () => {
    const generateRandomNumberButton = getByText("Generate Number");
    fireEvent.click(generateRandomNumberButton);
    const ascNumberButton = getByText("Ascending");
    const number = getByTestId("number");
    fireEvent.click(ascNumberButton);

    expect(number).toBeTruthy();
  });

  it("sort numbers when the descending button is clicked", () => {
    const generateRandomNumberButton = getByText("Generate Number");
    fireEvent.click(generateRandomNumberButton);
    const dscNumberButton = getByText("Descending");
    const number = getByTestId("number");
    fireEvent.click(dscNumberButton);

    expect(number).toBeTruthy();
  });
});
