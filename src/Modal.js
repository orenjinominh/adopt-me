import React, {useEffect, useRef} from 'react';
import {createPortal} from 'react-dom';



const Modal = ({children}) => {
  const elRef = useRef(null); 
  // elRef is object and .current will always point to div
  if (!elRef.current) {
    const div = document.createElement('div'); 
    elRef.current = div; 
  }

  // runs ONCE due to no dependencies []
  useEffect(() => {
    // grab modal here and then append that div 
    const modalRoot = document.getElementById('modal'); 
    modalRoot.appendChild(elRef.current); 

    // only runs this when modal root gets closed 
    return () => modalRoot.removeChild(elRef.current);
  }, [])

  // renders to different part of DOM and unmounts from that 
  return createPortal(<div>{children}</div>, elRef.current);

}

export default Modal; 