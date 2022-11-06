import React, { useState } from 'react'

export const FaqListItem = ({answers, question, id, onToggle, active}) => {

  return (
    <div className={active ? "accordion__item" : "accordion__item collapsed" } >
    <div className="accordion__toggler" onClick={() =>  onToggle(id)}>
        <h6>{question}</h6>
    </div>
    <div className="accordion__content">
      {
      answers.map((answer, index) => (
        <p key={answer+index}>
          {answer}
        </p>
      )
      )
      }
    </div>
 </div>
  )
}
