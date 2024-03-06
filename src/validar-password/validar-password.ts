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

  let resultado : boolean = true;

  resultado = tieneMayusculasYMinusculas(clave);
  if(!resultado) return {
    esValida: false,
    error: __ERROR_MAYMIN,
  };

  resultado = tieneNumeros(clave);
  if(!resultado) return {
    esValida: false,
    error: __ERROR_NUM,
  };

  resultado = tieneCaracteresEspeciales(clave);
  if(!resultado) return {
    esValida: false,
    error: __ERROR_ESP,
  };

  resultado = tieneLongitudMinima(clave);
  if(!resultado) return {
    esValida: false,
    error: __ERROR_LONG,
  };

  resultado = tieneNombreUsuario(nombreUsuario, clave);
  if(!resultado) return {
    esValida: false,
    error: __ERROR_USER,
  };

  resultado = tienePalabrasComunes(clave, commonPasswords);
  if(!resultado) return {
    esValida: false,
    error: __ERROR_WORDS,
  };

  return {
    esValida : true
  }

};

