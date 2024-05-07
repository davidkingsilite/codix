import React from 'react'
import styles from './page.module.css'
import Button from '@/component/button/Button'
import Image from 'next/image'
import CatImg from '../../../../public/pexels-alexander-grey-1209843.jpg'
import { items } from './data'
import { notFound } from 'next/navigation'


const getData = (cat) => {
  const data = items[cat]

  if(data){
    return data
  }

  return notFound()
};


// export async function generateMetadata({ params }) {
  
//   const post = await getData(params.category);

//   console.log(post?.mainTitle && post.title );

//   return {
//     title: post.mainTitle,
    
//   };
// }

export const metadata = {
  title: 'Categories',
}

const Category = ({params}) => {
 const data = getData(params.category);

 console.log(params.category)

  return (
    <div className={styles.container}>

      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
       
        <div className={styles.item} key={item.id}>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
          <Button text="See more" url="#"/> 
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.img}
            src={item.image}
            fill={true} 
            alt='catergory'/>
        </div>
      </div>
     
    ))}
     
    </div>
  )
}

export default Category
