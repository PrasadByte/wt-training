import { Injectable } from '@angular/core';
import { Student } from '../Models/student.model';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    new Student(1, 'John Doe', 'john.doe@example.com', 'Computer Science'),
    new Student(2, 'Jane Smith', 'jane.smith@example.com', 'Mathematics'),
    new Student(3, 'Alice Johnson', 'alice.johnson@example.com', 'Physics')
  ];

  getStudents(): Student[] {
    return this.students;
  }

}
