import styles from '../styles/TitleBar.module.css';
import { useState } from 'react';
import Link from 'next/link';

export default function TitleBar({ lineOne, lineTwo }) {
  const [size, setSize] = useState(0);
  const [padd, setPadd] = useState(0);
  const [wid, setWid] = useState(80);

  return (
    <>
        <div className={styles.container}>
            <h2 className={styles.headTwo}>{lineOne}</h2>
            <h1 className={styles.headOne}>{lineTwo}</h1>
        </div>
        <div className={styles.navBar}>
            <div className={styles.horzBar}></div>
            <div 
              className={styles.navCont}
              style={{width:wid, transition: "width 0.8s"}}
            >
              <Link href='/' style={{width:size, paddingLeft: padd, paddingRight: padd, transition: "all 1s"}} className={styles.navLink}>HOME</Link>
              <Link href='/projects/software' style={{width:size, paddingLeft: padd, paddingRight: padd, transition: "all 1s"}} className={styles.navLink}>SOFTWARE</Link>
              <Link href='/projects/electrical' style={{width:size, paddingLeft: padd, paddingRight: padd, transition: "all 1s"}} className={styles.navLink}>ELECTRICAL</Link>
              <div className={styles.menuBtn}>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    if (wid == 80) {
                      setWid(507);
                      setPadd(20);
                      setSize("auto")
                    }
                    else {
                      setWid(80);
                      setPadd(0);
                      setSize(0);
                    }
                  }}
                >
                  <div></div>
                  <div></div>
                  <div></div>
              </button></div>
            </div>
        </div>
    </>
  );
}