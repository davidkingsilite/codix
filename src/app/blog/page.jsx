import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import blogImg from '../../../public/pexels-charles-parker-5859415.jpg' 

const blog = () => {
  return (
    <div className={styles.mainContainer}> 
      <Link href="/blog/testId" className={styles.container}>
         <div className={styles.imgContainer}>
          <Image 
            src={blogImg}
            alt='blogimg'
            width={400}
            height={250}
            className={styles.img}
            />
         </div>
         <div className={styles.content}>
           <h1 className={styles.title}>Test</h1>
           <p className={styles.desc}>Desc</p>
         </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
         <div className={styles.imgContainer}>
          <Image 
            src={blogImg}
            alt='blogimg'
            width={400}
            height={250}
            className={styles.img}
            />
         </div>
         <div className={styles.content}>
           <h1 className={styles.title}>Test</h1>
           <p className={styles.desc}>Desc</p>
         </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
         <div className={styles.imgContainer}>
          <Image 
            src={blogImg}
            alt='blogimg'
            width={400}
            height={250}
            className={styles.img}
            />
         </div>
         <div className={styles.content}>
           <h1 className={styles.title}>Test</h1>
           <p className={styles.desc}>Desc</p>
         </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
         <div className={styles.imgContainer}>
          <Image 
            src={blogImg}
            alt='blogimg'
            width={400}
            height={250}
            className={styles.img}
            />
         </div>
         <div className={styles.content}>
           <h1 className={styles.title}>Test</h1>
           <p className={styles.desc}>Desc</p>
         </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
         <div className={styles.imgContainer}>
          <Image 
            src={blogImg}
            alt='blogimg'
            width={400}
            height={250}
            className={styles.img}
            />
         </div>
         <div className={styles.content}>
           <h1 className={styles.title}>Test</h1>
           <p className={styles.desc}>Desc</p>
         </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
         <div className={styles.imgContainer}>
          <Image 
            src={blogImg}
            alt='blogimg'
            width={400}
            height={250}
            className={styles.img}
            />
         </div>
         <div className={styles.content}>
           <h1 className={styles.title}>Test</h1>
           <p className={styles.desc}>Desc</p>
         </div>
      </Link>
    </div>
  )
}

export default blog
