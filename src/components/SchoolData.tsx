import CloseCta from "./CloseCta"
import '../stylesheets/school-data.css'
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import {FaCity, FaPhone, FaGlobe, FaEnvelope, FaSchool, FaGraduationCap} from "react-icons/fa"
import { SelectedSchool } from "../App"


type SchoolDataProps = {
  school: {
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
  },
  satScores: {
    sat_math_avg_score: string,
    sat_critical_reading_avg_score: string,
    sat_writing_avg_score: string
  }[],
  setSelectedSchool: React.Dispatch<React.SetStateAction<SelectedSchool>>,
}

const MAPS_API_KEY = "AIzaSyBzjknxRTGLgy55fdESik3TD_EV8iA8eFQ"

const SchoolData = ({school, setSelectedSchool, satScores}: SchoolDataProps) => {
  const handleOnClose = () => {
    setSelectedSchool({})
  }

  const renderSATScores = (title: string, score: string) => (
    <div className="sat-score">{score ? score : "N/A"}
      <div className="sat-title">
        {title}
      </div>
    </div>
  )

  const renderSchoolData = () => {
    return(
      <div className="school-data">
        <div className="school-name">
          {school?.school_name}
        </div>

        <div className="school-info">
          <div>
            <span className="info-name">
              <FaCity />
            </span>
            <span>{school?.city}</span>
          </div>
          <div>
            <span className="info-name">
              <FaPhone />
            </span>
            <span>{school?.phone_number}</span>
          </div>
          <div>
            <span className="info-name">
              <FaSchool />
            </span>
            <span>{school?.primary_address_line_1} {school?.zip}</span>
          </div>
          <div>
            <span className="info-name">
              <FaGlobe />
            </span>
            <a href={school?.website} target="_blank">{school?.website}</a>
          </div>
          <div>
            <span className="info-name">
              <FaEnvelope />
            </span>
            <span>{school?.school_email}</span>
          </div>
          <div>
            <span className="info-name">
              <FaGraduationCap/>
            </span>
            <span>{school?.grades2018}</span>
          </div>
        </div>

        <div className="school-sat-info">
          <div className="sat-score-header">SAT Score Avg</div>
          {renderSATScores("Math", satScores[0]?.sat_math_avg_score)}
          {renderSATScores("Reading", satScores[0]?.sat_critical_reading_avg_score)}
          {renderSATScores("Writing", satScores[0]?.sat_writing_avg_score)}
        </div>

      </div>
    )
  }

  const renderSchoolMap = () => {
    const latitude =  school?.latitude ? school?.latitude * 1 : 0
    const longitude = school?.longitude ? school?.longitude * 1 : 0

    if (!latitude || !longitude) return null;
    
    return (
      <div className="school-map">
        <APIProvider apiKey={MAPS_API_KEY}>
          <Map
            zoom={15}
            center={{lat: latitude, lng: longitude}}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
          >
            <Marker position={{lat: latitude, lng: longitude}} />
          </Map>
        </APIProvider>
      </div>
    )
  }


  return(
    <>
      {<CloseCta onClose={handleOnClose} />}
      <div>
        {renderSchoolData()}
        {renderSchoolMap()}
      </div>
    </>
  )
}

export default SchoolData;
