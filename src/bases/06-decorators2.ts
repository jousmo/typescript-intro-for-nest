const Deprecated = (deprecationReason: string) => {
  return (_target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
    console.log('06 -', { _target, memberName, propertyDescriptor })
    return {
      get() {
        return (...args: any[]) => {
          console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
          //! Llamar la función propiamente con sus argumentos
          propertyDescriptor.value.apply(this, args);
        }
      }
    }
  }
}

export class Pokemon {
  constructor (
    private readonly id: number,
    public name: string
  ) {}

  scream() {
    console.log(`05 - ${this.name.toUpperCase()} !!!.`)
  }

  @Deprecated('Most use speak2 method instead')
  speak() {
    console.log(`05 - ${this.name} ${this.name} ${this.id} !.`)
  }

  speak2() {
    console.log(`05 - ${this.name} ${this.name} ${this.id} !!!!!!!!!!!!!.`)
  }
}


export const charmander = new Pokemon(1, 'charmander')

charmander.scream()
charmander.speak()