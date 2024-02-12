import { render } from "@testing-library/react";
import ProfileImage from "components/ProfileNameToImg";

describe("ProfileImage component", () => {
  it("renders without crashing", () => {
    const name = "John Doe";
    render(<ProfileImage name={name} />);
  });
});
