import * as Component from './styles';
import { Item } from '../../types/Item';

type Props = {
    item: Item
}
export const TableItem = ({ item }: Props) => {
    return (
        <Component.TableLine>
            <Component.TableColumn>...</Component.TableColumn>
            <Component.TableColumn>{item.category}</Component.TableColumn>
            <Component.TableColumn>{item.title}</Component.TableColumn>
            <Component.TableColumn>R$ {item.value}</Component.TableColumn>
        </Component.TableLine>
    );
}
