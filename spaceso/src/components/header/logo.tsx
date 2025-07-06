
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../consts/routes';
import './logo.sass';

function Logo() {
  return (
    <div className="logo">
      <NavLink to={ROUTES.HOME.url}>
        <img src="/logo.svg" alt="Spaceso" />
      </NavLink>
    </div>
  )
}

export default Logo