function HelloRoutes(app){
    
    app.get("/", (req,res) =>{
    res.send("Welcome to Web Development");
})

app.get("/hello", (req,res) =>{
    res.send("Life is Good !! ");
}); 
}

export default HelloRoutes; 