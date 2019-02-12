import {Injectable} from '@angular/core';
import {STUDENTS_MOCKS} from '../../mocks/student.mock';
import {Student} from '../../models/student';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    // TODO : copy&paste here
    private studentList: Student[] = STUDENTS_MOCKS;

    // public students$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.studentList);

    constructor() {
    }

}
