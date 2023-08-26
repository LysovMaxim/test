// import Header from './Header/Header';
// import ScreenPage from './ScreensPage/ScreensPage';
// import Sidebar from './Sidebar/Sidebar';
// import css from "./HomePage.module.css"
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage/WelcomePage';
// import LoginForm from '../components/LoginForm/LoginForm';
// import RegisterForm from '../components/RegisterForm/RegisterForm';
import HomePage from '../components/HomePage/HomePage';
import AuthPage from '../components/AuthPage/AuthPage';

export const App = () => {
  return (
    <Routes>
      <Route index element={<WelcomePage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/auth/:id" element={<AuthPage />} />
      {/* <Route path="auth/login" element={<LoginForm />} />
        <Route path="auth/register" element={<RegisterForm />} /> */}
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

// {/* // <div className={css.homePage}>
// //   <ScreenPage />
// //   <div className={css.homePage_container}>
// //     <Header />
// //     <Sidebar />
// //   </div>
// // </div> */}
