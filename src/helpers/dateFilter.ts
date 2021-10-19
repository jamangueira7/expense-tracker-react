import { Item } from '../types/Item';

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for (let i in list) {
        console.log(list[i].date.getMonth())
        console.log(parseInt(month))
        if(list[i].date.getFullYear() === parseInt(year) &&
            list[i].date.getMonth() + 1 === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    }

    return newList;
}

export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

const addZeroToDate = (val: number): string => {
    if (val < 10) {
        return `0${val}`;
    } else {
        return `${val}`;
    }
}
