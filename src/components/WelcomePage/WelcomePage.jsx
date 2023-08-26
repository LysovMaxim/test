import photoTitle from '../../pictures/Image-title.png';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <img src={photoTitle} alt="user" />
      <h1>Task Pro</h1>
      <p>
        Supercharge your productivity and take control of your tasks with Task
        Pro - Don't wait, start achieving your goals now!
      </p>
      <button onClick={() => navigate('auth/register')}>Registration</button>
      <button onClick={() => navigate('auth/login')}>Log In</button>
    </div>
  );
};

export default WelcomePage;
