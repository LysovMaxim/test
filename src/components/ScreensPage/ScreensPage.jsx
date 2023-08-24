import css from './ScreensPage.module.css';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BiLogInCircle } from 'react-icons/bi';
import photo from '../../pictures/image.png';

const ScreenPage = () => {
  return (
    <div className={css.screenPage}>
      <div className={css.screenPage_logo}>
        <div className={css.screenPage_logo_cotainer}>
          <BsFillLightningChargeFill className={css.screenPage_icon} />
        </div>
        <h1 className={css.screenPage_title}>Task Pro</h1>
      </div>
      <span className={css.screenPage_boards}>My boards</span>
      <div className={css.screenPage_board}>
        <h2 className={css.screenPage_board_title}>Create a new board</h2>
        <button className={css.screenPage_board_btn}>
          <FiPlus className={css.screenPage_board_icon} />
        </button>
      </div>
      <div className={css.screenPage_help}>
        <img src={photo} alt="" width={54} height={78} />
        <h2 className={css.screenPage_help_title}>
          If you need help with TaskPro, check out our support resources or
          reach out to our customer support team.
        </h2>
        <button className={css.screenPage_help_btn}>
          <AiOutlineQuestionCircle className={css.screenPage_help_icon}/>Need help?</button>
      </div>
      <button className={css.screenPage_logout_btn}>
        <BiLogInCircle className={css.screenPage_logout_icon}/>Log out</button>
    </div>
  );
};

export default ScreenPage;
