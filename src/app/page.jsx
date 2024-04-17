import Image from "next/image";
import styles from "./page.module.css";
import Hail from "../../public/pexels-alexander-grey-1209843.jpg"
import Button from "@/component/button/Button";

export default function Home() {
  return (
   <div className={styles.container}>
     <div className={styles.item}>
       <h1 className={styles.title}>Better Design for your digital <br/> products.</h1>
       <p className={styles.desc}>
        Turn your ideas into a reality. We bring together the teams from the global <br/>tech industry.
        </p>
       <Button text="See our work" url="/portfolio"/>
      </div>
     <div className={styles.items}>  
     <Image src={Hail} className={styles.img} alt="Photo by Alexander Grey"/>
     </div>
   </div>
  );
}


// https://images.pexels.com/photos/3693901/pexels-photo-3693901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=400
// https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// https://images.pexels.com/photos/7034717/pexels-photo-7034717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1
// https://images.pexels.com/photos/326333/pexels-photo-326333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1