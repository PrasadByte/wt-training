export class Student {
  id: number;
  name: string;
  email: string;
  course: string;

  constructor(id: number, name: string, email: string, course: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.course = course;
  }
}
