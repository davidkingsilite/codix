import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import contactImg from '../../../public/pexels-george-milton-7034717.jpg'
import Button from '@/component/button/Button'


export const metadata = {
  title: 'Contact',
}


const contactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Let&apos;s Keep in Touch</div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image 
          src={contactImg}
          alt="contact us"
          fill={true}
          className={styles.img}
          />
        </div>
        <form className={styles.form}>
           <input type="text" placeholder='name' className={styles.input} />
           <input type="text" placeholder='email' className={styles.input} />
           <textarea 
              placeholder='message'
              className={styles.textArea}
              cols="30"
              rows="10"
            />
           <Button url="#" text="Send" />    
        </form>
      </div>
      
    </div>
  )
}

export default contactPage
