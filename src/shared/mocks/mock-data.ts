import type {UserInfo} from "../types/user-info.ts";
import type {DayCell} from "../types/day-cell.ts";

export const mockUser1: UserInfo = {
    id: '1',
    name: 'Иван Петров',
    position: 'Frontend Developer',
    department: 'Разработка',
};

export const mockUser2: UserInfo = {
    id: '2',
    name: 'Анна Сидорова',
    position: 'UI/UX Designer',
    department: 'Дизайн',
};

export const mockDays1: DayCell[] = [
    { date: '08.03', value: '10:00 - 20:00', secondaryValue: '10:00 - 20:00', variant: 'blue' },
    { date: '09.03', value: '10:00 - 20:00', secondaryValue: '10:00 - 20:00', badge: 'Выходной', variant: 'blue' },
    { date: '10.03', value: '10:00 - 20:00', secondaryValue: '10:00 - 20:00', variant: 'green' },
    { date: '11.03', value: '10:00 - 20:00', secondaryValue: '10:00 - 20:00', variant: 'green' },
    { date: '12.03', value: '9:00 - 20:00', secondaryValue: '10:00 - 20:00', variant: 'yellow' },
    { date: '13.03', value: '9:00 - 20:00', secondaryValue: '10:00 - 20:00', variant: 'yellow' },
    { date: '14.03', value: '9:00 - 18:00', secondaryValue: '10:00 - 22:00', variant: 'gray' },
];

export const mockDays2: DayCell[] = [
    { date: '08.03', value: '9:00 - 18:00', secondaryValue: '10:00 - 22:00', variant: 'gray' },
    { date: '09.03', value: '9:00 - 18:00', secondaryValue: '10:00 - 22:00', badge: 'Выходной', variant: 'gray' },
    { date: '10.03', value: 'Выходной', variant: 'white' },
    { date: '11.03', value: 'Выходной', badge: 'Рабочий', variant: 'white' },
    { date: '12.03', value: 'Выходной', variant: 'striped' },
    { date: '13.03', value: 'Выходной', variant: 'striped' },
    { date: '14.03', value: 'Выходной', badge: 'Рабочий', variant: 'striped' },
];
