import React, { useState } from 'react'
import { FaqListItem } from './FaqListItem'

const FAQ = [
  {id: 1, question: 'Why should you use a password manager for business?', answers: ['Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager.', 'With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!']},
  {id: 2, question: 'How to choose the best password manager for business?', answers: ['Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager.', 'With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!']},
  {id: 3, question: 'How can I get a business password manager?', answers: ['Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager.', 'With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!']},
]


export const Faq = () => {

const [clicked, setClicked] = useState("0");

const onToggle = (index) => {
if (clicked === index) {
   return setClicked("0");
  }
  setClicked(index);
}

  return (
    <section className='section section--grey'>
      <div className="container container--sm">
        <h2 className="section__title">
          Frequently asked questions
        </h2>
        <div className="accordion accordion--faq" id="accordion--faq">

          {
            FAQ.map(({id, question, answers}) => (
              <FaqListItem key={id} id={id} question={question} answers={answers} onToggle={onToggle} active={clicked === id}/>
            )
            )
          }


          
      </div>
      </div>
    </section>
  )
}
