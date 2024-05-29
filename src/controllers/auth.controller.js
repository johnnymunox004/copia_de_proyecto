import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccesToken } from "../libs/jwt..js";
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from "../config.js";





export const register = async (req, res) => {
  const { email, password, username,edad,departamento,rol } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (userFound)

      return res.status(400).json(["Correo en uso, intente con otro"]);

    const passwordHashs = await bcrypt.hash(password, 10); 

    const newUser = new User({
      username,
      email,
      password: passwordHashs,
      edad,
      departamento,
      rol,
    });
    const userSaved = await newUser.save();
    const token = await createAccesToken({ id: userSaved._id });
    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      edad: userSaved.edad,
      departamento: userSaved.departamento,
      rol: userSaved.rol,
      createdAt: userSaved.createdAt,
      updateAt: userSaved.createdAt,
      message: "usuari creado satisfacotiamente",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//////////////////////////////////////////////////////
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userfound = await User.findOne({ email });
    if (!userfound)
      return res
        .status(400)
        .json({ message: "usuario no encontrado desea crear una cuenta " });
    const isMatch = await bcrypt.compare(password, userfound.password); 

    if (!isMatch)
      return res.status(400).json({ message: "contraseña incorrect" });

    const token = await createAccesToken({ id: userfound._id });
    res.cookie("token", token);
    res.json({
      id: userfound._id,
      username: userfound.username,
      email: userfound.email,
      createdAt: userfound.createdAt,
      updateAt: userfound.createdAt,
      message: "Usuario encontrado en la base ",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
///////////////////////////////////////////////

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

///////////////////////////
export const profile = async (req, res) => {
  const userfound = await User.findById(req.user.id);
  if (!userfound) return (400).json({ message: "usuario no encontrado" });


  return res.json({
    id: userfound._id,
    username: userfound.username,
    email: userfound.email,
    createdAt: userfound.createdAt, 
    updateAt: userfound.createdAt,
  });
};

export const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "autorizado" });
  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if (err) return res.status(401).json({ message: "no autorizado" });


    const userfound = await User.findById(user.id);
    if (!userfound) return res.status(401).json({ message: "no autorizado" });

    
    return res.json({
      id: userfound._id,
      username: userfound.username,
      email: userfound.email,
    })
  });
};


// import User from "../models/user.model.js";: Importa el modelo de usuario de Mongoose desde el archivo user.model.js en la carpeta models.
// import bcrypt from "bcryptjs";: Importa la biblioteca bcryptjs, que se utiliza para hashear contraseñas.
// import { createAccesToken } from "../libs/jwt..js";: Importa una función llamada createAccesToken desde un archivo en la carpeta libs.
// import jwt from 'jsonwebtoken';: Importa la biblioteca jsonwebtoken, que se utiliza para crear y verificar tokens JWT (JSON Web Tokens).
// import { TOKEN_SECRET } from "../config.js";: Importa una constante llamada TOKEN_SECRET desde un archivo de configuración.

// Función de registro (register):

// const { email, password, username } = req.body;: Extrae el correo electrónico, la contraseña y el nombre de usuario del cuerpo de la solicitud.
// const userFound = await User.findOne({ email });: Busca en la base de datos un usuario con el correo electrónico proporcionado.
// if (userFound) return res.status(400).json(["Correo en uso, intente con otro"]);: Si ya existe un usuario con el mismo correo electrónico, se envía un mensaje de error.
// const passwordHashs = await bcrypt.hash(password, 10);: Hashea la contraseña proporcionada utilizando bcrypt. El número 10 es la cantidad de rondas de salting.
// const newUser = new User({ ... });: Crea un nuevo usuario con el nombre de usuario, correo electrónico y contraseña hasheada.
// const userSaved = await newUser.save();: Guarda el nuevo usuario en la base de datos.
// const token = await createAccesToken({ id: userSaved._id });: Crea un token de acceso para el nuevo usuario.
// res.cookie("token", token);: Establece una cookie con el token de acceso.
// res.json({ ... });: Envía una respuesta con los detalles del nuevo usuario y un mensaje de éxito.
// catch (error) { ... }: Captura cualquier error que pueda ocurrir durante el proceso de registro.
// res.status(500).json({ message: error.message });: Si ocurre un error, se envía una respuesta con el estado 500 (Error interno del servidor) y un mensaje de error.
// Función de inicio de sesión (login):

// const { email, password } = req.body;: Extrae el correo electrónico y la contraseña del cuerpo de la solicitud.
// const userfound = await User.findOne({ email });: Busca en la base de datos un usuario con el correo electrónico proporcionado.
// if (!userfound) return res.status(400).json({ message: "usuario no encontrado desea crear una cuenta " });: Si no existe un usuario con el correo electrónico proporcionado, se envía un mensaje de error.
// const isMatch = await bcrypt.compare(password, userfound.password);: Compara la contraseña proporcionada con la contraseña hasheada almacenada en la base de datos.
// if (!isMatch) return res.status(400).json({ message: "contraseña incorrect" });: Si la contraseña no coincide, se envía un mensaje de error.
// const token = await createAccesToken({ id: userfound._id });: Crea un token de acceso para el usuario.
// res.cookie("token", token);: Establece una cookie con el token de acceso.
// res.json({ ... });: Envía una respuesta con los detalles del usuario y un mensaje de éxito.
// catch (error) { ... }: Captura cualquier error que pueda ocurrir durante el proceso de inicio de sesión.
// res.status(500).json({ message: error.message });: Si ocurre un error, se envía una respuesta con el estado 500 (Error interno del servidor) y un mensaje de error.
// Función de cierre de sesión (logout):

// res.cookie("token", "", { expires: new Date(0) });: Borra la cookie que contiene el token de acceso del usuario.
// return res.sendStatus(200);: Envía una respuesta con el estado 200 (OK).
// Función de perfil (profile):

// const userfound = await User.findById(req.user.id);: Busca en la base de datos un usuario con el ID proporcionado.
// if (!userfound) return (400).json({ message: "usuario no encontrado" });: Si no existe un usuario con el ID proporcionado, se envía un mensaje de error.
// return res.json({ ... });: Envía una respuesta con los detalles del usuario.
// Función de verificación de token (verifyToken):

// const { token } = req.cookies;: Extrae el token de las cookies de la solicitud.
// if (!token) return res.status(401).json({ message: "autorizado" });: Si no hay token, se envía un mensaje de error.
// jwt.verify(token, TOKEN_SECRET, async (err, user) => { ... });: Verifica el token utilizando la clave secreta.
// if (err) return res.status(401).json({ message: "no autorizado" });: Si hay un error al verificar el token, se envía un mensaje de error.
// const userfound = await User.findById(user.id);: Busca en la base de datos un usuario con el ID proporcionado.
// if (!userfound) return res.status(401).json({ message: "no autorizado" });: Si no existe un usuario con el ID proporcionado, se envía un mensaje de error.
// return res.json({ ... });: Envía una respuesta con los detalles del usuario.