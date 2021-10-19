import {useEffect, useState} from 'react';
import * as Components from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { items } from './data/items';
import { categories } from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';

const App = () => {
    const [list, setList] = useState(items);
    const [filteredList, setFilteredList] = useState<Item[]>([]);
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

    useEffect(() => {
        setFilteredList(filterListByMonth(list, currentMonth))
    }, [list, currentMonth]);

    return (
      <Components.Container>
          <Components.Header>
            <Components.HeaderText>Sistema Financeiro</Components.HeaderText>
          </Components.Header>
          <Components.Body>
              ....
          </Components.Body>
      </Components.Container>
    );
}

export default App;
