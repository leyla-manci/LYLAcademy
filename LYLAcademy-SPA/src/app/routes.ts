import { CourseComponent } from './course/course.component';
import {Routes} from "@angular/router";
import { CourseDetailComponent } from './course/course-detail/course-detail.component';
import { CourseAddComponent } from './course/course-add/course-add.component';

export const appRoutes : Routes = [
{path:"course",component:CourseComponent},
{path:"courseDetail/:courseId",component:CourseDetailComponent},
{path:"courseAdd",component:CourseAddComponent},
{path:"user",component:CourseComponent},
{path:"teacher",component:CourseComponent},
{path:"student",component:CourseComponent},
{path:"participant",component:CourseComponent},
{path:"calendar",component:CourseComponent},
{path:"**",redirectTo:"course",pathMatch:"full"}
];
