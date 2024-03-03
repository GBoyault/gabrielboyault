import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "@/app/components";

describe("Header component", () => {
  it("renders 'Gabriel Boyault' as a heading", () => {
    render(<Header />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Gabriel Boyault");
  });
});
