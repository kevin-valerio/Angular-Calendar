import {Component, OnInit} from '@angular/core';
import {TicketService} from '../../../services/ticket/ticket.service';
import {Ticket} from '../../../models/ticket';

@Component({
    selector: 'app-ticket-list',
    templateUrl: './ticket-list.component.html',
    styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

    public ticketList: Ticket[] = [];
    public displayTicketArchived: boolean;
    public archiveMessage = 'Show Archived Ticket';

    constructor(public ticketService: TicketService) {
        this.ticketService.tickets$.subscribe((tickets) => this.ticketList = tickets);
    }

    ngOnInit() {

        this.displayTicketArchived = false;

    }

    ticketHasBeenSelected(hasBeenSelected: boolean) {

        console.log('event received from child:', hasBeenSelected);
    }

    refreshArchives() {
        if (this.displayTicketArchived === true) {
            this.displayTicketArchived = false;
            this.archiveMessage = 'Hide archived ticket';
        } else {
            this.displayTicketArchived = true;
            this.archiveMessage = 'Show ticket';
        }
    }

    deleteTicket(ticket: Ticket) {
        this.ticketService.deleteTicket(ticket);
        console.log('deleted ticket : ' + ticket.description);
    }

    archiverTicker(ticket: Ticket) {
        this.ticketService.archiverTicker(ticket);
        console.log('archivage du tecket ticket : ' + ticket.description);
    }

}
