const fs = require("fs");
// write
// non-blocking
// fs.writeFile('output1.txt', 'Im created asynchronously!', 'utf8', (err) => {
//     if (err) {
//       console.error('Error writing to file:', err);
//       return;
//     }
//     console.log('step1');
//   });

// // blocking
//   fs.writeFileSync('output2.txt', 'I\'m created synchronously!', 'utf8');
//   console.log('step2');
//   console.log('step3');

// READ
// B.
// const dataS  = fs.readFileSync('output1.txt', 'utf8')
// console.log(dataS);

// NB.
// fs.readFile('output2.txt', 'utf8', (err, data)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log(data);
// })

// APPEND
// B.
// fs.appendFileSync('output2.txt', ' I\'m appended content', 'utf8')

// NB.
// fs.appendFileSync("output1.txt", " I'm  content", "utf8", (err) => {
//   if (err) {
//     console.log(err);
//     return
//   }
//   console.log('Successfully appended!');
// });

// DELETE
// fs.writeFileSync('rough.txt', "I\'m rough notebok", 'utf8')
// fs.unlinkSync('rough.txt')
// fs.unlink('rough.txt', (err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('deleted');
// })

// Rename
// fs.renameSync('rough.txt', 'roughNew.txt')
// fs.rename('roughNew.txt', 'rough.txt', (err)=>{
//     if(err){
//         console.log(err);
//         return
//     }
//     console.log('renamed');
    
// })

// CREATE DIRECTORY
// fs.mkdirSync('new folder', {recursive:true})
// fs.mkdir('new folder2', {recursive:true}, (err)=>{
//     if(err){
//         console.log(err);
//         return 
//     }
//     console.log('directory created');
// })

// LIST FILES IN A DIRECTORY
// fs.writeFileSync('new folder/t1.txt', 'hehehe', 'utf8')
// fs.writeFileSync('new folder/t2.txt', 'khikhi', 'utf8')
// fs.writeFileSync('new folder/t3.txt', 'meowmeow', 'utf8')

// fs.readdir('new folder', (err, files) => {
//     if (err) {
//         console.log('Unable to scan directory:', err);
//         return;
//     }

//     // Log the names of the files in the directory
//     files.forEach((file) => {
//         console.log(file);
//     });
// });