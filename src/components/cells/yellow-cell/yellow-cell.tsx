import type {FC} from 'react';
import styles from './yellow-cell.module.css';

type YellowCellProps = {
    value: string;
    secondaryValue?: string;
    badge?: string;
}

export const YellowCell: FC<YellowCellProps> = ({value, secondaryValue, badge}) => {
    return (
        <div className={styles.cell}>
            <div className={styles.value}>{value}</div>
            {secondaryValue && <div className={styles.secondary}>{secondaryValue}</div>}
            {badge && (
                <div className={styles.badge}>
                    <span className={styles.icon}>⟳</span>
                    {badge}
                </div>
            )}
        </div>
    );
};
