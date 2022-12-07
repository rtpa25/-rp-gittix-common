import { Subjects } from '../streaming/subjects';

export interface TicketUpdatedEvent {
    subject: Subjects.TicketUpdated;
    data: {
        id: string;
        title: string;
        price: number;
        version: number;
        userId: string;
    };
}
