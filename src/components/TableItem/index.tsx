import * as Component from './styles';
import { Item } from '../../types/Item';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
    item: Item
}
export const TableItem = ({ item }: Props) => {
    return (
        <Component.TableLine>
            <Component.TableColumn>{formatDate(item.date)}</Component.TableColumn>
            <Component.TableColumn>{categories[item.category].title}</Component.TableColumn>
            <Component.TableColumn>{item.title}</Component.TableColumn>
            <Component.TableColumn>R$ {item.value}</Component.TableColumn>
        </Component.TableLine>
    );
}
