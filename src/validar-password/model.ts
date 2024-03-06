export const __ERROR_MAYMIN = "La clave debe contener mayúsculas y minúsculas";
export const __ERROR_NUM = "La clave debe contener al menos un número";
export const __ERROR_ESP = "La clave debe contener al menos caracter especial";
export const __ERROR_LONG = "La clave debe contener al menos 8 caracteres";
export const __ERROR_USER = "La clave no puede contener el nombre de usuario";
export const __ERROR_WORDS = "La clave no puede contener palabras comunes";

export interface ValidacionClave {
    esValida: boolean;
    error?: string;
}

export const commonPasswords: string[] = [
    "password",
    "123456",
    "qwerty",
    "admin",
    "letmein",
    "welcome",
    "monkey",
    "sunshine",
    "password1",
    "123456789",
    "football",
    "iloveyou",
    "1234567",
    "123123",
    "12345678",
    "abc123",
    "qwerty123",
    "1q2w3e4r",
    "baseball",
    "password123",
    "superman",
    "987654321",
    "mypass",
    "trustno1",
    "hello123",
    "dragon",
    "1234",
    "555555",
    "loveme",
    "hello",
    "hockey",
    "letmein123",
    "welcome123",
    "mustang",
    "shadow",
    "12345",
    "passw0rd",
    "abcdef",
    "123abc",
    "football123",
    "master",
    "jordan23",
    "access",
    "flower",
    "qwertyuiop",
    "admin123",
    "iloveyou123",
    "welcome1",
    "monkey123",
    "sunshine1",
    "password12",
    "1234567890",
];
