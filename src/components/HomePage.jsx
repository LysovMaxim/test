import Header from './Header/Header';
import ScreenPage from './ScreensPage/ScreensPage';
import Sidebar from './Sidebar/Sidebar';
import css from "./HomePage.module.css"

export const HomePage = () => {
  return (
    <div className={css.homePage}>
      <ScreenPage />
      <div className={css.homePage_container}>
        <Header />
        <Sidebar />
      </div>
    </div>
  );
};
