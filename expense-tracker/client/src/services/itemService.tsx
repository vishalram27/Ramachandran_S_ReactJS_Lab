import axios from "axios";
import IDataList from "../model/IDataList";

export const getDataFromServer = () => {
    return axios.get<IDataList[]>(`http://localhost:5000/items`)
        .then(response => response.data);
}

export const pushDataFromUser = (newExpense: Omit<IDataList, "id">) => {
    return axios.post<IDataList>(
        `http://localhost:5000/items`,
        newExpense,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
        .then(response => response.data)
}