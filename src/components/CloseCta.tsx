import '../stylesheets/close-cta.css'
import {FaArrowLeft} from "react-icons/fa"

type CloseCtaProps = {
  onClose: () => void
}

const CloseCta = ({onClose}: CloseCtaProps) => {
  
  const handleOnClick = () => {
    onClose()
  }
  
  return(
    <button aria-label="back to results" onClick={handleOnClick} className="close-cta">
      <FaArrowLeft />
      <span className="cta-copy">Back</span>
    </button>
  )
}

export default CloseCta;
