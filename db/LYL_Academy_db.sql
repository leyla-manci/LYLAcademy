/****** Object:  Database [LYL_Academy_db]    Script Date: 5.11.2020 06:39:16 ******/
CREATE DATABASE [LYL_Academy_db]   WITH CATALOG_COLLATION = DATABASE_DEFAULT;
GO
ALTER DATABASE [LYL_Academy_db] SET COMPATIBILITY_LEVEL = 150
GO
ALTER DATABASE [LYL_Academy_db] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [LYL_Academy_db] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [LYL_Academy_db] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [LYL_Academy_db] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [LYL_Academy_db] SET ARITHABORT OFF 
GO
ALTER DATABASE [LYL_Academy_db] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [LYL_Academy_db] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [LYL_Academy_db] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [LYL_Academy_db] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [LYL_Academy_db] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [LYL_Academy_db] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [LYL_Academy_db] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [LYL_Academy_db] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [LYL_Academy_db] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [LYL_Academy_db] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [LYL_Academy_db] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [LYL_Academy_db] SET  MULTI_USER 
GO
ALTER DATABASE [LYL_Academy_db] SET QUERY_STORE = OFF
GO
/****** Object:  Table [dbo].[Calendars]    Script Date: 5.11.2020 06:39:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Calendars](
	[CalendarId] [int] IDENTITY(1,1) NOT NULL,
	[CourseId] [int] NOT NULL,
	[TeacherId] [int] NULL,
	[StartDate] [datetime] NOT NULL,
	[EndDate] [datetime] NOT NULL,
	[Year] [nvarchar](50) NOT NULL,
	[CourseContent] [nvarchar](max) NOT NULL,
	[Price] [decimal](18, 0) NOT NULL,
	[Status] [int] NOT NULL,
	[IsDelete] [int] NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[UpdateDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Calendar] PRIMARY KEY CLUSTERED 
(
	[CalendarId] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Courses]    Script Date: 5.11.2020 06:39:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Courses](
	[CourseId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Duration] [nvarchar](50) NULL,
	[Description] [nvarchar](150) NULL,
	[Price] [decimal](18, 0) NOT NULL,
 CONSTRAINT [PK_Course] PRIMARY KEY CLUSTERED 
(
	[CourseId] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Participants]    Script Date: 5.11.2020 06:39:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Participants](
	[ParticipantId] [int] IDENTITY(1,1) NOT NULL,
	[StudentId] [int] NOT NULL,
	[Amount] [decimal](18, 0) NOT NULL,
	[AmountPaid] [decimal](18, 0) NOT NULL,
	[AmountRemain] [decimal](18, 0) NOT NULL,
	[CalendarId] [int] NOT NULL,
	[IsDelete] [int] NOT NULL,
	[CreateDate] [datetime] NOT NULL,
	[UpdateDate] [datetime] NOT NULL,
 CONSTRAINT [PK_Participant] PRIMARY KEY CLUSTERED 
(
	[ParticipantId] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Students]    Script Date: 5.11.2020 06:39:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Students](
	[StudentId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Surname] [nvarchar](50) NULL,
	[UserName] [nvarchar](50) NULL,
	[Address] [nvarchar](max) NULL,
	[Email] [nvarchar](50) NULL,
	[Phone] [bigint] NULL,
	[IsDelete] [int] NOT NULL,
 CONSTRAINT [PK_Student] PRIMARY KEY CLUSTERED 
(
	[StudentId] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Teachers]    Script Date: 5.11.2020 06:39:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Teachers](
	[TeacherId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Surname] [nvarchar](50) NULL,
	[UserName] [nvarchar](50) NULL,
	[Qualification] [nchar](10) NULL,
	[CompBranch] [nchar](10) NULL,
	[IsDelete] [int] NOT NULL,
 CONSTRAINT [PK_Teacher] PRIMARY KEY CLUSTERED 
(
	[TeacherId] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 5.11.2020 06:39:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Password] [nchar](10) NOT NULL,
	[IsStudent] [int] NOT NULL,
	[IsTeacher] [int] NOT NULL,
	[IsAdmin] [int] NOT NULL,
	[IsDelete] [int] NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[Name] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Calendars] ON 

INSERT [dbo].[Calendars] ([CalendarId], [CourseId], [TeacherId], [StartDate], [EndDate], [Year], [CourseContent], [Price], [Status], [IsDelete], [CreateDate], [UpdateDate]) VALUES (2, 2, 2, CAST(N'2020-11-01T00:00:00.000' AS DateTime), CAST(N'2021-02-01T00:00:00.000' AS DateTime), N'2020', N'Nereden Gelir?
Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia''daki Hampden-Sydney College''dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan ''consectetur'' sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.', CAST(500 AS Decimal(18, 0)), 1, 0, CAST(N'2020-10-29T00:00:00.000' AS DateTime), CAST(N'2020-10-29T00:00:00.000' AS DateTime))
INSERT [dbo].[Calendars] ([CalendarId], [CourseId], [TeacherId], [StartDate], [EndDate], [Year], [CourseContent], [Price], [Status], [IsDelete], [CreateDate], [UpdateDate]) VALUES (4, 6, 2, CAST(N'2020-11-01T00:00:00.000' AS DateTime), CAST(N'2021-02-01T00:00:00.000' AS DateTime), N'2020', N'Nereden Gelir?
Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia''daki Hampden-Sydney College''dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan ''consectetur'' sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.', CAST(500 AS Decimal(18, 0)), 1, 0, CAST(N'2020-10-29T00:00:00.000' AS DateTime), CAST(N'2020-10-29T00:00:00.000' AS DateTime))
INSERT [dbo].[Calendars] ([CalendarId], [CourseId], [TeacherId], [StartDate], [EndDate], [Year], [CourseContent], [Price], [Status], [IsDelete], [CreateDate], [UpdateDate]) VALUES (5, 7, 3, CAST(N'2020-11-01T00:00:00.000' AS DateTime), CAST(N'2021-02-01T00:00:00.000' AS DateTime), N'2020', N'<b>Preparing for a .NET interview </b> <i> can be little hard </i> because you do not know what to expect, especially if you are New to the .NET development . With this article, It gives you a platform to learn programs in .NET language ,you get some basic idea and become job ready . Following is a list of important .NET developer interview questions and topics that frequently are asked.
Dot Net Topics Latest Updated — FREE PDF Download Link
FRAMEWORK CONCEPTS
.NET Framework introduction
Framework Components
Types of Applications developed using MS.NET
Base Class Library/Framework Class Library
Namespaces, CLR
MS.NET Memory Management / Garbage Collection
CTS,CLS
JIT Compilers
C#', CAST(500 AS Decimal(18, 0)), 1, 0, CAST(N'2020-10-29T00:00:00.000' AS DateTime), CAST(N'2020-10-29T00:00:00.000' AS DateTime))
INSERT [dbo].[Calendars] ([CalendarId], [CourseId], [TeacherId], [StartDate], [EndDate], [Year], [CourseContent], [Price], [Status], [IsDelete], [CreateDate], [UpdateDate]) VALUES (12, 2, 1, CAST(N'2020-11-05T00:00:00.000' AS DateTime), CAST(N'2021-05-05T00:00:00.000' AS DateTime), N'2021', N'<b>Nereden Gelir?</b>
Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginia''daki Hampden-Sydney College''dan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan ''consectetur'' sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32 sayılı bölümdeki bir satırdan gelmektedir. ', CAST(800 AS Decimal(18, 0)), 1, 0, CAST(N'2020-11-01T00:00:00.000' AS DateTime), CAST(N'2020-11-01T00:00:00.000' AS DateTime))
INSERT [dbo].[Calendars] ([CalendarId], [CourseId], [TeacherId], [StartDate], [EndDate], [Year], [CourseContent], [Price], [Status], [IsDelete], [CreateDate], [UpdateDate]) VALUES (30, 1, 1, CAST(N'2019-01-01T00:00:00.000' AS DateTime), CAST(N'2019-05-01T00:00:00.000' AS DateTime), N'2019', N'Package definition and imports
Program entry point
Functions
Variables
Comments
String templates
Conditional expressions
Nullable values and null checks
Type checks and automatic casts
for loop
while loop
when expression
Ranges
Collections
Creating basic classes and their instances
Idioms
Creating DTOs (POJOs/POCOs)
Default values for function parameters
Filtering a list
Checking element presence in a collection
String Interpolation
Instance Checks
Traversing a map/list of pairs
Using ranges
Read-only list
Read-only map
Accessing a map
Lazy property
Extension Functions
Creating a singleton
If not null shorthand
If not null and else shorthand
Executing a statement if null
Get first item of a possibly empty collection
Execute if not null
Map nullable value if not null
Return on when statement
''try/catch'' expression
''if'' expression
Builder-style usage of methods that return Unit
Single-expression functions
Calling multiple methods on an object instance (with)
Configuring properties of an object (apply)
Java 7''s try with resources
Convenient form for a generic function that requires the generic type information
Consuming a nullable Boolean
Swapping two variables
TODO(): Marking code as incomplete
Coding Conventions
Applying the style guide
Directory structure
Source file names
Source file organization
Class layout
Interface implementation layout
Overload layout
Naming rules
Function names
Property names
Choosing good names
Formatting
Horizontal whitespace
Colon
Class header formatting
Modifiers
Annotation formatting
File annotations
Function formatting
Expression body formatting
Property formatting
Formatting control flow statements
Method call formatting
Chained call wrapping
Lambda formatting
Documentation comments
Avoiding redundant constructs
Unit
Semicolons
String templates
Idiomatic use of language features
Immutability
Default parameter values
Type aliases
Lambda parameters
Returns in a lambda
Named arguments
Using conditional statements
if versus when
Using nullable Boolean values in conditions
Using loops
Loops on ranges
Using strings
Functions vs Properties
Using extension functions
Using infix functions
Factory functions
Platform types
Using scope functions apply/with/run/also/let
Coding conventions for libraries
Basics
Basic Types
Numbers
Literal constants
Underscores in numeric literals (since 1.1)
Representation
Explicit conversions
Operations
Floating point numbers comparison
Characters
Booleans
Arrays
Primitive type arrays
Unsigned integers
Specialized classes
Literals
Experimental status of unsigned integers
Strings
String literals
String templates
Packages and Imports
Packages
Default Imports
Imports
Visibility of Top-level Declarations
Control Flow
If Expression
When Expression', CAST(1200 AS Decimal(18, 0)), 1, 0, CAST(N'2019-01-01T00:00:00.000' AS DateTime), CAST(N'2019-01-01T00:00:00.000' AS DateTime))
INSERT [dbo].[Calendars] ([CalendarId], [CourseId], [TeacherId], [StartDate], [EndDate], [Year], [CourseContent], [Price], [Status], [IsDelete], [CreateDate], [UpdateDate]) VALUES (37, 7, 5, CAST(N'2020-11-03T00:00:00.000' AS DateTime), CAST(N'2021-03-05T00:00:00.000' AS DateTime), N'2021', N'**


Code with ❤️




', CAST(900 AS Decimal(18, 0)), 1, 0, CAST(N'2020-11-03T00:00:00.000' AS DateTime), CAST(N'2020-11-03T00:00:00.000' AS DateTime))
INSERT [dbo].[Calendars] ([CalendarId], [CourseId], [TeacherId], [StartDate], [EndDate], [Year], [CourseContent], [Price], [Status], [IsDelete], [CreateDate], [UpdateDate]) VALUES (38, 13, 3, CAST(N'2020-11-12T00:00:00.000' AS DateTime), CAST(N'2021-03-26T00:00:00.000' AS DateTime), N'2020', N'This Tutorial
This tutorial is specially designed to help you learn AngularJS as quickly and efficiently as possible.

First, you will learn the basics of AngularJS: directives, expressions, filters, modules, and controllers.

Then you will learn everything else you need to know about AngularJS:

Events, DOM, Forms, Input, Validation, Http, and more.', CAST(456 AS Decimal(18, 0)), 1, 0, CAST(N'2020-11-04T06:48:17.540' AS DateTime), CAST(N'2020-11-04T06:48:17.540' AS DateTime))
INSERT [dbo].[Calendars] ([CalendarId], [CourseId], [TeacherId], [StartDate], [EndDate], [Year], [CourseContent], [Price], [Status], [IsDelete], [CreateDate], [UpdateDate]) VALUES (39, 14, 3, CAST(N'2020-11-20T00:00:00.000' AS DateTime), CAST(N'2021-05-01T00:00:00.000' AS DateTime), N'2021', N'Design Patterns
In software engineering, a design pattern is a general repeatable solution to a commonly occurring problem in software design. A design pattern isn''t a finished design that can be transformed directly into code. It is a description or template for how to solve a problem that can be used in many different situations.

Uses of Design Patterns
Design patterns can speed up the development process by providing tested, proven development paradigms. Effective software design requires considering issues that may not become visible until later in the implementation. Reusing design patterns helps to prevent subtle issues that can cause major problems and improves code readability for coders and architects familiar with the patterns.

Often, people only understand how to apply certain software design techniques to certain problems. These techniques are difficult to apply to a broader range of problems. Design patterns provide general solutions, documented in a format that doesn''t require specifics tied to a particular problem.

In addition, patterns allow developers to communicate using well-known, well understood names for software interactions. Common design patterns can be improved over time, making them more robust than ad-hoc designs.

Creational design patterns
These design patterns are all about class instantiation. This pattern can be further divided into class-creation patterns and object-creational patterns. While class-creation patterns use inheritance effectively in the instantiation process, object-creation patterns use delegation effectively to get the job done.

Example of Abstract Factory
Abstract Factory
Creates an instance of several families of classes
Builder
Separates object construction from its representation
Factory Method
Creates an instance of several derived classes
Object Pool
Avoid expensive acquisition and release of resources by recycling objects that are no longer in use
Prototype
A fully initialized instance to be copied or cloned', CAST(985 AS Decimal(18, 0)), 1, 0, CAST(N'2020-11-04T06:53:38.220' AS DateTime), CAST(N'2020-11-04T06:53:38.220' AS DateTime))
INSERT [dbo].[Calendars] ([CalendarId], [CourseId], [TeacherId], [StartDate], [EndDate], [Year], [CourseContent], [Price], [Status], [IsDelete], [CreateDate], [UpdateDate]) VALUES (40, 15, 6, CAST(N'2020-11-25T00:00:00.000' AS DateTime), CAST(N'2020-12-12T00:00:00.000' AS DateTime), N'2020', N'Learn Git with Bitbucket Cloud
Learn Git with Bitbucket Cloud
Create a Git repository Copy your Git repository and add files Pull changes from your Git repository on Bitbucket Cloud Use a Git branch to merge a file
Objective
Learn the basics of Git with this space themed tutorial. 

Mission Brief
Your mission is to learn the ropes of Git by completing the tutorial and tracking down all your team''s space stations. Commands covered in this tutorial:

git clone, git config, git add, git status, git commit, git push, git pull, git branch, git checkout, and git merge
Time	Audience	Prerequisites
30 minutes	You are new to Git and Bitbucket Cloud	
You have installed Git
 	 	
You have a Bitbucket account
Create a Git repository', CAST(235 AS Decimal(18, 0)), 1, 0, CAST(N'2020-11-04T07:11:09.097' AS DateTime), CAST(N'2020-11-04T07:11:09.097' AS DateTime))
INSERT [dbo].[Calendars] ([CalendarId], [CourseId], [TeacherId], [StartDate], [EndDate], [Year], [CourseContent], [Price], [Status], [IsDelete], [CreateDate], [UpdateDate]) VALUES (41, 17, 7, CAST(N'2020-12-25T00:00:00.000' AS DateTime), CAST(N'2020-12-25T00:00:00.000' AS DateTime), N'2020', N'<b>History of <i> Java </i> </b>
Sun Microsystems developed the Java programming language in May 1995. It was introduced with the help of Java Development Kit (JDK), which contains a Java Runtime Environment (JRE). The JRE contains a Java Virtual Machine (JVM) and software tools such as Java application program interfaces (APIs) that help the development of Java applications. The first version of JDK was 1.0 and the latest release of Java Standard Edition is Java SE 10. Developers have defined various configurations of Java in order to fulfill the requirements of multiple platforms such as Java EE for Enterprise Applications and Java ME for Mobile Applications.

Java is an object-oriented, cross-platform, powerful and robust programming language with support for security and strong memory management. It also provides support for a multithreading feature with which you can write code that can perform several functions simultaneously. Most developers choose Java as a programming language while creating an application or working on any project because of its amazing features. Java is widely used for developing web applications, software, and web portals as well.

The Java source code is saved with .java extension. It is necessary to compile a Java program before its execution. Like other programming languages such as C++ and C, Java also allows you to store data in variables.

Top 30 Java Tutorials, Resources, and Courses
These resources on Java tutorials are described in this article.

Codecademy
Udemy
Coursera
Java Code Geeks
Learn Java
Oracle Java Tutorials
edX
SoloLearn
Skillshare
Codementor
Program Creek
Java Beginners Tutorial
W3Resource
Tutorials Point
Studytonight
Udacity
Cave of Programming
Treehouse
Programming by Doing
Sanfoundry
JavaTpoint
Guru99
Java Tutorial
W3Schools
JournalDev
Programiz
Jenkov.com
Lynda.com
NetBeans
Simplilearn
1. Codecademy', CAST(300 AS Decimal(18, 0)), 1, 0, CAST(N'2020-11-05T00:51:56.960' AS DateTime), CAST(N'2020-11-05T00:51:56.960' AS DateTime))
SET IDENTITY_INSERT [dbo].[Calendars] OFF
GO
SET IDENTITY_INSERT [dbo].[Courses] ON 

INSERT [dbo].[Courses] ([CourseId], [Name], [Duration], [Description], [Price]) VALUES (1, N'HTML', N'2 ay', N'html web tasarım', CAST(780 AS Decimal(18, 0)))
INSERT [dbo].[Courses] ([CourseId], [Name], [Duration], [Description], [Price]) VALUES (2, N'Kotlin', N'6 ay', N'MOBİL uygulama', CAST(2500 AS Decimal(18, 0)))
INSERT [dbo].[Courses] ([CourseId], [Name], [Duration], [Description], [Price]) VALUES (4, N'PHP', N'12 ay', N'php , html vs', CAST(1210 AS Decimal(18, 0)))
INSERT [dbo].[Courses] ([CourseId], [Name], [Duration], [Description], [Price]) VALUES (6, N'C#', N'3 ay', N'csharp', CAST(700 AS Decimal(18, 0)))
INSERT [dbo].[Courses] ([CourseId], [Name], [Duration], [Description], [Price]) VALUES (7, N'.net', N'5 ay', N'dotnet', CAST(500 AS Decimal(18, 0)))
INSERT [dbo].[Courses] ([CourseId], [Name], [Duration], [Description], [Price]) VALUES (8, N'android', N'24 ay', N'android native', CAST(5000 AS Decimal(18, 0)))
INSERT [dbo].[Courses] ([CourseId], [Name], [Duration], [Description], [Price]) VALUES (9, N'css', N'2 ay', N'css style', CAST(350 AS Decimal(18, 0)))
INSERT [dbo].[Courses] ([CourseId], [Name], [Duration], [Description], [Price]) VALUES (10, N'new course', N'6 ay', N'flutter', CAST(6000 AS Decimal(18, 0)))
INSERT [dbo].[Courses] ([CourseId], [Name], [Duration], [Description], [Price]) VALUES (12, N'flutter', N'3 ay', N'android native', CAST(400 AS Decimal(18, 0)))
INSERT [dbo].[Courses] ([CourseId], [Name], [Duration], [Description], [Price]) VALUES (13, N'angular', N'5 ay', N'angular web', CAST(700 AS Decimal(18, 0)))
INSERT [dbo].[Courses] ([CourseId], [Name], [Duration], [Description], [Price]) VALUES (14, N'Design Patterns', N'9 month', N'repository , solid ,single object ,mvc ,mvvm ,single page,single activity,navigation graph', CAST(3800 AS Decimal(18, 0)))
INSERT [dbo].[Courses] ([CourseId], [Name], [Duration], [Description], [Price]) VALUES (15, N'Git', N'2 hafta', N'version control', CAST(500 AS Decimal(18, 0)))
INSERT [dbo].[Courses] ([CourseId], [Name], [Duration], [Description], [Price]) VALUES (17, N'Java', N'1 ay', N'Basic Java', CAST(450 AS Decimal(18, 0)))
SET IDENTITY_INSERT [dbo].[Courses] OFF
GO
SET IDENTITY_INSERT [dbo].[Participants] ON 

INSERT [dbo].[Participants] ([ParticipantId], [StudentId], [Amount], [AmountPaid], [AmountRemain], [CalendarId], [IsDelete], [CreateDate], [UpdateDate]) VALUES (2, 1, CAST(2000 AS Decimal(18, 0)), CAST(200 AS Decimal(18, 0)), CAST(1800 AS Decimal(18, 0)), 2, 0, CAST(N'2020-11-01T00:00:00.000' AS DateTime), CAST(N'2020-11-01T00:00:00.000' AS DateTime))
INSERT [dbo].[Participants] ([ParticipantId], [StudentId], [Amount], [AmountPaid], [AmountRemain], [CalendarId], [IsDelete], [CreateDate], [UpdateDate]) VALUES (3, 1, CAST(2000 AS Decimal(18, 0)), CAST(200 AS Decimal(18, 0)), CAST(1800 AS Decimal(18, 0)), 5, 0, CAST(N'2020-11-01T00:00:00.000' AS DateTime), CAST(N'2020-11-01T00:00:00.000' AS DateTime))
INSERT [dbo].[Participants] ([ParticipantId], [StudentId], [Amount], [AmountPaid], [AmountRemain], [CalendarId], [IsDelete], [CreateDate], [UpdateDate]) VALUES (9, 1, CAST(500 AS Decimal(18, 0)), CAST(0 AS Decimal(18, 0)), CAST(500 AS Decimal(18, 0)), 4, 0, CAST(N'2020-11-01T05:28:31.077' AS DateTime), CAST(N'2020-11-01T05:28:31.077' AS DateTime))
INSERT [dbo].[Participants] ([ParticipantId], [StudentId], [Amount], [AmountPaid], [AmountRemain], [CalendarId], [IsDelete], [CreateDate], [UpdateDate]) VALUES (10, 1, CAST(800 AS Decimal(18, 0)), CAST(250 AS Decimal(18, 0)), CAST(550 AS Decimal(18, 0)), 12, 0, CAST(N'2020-11-01T05:28:34.913' AS DateTime), CAST(N'2020-11-01T05:28:34.913' AS DateTime))
INSERT [dbo].[Participants] ([ParticipantId], [StudentId], [Amount], [AmountPaid], [AmountRemain], [CalendarId], [IsDelete], [CreateDate], [UpdateDate]) VALUES (11, 2, CAST(800 AS Decimal(18, 0)), CAST(150 AS Decimal(18, 0)), CAST(650 AS Decimal(18, 0)), 12, 0, CAST(N'2020-11-01T05:28:34.000' AS DateTime), CAST(N'2020-11-01T05:28:34.000' AS DateTime))
INSERT [dbo].[Participants] ([ParticipantId], [StudentId], [Amount], [AmountPaid], [AmountRemain], [CalendarId], [IsDelete], [CreateDate], [UpdateDate]) VALUES (12, 6, CAST(800 AS Decimal(18, 0)), CAST(300 AS Decimal(18, 0)), CAST(500 AS Decimal(18, 0)), 12, 0, CAST(N'2020-11-01T05:28:34.000' AS DateTime), CAST(N'2020-11-01T05:28:34.000' AS DateTime))
INSERT [dbo].[Participants] ([ParticipantId], [StudentId], [Amount], [AmountPaid], [AmountRemain], [CalendarId], [IsDelete], [CreateDate], [UpdateDate]) VALUES (13, 6, CAST(500 AS Decimal(18, 0)), CAST(12 AS Decimal(18, 0)), CAST(488 AS Decimal(18, 0)), 4, 0, CAST(N'2020-11-03T05:44:24.373' AS DateTime), CAST(N'2020-11-03T05:44:24.373' AS DateTime))
INSERT [dbo].[Participants] ([ParticipantId], [StudentId], [Amount], [AmountPaid], [AmountRemain], [CalendarId], [IsDelete], [CreateDate], [UpdateDate]) VALUES (14, 6, CAST(900 AS Decimal(18, 0)), CAST(0 AS Decimal(18, 0)), CAST(900 AS Decimal(18, 0)), 37, 0, CAST(N'2020-11-03T05:44:40.020' AS DateTime), CAST(N'2020-11-03T05:44:40.020' AS DateTime))
INSERT [dbo].[Participants] ([ParticipantId], [StudentId], [Amount], [AmountPaid], [AmountRemain], [CalendarId], [IsDelete], [CreateDate], [UpdateDate]) VALUES (15, 6, CAST(1200 AS Decimal(18, 0)), CAST(0 AS Decimal(18, 0)), CAST(1200 AS Decimal(18, 0)), 30, 0, CAST(N'2020-11-03T05:47:57.523' AS DateTime), CAST(N'2020-11-03T05:47:57.523' AS DateTime))
INSERT [dbo].[Participants] ([ParticipantId], [StudentId], [Amount], [AmountPaid], [AmountRemain], [CalendarId], [IsDelete], [CreateDate], [UpdateDate]) VALUES (16, 21, CAST(500 AS Decimal(18, 0)), CAST(161 AS Decimal(18, 0)), CAST(339 AS Decimal(18, 0)), 5, 0, CAST(N'2020-11-03T06:07:52.913' AS DateTime), CAST(N'2020-11-03T06:07:52.913' AS DateTime))
INSERT [dbo].[Participants] ([ParticipantId], [StudentId], [Amount], [AmountPaid], [AmountRemain], [CalendarId], [IsDelete], [CreateDate], [UpdateDate]) VALUES (17, 21, CAST(800 AS Decimal(18, 0)), CAST(600 AS Decimal(18, 0)), CAST(200 AS Decimal(18, 0)), 12, 0, CAST(N'2020-11-03T06:09:41.910' AS DateTime), CAST(N'2020-11-03T06:09:41.910' AS DateTime))
INSERT [dbo].[Participants] ([ParticipantId], [StudentId], [Amount], [AmountPaid], [AmountRemain], [CalendarId], [IsDelete], [CreateDate], [UpdateDate]) VALUES (18, 21, CAST(1200 AS Decimal(18, 0)), CAST(0 AS Decimal(18, 0)), CAST(1200 AS Decimal(18, 0)), 30, 0, CAST(N'2020-11-03T06:44:03.490' AS DateTime), CAST(N'2020-11-03T06:44:03.490' AS DateTime))
INSERT [dbo].[Participants] ([ParticipantId], [StudentId], [Amount], [AmountPaid], [AmountRemain], [CalendarId], [IsDelete], [CreateDate], [UpdateDate]) VALUES (19, 21, CAST(500 AS Decimal(18, 0)), CAST(69 AS Decimal(18, 0)), CAST(431 AS Decimal(18, 0)), 4, 0, CAST(N'2020-11-03T06:45:10.600' AS DateTime), CAST(N'2020-11-03T06:45:10.600' AS DateTime))
INSERT [dbo].[Participants] ([ParticipantId], [StudentId], [Amount], [AmountPaid], [AmountRemain], [CalendarId], [IsDelete], [CreateDate], [UpdateDate]) VALUES (20, 2, CAST(235 AS Decimal(18, 0)), CAST(35 AS Decimal(18, 0)), CAST(200 AS Decimal(18, 0)), 40, 0, CAST(N'2020-11-04T07:11:52.697' AS DateTime), CAST(N'2020-11-04T07:11:52.697' AS DateTime))
INSERT [dbo].[Participants] ([ParticipantId], [StudentId], [Amount], [AmountPaid], [AmountRemain], [CalendarId], [IsDelete], [CreateDate], [UpdateDate]) VALUES (21, 2, CAST(300 AS Decimal(18, 0)), CAST(0 AS Decimal(18, 0)), CAST(300 AS Decimal(18, 0)), 41, 0, CAST(N'2020-11-05T00:54:43.303' AS DateTime), CAST(N'2020-11-05T00:54:43.303' AS DateTime))
INSERT [dbo].[Participants] ([ParticipantId], [StudentId], [Amount], [AmountPaid], [AmountRemain], [CalendarId], [IsDelete], [CreateDate], [UpdateDate]) VALUES (22, 25, CAST(300 AS Decimal(18, 0)), CAST(0 AS Decimal(18, 0)), CAST(300 AS Decimal(18, 0)), 41, 0, CAST(N'2020-11-05T00:56:48.600' AS DateTime), CAST(N'2020-11-05T00:56:48.600' AS DateTime))
INSERT [dbo].[Participants] ([ParticipantId], [StudentId], [Amount], [AmountPaid], [AmountRemain], [CalendarId], [IsDelete], [CreateDate], [UpdateDate]) VALUES (23, 2, CAST(1200 AS Decimal(18, 0)), CAST(0 AS Decimal(18, 0)), CAST(1200 AS Decimal(18, 0)), 30, 0, CAST(N'2020-11-05T02:18:52.907' AS DateTime), CAST(N'2020-11-05T02:18:52.907' AS DateTime))
SET IDENTITY_INSERT [dbo].[Participants] OFF
GO
SET IDENTITY_INSERT [dbo].[Students] ON 

INSERT [dbo].[Students] ([StudentId], [Name], [Surname], [UserName], [Address], [Email], [Phone], [IsDelete]) VALUES (1, N'leyla', N'akmancı', N'student', N'istanbul avrupa bakırköy', N'lyl@gmail.com', 123456789588, 0)
INSERT [dbo].[Students] ([StudentId], [Name], [Surname], [UserName], [Address], [Email], [Phone], [IsDelete]) VALUES (2, N'mecit', N'akmancı', N'admin', N'istanbul', N'mct@gmail.com', 2569874563, 0)
INSERT [dbo].[Students] ([StudentId], [Name], [Surname], [UserName], [Address], [Email], [Phone], [IsDelete]) VALUES (6, N'newstudent', N'surname', N'student2', N'fddsvsf', N'leyla@gmail.com', 4740225, 0)
INSERT [dbo].[Students] ([StudentId], [Name], [Surname], [UserName], [Address], [Email], [Phone], [IsDelete]) VALUES (21, N'lyl student', N'lyls', N'lyl', N'fddsvsf', N'leyla@gmail.com', 4740229, 0)
INSERT [dbo].[Students] ([StudentId], [Name], [Surname], [UserName], [Address], [Email], [Phone], [IsDelete]) VALUES (25, N'superStudent', N'super', N'SuperUser', N'adress ....... abc', N'super@gmail.com', 78965412312, 0)
SET IDENTITY_INSERT [dbo].[Students] OFF
GO
SET IDENTITY_INSERT [dbo].[Teachers] ON 

INSERT [dbo].[Teachers] ([TeacherId], [Name], [Surname], [UserName], [Qualification], [CompBranch], [IsDelete]) VALUES (1, N'teacher1e', N'surname1e', N'teacher', N'Mobilee   ', N'Androide  ', 0)
INSERT [dbo].[Teachers] ([TeacherId], [Name], [Surname], [UserName], [Qualification], [CompBranch], [IsDelete]) VALUES (2, N'teacher2', N'surname2', N'teacher2', N'Mobile    ', N'ios       ', 0)
INSERT [dbo].[Teachers] ([TeacherId], [Name], [Surname], [UserName], [Qualification], [CompBranch], [IsDelete]) VALUES (3, N'teacher3', N'surname3', N'teacher3', N'Web       ', N'angular   ', 0)
INSERT [dbo].[Teachers] ([TeacherId], [Name], [Surname], [UserName], [Qualification], [CompBranch], [IsDelete]) VALUES (5, N'teacher 4', N'teacher4 sn', N'teacher4', N'Crossplat.', N'Flutter   ', 0)
INSERT [dbo].[Teachers] ([TeacherId], [Name], [Surname], [UserName], [Qualification], [CompBranch], [IsDelete]) VALUES (6, N'git teacher', N'new teacher', N'teachergit', N'software  ', N'www       ', 0)
INSERT [dbo].[Teachers] ([TeacherId], [Name], [Surname], [UserName], [Qualification], [CompBranch], [IsDelete]) VALUES (7, N'Super Teacher', N'super', N'SuperUser', N'java      ', N'web,mobil ', 0)
SET IDENTITY_INSERT [dbo].[Teachers] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([UserId], [Name], [Password], [IsStudent], [IsTeacher], [IsAdmin], [IsDelete]) VALUES (1, N'admin', N'admin     ', 1, 1, 1, 0)
INSERT [dbo].[Users] ([UserId], [Name], [Password], [IsStudent], [IsTeacher], [IsAdmin], [IsDelete]) VALUES (2, N'lyl', N'lyl       ', 1, 1, 1, 0)
INSERT [dbo].[Users] ([UserId], [Name], [Password], [IsStudent], [IsTeacher], [IsAdmin], [IsDelete]) VALUES (12, N'student', N'student   ', 1, 0, 0, 0)
INSERT [dbo].[Users] ([UserId], [Name], [Password], [IsStudent], [IsTeacher], [IsAdmin], [IsDelete]) VALUES (20, N'student2', N'student2  ', 1, 0, 0, 0)
INSERT [dbo].[Users] ([UserId], [Name], [Password], [IsStudent], [IsTeacher], [IsAdmin], [IsDelete]) VALUES (25, N'SuperUser', N'superuser ', 0, 1, 1, 0)
INSERT [dbo].[Users] ([UserId], [Name], [Password], [IsStudent], [IsTeacher], [IsAdmin], [IsDelete]) VALUES (13, N'teacher', N'teacher   ', 0, 1, 0, 0)
INSERT [dbo].[Users] ([UserId], [Name], [Password], [IsStudent], [IsTeacher], [IsAdmin], [IsDelete]) VALUES (14, N'teacher2', N'teacher2  ', 0, 1, 1, 0)
INSERT [dbo].[Users] ([UserId], [Name], [Password], [IsStudent], [IsTeacher], [IsAdmin], [IsDelete]) VALUES (15, N'teacher3', N'teacher3  ', 0, 1, 0, 0)
INSERT [dbo].[Users] ([UserId], [Name], [Password], [IsStudent], [IsTeacher], [IsAdmin], [IsDelete]) VALUES (16, N'teacher4', N'teacher4  ', 0, 1, 1, 0)
INSERT [dbo].[Users] ([UserId], [Name], [Password], [IsStudent], [IsTeacher], [IsAdmin], [IsDelete]) VALUES (23, N'teachergit', N'teachergit', 0, 1, 0, 0)
INSERT [dbo].[Users] ([UserId], [Name], [Password], [IsStudent], [IsTeacher], [IsAdmin], [IsDelete]) VALUES (21, N'wwww', N'wwww      ', 0, 1, 1, 0)
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
ALTER TABLE [dbo].[Calendars] ADD  DEFAULT ((0)) FOR [IsDelete]
GO
ALTER TABLE [dbo].[Participants] ADD  CONSTRAINT [DF__Participa__IsDel__4D94879B]  DEFAULT ((0)) FOR [IsDelete]
GO
ALTER TABLE [dbo].[Students] ADD  CONSTRAINT [DF__Student__IsDelet__38996AB5]  DEFAULT ((0)) FOR [IsDelete]
GO
ALTER TABLE [dbo].[Teachers] ADD  DEFAULT ((0)) FOR [IsDelete]
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT ((0)) FOR [IsStudent]
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT ((0)) FOR [IsTeacher]
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT ((0)) FOR [IsAdmin]
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT ((0)) FOR [IsDelete]
GO
ALTER TABLE [dbo].[Calendars]  WITH CHECK ADD  CONSTRAINT [FK_Calendar_Course] FOREIGN KEY([CourseId])
REFERENCES [dbo].[Courses] ([CourseId])
GO
ALTER TABLE [dbo].[Calendars] CHECK CONSTRAINT [FK_Calendar_Course]
GO
ALTER TABLE [dbo].[Calendars]  WITH CHECK ADD  CONSTRAINT [FK_Calendar_Teacher] FOREIGN KEY([TeacherId])
REFERENCES [dbo].[Teachers] ([TeacherId])
GO
ALTER TABLE [dbo].[Calendars] CHECK CONSTRAINT [FK_Calendar_Teacher]
GO
ALTER TABLE [dbo].[Participants]  WITH CHECK ADD  CONSTRAINT [FK_Participant_Calendar] FOREIGN KEY([CalendarId])
REFERENCES [dbo].[Calendars] ([CalendarId])
GO
ALTER TABLE [dbo].[Participants] CHECK CONSTRAINT [FK_Participant_Calendar]
GO
ALTER TABLE [dbo].[Participants]  WITH CHECK ADD  CONSTRAINT [FK_Participant_Student] FOREIGN KEY([StudentId])
REFERENCES [dbo].[Students] ([StudentId])
GO
ALTER TABLE [dbo].[Participants] CHECK CONSTRAINT [FK_Participant_Student]
GO
ALTER TABLE [dbo].[Students]  WITH CHECK ADD  CONSTRAINT [FK_Student_User] FOREIGN KEY([UserName])
REFERENCES [dbo].[Users] ([Name])
GO
ALTER TABLE [dbo].[Students] CHECK CONSTRAINT [FK_Student_User]
GO
ALTER TABLE [dbo].[Teachers]  WITH CHECK ADD  CONSTRAINT [FK_Teacher_User] FOREIGN KEY([UserName])
REFERENCES [dbo].[Users] ([Name])
GO
ALTER TABLE [dbo].[Teachers] CHECK CONSTRAINT [FK_Teacher_User]
GO
ALTER DATABASE [LYL_Academy_db] SET  READ_WRITE 
GO
