import type {FC} from "react";
import type {UserInfo} from "../../../../shared/types/user-info.ts";

type UserCellProps = {
    user: UserInfo;
}
export const UserCell: FC<UserCellProps> = ({ user }) => {
    return (
        <div className="flex items-center gap-3 p-3 bg-gray-50 border-r min-w-[200px]">
            {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
            ) : (
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    {user.name[0]}
                </div>
            )}
            <div>
                <div className="font-medium">{user.name}</div>
                {user.position && <div className="text-sm text-gray-500">{user.position}</div>}
            </div>
        </div>
    );
};
