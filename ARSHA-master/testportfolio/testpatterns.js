// let b = 5
// for (let i = 0; i < b; i++) {
//     // space
//     for (let s = 0; s < b - i - 1; s++) {
//         process.stdout.write(" ");
//     }
//     //   stars
//     for (let j = 0; j < b; j++) {
//         process.stdout.write("*")
//     }

//     console.log();
// }



// let n = 8;

// for (let i = 0; i < n; i++) {
//     // spaces 
//     for (let s = 0; s < n - i - 1; s++) {
//         process.stdout.write(" ");
//     }

//     // stars and spaces
//     for (let j = 0; j < n; j++) {
//         if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
//             process.stdout.write("*");
//         } else {
//             process.stdout.write(" ");
//         }
//     }

//     console.log();
// }

// empty square
// let a = 10;

// for (let i = 0; i < a; i++) {

//     // stars and inner spaces
//     for (let j = 0; j < a; j++) {
//         if (i === 0 || i === a - 1 || j === 0 || j === a - 1) {
//             process.stdout.write("*");
//         } else {
//             process.stdout.write(" ");
//         }
//     }

//     console.log(); // new line
// }

// let l = 10;

// for (let i = 0; i < l; i++) {


//     for (let j = 0; j < l; j++) {
//         if (i === 0 | i === l - 1 ) {
//             process.stdout.write("*");
//         } else {
//             process.stdout.write(" ");
//         }
//     }

//     console.log();
// }

let l = 10;

for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++) {
        if (i === 0 || i === l - 1) {
            process.stdout.write("*");
        } 
        else if (j === l - 1 - i) {
            process.stdout.write("*");
        } else {
            process.stdout.write(" ");
        }
    }
    console.log();
}



