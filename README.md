# LYLAcademy


<div class="entry-content clearfix" style="height: auto !important;">

<h2>Academy Management System Project in Agular</h2>
<p>Lets, start to develop <a href="https://docs.google.com/document/d/1yrtlmIII0MFqdWFSrzLakv9fCF-z7oZgY5Ug_CPLA24/edit" target="_blank" rel="noopener noreferrer">c#.net project</a> for student management system </p>
<p> <a href="https://lylacademy4.azurewebsites.net/">Angular project azure link </a> </br> login :   user admin  ,  password : admin </p>
<table>
<tbody>
<tr>
<th style="text-align: left; width: 21%;">Project Title :</th>
<th style="text-align: left;">&nbsp;Academy Management System</th>
</tr>
<tr>
<td><strong>Abstract :</strong></td>
<td>Academy management system project used to maintain and track students,teacher detail with course and fees for any education organization.</td>
</tr>
<tr>
<td><strong>Project Type :</strong></td>
<td>&nbsp;Web / Windows Application  </td>
</tr>
<tr>
<td><strong>Technology :</strong></td>
<td>Visual Studio 2019 with C#,HTML,CSS,JS,Typscript Language</br> (ASP.NET CORE MVC Web API +EntityFramework + Angular 10 + SQL Server 2019)</td>
</tr>
<tr>
<td><strong>Database :</strong></td>
<td>SQL-Server 2019 Database</td>
</tr>
</tbody>
</table>
<hr>
<h3>Project Abstract :</h3>
<p>In this .net article we will discuss academy management system software which is used in classes for maintaining scheduled course detail. Our main focus in this student software to keep student, teacher, course and schedule records. In this management software  administrator can operate base records of the system. Admin has to first add detail of course with course name, duration and fees which are run in organization. The next work is to create teacher profile with suitable course. After adding course detail and teacher detail we can add student detail in our system. We provide search facility by course wise, student wise, teacher wise in our project. This student management software help us to find student fees status, paid or remaining. Also teacher or student can login the system. Teacher can add course to calendar with content, can display detail and participant list.Student can reach the list of scheduled courses and join any. Admin can update all records and add fees.</p>
<hr>
<p>The first step to develop dynamic software system we need to use database server to store the records permanently. Here, we use SQL Server database to keep the data.</p>
<figure id="attachment_6738" aria-describedby="caption-attachment-6738" style="width: 554px" class="wp-caption aligncenter"><img class="size-full wp-image-6738" src="https://github.com/leyla-manci/LYLAcademy/blob/master/_screenschot/db-diagram.png" alt="Student management software" width="554" height="435"><figcaption id="caption-attachment-6738" class="wp-caption-text"> </br>Database detail – LYL Academy</figcaption></figure>
<h3>SQL server database table detail</h3>
<p>Here, database script for this academy software to create tables in <a href="https://github.com/leyla-manci/LYLAcademy/blob/master/_screenschot/sql_server_2019_LYL_Academy_db.sql" target="_blank" rel="noopener noreferrer">sql server</a>.</p>
<table>
<tbody>
<tr>
<th style="text-align: left; width: 15%;">Table Name</th>
<th style="text-align: left;">&nbsp;Description</th>
</tr>
<tr>
<td><strong>Courses</strong></td>
<td>This table contain course detail Name, Duration and standart price detail.</td>
</tr>
<tr>
<td><strong>Teachers</strong></td>
<td>Table contain user name, teacher detail Name, Qualification detail </td>
</tr>
<tr>
<td><strong>Students</strong></td>
<td>Table contain user name, student detail Name, contact detail </td>
</tr>
<tr>
<td><strong>Users</strong></td>
<td>Table Store username and password detail for login purpose.</td>
</tr>
  <tr>
<td><strong>Calendars</strong></td>
<td>Table store all the detail of  scheduled course , content , price, course, participants and Fees Detail.</td>
</tr>
  <tr>
<td><strong>Participants</strong></td>
<td>Table store the participant and scheduled course relation.</td>
</tr>
</tbody>
</table>
<hr>
<h3>ADD Course Form</h3>
<figure id="attachment_6738" aria-describedby="caption-attachment-6738" style="width: 554px" class="wp-caption aligncenter"><img class="size-full wp-image-6738" src="https://github.com/leyla-manci/LYLAcademy/blob/master/_screenschot/course-add.png" alt="Student management software" width="554" height="335"><figcaption id="caption-attachment-6738" class="wp-caption-text"></br></figcaption></figure>
<p>Above image shows how to add course detail with course name, standart price, time duration detail.</p>
<hr>
<h3>ADD Teacher Form</h3>
<figure id="attachment_6741" aria-describedby="caption-attachment-6741" style="width: 554px" class="wp-caption aligncenter"><img class="size-full wp-image-6741" src="https://github.com/leyla-manci/LYLAcademy/blob/master/_screenschot/teacher-add.png" alt="student management system" width="554" height="435"><figcaption id="caption-attachment-6741" class="wp-caption-text"></br></figcaption></figure>
<p>Above image shows how to add teacher detail with  name, branch, username ...</p>
<hr>
<h3>ADD Student Form</h3>
<figure id="attachment_6744" aria-describedby="caption-attachment-6744" style="width: 880px" class="wp-caption aligncenter"><img class="size-full wp-image-6744" src="https://github.com/leyla-manci/LYLAcademy/blob/master/_screenschot/student-add.png" alt="student system" width="880" height="419"  sizes="(max-width: 880px) 100vw, 880px"><figcaption id="caption-attachment-6744" class="wp-caption-text"></br></figcaption></figure>
<p>Above image shows how to add student detail with  name, contact information, username ...</p>

