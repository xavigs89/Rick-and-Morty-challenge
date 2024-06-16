import retrieveCharacters from '../logic/retrieveCharacters';

// Mock de la función fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ results: [{ name: 'Rick Sanchez' }, { name: 'Morty Smith' }] })
    })
  );
  
  afterEach(() => {
    jest.clearAllMocks(); // Limpiar mocks después de cada test
  });
  
  test('it retrieves characters from the API', () => {
    const page = 1;
    
    return retrieveCharacters(page).then(data => {
      expect(fetch).toHaveBeenCalledTimes(1); // Verificar que fetch fue llamado una vez
      expect(fetch).toHaveBeenCalledWith(`https://rickandmortyapi.com/api/character?page=${page}`); // Verificar que fetch fue llamado con la URL correcta
      expect(data).toEqual({ results: [{ name: 'Rick Sanchez' }, { name: 'Morty Smith' }] }); // Verificar que los datos son los esperados
    });
  });