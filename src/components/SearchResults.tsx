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
    <div role="button" className="search-results-container">
      {filteredResults.map((school, index) => (
        <button key={index} className="search-result" onClick={() => handleSelectSchool(school)}>
          <h2>{school.school_name}</h2>
        </button>
      ))}
    </div>
  )
}

export default SearchResults
