import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'

export const AccordionItem = ({togglerText, contentText, id, onToggle, active}) => {
  const toggler = useRef(null);
  const content = useRef(null);

  const [togglerHeight, setTogglerHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);

  const calculateAccordionItemHeight = () => {
    setTogglerHeight(toggler.current.offsetHeight + 32);
    setContentHeight(content.current.offsetHeight + 26);
  }

  const handleClick = () => {
    calculateAccordionItemHeight();
    onToggle(id);
  }

  useEffect(()=>{
    calculateAccordionItemHeight();
    window.addEventListener('resize', ()=> {
      calculateAccordionItemHeight();
    })
  }, [togglerHeight]);

  return (
    <div className={active ? "accordion__item" : "accordion__item collapsed" } style={{height: active ? `${togglerHeight + contentHeight}px` : `${togglerHeight}px`}} >
      <div className="accordion__toggler" onClick={() => handleClick()} ref={toggler}>
          <h6>{togglerText}</h6>
      </div>
      <div className="accordion__content" ref={content}>
        {
      contentText.map((answer, index) => (
          <p key={answer+index}>
            {answer}
          </p>
          ))
          }
      </div>
    </div>
  )
}