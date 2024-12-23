export interface Duck {
  name: string
  numLegs: number
  makeSound: (sound: string) => void
}

const duck1: Duck = {
  name: 'heuy',
  numLegs: 2,
  makeSound: (sound: string) => console.log(sound),
}

const duck2: Duck = {
  name: 'deuy',
  numLegs: 2,
  makeSound: (sound: string) => console.log(sound),
}

export const ducks : Duck[]= [duck1, duck2]
