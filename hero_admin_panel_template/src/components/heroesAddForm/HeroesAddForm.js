import { useState, useEffect } from "react";
import {useHttp} from "../../hooks/http.hook";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../actions";
import { elementsFetched } from "../../actions";

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [element, setElement] = useState('');

    const {request} = useHttp();

    const dispatch = useDispatch();
    const {elements} = useSelector(state => state);

    useEffect(() => {
        request("http://localhost:3001/elements")
        .then(data => dispatch(elementsFetched(data)))
        //eslint-disable-next-line
    }, [])

    const onSendForm = (e) => {
        e.preventDefault();

        const newObj = {
            id: uuidv4(),
            name,
            description,
            element
        }
        
        request("http://localhost:3001/heroes", "POST", JSON.stringify(newObj))
            .then(dispatch(addItem(newObj)))
            .catch(err => console.log(err))

        setName('');
        setDescription('');
        setElement('');
    } 

    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={onSendForm}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    value={description}
                    style={{"height": '130px'}}
                    onChange={(e) => {setDescription(e.target.value)}}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={element}
                    onChange={(e) => setElement(e.target.value)}>
                    <option >Я владею элементом...</option>
                    {elements.map((item, i) => {
                        return (
                            <option value={item.value} key={i}>{item.elem}</option>
                        )
                    })}
                </select>
            </div>

            <button type="submit" className="btn btn-primary" >Создать</button>
        </form>
    )
}

export default HeroesAddForm;