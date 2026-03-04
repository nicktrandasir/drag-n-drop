export interface DayCell {
    date: string;
    value: string;
    secondaryValue?: string;
    badge?: string;
    variant: 'blue' | 'green' | 'yellow' | 'gray' | 'white' | 'striped';
}
