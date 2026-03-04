import type {DayCell} from "../../../../shared/types/day-cell.ts";
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import type {FC} from "react";

type DragableDayCellProps = {
    day: DayCell; index: number
};

export const DraggableDayCell: FC<DragableDayCellProps> = ({ day, }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: day.date });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab'
    };

    // Определяем цвет фона в зависимости от типа
    const getBgColor = () => {
        if (day.type === 'vacation') return 'bg-green-100';
        if (day.type === 'dayoff') return 'bg-red-100';
        if (day.value?.includes(':')) return 'bg-blue-50';
        return 'bg-white';
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`
        flex-1 min-w-[100px] p-3 border-r last:border-r-0
        ${getBgColor()}
        hover:bg-gray-50 transition-colors
        relative
      `}
        >
            <div className="text-xs text-gray-400 mb-1">{day.date}</div>
            <div className="font-medium">{day.value || '—'}</div>

            {/* Индикатор перетаскивания */}
            <div className="absolute top-1 right-1 text-gray-400">
                ⋮⋮
            </div>
        </div>
    );
};
