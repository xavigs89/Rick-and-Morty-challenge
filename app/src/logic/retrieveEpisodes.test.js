import retrieveEpisodes from '../logic/retrieveEpisodes';

// Mock de la función fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ results: [{ name: 'Pilot' }, { name: 'Lawnmower Dog' }] })
  })
);

afterEach(() => {
  jest.clearAllMocks(); // Limpiar mocks después de cada test
});

test('it retrieves episodes from the API', () => {
  const page = 1;
  
  return retrieveEpisodes(page).then(data => {
    expect(fetch).toHaveBeenCalledTimes(1); // Verificar que fetch fue llamado una vez
    expect(fetch).toHaveBeenCalledWith(`https://rickandmortyapi.com/api/episode?page=${page}`); // Verificar que fetch fue llamado con la URL correcta
    expect(data).toEqual({ results: [{ name: 'Pilot' }, { name: 'Lawnmower Dog' }] }); // Verificar que los datos son los esperados
  });
});