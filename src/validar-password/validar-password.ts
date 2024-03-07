import {
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  tieneMayusculasYMinusculas,
  tieneNombreUsuario,
  tieneNumeros,
  tienePalabrasComunes,
} from "./validar-password.helper";

import { ValidacionClave, __ERROR_ESP, __ERROR_LONG, __ERROR_MAYMIN, __ERROR_NUM, __ERROR_USER, __ERROR_WORDS } from "./model";



export const validarClave = (
  nombreUsuario: string,
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (!clave || !nombreUsuario) {
    return {
      esValida: false,
      error: "Los argumentos proporcionados no son válidos",
    };
  }

  if(!tieneMayusculasYMinusculas(clave)) {
    return {
      esValida: false,
      error: __ERROR_MAYMIN,
    };
  };

  if(!tieneNumeros(clave)) {
    return {
      esValida: false,
      error: __ERROR_NUM,
    };
  };
  
  if(!tieneCaracteresEspeciales(clave)) {
    return {
      esValida: false,
      error: __ERROR_ESP,
    };
  };

  if(!tieneLongitudMinima(clave)) {
    return {
      esValida: false,
      error: __ERROR_LONG,
    };
  };

  if(!tieneNombreUsuario(nombreUsuario, clave)) {
    return {
      esValida: true,
      error: __ERROR_USER,
    };
  };

  if(!tienePalabrasComunes(clave, commonPasswords)) {
    return {
      esValida: false,
      error: __ERROR_WORDS,
    };
  };

  return {
    esValida : true
  }

};

