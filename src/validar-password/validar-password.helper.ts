

//La clave debe de tener mayúsculas y minúsculas.
export const tieneMayusculasYMinusculas = (clave: string): boolean =>
	/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(clave);

//La clave debe de tener números.
export const tieneNumeros = (clave: string): boolean => /[0-9]/.test(clave);

//La clave debe de tener caracteres especiales (@,#,+, _, ...)
export const tieneCaracteresEspeciales = (clave: string): boolean =>
	/[!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?`~]/.test(clave);

//La clave debe de tener una longitud mínima de 8 caracteres.
export const tieneLongitudMinima = (clave: string): boolean =>
	clave.length >= 8;

//La clave no debe tener el nombre del usuario.
export const tieneNombreUsuario = (nombreUsuario: string,clave: string): boolean =>
	clave.toLocaleLowerCase().includes(nombreUsuario.toLocaleLowerCase());

//La clave no debe de contener palabras comunes (le pasaremos un array de palabras comunes).
export const tienePalabrasComunes = (clave: string,	commonPasswords: string[]): boolean =>
	commonPasswords.some(
		(word) => clave.toLocaleLowerCase() === word.toLocaleLowerCase()
);

