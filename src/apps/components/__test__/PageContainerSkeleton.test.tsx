import { render } from "@testing-library/react";
import PageContainerSkeleton from "components/PageContainerSkeleton";

describe("PageContainerSkeleton component", () => {
  it("renders without crashing", () => {
    render(<PageContainerSkeleton />);
  });
});
