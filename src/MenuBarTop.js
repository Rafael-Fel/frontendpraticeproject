
import { useState } from 'react';

export default function MenubarTop() {
  const [style, setStyle] = useState("Submenu");

  const handleClick = () => {
    style == "Submenuappear" ? (
      setStyle("Submenu")) : (setStyle("Submenuappear"))
  }

  return (
    <div className="menu-position-fixed">
      <nav className="menu">
        <a className='menu' href="">MONOGRAM</a>
        <div className="navbar">
          <ul>
            <a className="menu" href=""><li>HOW IT WORKS</li></a>
            <li><button onClick={handleClick}> WORKFLOWS &dArr;</button></li>
            <a className="menu" href=""><li>DOWNLOAD</li></a>
            <a className="menu" href=""><li>BLOG</li></a>
            <a className="menu" href=""><li>SUPPORT</li></a>
            <a className="menu" href=""><li>SHOP</li></a>
          </ul>
        </div>
      </nav>
      <div className='Hidemenu'>
        <ul>
          <a href=''><li className={style}>PHOTO EDITING</li></a>
          <a href=''><li className={style}>VIDEO AND FILMAKING</li></a>
          <a href=''><li className={style}>MUSIC AND AUDIO</li></a>
          <a href=''><li className={style}>VISUAL PRODUCTION</li></a>
          <a href=''><li className={style}>EVERY ESSENTIALS</li></a>
        </ul>
      </div>
    </div>
  )
}