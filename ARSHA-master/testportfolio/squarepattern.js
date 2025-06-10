10/06/ 02:35



// for(let i=0;i<4;i++){
//     for(let j=0;j<4;j++){
//         process.stdout.write("*")
//     }
//     console.log()
// }

// for(let i=0;i<6;i++){
//     for(let j=0;j<4;j++){
//         process.stdout.write("m")
//     }
//     console.log()
// }

// for(let a=0;a<3;a++){
//     for(let b=0;b<8;b++){
//         process.stdout.write("A")
//     }
//     console.log()
// }

// for (let c = 0; c < 4; c++) {
//     for (let r = 0; r < 4; r++) {
//         if (r==2) break;
//         if (r==3) break;
//         process.stdout.write("*")
//     }
//     console.log()
// }   
// completely missd r2 ans 3

// for (let c = 0; c < 4; c++) {
//     for (let r = 0; r < 4; r++) {
//         // if (r == 2 && c==2) break;       
//         // if (r == 4 && c==4) break;

//         // if (r == 3 && c==4) continue;
//         // if (r==0 && c==0) continue
//         process.stdout.write("*");


//     //    { else  {
//     //      } process.stdout.write("");}
//     }
//     console.log();
// }

//   for (let c = 0; c < 4; c++) {
//      for (let r = 0; r < 4; r++){
//         if (r==0 | r==3|c==0|c==3)
//             process.stdout.write("*");
//         else{
//             process.stdout.write(" ");
//         }

//      }
//      console.log()
//   }


//   for (let c = 0; c < 4; c++) {
//      for (let r = 0; r < 4; r++){
//         if (r==0 | r==1|r==4|r==3|c==0|c==3|c==2)
//             process.stdout.write("*");
//         else{
//             process.stdout.write(" ");
//         }

//      }
//      console.log()
//   }

for (let c = 0; c < 4; c++) {
    for (let r = 0; r < 4; r++) {
        if (r == 0 | c == 0 | r == 1 | c == 2 | c == 3 | r == 3 && !(r == 1 && c == 2))
            process.stdout.write("*");
        else

            process.stdout.write(" ");
    }
    console.log();
}

// triangle
// let n=4
// for (let c = 0; c < n; c++) {
//     for (let r = 0; r <n-c-1 ; r++) {
//        process.stdout.write(" ")
//     }
//     for (let r = 0; r <c; r++) {
//        process.stdout.write("*")
//     }
//     for (let r = 1; r <c; r++) {
//        process.stdout.write("*")
//     }
//     console.log();
// }

let a=6
for (let c = 0; c < a; c++) {
    for (let r = 0; r <c; r++) {
       process.stdout.write(" ")
    }    
    for (let r = 0; r <a-c-1 ; r++) {
       process.stdout.write("*")
    }
   for (let r = 1; r <a-c-1 ; r++) {
       process.stdout.write("*")
    }
    
    
    console.log();
}
 
