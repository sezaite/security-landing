import React, { useState } from 'react';
import useFetch from '../../../helpers/useFetch';
import { SortableTable } from '../../../components';

export const Passwords = () => {
  const { data, isFetching} = useFetch(`https://playground.nordsec.com/v2/worst-psw.json`);
  const [sortType, setSortType] = useState('count');
  
  return (
    <section className='section' id="top-leaked-passwords">
      <div className="container">
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
          <SortableTable data={data} sort={sortType} />
        }
      </div>
    </section>
  )
}
