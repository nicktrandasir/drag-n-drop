import type {DayCell} from "@/shared/types/day-cell";
import {useSortable} from "@dnd-kit/sortable";
import type {FC} from "react";
import {BlueCell, GrayCell, GreenCell, StripedCell, WhiteCell, YellowCell} from "@/components/cells";
import styles from './dragable-day-cell.module.css';

type DraggableDayCellProps = {
    day: DayCell;
};

const renderCell = (day: DayCell) => {
    switch (day.variant) {
        case 'blue':     return <BlueCell value={day.value} secondaryValue={day.secondaryValue} badge={day.badge} />;
        case 'green':    return <GreenCell value={day.value} secondaryValue={day.secondaryValue} badge={day.badge} />;
        case 'yellow':   return <YellowCell value={day.value} secondaryValue={day.secondaryValue} badge={day.badge} />;
        case 'gray':     return <GrayCell value={day.value} secondaryValue={day.secondaryValue} badge={day.badge} />;
        case 'white':    return <WhiteCell value={day.value} secondaryValue={day.secondaryValue} badge={day.badge} />;
        case 'striped':  return <StripedCell value={day.value} secondaryValue={day.secondaryValue} badge={day.badge} />;
        default:         return <WhiteCell value={day.value} secondaryValue={day.secondaryValue} badge={day.badge} />;
    }
};

export const DraggableDayCell: FC<DraggableDayCellProps> = ({day}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        isDragging,
    } = useSortable({id: day.date});

    const x = transform?.x ?? 0;
    const y = transform?.y ?? 0;

    return (
        // Outer wrapper — stays in place, provides padding + border
        <div
            ref={setNodeRef}
            className={styles.shell}
            style={{ zIndex: isDragging ? 1000 : undefined }}
            {...attributes}
        >
            {/* Inner area — relative anchor for the two layers */}
            <div className={styles.inner}>
                {/* Bottom layer: static placeholder, revealed when top moves away */}
                <div className={styles.placeholder} />

                {/* Top layer: actual cell content, moves during drag */}
                <div
                    {...listeners}
                    className={styles.top}
                    style={{
                        transform: isDragging ? `translate3d(${x}px, ${y}px, 0) rotate(-3deg)` : undefined,
                        cursor: isDragging ? 'grabbing' : 'grab',
                    }}
                >
                    {renderCell(day)}
                </div>
            </div>
        </div>
    );
};
