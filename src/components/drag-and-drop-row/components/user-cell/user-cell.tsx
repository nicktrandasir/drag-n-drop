import type {FC} from "react";
import type {UserInfo} from "../../../../shared/types/user-info.ts";
import styles from './user-cell.module.css';

type UserCellProps = {
    user: UserInfo;
}

export const UserCell: FC<UserCellProps> = ({ user }) => {
    return (
        <div className={styles.cell}>
            {user.avatar ? (
                <img src={user.avatar} alt={user.name} className={styles.avatar} />
            ) : (
                <div className={styles.avatarPlaceholder}>
                    {user.name[0]}
                </div>
            )}
           
        
              <div className={styles.position}>{user.position}</div>
           
        </div>
    );
};
