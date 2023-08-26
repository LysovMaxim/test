import { NavLink } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <>
      <NavLink to="/auth/register">Register</NavLink>
      <NavLink to="/auth/login">Login</NavLink>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button type="submit"></button>
      </form>
    </>
  );
};

export default RegisterForm;
