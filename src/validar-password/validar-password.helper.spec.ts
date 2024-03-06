import { commonPasswords } from './model';
import { tieneCaracteresEspeciales, tieneLongitudMinima, tieneMayusculasYMinusculas, tieneNombreUsuario, tieneNumeros, tienePalabrasComunes } from './validar-password.helper';

describe("tieneMayusculasYMinusculas", () => {
    it("debería fallar si la clave no tiene mayúsculas ", () => {
      // Arrange
      const clave = 'password';
  
      // Act
      const resultado = tieneMayusculasYMinusculas(clave);
  
      // Assert
      expect(resultado).toEqual(false);
    });

    it("debería fallar si la clave no tiene minúsculas ", () => {
      // Arrange
      const clave = 'PASSWORD';
  
      // Act
      const resultado = tieneMayusculasYMinusculas(clave);
  
      // Assert
      expect(resultado).toEqual(false);
    });

    it("debería pasar si la clave tiene mayúsculas y minúsculas ", () => {
      // Arrange
      const clave = 'Password';
  
      // Act
      const resultado = tieneMayusculasYMinusculas(clave);
  
      // Assert
      expect(resultado).toEqual(true);
    });

    it("debería pasar si la clave tiene mayúsculas y minúsculas ", () => {
      // Arrange
      const clave = 'P12345';
  
      // Act
      const resultado = tieneMayusculasYMinusculas(clave);
  
      // Assert
      expect(resultado).toEqual(false);
    });
});

describe("tieneNumeros", () => {
  it("debería fallar si la clave no tiene números ", () => {
    // Arrange
    const clave = 'password';

    // Act
    const resultado = tieneNumeros(clave);

    // Assert
    expect(resultado).toEqual(false);
  });

  it("debería pasar si la clave tiene al menos un número ", () => {
    // Arrange
    const clave = 'password123';

    // Act
    const resultado = tieneNumeros(clave);

    // Assert
    expect(resultado).toEqual(true);
  });
});

describe("tieneCaracteresEspeciales", () => {
  it("debería fallar si la clave no tiene caracteres especiales ", () => {
    // Arrange
    const clave = 'password';

    // Act
    const resultado = tieneCaracteresEspeciales(clave);

    // Assert
    expect(resultado).toEqual(false);
  });

  it("debería pasar si la clave tiene al menos caracter especial", () => {
    // Arrange
    const clave = 'p@ssword!';

    // Act
    const resultado = tieneCaracteresEspeciales(clave);

    // Assert
    expect(resultado).toEqual(true);
  });
});

describe("tieneLongitudMinima", () => {
  it("debería fallar si la clave no tiene caracteres especiales ", () => {
    // Arrange
    const clave = '1234567';

    // Act
    const resultado = tieneLongitudMinima(clave);

    // Assert
    expect(resultado).toBe(false);
  });

  it("debería pasar si la clave tiene al menos caracter especial", () => {
    // Arrange
    const clave = '12345678';

    // Act
    const resultado = tieneLongitudMinima(clave);

    // Assert
    expect(resultado).toBe(true);
  });
});

describe("tieneLongitudMinima", () => {
  it("debería fallar si la clave no tiene caracteres especiales ", () => {
    // Arrange
    const clave = '1234567';

    // Act
    const resultado = tieneLongitudMinima(clave);

    // Assert
    expect(resultado).toEqual(false);
  });

  it("debería pasar si la clave tiene al menos caracter especial", () => {
    // Arrange
    const clave = '12345678';

    // Act
    const resultado = tieneLongitudMinima(clave);

    // Assert
    expect(resultado).toEqual(true);
  });
});

describe("tieneNombreUsuario", () => {
  it("debería fallar si la clave contiene el nombre de usuario", () => {
    // Arrange
    const nombreUsuario = 'usuario';
    const clave = 'claveUsuario123';

    // Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);

    // Assert
    expect(resultado).toEqual(false);
  });

  it("debería pasar si la clave no contiene el nombre de usuario", () => {
    // Arrange
    const nombreUsuario = 'usuario';
    const clave = 'ClaveSegura123';

    // Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);

    // Assert
    expect(resultado).toEqual(true);
  });

  it("No debería pasar si la clave y el nombre de usuario son iguales", () => {
    // Arrange
    const nombreUsuario = 'usuario';
    const clave = 'usuario';

    // Act
    const resultado = tieneNombreUsuario(nombreUsuario, clave);

    // Assert
    expect(resultado).toEqual(false);
  });

});

describe("tienePalabrasComunes", () => {
  it("debería fallar si la clave está en la lista de contraseñas comunes", () => {
    // Arrange
    const clave = 'password';

    // Act
    const resultado = tienePalabrasComunes(clave, commonPasswords);

    // Assert
    expect(resultado).toEqual(false);
  });

  it("debería fallar si la clave está en la lista de contraseñas comunes ", () => {
    // Arrange
    const clave = 'Password';

    // Act
    const resultado = tienePalabrasComunes(clave, commonPasswords);

    // Assert
    expect(resultado).toEqual(false);
  });

  it("debería pasar si la clave no está en la lista de contraseñas comunes", () => {
    // Arrange
    const clave = 'ClaveSegura123';

    // Act
    const resultado = tienePalabrasComunes(clave, commonPasswords);

    // Assert
    expect(resultado).toEqual(true);
  });

});