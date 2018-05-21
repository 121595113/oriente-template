'use strict'

var fs = require('fs');

var ws1 = fs.createWriteStream('noname.js', 'utf-8');
ws1.write("HelloWorld asdwqf123456\n");
ws1.write("2017 08 30 17:09:11\n",function(){
    fs.readFile("noname.js", "utf-8", function(err, data){
        if (err){
            console.log(err);
        }else{
            console.log(data);
        }
    })
});
ws1.write("End\n");
ws1.end();