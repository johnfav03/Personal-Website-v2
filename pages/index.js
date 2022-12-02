import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TitleBar from '../components/TitleBar.js'
import SkillBar from '../components/SkillBar.js'
import Spacer from '../components/Spacer.js'
import Quote from '../components/Quote.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>John Favret</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon-circ.png" />
      </Head>
      <Image
        src="/images/bg-img.jpg"
        className={styles.halfImg}  
        height={190}
        width={190}
        alt="bg-img"
      />
      <div className={styles.halfCov}>
        <div className={styles.halfDark} />
        <div className={styles.halfGrad} />
      </div>
      <div className={styles.main}>
      <TitleBar lineOne={"HELLO, MY NAME IS"} lineTwo={"JOHN FAVRET"}/>
        <div className={styles.mainCol}>
          <div className={styles.desc}>
            <p>
              I’m currently studying Computer Science full-time at the 
              University of Michigan, but that hasn’t slowed down my 
              love for making, breaking, and general tinkering. Since
              then, this passion has led me to my current position as
              a Front-End Web Developer. At the moment, some of my
              favorite languages/technologies to use include:
            </p>
            <SkillBar arr={['Next.js', 'Javascript', 'C++', 'Arduino']}/>
            <Spacer hgt={"10px"} wid={"10px"}/>
            <p className={styles.desc}>
              In addition to programming, one of my hobbies is simple
              robotics and electronics; if you'd like to see some of my
              recent and favorite projects, software or electrical,
              the menu button above can take you there!
            </p>
          </div>
          <Spacer hgt={"45px"} wid={"40px"}/>
          <Image
            src="/images/rock-img.png"
            className={styles.rightImg}  
            height={285}
            width={325}
            alt="rocks"
          />
          <Quote 
            msg={"And if I have rocks on my way, I shall keep them all. Someday, I will build up my own castle…"}
            auth={"Fernando Pessoa"}
            className={styles.mainQuote}
          />
          <Spacer hgt={"30px"} wid={"10px"}/>
        </div>
        <div className={styles.footer}>
            <a href="https://github.com/johnfav03" target="blank_"><Image
              src="/images/github-icon.png" 
              height={30}
              width={30}
              alt="github-icon"
            /></a>
            <a href="https://www.linkedin.com/in/johnfav" target="blank_"><Image
              src="/images/linkedin-icon.png"
              height={30}
              width={30}
              alt="linkedin-icon"
            /></a>
            <a href="mailto:johnfav@umich.edu" target="blank_"><Image
              src="/images/mail-icon.png" 
              height={30}
              width={30}
              alt="mail-icon"
            /></a>
          </div>
      </div>
    </div>
  )
}
