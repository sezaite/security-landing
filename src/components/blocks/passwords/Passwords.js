import React from 'react'
import { PasswordList } from './PasswordList'

export const Passwords = () => {
  return (
    <section className='section section--grey'>
      <div className="container container--sm">
        <h2 className="section__title">
          Top leaked passwords
        </h2>
        <div className="table-header">
          <h4>Password</h4>
          <select name="sort-passwords" id="sort-passwords" className='select select--sm'>
            <option value="count" selected>Count</option>
            <option value="abc">ABC</option>
          </select>
        </div>
        <PasswordList/>
      </div>
    </section>
  )
}
