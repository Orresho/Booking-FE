import { library } from '@fortawesome/fontawesome-svg-core'
import { 
  faStroopwafel, 
  faAngleRight, 
  faSpinner,
  faBars,
} from '@fortawesome/free-solid-svg-icons'

export const generateFonts = () => library.add(
  faStroopwafel, 
  faAngleRight,
  faSpinner,
  faBars,
  );