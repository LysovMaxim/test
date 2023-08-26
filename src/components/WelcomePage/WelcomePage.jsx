import photoTitle from '../../pictures/Image-title.png';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <img src={photoTitle} alt="user" />
      <h1>Task Pro</h1>
      <p>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>
      <Link to='auth/register'>Registration</Link>
      <Link to='auth/login'>Log In</Link>
    </div>
  );
};

export default WelcomePage;