</div>

<hr>
<h3>ADD Fees & Scheduled course detail Form</h3>
<p>This scheduled course detail form used to maintain student fees detail. Admin makes fees entry when student paid fees to institute. This form very useful to maintain fess status by paid fees and remaining fees.</p>
<figure id="attachment_6748" aria-describedby="caption-attachment-6748" style="width: 554px" class="wp-caption aligncenter"><img class="size-full wp-image-6748" src="https://github.com/leyla-manci/LYLAcademy/blob/master/_screenschot/scheduled-course-detail.png" alt="Student Management System" width="554" height="410"><figcaption id="caption-attachment-6748" class="wp-caption-text"></br></figcaption></figure>
<hr>
<h3>Student Search Form</h3>
<p>Here, we provide search facility by each student information</p>
<figure id="attachment_6750" aria-describedby="caption-attachment-6750" style="width: 792px" class="wp-caption aligncenter"><img class="size-full wp-image-6750" src="https://github.com/leyla-manci/LYLAcademy/blob/master/_screenschot/student-list.png" alt="student management software" width="792" height="457"  sizes="(max-width: 792px) 100vw, 792px"><figcaption id="caption-attachment-6750" class="wp-caption-text"></br></figcaption></figure>
<hr>
<h3>Scheduled Course Student Form</h3>
<p>Here, we provide search facility by scheduled course information,can display course detail. Student can display own course list. Also student can display other scheduled courses and can join any of them.</p>
<figure id="attachment_6750" aria-describedby="caption-attachment-6750" style="width: 792px" class="wp-caption aligncenter"><img class="size-full wp-image-6750" src="https://github.com/leyla-manci/LYLAcademy/blob/master/_screenschot/student-tojoin-course-list.png" alt="student management software" width="792" height="457"  sizes="(max-width: 792px) 100vw, 792px"><figcaption id="caption-attachment-6750" class="wp-caption-text"></br></figcaption></figure>
<hr>
<h3>Scheduled Course Admin-Teacher Form</h3>
<p>Here, we provide search facility  by scheduled course information.Admin can delete if there is not any participant,can edit-create-display detail and change fees data.</br>Teacher can create own scheduled course on calendar, can edit content and display detail.</p>
<figure id="attachment_6750" aria-describedby="caption-attachment-6750" style="width: 792px" class="wp-caption aligncenter"><img class="size-full wp-image-6750" src="https://github.com/leyla-manci/LYLAcademy/blob/master/_screenschot/scheduled-list.png" alt="student management software" width="792" height="457"  sizes="(max-width: 792px) 100vw, 792px"><figcaption id="caption-attachment-6750" class="wp-caption-text"></br></figcaption></figure>
<hr>
<p>This academy management software system has some more forms like :</p>
<ul>
  <li><a href="https://github.com/leyla-manci/LYLAcademy/blob/master/_screenschot/user-add.png">Add</a>, 
    <a href="https://github.com/leyla-manci/LYLAcademy/blob/master/_screenschot/user-list.png">List</a> User Form </br>Admin can crud user,set user as teacher,student or admin role. Also when admin create or update student/teacher can set the related username</li>
<li><a href="https://github.com/leyla-manci/LYLAcademy/blob/master/_screenschot/teacher-add.png">Add</a>, 
    <a href="https://github.com/leyla-manci/LYLAcademy/blob/master/_screenschot/teacher-list.png">List</a> Teacher Form</li>
</ul>
<h3>Related API Model,Controller & Angular Companent,Model,Services</h3>
<p>Here, related source link for this academy software to have detail information .</p>
<table>
<tbody>
<tr>
<th style="text-align: left; width: 15%;">Table Name</th>
<th style="text-align: left;">&nbsp;Related Links</th>
</tr>
<tr>
<td><strong>Courses</strong></td>
<td>Related API Model,Controller & Angular Companent,Model,Services</td>
</tr>
<tr>
<td><strong>Teachers</strong></td>
<td>Table contain user name, teacher detail Name, Qualification detail </td>
</tr>
<tr>
<td><strong>Students</strong></td>
<td>Table contain user name, student detail Name, contact detail </td>
</tr>
<tr>
<td><strong>Users</strong></td>
<td>Table Store username and password detail for login purpose.</td>
</tr>
  <tr>
<td><strong>Calendars</strong></td>
<td>Table store all the detail of  scheduled course , content , price, course, participants and Fees Detail.</td>
</tr>
  <tr>
<td><strong>Participants</strong></td>
<td>Table store the participant and scheduled course relation.</td>
</tr>
</tbody>
</table>
