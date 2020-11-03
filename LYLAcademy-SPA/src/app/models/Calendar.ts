import { Course } from './Course';
import { Participant } from './Participant';
import { Teacher } from './Teacher';

export class Calendar {
    calendarId:number;
    courseId:number;
    teacherId:number;
    year:string;
    courseContent:string;
    price:number;
    status:number;
    createDate: Date;
    updateDate: Date;
    startDate: Date;
    endDateStr: string;
    startDateStr: string;
    endDate: Date;
    course: Course;
    teacher:Teacher;   
    participantList:Participant[];
    isDelete:number;
    participantCount:number;
}
