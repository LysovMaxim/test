import photoUser from "../../pictures/user.png"
import css from "./UserInfo.module.css"

const UserInfo = () => {
    return (
        <div className={css.userInfo}>
            <p className={css.userName}>Name</p>
            <img src={photoUser} alt="user" />
        </div>
    )
}

export default UserInfo;