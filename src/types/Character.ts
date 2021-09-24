export interface Character {
  id: number,
  name: string,
  image: string,
  status: string,
  species: string,
  gender: string,
  location: {
    name: string,
    url: string
  },
  origin: {
    name: string,
    url: string
  },
  episode: Array<string>
}