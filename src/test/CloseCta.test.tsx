import { render, screen } from "@testing-library/react";
import CloseCta from "../components/CloseCta";

describe("CloseCta", () => {
  it("renders the component", () => {
    render(<CloseCta onClose={() => {}}/>)
    expect(screen.getByText("Back"))
  })
})
