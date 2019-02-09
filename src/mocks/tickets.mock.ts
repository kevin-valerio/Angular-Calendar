import {Ticket} from '../models/ticket';

const dateToday: Date = new Date();

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
    student: 'Paul',
    major: Major.SI,
    archived: true
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student: 'Me',
    major: Major['Beautifull GB'],
    archived: false
  },
];
