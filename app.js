require("dotenv").config();
const express=require("express");
const app=express();
app.use(express.json());
const userRouter=require("./api/users/user.router");
app.use("/api/users",userRouter);


// app.get("/api",(req,res)=>{
// res.json({
//     sucess:1,
//     message:"This rest api is working"
// });
// });

app.listen(process.env.PORT,()=>{
    console.log("Server up and running on PORT ",process.env.PORT);
});