import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Footer = () => {

  return (
    <div className={styles.container}>
      <div> © 2024 codix copyright All right reserved</div>
      <div className={styles.social}>
        <Image  src="/facebook.png" width={15} height={15} className={styles.icon} alt="codix facebook" />
        <Image  src="/instagram.png" width={15} height={15} className={styles.icon} alt="codix" />
        <Image  src="/youtube.png" width={15} height={15} className={styles.icon}  alt="codix" />
        <Image  src="/tiktok.png" width={15} height={15} className={styles.icon} alt="codix" />
      </div>
    </div>
  )
}

export default Footer
