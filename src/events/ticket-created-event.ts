import { Subjects } from '../streaming/subjects';

export interface TicketCreatedEvent {
    subject: Subjects.TicketCreated;
    data: {
        id: string;
        title: string;
        version: number;
        price: number;
        userId: string;
        creator: string;
        imageUrl: string;
    };
}
