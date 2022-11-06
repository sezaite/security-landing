import React, { useEffect, useState } from 'react';
import useFetch from '../../../helpers/useFetch';
import { PasswordList } from './PasswordList'



export const Passwords = () => {
  const { data, isFetching, error } = useFetch(`https://playground.nordsec.com/v2/worst-psw.json`);
  const [sortType, setSortType] = useState('count');
  
  return (
    <section className='section'>
      <div className="container container--sm">
        <h2 className="section__title">
          Top leaked passwords
        </h2>
        <div className="table-header">
          <h4>Password</h4>
          <select name="sort-passwords" id="sort-passwords" defaultValue="count" onChange={(e)=>setSortType(e.target.value)} className='select select--sm'>
            <option value="count">Count</option>
            <option value="abc">ABC</option>
          </select>
        </div>
        {
        isFetching ? <div className="loader">Loading...</div> : 
      
        <PasswordList data={data} sort={sortType}/>
        }
      </div>
    </section>
  )
}
