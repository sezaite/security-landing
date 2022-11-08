import { useEffect, useRef, useState } from "react";
import dataSort from "../../helpers/sort";

export const SortableTable = ({data, sort}) => {

const sortedData = dataSort(data.passwords, sort);

const handleClick = () => {
    setShowAll(!showAll);
    !buttonClicked && setButtonClicked(true);
}

const [showAll, setShowAll] = useState(false);
const [buttonClicked, setButtonClicked] = useState(false);

const ref = useRef(null);

useEffect(()=> {
   if (buttonClicked && !showAll) {
        window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop - 150 })
   } 
}, [showAll])

    return (
        <>
            <table className="sortable-table" ref={ref}>
                <tbody>
                {
                        showAll ? 

                        sortedData.map((data, index)=> (
                            <tr key={data.value}>
                                <td>{index + 1}.</td>
                                <td>{data.value}</td>
                                <td>{data.count}</td>
                            </tr>
                        )) :

                        sortedData.slice(0, 10).map((data, index)=> (

                            <tr key={data.value}>
                                <td>{index + 1}.</td>
                                <td>{data.value}</td>
                                <td>{data.count}</td>
                            </tr>
                        ))


                    }
                </tbody>
                    
        
                
            </table>     
            <button type='button' className='button button--primary button--md mx-auto' onClick={(e) => handleClick()}>{showAll ? 'Show less' : 'Show all (50)'}</button>
        </>
    
    )
}