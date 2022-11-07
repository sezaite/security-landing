import React, { useState, useRef, useEffect } from 'react'

export const FaqListItem = ({answers, question, id, onToggle, active}) => {
  const item = useRef(null);
  const toggler = useRef(null);
  const content = useRef(null);



  const [itemHeight, setItemHeight] = useState(0);
  const [togglerHeight, setTogglerHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);

  const calculateAccordionItemHeight = () => {
    setTogglerHeight(toggler.current.offsetHeight + 32);
    setContentHeight(content.current.offsetHeight + 26);
  }

  useEffect(()=>{
    calculateAccordionItemHeight();
    window.addEventListener('resize', ()=> {
      calculateAccordionItemHeight();
    })
   
  }, []);

  
  return (
    <div className={active ? "accordion__item" : "accordion__item collapsed" } ref={item} style={{height: active ? `${togglerHeight + contentHeight}px` : `${togglerHeight}px`}} >
    <div className="accordion__toggler" onClick={() =>  onToggle(id)} ref={toggler}>
        <h6>{question}</h6>
    </div>
    <div className="accordion__content" ref={content}>
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
