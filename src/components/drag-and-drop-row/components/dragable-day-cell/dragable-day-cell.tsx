import type { DayCell } from "@/shared/types/day-cell";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import type {FC} from "react";
import styles from './dragable-day-cell.module.css';

type DraggableDayCellProps = {
    day: DayCell;
    index: number;
};

export const DraggableDayCell: FC<DraggableDayCellProps> = ({day}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({id: day.date});

    const baseTransform = CSS.Transform.toString(transform);
    const style = {
        transform: isDragging ? `${baseTransform ?? ''} rotate(-5deg)` : undefined,
        transition: isDragging ? transition : undefined,
        zIndex: isDragging ? 10 : undefined,
        cursor: isDragging ? 'grabbing' : 'grab',
    };

    const getBgClass = () => {
        if (day.type === 'vacation') return styles.bgVacation;
        if (day.type === 'dayoff') return styles.bgDayoff;
        if (day.value?.includes(':')) return styles.bgTime;
        return styles.bgWork;
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`${styles.cell} ${isDragging ? styles.bgDragging : getBgClass()}`}
        >
            <div className={styles.date}>{day.date}</div>
            <div className={styles.value}>{day.value || '—'}</div>
        </div>
    );
};
