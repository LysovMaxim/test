import css from './Header.module.css';
import { IoIosArrowDown } from 'react-icons/io';
import UserInfo from 'components/UserInfo/UserInfo';

const Header = () => {
  return (
    <div className={css.header}>
      <button className={css.header_theme_btn}>
        Theme
        <IoIosArrowDown className={css.screenPage_logout_icon} />
      </button>
      <UserInfo />
    </div>
  );
};

export default Header;
