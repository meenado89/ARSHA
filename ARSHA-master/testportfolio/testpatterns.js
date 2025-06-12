// 12/6/25


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

//     console.log();
// }


// top and bottom line

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

// let l = 10;

// for (let i = 0; i < l; i++) {
//     for (let j = 0; j < l; j++) {
//         if (i === 0 || i === l - 1) {
//             process.stdout.write("*");
//         } 
//         else if (j === l - 1 - i) {
//             process.stdout.write("*");
//         } else {
//             process.stdout.write(" ");
//         }
//     }
//     console.log();
// }


// 0123
// let m=4
// for(let i=0;i<4;i++){
//     for(let j=0;j<4;j++){
//         process.stdout.write( i+" ")
//     }
//     console.log()
// }




//  half triangle but of 0-9
// let n=0
// for(let i=0;i<5;i++){
//     for(let j=0;j<i;j++){
//         process.stdout.write( n+" ")
//         n++
//     }
//     console.log()
// }


// increasing half triangle 010010
// for (let i = 0; i <6 ; i++) {
//     for (let j = 0; j < i; j++) {
//         let sum=i+j
//        if (sum % 2===0) {
//             process.stdout.write(" 1 ");
//         } 
        
//         else {
//             process.stdout.write(" 0 ");
//         }
       
//     }
//     console.log();
// }


// // 0-15 square 
// let m=0
// for(let i=0;i<4;i++){
//     for(let j=0;j<4;j++){
//         process.stdout.write( m+"  ")
//         m++
//     }
//     console.log()
// }


// needed space to align empty 
let m=0
for(let i=0;i<4;i++){
    for(let j=0;j<4;j++){

        if (i===0||i===3||j===0||j===3){
            process.stdout.write(m+"   ")
            m++
        }else{ 
            process.stdout.write("    ")
        }
        
    }
    console.log()
}
