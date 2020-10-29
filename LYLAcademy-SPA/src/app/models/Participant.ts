import { Calendar } from './Calendar';
import { Student } from './Student';

export class Participant {
    participantId:number;
    studentId:number;
    amount:number;
    amountPaid:number;
    amountRemain:number;
    calendarId:number;
    createDate: Date;
    updateDate: Date;
    student: Student;
    calendar:Calendar;   
    isDelete:number;
}