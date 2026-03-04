import React, {type FC} from 'react';
import {DndContext, closestCenter, type DragEndEvent} from '@dnd-kit/core';
import { SortableContext, useSortable, arrayMove, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type {UserInfo} from "../../shared/types/user-info.ts";
import type {DayCell} from "../../shared/types/day-cell.ts";
import {UserCell} from "./components/user-cell";
import {DraggableDayCell} from "./components/dragable-day-cell";

// Типы для данных






interface Props {
    user: UserInfo;
    days: DayCell[]; // должно быть 7 элементов (со 2 по 8 день)
    onDaysChange: (newDays: DayCell[]) => void;
}

// Основной компонент строки
export const UserScheduleRow: React.FC<Props> = ({ user, days, onDaysChange }) => {
    // Проверяем, что days содержит 7 элементов
    if (days.length !== 7) {
        console.error('UserScheduleRow: days must contain exactly 7 items');
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
            <div className="flex border rounded-lg overflow-hidden shadow-sm">
                {/* Статичная ячейка пользователя */}
                <UserCell user={user} />

                {/* Sortable контейнер для дней */}
                <SortableContext
                    items={days.map(day => day.date)}
                    strategy={horizontalListSortingStrategy}
                >
                    <div className="flex flex-1">
                        {days.map((day, index) => (
                            <DraggableDayCell key={day.date} day={day} index={index} />
                        ))}
                    </div>
                </SortableContext>
            </div>
        </DndContext>
    );
};
