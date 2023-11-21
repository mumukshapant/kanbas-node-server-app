import express from "express";
import HelloRoutes from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors"; 
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";



const app=express(); 

app.use(cors()); 
app.use(express.json());


HelloRoutes(app);
Lab5(app);
CourseRoutes(app); 
ModuleRoutes(app);

app.listen(4000);
