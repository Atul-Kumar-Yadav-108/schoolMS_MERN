import app from "./src/app.js"
import authRoute from './src/routes/authRoute.js'

app.use("/api/v1/auth",authRoute);


const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`Server running on mode ${process.env.NODE_DEV} on ${PORT}`.bgCyan.white)
})