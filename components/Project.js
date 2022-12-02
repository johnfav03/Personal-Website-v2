import styles from '../styles/Project.module.css'
import SkillBar from './SkillBar';
import Image from 'next/image';

export default function Project({ title, date, msg, skills, img }) {
  return ( 
    <div className={styles.container}>
        <div className={styles.imgBox}>
            <div className={`${styles.blocker} ${styles.top}`} />
            <div className={`${styles.blocker} ${styles.bot}`} />
            <Image
                src={img}
                className={styles.centerImg}  
                height={190}
                width={190}
                alt="bg-img"
            />
        </div>
        <div className={styles.descBox}>
            <h1>{title}</h1>
            <h2>{date}</h2>
            <p className={styles.msg}>{msg}</p>
            <SkillBar arr={skills}/>
        </div>
    </div>
  );
}