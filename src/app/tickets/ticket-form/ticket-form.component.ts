import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TicketService} from '../../../services/ticket/ticket.service';
import {Ticket} from '../../../models/ticket';
import {STUDENTS_MOCKS} from '../../../mocks/student.mock';
import {Student} from '../../../models/student';
import {StudentService} from '../../../services/student/student.service';

enum Major {
    'SI' = 'SI',
    'Beautifull GB' = 'Beautifull GB',
    'Batiment' = 'Batiment',
    'GE' = 'GE'
}

@Component({
    selector: 'app-ticket-form',
    templateUrl: './ticket-form.component.html',
    styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {
    public studentList: Student[] = [];

    constructor(public formBuilder: FormBuilder, public ticketService: TicketService, public studentService: StudentService,
                public userService: StudentService) {        // Form creation
        // this.studentService.student$.subscribe((student) => this.studentList = student);

        this.ticketForm = this.formBuilder.group({
            title: [''],
            description: [''],
            major: [''],
            student: ['']
        });
        // You can also add validators to your inputs such as required, maxlength or even create your own validator!
        // More information: https://angular.io/guide/reactive-forms#simple-form-validation
        // Advanced validation: https://angular.io/guide/form-validation#reactive-form-validation
    }

    // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
    // avoid TemplateDrivenForm (another type of form)
    /**
     * TicketForm: Object which manages the form in our component.
     * More information about Reactive Forms: https://angular.io/guide/reactive-forms
     */

    public ticketForm: FormGroup;
    public MAJOR_LIST: string[] = Object.values(Major).filter(k => typeof Major[k as any] === 'string');
    public STUDENT_LIST = STUDENTS_MOCKS;


    getStudentById(student: Number): Student {
        for (const s of STUDENTS_MOCKS) {
            if (s.id === student) {
                return s;
            }
        }
        return null;
    }

    ngOnInit() {
    }


    addTicket() {
        const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
        ticketToCreate.date = new Date();

        ticketToCreate.student = this.studentList.find(x => x.id === this.ticketForm.get('student').value);
        ticketToCreate.archived = false;
        this.ticketService.addTicket(ticketToCreate);
    }

}
