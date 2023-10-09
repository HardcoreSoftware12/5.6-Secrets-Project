// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.


import express from "express"
const app = express()
const port = 8000
import axios from "axios"

app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))



app.get("/",async (req,res)=>{
    try{
        const result = await axios.get('https://secrets-api.appbrewery.com/random')
        console.log(result.data);
        // const data = Math.floor

        res.render("index.ejs",{content:result.data})

    }catch(error){
        console.log(error.message);
        res.status(404).send('error fetching the request')

        
    }
    

})



app.listen(port,()=>{
    console.log(`server running on port ${port}`);

})