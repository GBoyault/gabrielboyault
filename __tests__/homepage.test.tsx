import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Page from "@/app/page";

describe("Home page", () => {
  it("renders introduction initially", () => {
    render(<Page />);

    const intro = screen.getByTestId("introduction");

    expect(intro).toBeInTheDocument();
  });

  it("renders a project if a project button was clicked and removes introduction", async () => {
    render(<Page />);

    const projectButtons = screen.getAllByTestId("project-button");

    userEvent.click(projectButtons[0]);

    const projectName = projectButtons[0].textContent as string;
    const projectHeading = screen.getByRole("heading", {level: 2, name: projectName});

    await waitFor(() => {
      expect(screen.queryByTestId("introduction")).not.toBeVisible();
      expect(projectHeading).toBeVisible();
    });
    
    const backButton = screen.getAllByTestId("back-button");

    userEvent.click(backButton[0]);

    await waitFor(() => {
      expect(projectHeading).not.toBeVisible();
      expect(screen.queryByTestId("introduction")).toBeVisible();
    });
  });
});
