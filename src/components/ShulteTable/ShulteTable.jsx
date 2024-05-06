import style from './ShulteTable.module.css'
import {useEffect, useState} from "react";
import Api from "../../api/Api";
import { Loader } from '@consta/uikit/Loader';


const ShulteTable = ({number, reset, updateData, setState}) => {

    const [position, setPosition] = useState(0);
    const [selectedElements, setSelectedElements] = useState([]);
    const [grid, setGrid] = useState([]);


    useEffect(() => {
        getGrid().then(data => {
            resetGrid();
            setGrid(data);
        });
    }, [number, updateData]);


    useEffect(() => {
        resetGrid();
    }, [reset])

    const resetGrid = () => {
        setSelectedElements([]);
        setPosition(0);
        setState('initial');
    }

    const getGrid = async () => {
        const data = await Api.generateShulte(number);
        return data;
    }


    const handleClick  = (e, value) => {
        if(parseInt(e.target.textContent) === 1){
            setState('began');
        }
        if(parseInt(e.target.textContent) === (number*number)){
            setState('finished');
        }
        if (parseInt(e.target.textContent) === position + 1) {
            setSelectedElements([...selectedElements, value]);
            setPosition(position+1);
        }
    }

    const getElements = (row) => {
        return grid[row].map((value, index) => (
            <div
                key={`${row}-${index}`}
                className={`${style.element} ${selectedElements.includes(value) ? style['element-selected'] : ''}`}
                onClick={(e) => handleClick(e, value)}
            >
                {value}
            </div>
        ));
    }

    const getRows = () => {
        let rows = [];
        for(let i = 0; i < grid.length; ++i){
            rows.push(<div className={style.row} key={i}>
                {getElements(i)}
            </div>)
        }
        return rows;
    }


    if (grid.length === 0) {
        return(
            <div className={style.table}>
                <Loader size="m" />
            </div>
        )
    }


    return(
            <div className={style.table}>
                {getRows()}
            </div>
    );
}
export default ShulteTable;