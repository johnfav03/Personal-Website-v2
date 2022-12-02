import Head from 'next/head'
import styles from '../../styles/Software.module.css'
import TitleBar from '../../components/TitleBar.js'
import Spacer from '../../components/Spacer.js'
import TileBg from '../../components/TileBg.js'
import Project from '../../components/Project.js'

export default function Software() {
  return (
    <div className={styles.container}>
        <Head>
            <title>John Favret</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon-circ.png" />
        </Head>
        <TitleBar lineOne={""} lineTwo={"SOFTWARE PROJECTS"}/>
        <Spacer hgt={"30px"}/>
        <TileBg count={5}/>
        <div className={styles.mainCol}>
            <Project 
                title={"VUE LOCATIONAL WEATHER"}
                date={"FALL 2022"}
                msg={"I started this project to learn the Vue.js technology, which I then also used to construct the site you're on right now! The web app features geolocational search,  weather updates, and live temperature through the use of the Open-Weather API."}
                skills={["HTML/CSS", "Vue.js", "Javascript"]}
                img={"/images/vue-weather.png"}
            />
            <Project 
                title={"ASSEMBLY SIMULATOR"}
                date={"FALL 2022"}
                msg={"This was the first project for EECS 370, Introduction to Computer Organization. We used C to transpile assembly commands to binary code, and then used a different C file to execute commands with only the binary instructions."}
                skills={["Assembly", "LC2K", "C / C++"]}
                img={"/images/assemble.png"}
            />
            <Project 
                title={"DJANGO IMAGE DROPZONE"}
                date={"WINTER 2022"}
                msg={"This project helped me better grasp back-end development - the application takes in images using the Dropzone.js library, then sends them to a back-end directory, where they're stored to later be retrieved and displayed in a gallery."}
                skills={["Django", "Python", "Dropzone.js", "Javascript"]}
                img={"/images/dropzone.png"}
            />
            <Project 
                title={"WORDLE STATS"}
                date={"WINTER 2022"}
                msg={"This was a project for fun, when the online daily wordle puzzles were very popular. It’s a C++ application run in the Ubuntu terminal that uses a list of all possible end words to judge the statistical value of different starting words."}
                skills={["C / C++", "Ubuntu"]}
                img={"/images/wordle.png"}
            />
            <Project 
                title={"POKEMON FLAPPY BIRD"}
                date={"WINTER 2016"}
                msg={"This project was special for me - it was the capstone project of a programming class. It’s a replica Flappy Bird game, with pokemon instead of traditional sprites. It was built in Java, and run through Greenfoot."}
                skills={["Java", "Greenfoot"]}
                img={"/images/flappy-bird.png"}
            />
        </div>
    </div>
  )
}