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
<td>Visual Studio 2019 with C#,HTML,CSS,JS,Typscript Language</br> (ASP.NET CORE MVC Web API + Angular 10 + SQL Server 2019)</td>
</tr>
<tr>
<td><strong>Database :</strong></td>
<td>SQL-Server 2019 Database</td>
</tr>
</tbody>
</table>
<hr>
<h3>Project Abstract :</h3>
<p>In this .net article we will discuss student management system software which is used in coaching classes for maintaining student detail. Our main focus in this student software to keep student records and maintain <strong>student&nbsp;fees detail</strong>. In this student management software only owner or administrator can operate the system. Admin has to first add detail of course with course name, duration and fees which are run in organization. The next work is to create teacher profile with suitable course. After adding course detail and teacher detail we can add student detail in our system. We provide search facility by course wise, student wise, fees status wise, teacher wise in our project. This student management software help us to find student fees status, paid or remaining.</p>
<hr>
<h2>Start to create student management system in c# .net</h2>
<p>The first step to develop dynamic software system we need to use database server to store the records permanently. Here, we use SQL Server database to keep the data. In SQL Server we have to <strong>create table</strong> to store the record, so here first we have to create some table according to our system.</p>
<h3>SQL server database table detail</h3>
<p>Here, In this student software we need to create four table in <a href="https://meeraacademy.com/sql/" target="_blank" rel="noopener noreferrer">sql server</a>.</p>
<table>
<tbody>
<tr>
<th style="text-align: left; width: 15%;">Table Name</th>
<th style="text-align: left;">&nbsp;Description</th>
</tr>
<tr>
<td><strong>CourseMst</strong></td>
<td>This table contain course detail Name, Duration and Fees detail.</td>
</tr>
<tr>
<td><strong>TeacherMst</strong></td>
<td>Table contain teacher detail Name, Qualification detail and Course detail.</td>
</tr>
<tr>
<td><strong>StudentMst</strong></td>
<td>Table store all the detail of student Personal detail, Education detail, Course and Fees Detail.</td>
</tr>
<tr>
<td><strong>UserMst</strong></td>
<td>Table Store username and password detail for login purpose.</td>
</tr>
</tbody>
</table>
<hr>
<p>After done above database work open visual studio 2010 and create windows application using c# language. Then create and design windows form for adding course detail, teacher detail, student detail, fees detail, user detail and search page.</p>
<p>let’s understand all windows form one by one with screen to more understand about student software.</p>
<h3>ADD Course Form</h3>
<hr>
<figure id="attachment_6738" aria-describedby="caption-attachment-6738" style="width: 554px" class="wp-caption aligncenter"><img class="size-full wp-image-6738" src="https://meeraacademy.com/wp-content/uploads/2017/08/addcourse.gif" alt="Student management software" width="554" height="335"><figcaption id="caption-attachment-6738" class="wp-caption-text">Add Course Form – Student Management System</figcaption></figure>
<p>Above image shows how to add course detail with course name, fees, time duration detail.</p>
<hr>
<h3>ADD Teacher Form</h3>
<figure id="attachment_6741" aria-describedby="caption-attachment-6741" style="width: 554px" class="wp-caption aligncenter"><img class="size-full wp-image-6741" src="https://meeraacademy.com/wp-content/uploads/2017/08/addteacher.gif" alt="student management system" width="554" height="335"><figcaption id="caption-attachment-6741" class="wp-caption-text">Add Teacher Form – Student Management System</figcaption></figure>
<hr>
<h3>ADD Student Form</h3>
<figure id="attachment_6744" aria-describedby="caption-attachment-6744" style="width: 880px" class="wp-caption aligncenter"><img class="size-full wp-image-6744" src="https://meeraacademy.com/wp-content/uploads/2017/08/addstudent.png" alt="student system" width="880" height="319" srcset="https://meeraacademy.com/wp-content/uploads/2017/08/addstudent.png 880w, https://meeraacademy.com/wp-content/uploads/2017/08/addstudent-300x109.png 300w, https://meeraacademy.com/wp-content/uploads/2017/08/addstudent-768x278.png 768w, https://meeraacademy.com/wp-content/uploads/2017/08/addstudent-500x181.png 500w" sizes="(max-width: 880px) 100vw, 880px"><figcaption id="caption-attachment-6744" class="wp-caption-text">Add Student Form – Student Management System C#.Net</figcaption></figure>
<p>Here, we add student personal detail with education detail, In education detail portion we can select only those course which we have already added to system. The course fees detail automatically fetch according to course. After adding student detail we can manage fees detail.</p>

</div>

<hr>
<h3>ADD Fees Form</h3>
<p>This student fees form used to maintain student fees detail. Admin makes fees entry when student paid fees to institute. This form very useful to maintain fess status by paid fees and remaining fees.</p>
<figure id="attachment_6748" aria-describedby="caption-attachment-6748" style="width: 554px" class="wp-caption aligncenter"><img class="size-full wp-image-6748" src="https://meeraacademy.com/wp-content/uploads/2017/08/addfees.gif" alt="Student Management System" width="554" height="410"><figcaption id="caption-attachment-6748" class="wp-caption-text">Add Fees Form – Student Management System C#.Net</figcaption></figure>
<hr>
<h3>Student Search Form</h3>
<p>Here, we provide search facility by student name wise, course wise, teacher wise and fees status wise.</p>
<figure id="attachment_6750" aria-describedby="caption-attachment-6750" style="width: 792px" class="wp-caption aligncenter"><img class="size-full wp-image-6750" src="https://meeraacademy.com/wp-content/uploads/2017/08/searchpage.png" alt="student management software" width="792" height="157" srcset="https://meeraacademy.com/wp-content/uploads/2017/08/searchpage.png 792w, https://meeraacademy.com/wp-content/uploads/2017/08/searchpage-300x59.png 300w, https://meeraacademy.com/wp-content/uploads/2017/08/searchpage-768x152.png 768w, https://meeraacademy.com/wp-content/uploads/2017/08/searchpage-500x99.png 500w" sizes="(max-width: 792px) 100vw, 792px"><figcaption id="caption-attachment-6750" class="wp-caption-text">Student Search Form – Student Management System C#.Net</figcaption></figure>
<hr>
<p>This student management software system has some more forms like :</p>
<ul>
<li>Delete Student Account Form</li>
<li>Add Login User Form</li>
<li>Delete Course Form</li>
<li>Delete Teacher Form</li>
</ul>

