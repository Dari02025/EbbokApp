import { render } from "@testing-library/react";
import BookSkeleton from "components/BookSkeleton";

describe("BookSkeleton component", () => {
  it("renders without crashing", () => {
    render(<BookSkeleton />);
  });

  it("renders skeleton elements", () => {
    const { getByTestId } = render(<BookSkeleton />);
    const skeletonContainer = getByTestId("skeleton-container");

    expect(skeletonContainer).toBeDefined();
  });
});
