// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-route-dom'

import './index.css'

const LogoutButton = props => {
  const onClickLogout = () => {
    const {history} = props

    Cookies.remove('jwt_token')
    history.replace('./login')
  }
  return (
    <button type="button" className="logout-button" onClick={onClickLogout}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
