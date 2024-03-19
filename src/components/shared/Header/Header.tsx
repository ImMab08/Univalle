'use client'
import React, { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'
import Image from "next/image"
import Link from "next/link"

import './Header.css'

export const Header = () => {

  const router = usePathname();

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

  if(router === `/auth/login` || router === `/auth/register`) {
    return null
  } else
  return (
      <section>
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <div className=" flex justify-between items-center p-2 border-b-4 border-solid border-[#f0f0f0]">
            <div className=" flex items-center justify-center ">
              <svg
                className="profile-svg mr-1 cursor-pointer"
                width="70px"
                height="70px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.4" d="M12 22.01C17.5228 22.01 22 17.5329 22 12.01C22 6.48716 17.5228 2.01001 12 2.01001C6.47715 2.01001 2 6.48716 2 12.01C2 17.5329 6.47715 22.01 12 22.01Z" fill="#CD1F32"></path>
                <path d="M12 6.93994C9.93 6.93994 8.25 8.61994 8.25 10.6899C8.25 12.7199 9.84 14.3699 11.95 14.4299C11.98 14.4299 12.02 14.4299 12.04 14.4299C12.06 14.4299 12.09 14.4299 12.11 14.4299C12.12 14.4299 12.13 14.4299 12.13 14.4299C14.15 14.3599 15.74 12.7199 15.75 10.6899C15.75 8.61994 14.07 6.93994 12 6.93994Z" fill="#CD1F32"></path>
                <path d="M18.7807 19.36C17.0007 21 14.6207 22.01 12.0007 22.01C9.3807 22.01 7.0007 21 5.2207 19.36C5.4607 18.45 6.1107 17.62 7.0607 16.98C9.7907 15.16 14.2307 15.16 16.9407 16.98C17.9007 17.62 18.5407 18.45 18.7807 19.36Z" fill="#CD1F32"></path>
              </svg>
              <div className="flex flex-col">
                <p className=" text-xl font-bold mb-1">Franky Vargas</p>
                <Link onClick={handleLinkClick} href="/profile" className="{styles.profileData__dataWatch}">Ver perfil</Link>
              </div>
            </div>
            <svg
              className="close-menu mr-1 cursor-pointer"
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

          <div className="w-full h-full pl-4">
            <ul className="menu-content_elements list-none">
              <li className="list-none flex items-center m-0 mt-5 cursor-pointer">
                <svg className=" mr-2" width={'30px'} height={'30px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.36407 12.9579C1.98463 10.3208 1.79491 9.00229 2.33537 7.87495C2.87583 6.7476 4.02619 6.06234 6.32691 4.69181L7.71175 3.86687C9.80104 2.62229 10.8457 2 12 2C13.1543 2 14.199 2.62229 16.2882 3.86687L17.6731 4.69181C19.9738 6.06234 21.1242 6.7476 21.6646 7.87495C22.2051 9.00229 22.0154 10.3208 21.6359 12.9579L21.3572 14.8952C20.8697 18.2827 20.626 19.9764 19.451 20.9882C18.2759 22 16.5526 22 13.1061 22H10.8939C7.44737 22 5.72409 22 4.54903 20.9882C3.37396 19.9764 3.13025 18.2827 2.64284 14.8952L2.36407 12.9579Z" stroke="#000" stroke-width="2"></path> <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16" stroke="#000" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                <Link className=" text-2xl font-medium text-black" onClick={handleLinkClick} href="/">Home</Link>
              </li>
              <li className="list-none flex items-center m-0 mt-5 cursor-pointer">
                <svg className=" mr-2" width={'30px'} height={'30px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 19V6.2C5 5.0799 5 4.51984 5.21799 4.09202C5.40973 3.71569 5.71569 3.40973 6.09202 3.21799C6.51984 3 7.0799 3 8.2 3H15.8C16.9201 3 17.4802 3 17.908 3.21799C18.2843 3.40973 18.5903 3.71569 18.782 4.09202C19 4.51984 19 5.0799 19 6.2V17H7C5.89543 17 5 17.8954 5 19ZM5 19C5 20.1046 5.89543 21 7 21H19M18 17V21M15 13.5C14.7164 12.3589 13.481 11.5 12 11.5C10.519 11.5 9.28364 12.3589 9 13.5M12 7.5H12.01M13 7.5C13 8.05228 12.5523 8.5 12 8.5C11.4477 8.5 11 8.05228 11 7.5C11 6.94772 11.4477 6.5 12 6.5C12.5523 6.5 13 6.94772 13 7.5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <Link className=" text-2xl font-medium text-black" onClick={handleLinkClick} href="/area-personal">Área personal</Link>
              </li>
              <li className="list-none flex items-center m-0 mt-5 cursor-pointer">
                <svg className=" mr-2" width={'30px'} height={'30px'} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" fill-rule="evenodd" d="M6.98.678a2.25 2.25 0 012.04 0l5.297 2.696c.42.214.683.644.683 1.114v6.717c0 .658-.37 1.261-.956 1.56L9.02 15.322a2.25 2.25 0 01-2.042 0l-5.023-2.557A1.75 1.75 0 011 11.205V4.488c0-.47.264-.9.683-1.114L6.979.678zm1.36 1.337a.75.75 0 00-.68 0L3.224 4.273 8 6.661l4.776-2.388L8.34 2.015zm-5.84 9.19V5.588l4.75 2.375v5.814l-4.613-2.35a.25.25 0 01-.137-.222zm6.25 2.572l4.613-2.35a.25.25 0 00.137-.222V5.588L8.75 7.963v5.814z" clip-rule="evenodd"></path></g></svg>                
                <Link className=" text-2xl font-medium text-black" onClick={handleLinkClick} href="/servicios">Servicios</Link>
              </li>
              <li className="list-none flex items-center m-0 mt-5 cursor-pointer">
                <svg className=" mr-2" width={'30px'} height={'30px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V7C19 7.55228 19.4477 8 20 8C20.5523 8 21 7.55228 21 7V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM22.1213 10.7071C20.9497 9.53553 19.0503 9.53553 17.8787 10.7071L16.1989 12.3869L11.2929 17.2929C11.1647 17.4211 11.0738 17.5816 11.0299 17.7575L10.0299 21.7575C9.94466 22.0982 10.0445 22.4587 10.2929 22.7071C10.5413 22.9555 10.9018 23.0553 11.2425 22.9701L15.2425 21.9701C15.4184 21.9262 15.5789 21.8353 15.7071 21.7071L20.5556 16.8586L22.2929 15.1213C23.4645 13.9497 23.4645 12.0503 22.2929 10.8787L22.1213 10.7071ZM18.3068 13.1074L19.2929 12.1213C19.6834 11.7308 20.3166 11.7308 20.7071 12.1213L20.8787 12.2929C21.2692 12.6834 21.2692 13.3166 20.8787 13.7071L19.8622 14.7236L18.3068 13.1074ZM16.8923 14.5219L18.4477 16.1381L14.4888 20.097L12.3744 20.6256L12.903 18.5112L16.8923 14.5219Z" fill="#000000"></path> </g></svg>                
                <Link className=" text-2xl font-medium text-black" onClick={handleLinkClick} href="/">Notas</Link>
              </li>
              <li className="list-none flex items-center m-0 mt-5 cursor-pointer">
                <svg className=" mr-2" width={'30px'} height={'30px'} fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.393 512.393"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(-1)"> <g> <g> <path d="M205.979,278.571l62.571-13.419c11.52-2.471,18.856-13.812,16.386-25.332s-13.812-18.856-25.332-16.386l-62.571,13.419 c-11.52,2.471-18.856,13.812-16.386,25.332C183.117,273.706,194.459,281.042,205.979,278.571z"></path> <path d="M384.783,196.624l-41.728,8.939c-11.521,2.468-18.859,13.808-16.392,25.329c2.468,11.521,13.808,18.859,25.329,16.392 l41.728-8.939c11.521-2.468,18.859-13.808,16.392-25.329C407.644,201.495,396.304,194.156,384.783,196.624z"></path> <path d="M398.18,259.202L335.61,272.62c-11.52,2.471-18.856,13.812-16.386,25.332s13.812,18.856,25.332,16.386l62.571-13.419 c11.52-2.471,18.856-13.812,16.386-25.332C421.042,264.067,409.7,256.731,398.18,259.202z"></path> <path d="M219.376,341.149l41.728-8.939c11.521-2.468,18.859-13.808,16.392-25.329c-2.468-11.521-13.808-18.859-25.329-16.392 l-41.728,8.939c-11.521,2.468-18.859,13.808-16.392,25.329C196.515,336.278,207.855,343.617,219.376,341.149z"></path> <path d="M411.585,321.782l-20.864,4.48c-11.519,2.474-18.853,13.817-16.379,25.337c2.474,11.519,13.817,18.853,25.337,16.379 l20.864-4.48c11.52-2.474,18.853-13.817,16.379-25.337C434.448,326.642,423.104,319.309,411.585,321.782z"></path> <path d="M307.295,344.131l-83.435,17.877c-11.521,2.468-18.859,13.809-16.39,25.329c2.469,11.521,13.809,18.859,25.329,16.39 l83.435-17.877c11.521-2.468,18.859-13.809,16.39-25.329C330.156,349.001,318.816,341.663,307.295,344.131z"></path> <path d="M512.915,387.339L445.864,74.443c-2.469-11.52-13.807-18.857-25.327-16.39l-35.81,7.669 c-4.434-31.023-31.089-54.862-63.34-54.862c-35.355,0-64,28.645-64,64c0,6.115,0.875,12.021,2.475,17.621l-17.647,3.782 L68.392,73.67c-11.701-1.521-22.414,6.745-23.911,18.449L1.175,430.7c-1.493,11.67,6.744,22.345,18.41,23.862l143.84,18.702 c4.945,5.392,12.533,8.099,20.204,6.456l11.127-2.384l184.67,24.017c11.683,1.519,22.386-6.719,23.906-18.402l6.736-51.755 l86.456-18.527C508.046,410.2,515.384,398.86,512.915,387.339z M321.386,53.526c11.791,0,21.333,9.542,21.333,21.333 c0,2.729-0.531,5.329-1.463,7.727c-0.219,0.399-0.428,0.804-0.622,1.218c-2.421,5.177-6.681,9.087-11.803,11.028 c-0.01,0.004-0.02,0.007-0.03,0.011c-0.753,0.284-1.529,0.514-2.316,0.711c-0.188,0.046-0.372,0.103-0.562,0.144 c-0.257,0.057-0.52,0.096-0.78,0.143c-0.397,0.07-0.796,0.135-1.2,0.183c-0.214,0.026-0.429,0.051-0.645,0.071 c-0.631,0.056-1.267,0.096-1.912,0.096c-0.008,0-0.016-0.001-0.024-0.001c-0.654-0.001-1.298-0.039-1.937-0.098 c-1.137-0.11-2.255-0.321-3.35-0.62c-0.163-0.056-0.329-0.092-0.492-0.144c-2.863-0.86-5.559-2.348-7.972-4.43 c-0.496-0.428-1.013-0.823-1.54-1.2c-3.721-3.839-6.02-9.065-6.02-14.841C300.053,63.069,309.595,53.526,321.386,53.526z M84.091,118.736l33.144,4.308l-9.6,2.058c-11.52,2.469-18.857,13.81-16.388,25.33l17.706,82.617l41.906,195.555l-104.66-13.608 L84.091,118.736z M363.776,456.291l-44.07-5.732l46.102-9.879L363.776,456.291z M386.582,392.593 c-0.064,0.013-0.128,0.021-0.192,0.035l-190.837,40.9L151.41,227.555l-13.972-65.202l140.547-30.121l-18.633,40.35 c-4.94,10.697-0.273,23.372,10.424,28.312c10.697,4.94,23.372,0.273,28.312-10.424l23.837-51.619 c0.798-0.007,1.594-0.03,2.386-0.066c0.21-0.009,0.419-0.018,0.628-0.029c0.891-0.049,1.778-0.116,2.661-0.202 c0.295-0.028,0.587-0.063,0.881-0.095c0.654-0.073,1.305-0.155,1.953-0.248c0.547-0.077,1.091-0.164,1.634-0.256 c0.451-0.076,0.902-0.155,1.35-0.241c16.59-3.155,30.898-12.706,40.279-25.996l34.918-7.478l58.111,271.179L386.582,392.593z"></path> </g> </g> </g> </g></svg>
                <Link className=" text-2xl font-medium text-black" onClick={handleLinkClick} href="/">Noticias</Link>
              </li>
            </ul>
          </div>
        </div>

        <header className=" flex items-center justify-between w-full h-full border-b-4 border-solid border-[#f0f0f0]">
          <div className={`container-svg-header ${menuOpen ? "open" : ""}`}>
            <svg
              onClick={toggleMenu}
              width="40px"
              height="40px"
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
          <div className=" relative w-[230px] h-[50px] md:w-[350px] md:h-[60px]">
            <Image className=" object-contain" src="/images/logo-universidad-del-valle.png" alt="" fill/>
          </div>
        </header>
      </section>
  )
}
