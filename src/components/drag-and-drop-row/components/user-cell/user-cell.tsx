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
            <div className={styles.info}>
                <div className={styles.name}>{user.name}</div>
                {user.position && <div className={styles.position}>{user.position}</div>}
                {user.department && <div className={styles.department}>{user.department}</div>}
                {user.email && <div className={styles.email}>{user.email}</div>}
            </div>
        </div>
    );
};
