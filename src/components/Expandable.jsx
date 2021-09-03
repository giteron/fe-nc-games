import { useState } from 'react';

const Expandable = ({ children, buttonName }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleOpen = () => setIsOpen((currOpen) => !currOpen);
  
    return (
      <div>
        <button id="expandable" onClick={toggleOpen}>{isOpen ? 'Close' : 'Open'}</button>
        {isOpen ? children : null}
      </div>
    );
};

export default Expandable;