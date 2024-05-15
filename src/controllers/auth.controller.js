import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccesToken } from "../libs/jwt..js";
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const userFound = await User.findOne({ email });
    if (userFound)
      // Corregido la lógica para verificar si el usuario existe
      return res.status(400).json(["Correo en uso, intente con otro"]);

    const passwordHashs = await bcrypt.hash(password, 10); //

    const newUser = new User({
      username,
      email,
      password: passwordHashs,
    });
    const userSaved = await newUser.save();
    const token = await createAccesToken({ id: userSaved._id });
    res.cookie("token", token);
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
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
    const isMatch = await bcrypt.compare(password, userfound.password); //

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

  //////////////////////////////////

  ////////////////////////////

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
