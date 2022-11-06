import { useState } from "react"


export const PasswordList = ({data, sort}) => {

switch(sort) {
    case 'count':
      data.passwords.sort((a, b) => b.count - a.count);
      break;
    case 'abc':
      data.passwords.sort((a, b) => a.value.localeCompare(b.value));
      break;
    default:
      console.error('Err: unrecognized sort type');
  }

const [showAll, setShowAll] = useState(false);
    return (
        <>
            <table className="password-list-table">
                <tbody>
                {
                        showAll ? 

                        data.passwords.map((data, index)=> (
                            <tr key={data.value}>
                                <td>{index + 1}.</td>
                                <td>{data.value}</td>
                                <td>{data.count}</td>
                            </tr>
                        )) :

                        data.passwords.slice(0, 10).map((data, index)=> (

                            <tr key={data.value}>
                                <td>{index + 1}.</td>
                                <td>{data.value}</td>
                                <td>{data.count}</td>
                            </tr>
                        ))


                    }
                </tbody>
                    
        
                
            </table>     
            <button type='button' className='button button--primary mx-auto' onClick={(e) => setShowAll(!showAll)}>{showAll ? 'Show less' : 'Show all (50)'}</button>
        </>
    
    )
}
