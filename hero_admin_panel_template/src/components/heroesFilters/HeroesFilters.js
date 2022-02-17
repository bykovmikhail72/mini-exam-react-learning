import { useSelector, useDispatch } from "react-redux";
import { filtersFetched, filterAddActive, filtersFetching, filtersFetchingError } from "../../actions";
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
        dispatch(filtersFetching());
        request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)))
            .catch(() => dispatch(filtersFetchingError()));
        //eslint-disable-next-line
    }, [])

    function onToggleFilter (e) {
        const index = filters.findIndex(item => item.id === e.target.id);
        let nonActiveArr = filters.map(item => {
            return {
                ...item,
                active: false
            }
        })

        const newObj = {...filters[index], active: true};
        
        nonActiveArr = [...nonActiveArr.slice(0, index), newObj, ...nonActiveArr.slice(index + 1)];
        console.log(nonActiveArr)

        dispatch(filterAddActive(nonActiveArr));
    }

    const renderFilters = () => {
        if (heroesLoadingStatus === 'error') {
            return (
                <h5 className="text-center mt-5">Героев пока нет</h5>
            )
        }
        
        if (heroesLoadingStatus === 'loading') {
            return <Spinner/>
        }

        return (
            <div className="btn-group">
                {filters.map((item, i) => {
                    const activeClass = classNames({
                        'active': item.active
                    })
                    return (
                        <button className={`btn ${item.class} ${activeClass}`} 
                            id={item.id}
                            key={i}
                            onClick={onToggleFilter}>{item.name}</button>
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