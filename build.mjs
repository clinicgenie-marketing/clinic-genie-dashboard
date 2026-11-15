import fs from 'node:fs';
fs.mkdirSync('dist',{recursive:true});
const html=fs.readFileSync('index.template.html','utf8').replace('/*CORE*/',fs.readFileSync('core.js','utf8'));
fs.writeFileSync('dist/index.html',html);
console.log('Built dist/index.html');
