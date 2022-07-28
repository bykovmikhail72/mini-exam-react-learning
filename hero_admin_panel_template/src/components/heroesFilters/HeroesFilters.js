import { useSelector, useDispatch } from "react-redux";
import { fetchFilters, filterAddActive } from "../../actions";
import { useEffect } from "react";
import { useHttp } from "../../hooks/http.hook";
import Spinner from "../spinner/Spinner";
let classNames = require('classnames');
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
    const {filters, heroesLoadingStatus} = useSelector(state => state);
    const {request} = useHttp();
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        dispatch(fetchFilters(request))
        //eslint-disable-next-line
    }, [])

    const renderFilters = () => {
        if (heroesLoadingStatus === 'error') {
            return (
                <h5 className="text-center mt-5">Фильтров не найдено</h5>
            )
        }
        
        if (heroesLoadingStatus === 'loading') {
            return <Spinner/>
        }

        return (
            <div className="btn-group">
                {filters.filters.map((item, i) => {
                    const activeClass = classNames({  
                        'active': item.element === filters.activeFilter
                    })
                    return (
                        <button className={`btn ${item.class} ${activeClass}`} 
                            id={item.id}
                            key={i}
                            onClick={() => dispatch(filterAddActive(item.element))}>{item.name}</button>
                    )
                })}
            </div>
        )
    }

    const content = renderFilters();

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="text-center">
                    {content}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;