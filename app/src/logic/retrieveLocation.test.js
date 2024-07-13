import retrieveLocation from '../logic/retrieveLocation';

// Mock de la función fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ results: [{ name: 'Earth (C-137)' }, { name: 'Abadango' }] })
  })
);

afterEach(() => {
  jest.clearAllMocks(); // Limpiar mocks después de cada test
});

test('it retrieves locations from the API', () => {
  const page = 1;
  
  return retrieveLocation(page).then(data => {
    expect(fetch).toHaveBeenCalledTimes(1); // Verificar que fetch fue llamado una vez
    expect(fetch).toHaveBeenCalledWith(`https://rickandmortyapi.com/api/location?page=${page}`); // Verificar que fetch fue llamado con la URL correcta
    expect(data).toEqual({ results: [{ name: 'Earth (C-137)' }, { name: 'Abadango' }] }); // Verificar que los datos son los esperados
  });
});