import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Aimg from '../../../public/pexels-pixabay-270408.jpg'
import Button from '@/component/button/Button'


export const metadata = {
  title: 'About',
}


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src={Aimg} 
          fill={true}
          alt='aboutUs'
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.textTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}> Who Are We?</h1>
          <p className={styles.desc}>Codix is headquartered in San Francisco, California, with remote team members distributed across the globe. We&apos;re always on the lookout to add kind, thoughtful, and exceptionally talented individuals to our team. Drop us a line if you&apos;re motivated by the intersection of individual developer experience and global scale.</p>
        </div>
        <div className={styles.item}> 
          <h1 className={styles.title}> What We Do?</h1>
        <p className={styles.desc}>Codix helps software teams ship products fast and at any scale. We host everything from hundred-line prototypes to applications with hundreds of services, all with a relentless commitment to reliability and uptime.</p>
        <Button text="Contact Us" url="/contact" />
        </div>
      </div>
      
    </div>
  )
}

export default About
