import { useState, useEffect } from 'react'
import Search from "./components/Search"
import SchoolData from "./components/SchoolData"
import './stylesheets/App.css'
import { Puff } from 'react-loader-spinner'

const SCHOOL_API = "https://data.cityofnewyork.us/resource/s3k6-pzi2.json"
const SCHOOL_SAT_API = "https://data.cityofnewyork.us/resource/f9bf-2cp4.json"

export type SelectedSchool = {
  school_name?: string,
  city?: string,
  phone_number?: string,
  primary_address_line_1?: string,
  website?: string,
  zip?: string,
  school_email?: string,
  grades2018?: string,
  latitude?: number,
  longitude?: number,
  dbn?: string
}

type SATScores = {
  sat_math_avg_score: string,
  sat_critical_reading_avg_score: string,
  sat_writing_avg_score: string
}

function App() {
  const [schoolData, setSchoolData] = useState([])
  const [selectedSchool, setSelectedSchool] = useState<SelectedSchool>(Object)
  const [schoolSATScore, setSchoolSATScore] = useState<SATScores[]>(Object)

  useEffect(() => {
    getSchoolData()
  }, [])

  useEffect(() => {
    getSATData();
  }, [selectedSchool])

  async function getSchoolData() {
    // fetching school data
    const request = await fetch(SCHOOL_API)
    const data = await request.json()
    setSchoolData(data)
  }

  async function getSATData() {
    // fetching SAT data for school once one has been selected
    const request = await fetch(`${SCHOOL_SAT_API}?dbn=${selectedSchool.dbn}`)
    const data = await request.json()
    setSchoolSATScore(data)
  }

  const schoolSelected = () => (
    // return true only if selectedSchool object is not empty
    !!Object.keys(selectedSchool).length
  )

  const renderSpinner = () => {
    // render loading spinner if there is no school data yet
    if (!Object.keys(schoolData).length) {
      return <Puff ariaLabel="puff-loading" color="royalblue" wrapperClass="spinner"/>
    }
  }

  return (
    <div>
      <div aria-label="NYC School Database" className="title">NYC School Database</div>
      {!schoolSelected() && <Search setSelectedSchool={setSelectedSchool} schoolData={schoolData} />}
      {schoolSelected() && <SchoolData setSelectedSchool={setSelectedSchool} school={selectedSchool} satScores={schoolSATScore}/>}
      {renderSpinner()}
    </div>
  )
}

export default App
