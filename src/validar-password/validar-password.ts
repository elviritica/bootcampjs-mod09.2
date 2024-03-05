import { ValidacionClave } from "./model";
import { comprobacionClave, tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from "./validar-password.helper";

export const validarClave = (
    nombreUsuario: string,
    clave: string,
    commonPasswords: string[]
  ): ValidacionClave => {
    if (!comprobacionClave(nombreUsuario, clave, commonPasswords)) {
      return {
        esValida: false,
        error: "Los argumentos proporcionados no son válidos",
      };
    }
  
    let resultado: ValidacionClave;
  
    resultado = tieneMayusculasYMinusculas(clave);
    if (!resultado.esValida) return resultado;
  
    resultado = tieneNumeros(clave);
    if (!resultado.esValida) return resultado;
  
    resultado = tieneCaracteresEspeciales(clave);
    if (!resultado.esValida) return resultado;
  
    resultado = tieneLongitudMinima(clave);
    if (!resultado.esValida) return resultado;
  
    resultado = tieneNombreUsuario(nombreUsuario, clave);
    if (!resultado.esValida) return resultado;
  
    resultado = tienePalabrasComunes(clave, commonPasswords);
    if (!resultado.esValida) return resultado;
  
    return {
      esValida: true,
    };
    
};
