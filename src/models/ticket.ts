import {Student} from './student';

enum Major {
  'SI',
  'Beautifull GB',
  'Batiment',
  'GE'
}

export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
  major?: Major;
  archived?: boolean;
}
