import css from './Sidebar.module.css';
import { FiFilter } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <button className={css.sidebar_filters}>
        <FiFilter className={css.screenPage_filter_icon}/>Filters</button>
      <div className={css.sidebar_container}>
             <h1 className={css.sidebar_title}>
        Before starting your project, it is essential <span className={css.sidebar_text}>to create a board</span> to
        visualize and track all the necessary tasks and milestones. This board
        serves as a powerful tool to organize the workflow and ensure effective
        collaboration among team members.
      </h1>
      </div>
 
    </div>
  );
};

export default Sidebar;
