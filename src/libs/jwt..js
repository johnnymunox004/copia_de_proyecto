import { TOKEN_SECRET } from "../config.js";
import jwt from 'jsonwebtoken'

export function createAccesToken(payload) {
    return new Promise((resolve, reject) =>{
        jwt.sign(
            payload,
            TOKEN_SECRET,
          {
            expiresIn: "1d",
          },
          (err, token) => {
            if (err) reject(err);
            resolve(token);
          }
        );
        
    });
}

// import { TOKEN_SECRET } from "../config.js";: Esta línea importa una constante llamada TOKEN_SECRET desde un archivo de configuración. Esta constante se utiliza como la clave secreta para firmar los tokens JWT.
// import jwt from 'jsonwebtoken';: Esta línea importa la biblioteca jsonwebtoken, que se utiliza para crear y verificar tokens JWT.
// export function createAccesToken(payload) { ... };: Aquí se está definiendo y exportando una función llamada createAccesToken. Esta función toma un objeto de carga útil como argumento.
// return new Promise((resolve, reject) =>{ ... });: La función devuelve una nueva Promesa. Una Promesa en JavaScript es un objeto que representa la finalización o el fracaso de una operación asíncrona.
// jwt.sign( ... );: Dentro de la Promesa, se está firmando un nuevo token JWT. El payload del token es el argumento de la función createAccesToken. La clave secreta para firmar el token es TOKEN_SECRET. El token expirará en 1 día (expiresIn: "1d").
// (err, token) => { ... }: Esta es una función de callback que se ejecuta cuando jwt.sign ha terminado de firmar el token. Si ocurre un error al firmar el token, se rechaza la Promesa con el error. Si el token se firma con éxito, se resuelve la Promesa con el token.