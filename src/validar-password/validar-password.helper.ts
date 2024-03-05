import { ValidacionClave } from "./model";

export const comprobacionClave = (nombreUsuario: string,  clave: string,  commonPasswords: string[]) : boolean => {
  if (clave === undefined || clave === null || clave === ""
    || nombreUsuario === undefined || nombreUsuario === null || nombreUsuario === ""
    || commonPasswords === undefined || commonPasswords === null || commonPasswords.length < 0) {
    return false;
    
  } else {
    return true;
  }
}
  

//La clave debe de tener mayúsculas y minúsculas.
export const tieneMayusculasYMinusculas = (clave: string): ValidacionClave => {
  const claveMayusculas = clave.toUpperCase();
  const claveMinusculas = clave.toLowerCase();
  if (clave === claveMayusculas || clave === claveMinusculas) {
    return {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas",
    };
  } else {
    return {
      esValida: true,
    };
  }
};

//La clave debe de tener números.
export const tieneNumeros = (clave: string): ValidacionClave => {
  const regex = /\d/;
  if (regex.test(clave)) {
    return {
      esValida: true,
    };
  } else {
    return {
      esValida: false,
      error: "La clave debe de tener al menos un número",
    };
  }
};

//La clave debe de tener caracteres especiales (@,#,+, _, ...)
export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const regex = /[!@#$_%^&*()+=\-[\]{};':"\\|,.<>/?]/;
  if (regex.test(clave)) {
    return {
      esValida: true,
    };
  } else {
    return {
      esValida: false,
      error: "La clave debe de tener al menos un caracter especial",
    };
  }
};

//La clave debe de tener una longitud mínima de 8 caracteres.
export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if(clave.length < 8) {
    return {
      esValida: false,
      error: "La clave debe de tener al menos 8 caracteres",
    };
  } else {
    return {
      esValida: true,
    };
  }
};

//La clave no debe tener el nombre del usuario.
export const tieneNombreUsuario = (
  nombreUsuario: string,
  clave: string,
): ValidacionClave => {
  const nombreMin = nombreUsuario = nombreUsuario.toLowerCase();
  const claveMin = clave = clave.toLowerCase();
  if(claveMin.includes(nombreMin)) {
    return {
      esValida: false,
      error: "La clave no debe de tener el nombre del usuario",
    };
  } else {
    return {
      esValida: true,
    };
  }
};

//La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).
export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  const claveMin = clave.toLowerCase();
  if(commonPasswords.includes(claveMin)) {
    return {
      esValida: false,
      error: "La clave no debe de contener palabras comunes",
    };
  } else {
    return {
      esValida: true,
    };
  }
};

