import {useEffect, useState} from 'react';
import * as Components from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { items } from './data/items';
import { categories } from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';

const App = () => {
    const [list, setList] = useState(items);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [filteredList, setFilteredList] = useState<Item[]>([]);
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

    useEffect(() => {
        setFilteredList(filterListByMonth(list, currentMonth))
    }, [list, currentMonth]);

    useEffect(() => {
        let incomeCount = 0;
        let expenseCount = 0;

        for(let i in filteredList) {
            if(categories[filteredList[i].category].expense) {
                expenseCount += filteredList[i].value;
            } else {
                incomeCount += filteredList[i].value;
            }
        }
        setIncome(incomeCount);
        setExpense(expenseCount);

    }, [filteredList]);

    const handleMonthChange = (newMonth: string) => {
        setCurrentMonth(newMonth);
    }

    return (
      <Components.Container>
          <Components.Header>
            <Components.HeaderText>Sistema Financeiro</Components.HeaderText>
          </Components.Header>
          <Components.Body>
              <InfoArea
                  currentMonth={currentMonth}
                  onMonthChange={handleMonthChange}
                  income={income}
                  expense={expense}
              />
              <TableArea list={filteredList}/>
          </Components.Body>
      </Components.Container>
    );
}

export default App;
