import { Component } from '@angular/core';
import { StudentService } from '../../services/student-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  imports: [CommonModule],
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class StudentComponent {
  students: [] = [];
  constructor(private studentService: StudentService) {
   
  }
  showStudent() {
    this.studentService.getStudents();
  }

}
