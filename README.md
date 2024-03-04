# Bootcamp JS - Laboratorio Módulo 9.2

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).

------------------------------

# Laboratorio - Validador de Clave Fuerte

Este proyecto consiste en el desarrollo de un validador de claves para mejorar la seguridad en el proceso de creación de cuentas. Se aplican diversas condiciones para garantizar la fortaleza de la clave proporcionada.

## Funciones de Validación

Se han implementado varias funciones de validación para verificar distintos aspectos de la clave proporcionada:

1. **Tiene Mayúsculas y Minúsculas**
2. **Tiene Números**
3. **Tiene Caracteres Especiales**
4. **Tiene Longitud Mínima**
5. **No Contiene el Nombre de Usuario**
6. **No Contiene Palabras Comunes**

## Función Principal de Validación

Se proporciona una función principal `validarClave` que utiliza las funciones de validación anteriores para determinar si la clave proporcionada es válida o no. La función devuelve un objeto con dos propiedades:

- `esValida`: booleano que indica si la clave es válida o no.
- `error`: string que indica el primer error encontrado, en caso de que la clave no sea válida.


