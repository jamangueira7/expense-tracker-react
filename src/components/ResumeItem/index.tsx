import * as Component from './styles';
import { formatCurrentMonth } from '../../helpers/dateFilter';

type Props = {
    title: string;
    value: number;
}
export const ResumeItem = ({ title, value }: Props) => {

    return (
        <Component.Container>
            <Component.Title>{title}</Component.Title>
            <Component.Info>R$ {value}</Component.Info>
        </Component.Container>
    );
}
