import styles from '../styles/TileBg.module.css';
import { useState, useEffect, useLayoutEffect } from 'react';

export default function TileBg({count}) {
    const colors = [styles.ablue, styles.bblue, styles.cblue, styles.dblue, styles.eblue, styles.bgray];
    const displs = [styles.hide, styles.show];
    const [visi, setVisi] = useState([0, 0, 0, 0, 0]);
    const [grid, setGrid] = useState([]);
    const [max, setMax] = useState(-1);

    function makeGrid() {
        var hgt = 30;
        var rows = Math.ceil(((count * 270) + 30) / (hgt + 4));
        var cols = Math.ceil(window.innerWidth / 34);
        console.log("width: " + cols);
        var temp = [];
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                var rand = Math.floor(Math.random() * 5);
                // var off = cols - (3 * (5 - i));
                // if (off < j) {
                //     rand = 6;
                // }
                temp.push(rand);
            }
        }
        setMax(cols);
        setGrid(
            [
                ...grid,
                ...temp
            ]
        );
    }

    function showColors() {
        console.log("showing");
        let timer = 600;
        setTimeout(() => {
            setVisi([1, 0, 0, 0, 1]);
        }, (1 * timer));
        setTimeout(() => {
            setVisi([1, 1, 0, 1, 1]);
        }, (2 * timer));
        setTimeout(() => {
            setVisi([0, 0, 1, 1, 1]);
        }, (3 * timer));
        setTimeout(() => {
            setVisi([0, 1, 1, 1, 1]);
        }, (4 * timer));
        setTimeout(() => {
            setVisi([1, 1, 1, 1, 1]);
        }, (5 * timer));
   }

    useEffect(() => {
        makeGrid();
        showColors();

        window.addEventListener('resize', makeGrid);
        return () => window.removeEventListener('resize', makeGrid);
    }, []);

    return (
        <div className={styles.container}>
            {grid.map(function(block, index) {
                console.log(max);
                return <span key={index} className={`${styles.tile} ${colors[block]} ${displs[visi[block]]}`} />
            })}   
        </div>
    );
}