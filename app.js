/**
 * Created by jkatukogula on 2/27/2015.
 */


var express=require("express");
var multer  = require('multer');
var app=express();
var done=false;


app.use(multer({ dest: './uploads/',
    rename: function (fieldname, filename) {
        return filename;
    },
    onFileUploadStart: function (file) {
        console.log(file.originalname + ' uploading ...')
    },
    onFileUploadComplete: function (file) {
        console.log(file.fieldname + ' uploaded to  ' + file.path)
        done=true;
    }
}));

/* routes.*/

app.get('/',function(req,res){
    display_form(req,res);
});

app.post('/uploadFile',function(req,res){
    if(done==true){
        console.log(req.files);
        res.end("File uploaded.");
    }
});

/*create server.*/
app.listen(3000,function(){
    console.log("Working on port 3000");
});


function display_form(req, res) {

    res.writeHead(200, { 'Content-Type': "text/html"});
    res.write(
        '<form id        =  "uploadForm" enctype = "multipart/form-data" action    =  "/uploadFile" method    =  "post">'+
        '<input type="file" name="uploadFile" />'+
        '<input type="submit" value="Upload File" name="submit">'+
        '</form>'
    );
    res.end();
}

