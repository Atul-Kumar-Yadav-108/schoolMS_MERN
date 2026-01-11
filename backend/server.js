import app from "./src/app.js"
import authRoute from './src/routes/authRoute.js'
import classRoute from './src/routes/classRoute.js'

app.use("/api/v1/auth",authRoute);
app.use("/api/v1/class",classRoute);


const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server running on mode ${process.env.NODE_DEV} on ${PORT}`.bgCyan.white)
})