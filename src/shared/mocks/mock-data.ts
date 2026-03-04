import type {UserInfo} from "../types/user-info.ts";
import type {DayCell} from "../types/day-cell.ts";

export const mockUser1: UserInfo = {
    id: '1',
    name: 'Иван Петров',
    position: 'Frontend Developer',
    department: 'Разработка',
    email: 'i.petrov@company.ru',
};

export const mockUser2: UserInfo = {
    id: '2',
    name: 'Анна Сидорова',
    position: 'UI/UX Designer',
    department: 'Дизайн',
    email: 'a.sidorova@company.ru',
};

export const mockDays1: DayCell[] = [
    { date: '08.03', value: '10:00-19:00', type: 'work' },
    { date: '09.03', value: '10:00-19:00', type: 'work' },
    { date: '10.03', value: 'Отпуск', type: 'vacation' },
    { date: '11.03', value: 'Отпуск', type: 'vacation' },
    { date: '12.03', value: '10:00-19:00', type: 'work' },
    { date: '13.03', value: '10:00-19:00', type: 'work' },
    { date: '14.03', value: 'Выходной', type: 'dayoff' },
];

export const mockDays2: DayCell[] = [
    { date: '08.03', value: '09:00-18:00', type: 'work' },
    { date: '09.03', value: 'Выходной', type: 'dayoff' },
    { date: '10.03', value: '09:00-18:00', type: 'work' },
    { date: '11.03', value: '09:00-18:00', type: 'work' },
    { date: '12.03', value: 'Отпуск', type: 'vacation' },
    { date: '13.03', value: 'Отпуск', type: 'vacation' },
    { date: '14.03', value: '09:00-18:00', type: 'work' },
];
