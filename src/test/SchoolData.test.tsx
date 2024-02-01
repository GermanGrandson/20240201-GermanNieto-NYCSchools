import { render, screen } from "@testing-library/react";
import SchoolData from "../components/SchoolData";

describe("SchoolData", () => {
  const school = {
    school_name: "MLK High",
    city: "Brooklyn",
    phone_number: "6465456738",
    primary_address_line_1: "267 3rd st Brooklyn",
    website: "www.mlkhigh.com",
    zip: "11123",
    school_email: "mlk@gmail.com",
    grades2018: "9 - 12",
    latitude: 41.45345,
    longitude: -98.2312
  }
  const satScores = [{
    sat_math_avg_score: "234",
    sat_critical_reading_avg_score: "624",
    sat_writing_avg_score: "623"
  }]

  it("renders the component", () => {
    render(<SchoolData school={school} setSelectedSchool={() => {}} satScores={satScores} />)
    expect(screen.getByText("MLK High"))
  })

  it("renders the correct text fields", () => {
    render(<SchoolData school={school} setSelectedSchool={() => {}} satScores={satScores} />)
    expect(screen.getByText("MLK High"))
    expect(screen.getByText("Brooklyn"))
    expect(screen.getByText("6465456738"))
    expect(screen.getByText("267 3rd st Brooklyn 11123"))
    expect(screen.getByText("www.mlkhigh.com"))
    expect(screen.getByText("mlk@gmail.com"))
    expect(screen.getByText("9 - 12"))
  })

  it("renders the correct SAT scores", () => {
    render(<SchoolData school={school} setSelectedSchool={() => {}} satScores={satScores} />)
    expect(screen.getByText("234"))
    expect(screen.getByText("624"))
    expect(screen.getByText("623"))
  })

  it("renders a map", () => {
    const { container } = render(
      <SchoolData school={school} setSelectedSchool={() => {}} satScores={satScores} />
    )
    expect(container.querySelector(".school-map")).exist
  })
})
