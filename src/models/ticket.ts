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
  student?: string;
  major?: Major;
  archived?: boolean;
}
