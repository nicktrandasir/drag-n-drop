import type {FC} from 'react';
import styles from './blue-cell.module.css';

type BlueCellProps = {
    value: string;
    secondaryValue?: string;
    badge?: string;
}

export const BlueCell: FC<BlueCellProps> = ({value, secondaryValue, badge}) => {
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
