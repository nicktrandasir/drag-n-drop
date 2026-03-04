import {useState} from 'react'
import {mockDays1, mockDays2, mockUser1, mockUser2} from "./shared/mocks/mock-data.ts";
import {DragAndDropRow} from "./components/drag-and-drop-row/drag-n-drop.tsx";
import type {DayCell} from "./shared/types/day-cell.ts";
import styles from './App.module.css';

function App() {
    const [days1, setDays1] = useState(mockDays1);
    const [days2, setDays2] = useState(mockDays2);

    const handleDaysChange = (setter: (d: DayCell[]) => void) => (newDays: DayCell[]) => {
        setter(newDays);
        console.log('Days updated:', newDays);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h1 className={styles.title}>Расписание сотрудников</h1>

                <DragAndDropRow
                    user={mockUser1}
                    days={days1}
                    onDaysChange={handleDaysChange(setDays1)}
                />

                <DragAndDropRow
                    user={mockUser2}
                    days={days2}
                    onDaysChange={handleDaysChange(setDays2)}
                />
            </div>
        </div>
    )
}

export default App
