'use client'
import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import styles from './Header.module.sass'
import './Header.css'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  const closeMenu = () => {
    setMenuOpen(false);
  }
  const handleLinkClick = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  }
  return (
    <>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <div className={styles.menuContainer}>
          <div className={styles.menuContainer__profile}>
            <svg
              className="profile-svg"
              width="45px"
              height="45px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M12 22.01C17.5228 22.01 22 17.5329 22 12.01C22 6.48716 17.5228 2.01001 12 2.01001C6.47715 2.01001 2 6.48716 2 12.01C2 17.5329 6.47715 22.01 12 22.01Z" fill="#CD1F32"></path>
              <path d="M12 6.93994C9.93 6.93994 8.25 8.61994 8.25 10.6899C8.25 12.7199 9.84 14.3699 11.95 14.4299C11.98 14.4299 12.02 14.4299 12.04 14.4299C12.06 14.4299 12.09 14.4299 12.11 14.4299C12.12 14.4299 12.13 14.4299 12.13 14.4299C14.15 14.3599 15.74 12.7199 15.75 10.6899C15.75 8.61994 14.07 6.93994 12 6.93994Z" fill="#CD1F32"></path>
              <path d="M18.7807 19.36C17.0007 21 14.6207 22.01 12.0007 22.01C9.3807 22.01 7.0007 21 5.2207 19.36C5.4607 18.45 6.1107 17.62 7.0607 16.98C9.7907 15.16 14.2307 15.16 16.9407 16.98C17.9007 17.62 18.5407 18.45 18.7807 19.36Z" fill="#CD1F32"></path>
            </svg>
            <div className={styles.profileData}>
              <p className={styles.profileData__dataName}>Franky Vargas</p>
              <Link href="#" className={styles.profileData__dataWatch}>Ver perfil</Link>
            </div>
          </div>
          <svg
            className="close-menu"
            onClick={closeMenu}
            width="30px"
            height="30px"
            viewBox="0 0 1024.00 1024.00"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            stroke="#000000">
            <path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path>
          </svg>
        </div>

        <div className={styles.Board}>
          <ul className="menu-content_elements">
            <li>
              <svg width={'30px'} height={'30px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity=".8" d="M2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495C22.2051 9.00229 22.0154 10.3208 21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579Z" stroke="#000" stroke-width="1.5"></path> <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" stroke="#000" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
              <Link onClick={handleLinkClick} href="/">Home</Link>
            </li>
            
            {/* <li>
              <svg width="30px" height="30px" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="clip-stats">
                    <rect width="96" height="96"/>
                  </clipPath>
                </defs>
                <g id="stats" clip-path="url(#clip-stats)">
                  <g id="pills" transform="translate(-232)">
                    <rect id="Rectangle_12" data-name="Rectangle 12" width="88" height="88" rx="8" transform="translate(236 4)" fill="none" stroke="#000000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/>
                    <g id="Group_157" data-name="Group 157">
                      <g id="Group_156" data-name="Group 156">
                        <line id="Line_22" data-name="Line 22" y2="34" transform="translate(272 42)" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                        <line id="Line_23" data-name="Line 23" y2="42" transform="translate(305 34)" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                        <line id="Line_24" data-name="Line 24" y2="29" transform="translate(288 47)" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                        <line id="Line_25" data-name="Line 25" y2="23" transform="translate(255 53)" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                      </g>
                      <path id="Path_189" data-name="Path 189" d="M255,42l17-14,16,6,17-15" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
                    </g>
                  </g>
                </g>
              </svg>
              <Link  onClick={handleLinkClick} href="/">Préstamos de articulos</Link>
            </li>

            <li>
              <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30px" height="30px" fill="#000000">
                <path className="st0" d="M430.337,231.065H81.674c-29.701,0-53.858,24.16-53.858,53.862v49.884v15.976l15.806,2.262 c9.135,1.31,16.03,9.258,16.03,18.483c0,9.225-6.891,17.173-16.022,18.482l-15.814,2.262v15.978v49.892 c0,29.693,24.157,53.854,53.858,53.854h348.663c29.701,0,53.862-24.161,53.862-53.854v-49.558V391l-17.571-0.822 c-9.982-0.463-17.808-8.655-17.808-18.645c0-9.982,7.826-18.174,17.815-18.646l17.564-0.83v-17.58v-49.55 C484.199,255.225,460.038,231.065,430.337,231.065z M465.765,334.477c-19.686,0.936-35.371,17.14-35.371,37.056 c0,19.923,15.685,36.135,35.371,37.055v49.558c0,19.565-15.864,35.428-35.428,35.428H81.674c-19.569,0-35.432-15.863-35.432-35.428 v-49.892c17.991-2.579,31.836-18.011,31.836-36.722c0-18.703-13.846-34.135-31.836-36.721v-49.884 c0-19.573,15.863-35.436,35.432-35.436h348.663c19.564,0,35.428,15.863,35.428,35.436V334.477z"/>
                <rect x="133.621" y="439.419" className="st0" width="12.19" height="31.8"></rect> <rect x="133.621" y="383.564" className="st0" width="12.19" height="31.792"></rect> <rect x="133.621" y="327.7" className="st0" width="12.19" height="31.8"></rect> <rect x="133.621" y="271.846" className="st0" width="12.19" height="31.799"></rect> 
                <polygon className="st0" points="111.245,180.758 100.592,186.68 116.053,214.461 126.702,208.539 "></polygon>
                <path className="st0" d="M497.524,179.025l-24.095-43.311l-8.558-15.36l-15.749,7.826c-8.948,4.442-19.768,1.09-24.617-7.639 c-4.865-8.721-2.001-19.687,6.492-24.95l14.952-9.266l-8.558-15.368l-24.088-43.294C398.863,1.714,366.006-7.658,340.047,6.79 L35.374,176.299c-25.955,14.44-35.318,47.305-20.878,73.256l0.875,1.578c3.27-6.394,7.43-12.243,12.324-17.409 c-4.803-15.643,1.762-33.044,16.636-41.326l304.681-169.51c17.1-9.518,38.674-3.368,48.192,13.732l24.088,43.302 c-16.751,10.38-22.575,32.182-12.895,49.582c9.681,17.401,31.271,23.942,48.925,15.172l24.095,43.312 c7.273,13.056,5.337,28.692-3.571,39.601c4.776,3.961,8.989,8.558,12.65,13.569C505.4,224.524,508.979,199.615,497.524,179.025z"/>
              </svg>
              <Link onClick={handleLinkClick} href="/">Lorem</Link>
            </li> */}
          </ul>
        </div>

        <h2>Hecho con 💚 para el mundo</h2> 
      </div>

      <header className={styles.Header}>
        <div className={`container-svg-header ${menuOpen ? "open" : ""}`}>
          <svg
            onClick={toggleMenu}
            width="30px"
            height="30px"
            viewBox="0 -1 12 12"
            id="meteor-icon-kit__regular-bars-s"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.85714 2C0.38376 2 0 1.55228 0 1C0 0.44772 0.38376 0 0.85714 0H11.1429C11.6162 0 12 0.44772 12 1C12 1.55228 11.6162 2 11.1429 2H0.85714zM0.85714 6C0.38376 6 0 5.5523 0 5C0 4.4477 0.38376 4 0.85714 4H11.1429C11.6162 4 12 4.4477 12 5C12 5.5523 11.6162 6 11.1429 6H0.85714zM0.85714 10C0.38376 10 0 9.5523 0 9C0 8.4477 0.38376 8 0.85714 8H11.1429C11.6162 8 12 8.4477 12 9C12 9.5523 11.6162 10 11.1429 10H0.85714z"
              fill="#CD1F32"/>
          </svg>
        </div>
        <div className={styles.Header__imageContainer}>
          <Image src="/images/logo-universidad-del-valle.png" alt="" fill/>
        </div>
      </header>
    </>
  )
}
