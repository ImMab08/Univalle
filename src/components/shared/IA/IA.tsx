'use client'
import React, { useState } from 'react';
import styles from './IA.module.sass'
import { useSwipeable } from 'react-swipeable';

export const CustomMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSwipeLeft = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
  });

  return (
    <div className={styles.content} {...swipeHandlers}>
      {/* Contenido de la aplicación */}
      <h1>Mi Aplicación</h1>

      {menuOpen && (
        <div className="menu">
          {/* Contenido del menú */}
          <button onClick={closeMenu}>Cerrar Menú</button>
        </div>
      )}
    </div>
  );
};