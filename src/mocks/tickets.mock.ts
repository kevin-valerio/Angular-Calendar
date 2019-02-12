import {Ticket} from '../models/ticket';
import {Student} from '../models/student';
import {STUDENTS_MOCKS} from '../mocks/student.mock';

const dateToday: Date = new Date();
let studentOne: Student;
let studentTwo: Student;

studentOne = STUDENTS_MOCKS[0];
studentTwo = STUDENTS_MOCKS[1];

enum Major {
    'SI',
    'Beautifull GB',
    'Batiment',
    'GE'
}

export const TICKETS_MOCKED: Ticket[] = [
    {
        title: 'SI4 in Nice',
        description: '',
        date: dateToday,
        student: studentOne,
        major: Major.SI,
        archived: true
    },
    {
        title: 'SI5 in Paris',
        description: 'Description du voyage',
        date: dateToday,
        student: studentTwo,
        major: Major['Beautifull GB'],
        archived: false
    },
];
