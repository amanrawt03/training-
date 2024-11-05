import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-query',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './query.component.html',
  styleUrl: './query.component.css'
})
export class QueryComponent {
  surveyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.surveyForm = this.fb.group({
      questions: this.fb.array([]) // Initialize FormArray for questions
    });
  }

  get questions(): FormArray {
    return this.surveyForm.get('questions') as FormArray;
  }

  addQuestion() {
    const questionGroup = this.fb.group({
      questionText: ['', Validators.required],
      questionType: ['text', Validators.required] // Default type
    });
    this.questions.push(questionGroup); // Add new question group to FormArray
  }

  removeQuestion(index: number) {
    this.questions.removeAt(index); // Remove question at specified index
  }

  onSubmit() {
    console.log(this.surveyForm.value); // Handle form submission
  }
}
