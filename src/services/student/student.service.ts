import {Injectable} from '@angular/core';
import {Ticket} from '../../models/ticket';
import {TICKETS_MOCKED} from '../../mocks/tickets.mock';
import {BehaviorSubject} from 'rxjs/index';

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    /**
     * Services Documentation:
     * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
     */

        // TODO : copy&paste here
    private ticketList: Ticket[] = TICKETS_MOCKED;

    /**
     * Observable which contains the list of the tickets.
     * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
     */
    public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);

    constructor() {
    }

    addTicket(ticket: Ticket) {
        this.ticketList.push(ticket);
        this.tickets$.next(this.ticketList);
        // major not working...
        // You need here to update the list of ticket and then update our observable (Subject) with the new list
        // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    }

    deleteTicket(ticket: Ticket) {


        const taskIndex = this.ticketList.indexOf(ticket);
        if (taskIndex !== -1) {
            this.ticketList.splice(taskIndex, 1);
        }

        this.tickets$.next(this.ticketList);
    }

    archiverTicker(ticket: Ticket) {


        const taskIndex = this.ticketList.indexOf(ticket);
        if (taskIndex !== -1) {
            this.ticketList.splice(taskIndex, 1);
        }

        this.tickets$.next(this.ticketList);
    }

}
