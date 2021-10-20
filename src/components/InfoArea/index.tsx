import * as Component from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
}
export const InfoArea = ({ currentMonth, onMonthChange }: Props) => {
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth( currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)

    }

    return (
        <Component.Container>
            <Component.MonthArea>
                <Component.MonthArrow onClick={handlePrevMonth}>⬅️</Component.MonthArrow>
                <Component.MonthTitle>{formatCurrentMonth(currentMonth)}</Component.MonthTitle>
                <Component.MonthArrow onClick={handleNextMonth}>➡️</Component.MonthArrow>
            </Component.MonthArea>
            <Component.ResumeArea>

            </Component.ResumeArea>
        </Component.Container>
    );
}
