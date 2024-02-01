import {useState} from "react";
import SearchResults from "./SearchResults"
import {FaSearch} from "react-icons/fa"
import '../stylesheets/search.css'
import { SelectedSchool } from "../App"

type SearchProps = {
  setSelectedSchool: React.Dispatch<React.SetStateAction<SelectedSchool>>,
  schoolData: {school_name: string}[]
}

const Search = ({setSelectedSchool, schoolData}: SearchProps) => {
  const [input, setInput] = useState("")

  const handleChange = (value: string) => {
    setInput(value)
  }

  const filterResults = () => {
    const filteredSchools = schoolData.filter(school => (
      school.school_name.toLowerCase().includes(input.toLowerCase())
    ))
    
    // return schools in alphabetical order
    return filteredSchools.sort((x,y) => (x.school_name > y.school_name) ? 1 : -1)
  }

  return (
    <div className="search-bar">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input aria-label="input" placeholder="search by school name" value={input} onChange={(e) => handleChange(e.target.value)}/>
      </div>
      <SearchResults filteredResults={filterResults()} setSelectedSchool={setSelectedSchool} />
    </div>
  )
}

export default Search
