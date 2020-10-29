import { Course } from './Course';
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
    endDate: Date;
    course: Course;
    teacher:Teacher;   
    isDelete:number;
}
