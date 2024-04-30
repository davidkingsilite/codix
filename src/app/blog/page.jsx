import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import blogImg from '../../../public/pexels-charles-parker-5859415.jpg' 


async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',{ 
    cache: 'no-store' 
});
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}





const Blog = async () => {

 

const data = await getData();

  return (
    <div className={styles.mainContainer}> 
    {data.map((item)=>(

      <Link href="/blog/testId" className={styles.container} key={item.id}>
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
           <h1 className={styles.title}>{item.title}</h1>
           <p className={styles.desc}>{item.body}</p>
         </div>
      </Link>
  ))}
  
    </div>
  )
}

export default Blog
