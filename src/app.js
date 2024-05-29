import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import taskRouter from "./routes/task.routes.js";



const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))


app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", taskRouter);

export default app;



// aplicación Express.js. Aquí está lo que hace cada parte:

// import express from "express";: Esta línea importa la biblioteca Express.js, que es un marco de aplicación web para Node.js.
// import morgan from "morgan";: Esta línea importa la biblioteca morgan, que es un middleware de registro de solicitudes HTTP para Node.js.
// import cookieParser from "cookie-parser";: Esta línea importa la biblioteca cookie-parser, que se utiliza para analizar las cookies de las solicitudes HTTP.
// import cors from "cors";: Esta línea importa la biblioteca cors, que se utiliza para habilitar CORS (Cross-Origin Resource Sharing) en la aplicación Express.js.
// import authRoutes from "./routes/auth.routes.js";: Aquí se está importando un módulo de rutas de autenticación desde un archivo en la carpeta routes.
// import taskRouter from "./routes/task.routes.js";: Aquí se está importando un módulo de rutas de tareas desde otro archivo en la carpeta routes.
// const app = express();: Aquí se está creando una nueva aplicación Express.js.
// app.use(cors({ ... }));: Aquí se está utilizando el middleware cors en la aplicación Express.js. Esto permite que la aplicación acepte solicitudes de ‘http://localhost:5173’.
// app.use(morgan("dev"));: Aquí se está utilizando el middleware morgan en la aplicación Express.js. Esto permite que la aplicación registre las solicitudes HTTP en el modo ‘dev’, que es un formato de registro predefinido en morgan.
// app.use(express.json());: Aquí se está utilizando un middleware incorporado en Express.js que analiza los cuerpos de las solicitudes HTTP en formato JSON.
// app.use(cookieParser());: Aquí se está utilizando el middleware cookie-parser en la aplicación Express.js. Esto permite que la aplicación analice las cookies de las solicitudes HTTP.
// app.use("/api", authRoutes);: Aquí se está utilizando el módulo de rutas de autenticación en la aplicación Express.js. Todas las rutas definidas en este módulo se montarán en ‘/api’.
// app.use("/api", taskRouter);: Aquí se está utilizando el módulo de rutas de tareas en la aplicación Express.js. Todas las rutas definidas en este módulo también se montarán en ‘/api’.
// export default app;: Finalmente, se exporta la aplicación Express.js.