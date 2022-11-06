import React, { useEffect, useState } from 'react'

export const PasswordList = () => {

    const [passwords, setPasswords] = useState({status: 'unloaded', passwords: {}});

useEffect(()=>{

}, []);


return <>
    {
        passwords.status === 'loaded'  ? <div className="password-list"><button type='button' className='button'>Load more</button></div> : <div className="loader">Loading...</div>    
    }
     </>
}
