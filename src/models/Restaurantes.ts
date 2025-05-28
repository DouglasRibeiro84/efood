class Restaurante {
  title: string
  description: string
  image: string
  infos: string[]
  nota: number
  id: number

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    nota: number,
    infos: string[]
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.image = image
    this.nota = nota
    this.infos = infos
  }
}

export default Restaurante
