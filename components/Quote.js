import styles from '../styles/Quote.module.css'

export default function Quote({ msg, auth }) {
  return ( 
    <div className={styles.container}>
        <p className={`${styles.quoteMark} ${styles.top}`}>“”</p>
        <h2>{msg}</h2>
        <h3>-{auth}</h3>
    </div>
  );
}