"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import styles from './page.module.css'
import ThemeToggle from '../themeToggle/ThemeToggle'



const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
]

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const status = "notauthenticated";
     
  return (
    <div className={styles.container}>
     <Link href="/" className={styles.logo}>Codix</Link>
     <div className={styles.links}>

        <ThemeToggle />

        {links.map(link => (
            <Link key={link.id} href={link.url} className={styles.link}>
                      {link.title}
            </Link>
        ))}

        {status === "notauthenticated" ? (
       <div className={styles.box}>
        <Link href="/login">Login </Link> 
        <Link href="/register">/ Register</Link>
       </div>     
        ) : (   
            <button 
            className={styles.logoutbn}
            onClick={()=>{
                console.log("logged out")
            }}>
            Logout
        </button>
     ) 
    }
        <div className={styles.burger} onClick={()=>setOpen(!open)}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>
        { open && (<div className={styles.responsiveMenu}> 
                   {links.map(link => (
                     <Link key={link.id} href={link.url} className={styles.responsiveLinks}>
                      {link.title}
                     </Link>
                    ))}
                     {status === "notauthenticated" ? (
                     <div className={styles.responsiveBox}>
                     <Link href="/login">Login </Link> 
                     <Link href="/register">/ Register</Link>
                      </div>     
                     ) : (   
                     <button 
                       className={styles.responsiveLogoutbn}
                       onClick={()=>{
                       console.log("logged out")
                    }}>
                      Logout
                    </button>
                     ) 
                    }
                  </div>
        )
        }
     </div>
    </div>
  )
}

export default Navbar
