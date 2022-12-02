import styles from '../styles/SkillBar.module.css';

function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}

function Skill({ name }) {
  return (
    <div className={styles.skill}>
        <p> {truncate(name, 20)} </p>
    </div>
  );
}

export default function SkillBar({ arr }) {
  return ( 
    <div className={styles.container}>
      {arr.map(name => {
        return <Skill key={name} name={name}/> 
      })}
    </div>
  );
}