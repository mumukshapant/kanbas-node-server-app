import session from "express-session";
import express from "express";
import HelloRoutes from "./hello.js";
import Lab5 from "./lab5.js";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'
mongoose.connect(CONNECTION_STRING);

import ModuleRoutes from "./modules/routes.js";
import CourseRoutes from "./courses/routes.js";
import "dotenv/config";
// import AssignmentsRoutes from "./assignments/routes.js";

const app = express();
app.use(
    cors({
      credentials: true,
      origin: 'https://assignment6-kanbas-app--silver-marzipan-31986e.netlify.app'
    })
  );
  
   
  const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
app.use(session(sessionOptions));
  
app.use(express.json());

UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
// AssignmentsRoutes(app);
Lab5(app);
HelloRoutes(app);
// app.listen(4000);
app.listen(process.env.PORT || 4000);

