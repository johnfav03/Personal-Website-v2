import styles from '../styles/Spacer.module.css'

export default function Spacer({ hgt, wid }) {
    let spacerStyle = {
        height: hgt,
        width: wid,
        display: 'block',
    }

  return ( 
    <div 
        className={styles.container}
        style={spacerStyle}
    ></div>
  );
}