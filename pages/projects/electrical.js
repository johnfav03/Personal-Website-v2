import Head from 'next/head'
import styles from '../../styles/Electrical.module.css'
import TitleBar from '../../components/TitleBar.js'
import Spacer from '../../components/Spacer.js'
import TileBg from '../../components/TileBg.js'
import Project from '../../components/Project.js'

export default function Electrical() {
  return (
    <div className={styles.container}>
        <Head>
            <title>John Favret</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon-circ.png" />
        </Head>
        <TitleBar lineOne={""} lineTwo={"ELECTRICAL PROJECTS"}/>
        <Spacer hgt={"30px"}/>
        <TileBg count={4}/>
        <div className={styles.mainCol}>
            <Project 
                title={"TABLE CLEANING ROBOT"}
                date={"WINTER 2020"}
                msg={"This was my final project in the Engineering Club I helped found. We designed, printed, assembled, and coded the robot, which could autonomously clean a surface without falling off. It won 1st place in a local competition, winning 1K."}
                skills={["Arduino", "C / C++", "Autonomous"]}
                img={"/images/table-bot.png"}
            />
            <Project 
                title={"LIGHT TRACKING ROBOT"}
                date={"FALL 2019"}
                msg={"One of my favorites to build - a robot that follows a moving light source by rotating its “head”, a small breadboard mounted atop a stepper motor. The head supported the photoresistors, presenting the challenge of wiring across layers!"}
                skills={["Arduino", "C / C++", "Tracking"]}
                img={"/images/light-bot.png"}
            />
            <Project
              title={"WII NUNCHUK PAINTER"}
              date={"FALL 2018"}
              msg={"This project utilized an old Nintendo Wii Nunchuk, spliced onto wires that linked to an Arduino, to draw on a “canvas” - two daisy-chained 8x8 LED Matrices. The joystick controlled the cursor, the two buttons toggled the pen and eraser modes."}
              skills={["Arduino", "C / C++", "Daisy-chain"]}
              img={"/images/nunchuk.png"}
            />
            <Project 
                title={"VALENTINE'S DAY OPERATION"}
                date={"WINTER 2016"}
                msg={"I made this in middle school as a gift, when I was first learning circuits. It consists of a battery connected at a buzzer and a heart-shaped loop of wire, with a pair of tweezers on the other side. If the tweezers touch the loop, the buzzer activates."}
                skills={["Series", "Buzzer"]}
                img={"/images/valentine.png"}
            />
        </div>
    </div>
  )
}