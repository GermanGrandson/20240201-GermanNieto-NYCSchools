import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  it("renders the component", () => {
    const schoolData = [{school_name: "MLK High"}]
    render(<SearchResults filteredResults={schoolData} setSelectedSchool={() => {}} />)
    expect(screen.getByText("MLK High"))
  })
})
