

//La clave debe de tener mayúsculas y minúsculas.
export const tieneMayusculasYMinusculas = (clave: string): boolean => {
  const regexMayuscula = /[A-Z]/;
  const regexMinuscula = /[a-z]/;
  return regexMayuscula.test(clave) && regexMinuscula.test(clave);
};

//La clave debe de tener números.
export const tieneNumeros = (clave: string): boolean => {
  const regex = /\d/;
  if (regex.test(clave)) {
    return true;
  } else {
    return false;
  }
};

//La clave debe de tener caracteres especiales (@,#,+, _, ...)
export const tieneCaracteresEspeciales = (clave: string): boolean => {
  const regex = /[!@#$_%^&*()+=\-[\]{};':"\\|,.<>/?]/;
  if (regex.test(clave)) {
    return true;
  } else {
    return false;
  }
};

//La clave debe de tener una longitud mínima de 8 caracteres.
export const tieneLongitudMinima = (clave: string): boolean => {
  if(clave.length < 8) {
    return false;
  } else {
    return true;
  }
};

//La clave no debe tener el nombre del usuario.
export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string,
): boolean => {
  const nombreMin = nombreUsuario = nombreUsuario.toLowerCase();
  const claveMin = clave = clave.toLowerCase();
  if(claveMin.includes(nombreMin)) {
    return false;
  } else {
    return true;
  }
};

//La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).
export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): boolean => {
  const claveMin = clave.toLowerCase();
  if(commonPasswords.includes(claveMin)) {
    return false;
  } else {
    return true;
  }
};

