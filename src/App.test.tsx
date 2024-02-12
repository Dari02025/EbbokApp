import { render } from "@testing-library/react";

import App from "./App";
jest.mock("views/main.view", () => () => <div>MainView content</div>);
jest.mock("./App.css", () => ({}));

describe("App component", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<App />);

    expect(getByText).toBeTruthy();
  });
});
