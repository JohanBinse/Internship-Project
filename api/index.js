const express=require("express");
const cors=require("cors");
const app=express();
const port = 3001;
app.use(cors());
app.use(express.json());


app.get('/getdata/:id',(req,res)=>{
    console.log(req.params.id);
    res.send("Hello World 3");
});
app.post('/createdata', (req,res) => {
    const data = req.body;
    console.log(data);
    res.send('Data received');
})








app.listen(port,()=>{
    console.log("server running",{port});
});
