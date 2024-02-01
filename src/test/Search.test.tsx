import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  it("renders the component", () => {
    const schoolData = [{school_name: "MLK High"}]
    render(<Search schoolData={schoolData} setSelectedSchool={() => {}} />)
    expect(screen.getByPlaceholderText("search by school name"))
  })
})
