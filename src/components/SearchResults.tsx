import '../stylesheets/search-results.css'

type SearchResultsProps = {
  setSelectedSchool: (value: object) => void,
  filteredResults: {school_name: string}[]
}

const SearchResults = ({setSelectedSchool, filteredResults}: SearchResultsProps) => {  
  const handleSelectSchool = (school: object) => {
    setSelectedSchool(school)
  }

  return(
    <div className="search-results-container">
      {filteredResults.map((school, index) => (
        <button aria-label={school.school_name} key={index} className="search-result" onClick={() => handleSelectSchool(school)}>
          <h2 aria-label={school.school_name}>{school.school_name}</h2>
        </button>
      ))}
    </div>
  )
}

export default SearchResults
