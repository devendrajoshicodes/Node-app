//Bring in the HTTP and Path Modules 

const http = require('http');
const path = require('path');
const fs = require('fs');



//Create an HTTP Server
 const server = http.createServer((request, response) => {
    
    //Getting file path Dynamically and loading appropriate file as a response.

    let fileinfo = "index.html";
      
    if(request.url === "/")
        { 
          fileinfo === fileinfo;
        }
        else
        {
           fileinfo = request.url;
        }


        let FilePath = path.join(__dirname,'public',fileinfo);


        //load files as needed

           fs.readFile(FilePath,(error,data) =>{
           
           if(error) throw error;
           
           //get the file type to handle
            let extenname = path.extname(FilePath);

         //check for extension of the file
         
           response.writeHead(200,{'content-type':'text/html'});
           response.end(data);
           
        });
   
   


});




   //===========================SERVER VARIABLES=========================
    
   // defining port variable to store the value of PORT NUMBER  
   const PORT = process.env.PORT || 5000;
   
   server.listen(PORT, serverMessage());

  // creating the callback function for server's port 
  function serverMessage()
  {
     console.log (`Server started on PORT: ${PORT}`);
  }

