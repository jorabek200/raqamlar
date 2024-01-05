let son1 = prompt('1-sonni kriting') // 12
let son2 = prompt('2-sonni kriting') // 4
let son3 = prompt("3-sonni kriting") // 6

if (son1 < son2 && son1 > son3) {
    console.log('orta son ', son1);
} else if (son1 < son3 && son1 > son2) {
    console.log('orta son ', son1);
} else if (son2 < son1 && son2 > son3) {
     console.log('orta son ', son2);
} else if (son2 < son3 && son2 > son1) {
    console.log('orta son ', son2);
} else if (son3 < son2 && son3 > son1) {
    console.log('orta son ', son2);
} else if (son3 < son1 && son3 > son2) {
    console.log('orta son ', son2);
}

