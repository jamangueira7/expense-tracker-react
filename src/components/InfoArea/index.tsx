import * as Component from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';

type Props = {
    currentMonth: string;
}
export const InfoArea = ({ currentMonth }: Props) => {
    return (
        <Component.Container>
            <Component.MonthArea>
                <Component.MonthArrow>⬅️</Component.MonthArrow>
                <Component.MonthTitle>{formatCurrentMonth(currentMonth)}</Component.MonthTitle>
                <Component.MonthArrow>➡️</Component.MonthArrow>
            </Component.MonthArea>
            <Component.ResumeArea>

            </Component.ResumeArea>
        </Component.Container>
    );
}
