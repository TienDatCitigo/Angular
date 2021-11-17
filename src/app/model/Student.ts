export interface Students{
  id: string;
  code: string;
  gender: string;
  fistName: string;
  lastName: string;
  dob?: Date;
  email?: string;
  phone?: string;
  picture?: string;
  //Dấu ?: thuộc tính bắt buộc hoặc ko bắt buộc
}
