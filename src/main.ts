import { validarClave } from "./validar-password/validar-password";
import { commonPasswords } from "./validar-password/model";

console.log(validarClave("usuario", "usuario", commonPasswords));
console.log(validarClave("usuario", "PalabraSegura123!", commonPasswords));
console.log(validarClave("usuario", "password", commonPasswords));
console.log(validarClave("usuario", "Password123@", commonPasswords));