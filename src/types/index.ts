export type House = 'Gryffindor' | 'Slytherin' | 'Hufflepuff' | 'Ravenclaw';
export type Role = 'Student' | 'Teacher' | 'Other';

export interface Character {
  id: number;
  name: string;
  house: House;
  role: Role;
  image: string;
  imageUrl?: string;
}
