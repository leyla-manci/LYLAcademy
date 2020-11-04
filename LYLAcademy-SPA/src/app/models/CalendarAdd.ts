import { Course } from './Course';
import { Participant } from './Participant';
import { Teacher } from './Teacher';

export class CalendarAdd {
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
