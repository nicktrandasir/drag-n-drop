import {type FC} from 'react';
import {closestCenter, DndContext, type DragEndEvent} from '@dnd-kit/core';
import {arrayMove, horizontalListSortingStrategy, SortableContext} from '@dnd-kit/sortable';
import type {UserInfo} from "@shared/types/user-info.ts";
import type {DayCell} from "@shared/types/day-cell.ts";
import {UserCell} from "./components/user-cell";
import {DraggableDayCell} from "./components/dragable-day-cell";
import styles from './drag-n-drop.module.css';

type DragAndDropRowProps = {
    user: UserInfo;
    days: DayCell[];
    onDaysChange: (newDays: DayCell[]) => void;
}

export const DragAndDropRow: FC<DragAndDropRowProps> = ({ user, days, onDaysChange }) => {
    if (days.length !== 7) {
        console.error('DragAndDropRow: days must contain exactly 7 items');
        return null;
    }

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (!over || active.id === over.id) return;

        const oldIndex = days.findIndex(day => day.date === active.id);
        const newIndex = days.findIndex(day => day.date === over.id);

        const newDays = arrayMove(days, oldIndex, newIndex);
        onDaysChange(newDays);
    };

    return (
        <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <div className={styles.scrollContainer}>
                <div className={styles.row}>
                    <div className={styles.content}>
                        <UserCell user={user} />

                        <SortableContext
                            items={days.map(day => day.date)}
                            strategy={horizontalListSortingStrategy}
                        >
                            <div className={styles.daysList}>
                                {days.map((day) => (
                                    <DraggableDayCell key={day.date} day={day} />
                                ))}
                            </div>
                        </SortableContext>
                    </div>
                </div>
            </div>
        </DndContext>
    );
};
