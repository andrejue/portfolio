import { useRef, useEffect } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (

         <nav className={`menu__modal ${isOpen && "open"}`} id="menu" ref={modalRef}>
            <ul className="nav__list">
               <a href="#">
                  <li className="nav__item">Sobre Mim</li>
               </a>
               <a href="#project1">
                  <li className="nav__item">Projetos</li>
               </a>
               <a href="#">
                  <li className="nav__item">Github</li>
               </a>
               <a href="#">
                  <li className="nav__item">Contato</li>
               </a>
            </ul>
         </nav>

  );
};

export default Modal;
