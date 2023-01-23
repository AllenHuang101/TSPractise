interface IPerson {
  name: string;
  age?: number;
  readonly height: number;
  address?: string;
}

type MapPerson<Type> = {
  -readonly [Property in keyof Type]-?: Type[Property];
};

type IPersonOptional = MapPerson<IPerson>;

export {};
