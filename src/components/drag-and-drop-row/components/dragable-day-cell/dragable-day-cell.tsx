import type { DayCell } from "@/shared/types/day-cell";
import {useSortable} from "@dnd-kit/sortable";
import type {FC} from "react";
import {BlueCell, GrayCell, GreenCell, StripedCell, WhiteCell, YellowCell} from "@/components/cells";
import styles from './dragable-day-cell.module.css';

type DraggableDayCellProps = {
    day: DayCell;
};

export const DraggableDayCell: FC<DraggableDayCellProps> = ({day}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        isDragging
    } = useSortable({id: day.date});

    const x = transform?.x ?? 0;
    const y = transform?.y ?? 0;
    const style = {
        transform: isDragging ? `translate3d(${x}px, ${y}px, 0) rotate(-5deg)` : undefined,
        transition: undefined,
        zIndex: isDragging ? 10 : undefined,
        cursor: isDragging ? 'grabbing' : 'grab',
    };

    const renderCellByVariant = () => {
        switch (day.variant) {
            case 'blue':
                return <BlueCell value={day.value} secondaryValue={day.secondaryValue} badge={day.badge} />;
            case 'green':
                return <GreenCell value={day.value} secondaryValue={day.secondaryValue} badge={day.badge} />;
            case 'yellow':
                return <YellowCell value={day.value} secondaryValue={day.secondaryValue} badge={day.badge} />;
            case 'gray':
                return <GrayCell value={day.value} secondaryValue={day.secondaryValue} badge={day.badge} />;
            case 'white':
                return <WhiteCell value={day.value} secondaryValue={day.secondaryValue} badge={day.badge} />;
            case 'striped':
                return <StripedCell value={day.value} secondaryValue={day.secondaryValue} badge={day.badge} />;
            default:
                return <WhiteCell value={day.value} secondaryValue={day.secondaryValue} badge={day.badge} />;
        }
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`${styles.cellShell} ${isDragging ? styles.dragging : ''}`}
        >
            {renderCellByVariant()}
        </div>
    );
};
