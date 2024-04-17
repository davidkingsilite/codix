import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Img1 from '../../../../public/pexels-pixabay-326333.jpg'

const BlogPost = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
           <div className={styles.info}>
            <h1 className={styles.title}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic blanditiis assumenda dolore quia incidunt quam, nihil, reprehenderit ipsum aspernatur nobis praesentium nulla! Alias ipsam repellat ipsum eligendi rerum necessitatibus tempore?
            </p>
            <div className={styles.author}> 
              <Image
                src={Img1}
                alt=''
                width={40}
                height={40}
                className={styles.avatar}
              />
              <span className={styles.username}> John Doe </span>
            </div>
           </div>
           <div className={styles.imgContainer}>
            <Image 
             src={Img1}
             alt=''
             fill={true}
             className={styles.img}
             />
           </div>
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae sit ratione suscipit ut mollitia, placeat ipsum assumenda veritatis? Accusantium aut dicta at autem eos earum repellat! Quidem eveniet debitis ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, deleniti quibusdam. Vitae aperiam esse provident atque. Ratione exercitationem reprehenderit suscipit dignissimos! Quod tempore vitae reprehenderit repellat. Sunt error voluptate optio!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facere iste dignissimos cupiditate nostrum soluta reprehenderit libero consequuntur eaque quaerat quod harum illum voluptas modi omnis nisi, laudantium quia beatae.
            <br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam iure eligendi impedit vel saepe quibusdam deserunt eius, hic nisi adipisci. Accusamus sint numquam dignissimos dolor reiciendis exercitationem, eaque illo magnam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet ullam inventore tempore tempora et itaque totam, esse ad cupiditate sint cum non. Nam veniam magni eum laborum corporis distinctio.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugiat, commodi, magni quo consequuntur dolores corrupti beatae numquam quod voluptas debitis nisi, blanditiis placeat tenetur non fugit nam maiores eveniet.
          </p>

        </div>
    </div>
  )
}

export default BlogPost
