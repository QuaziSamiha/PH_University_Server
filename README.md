# PH_University_Server

**16 Oct, 24**

- **Code Link** : (https://github.com/Apollo-Level2-Web-Dev/Level2-Batch-3-PH-university-server/tree/part-1)
- **PH-university-requirement-analysis** : (https://docs.google.com/document/d/10mkjS8boCQzW4xpsESyzwCCLJcM3hvLghyD_TeXPBx0/edit?tab=t.0)

# 11-1 What is SDLC, How we should start a project

- **How a Software should start?** : **Software Development Life Cycle (SDLC)**

1. planning
2. analyze (Product Owner, Project Manager, Business Analyst)
3. design (System architect, UI/UX Designer)
4. implementation (frontend developer, backend developer, fullstack developer)
5. testing & integration (solution architect, QA engineer, tester)
   deployment (database administrator, DevOPS)
6. maintenance (support engineer, tester, developers)

- **Analyze**: done by Product Owner, Project Manager, and Business Analyst

  - PRD (product requirements document)
  - BRD (business requirements document)
  - SRS (software requirements specification)
  - FRD (functional requirements document)

- **Design** : done by System architect, UI/UX Designer

  - System design software
  - high level design document
  - low level design document
  - database schema

- **Development** : done by frontend developer, backend developer, fullstack developer

  - backend development
  - frontend development
  - API integration
  - Database Schema

- **Testing** : done by solution architect, QA engineer, tester

  - test plan
  - test case
  - test scripts
  - defects report

- **Deployment** : done by database administrator, DevOPS
  - release notes
  - installation guides
  - configuration guides

**17 Oct, 24**

# 11-2 Requirement Analysis of PH University Management

# PH University Management Project

- Functional Requirements:

1. Authentication

- Student
  - Students can log in and log out securely.
  - Students can update their password.
- Faculty
  - Faculty can log in and log out securely.
  - Faculty can update their password.
- Admin:
  - Admin can log in and log out securely.
  - Admin can update their password.

2. Profile Management:

- Student
  - Students can manage and update their profile.
  - Students can update certain fields.
- Faculty:
  - Faculty can manage and update their profile.
  - Faculty can update certain fields.
- Admin:
  - Admin can manage and update their profile.
  - Admin can update certain fields.

3. Academic Process:

- Student:
  - Students can enroll in offered courses for a specific semester.
  - Students can view their class schedule.
  - Students can see their grades.
  - Students can view notice boards and events.
- Faculty:
  - Faculty can manage student grades.
  - Faculty can access student’s personal and academic information.
- Admin:
  - Admin can manage multiple processes:
    - Semester.
    - Course.
    - Offered Course.
    - Section.
    - Room.
    - Building.

4. User Management:

- Admin:
  - Admins can manage multiple accounts.
  - Admin can block/unblock users.
  - Admin can change user passwords.

## 11-3 Modeling Data for PH University Management

# Data Model

- **User:**

  - \_id
  - id (generated)
  - password
  - needsPasswordChange
  - role
  - status
  - isDeleted
  - createdAt
  - updatedAt

- **Student:**

  - \_id
  - id (generated)
  - name
  - password
  - needsPasswordChange
  - gender
  - dateOfBirth
  - email
  - contactNo
  - emergencyContactNo
  - presentAddress
  - permanentAddress
  - guardian
  - localGuardian
  - profileImage
  - status
  - admissionSemester
  - isDeleted
  - createdAt
  - updatedAt

- **Faculty:**

  - \_id
  - id (generated)
  - password
  - needsPasswordChange
  - designation
  - name
  - gender
  - dateOfBirth
  - email
  - contactNo
  - emergencyContactNo
  - presentAddress
  - permanentAddress
  - profileImage
  - academicFaculty
  - academicDepartment
  - isDeleted
  - createdAt
  - updatedAt

- **Admin:**

  - \_id
  - id (generated)
  - password
  - needsPasswordChange
  - designation
  - name
  - gender
  - dateOfBirth
  - email
  - contactNo
  - emergencyContactNo
  - presentAddress
  - permanentAddress
  - profileImage
  - managementDepartment
  - isDeleted
  - createdAt
  - updatedAt

- **Academic Semester:**

  - \_id
  - name
  - year
  - code
  - startMonth
  - endMonth
  - createdAt
  - updatedAt

- **Academic Faculty:**

  - \_id
  - name
  - createdAt
  - updatedAt

- **Academic Department:**
  - \_id
  - name
  - academicFaculty
  - createdAt
  - updatedAt

## 11-4 Design Schema and ER Diagram (watch again)

- **SQL** : ORACLE, SQLite, PostGres, MySQL
- **NoSQL** : mongoDB, DynamoDB, MariaDB, RedDB
- SQL VS NoSQL
  Table VS Collection
  row VS document

- **NoSQL** : allow both embedding and referencing
- **Embedding** : can be grow highest 16MB (student guardian --> not growing)
- **referencing** : no limitation in case of size (student courses --> growing)

- **Pros and cons of embedding system**:
  | Pros | Cons |
  |----------|----------|
  | faster reading | slow writing |
  | update all data with single query | update query can be complex |
  | less expensive lookup (no connection require with another collection) | limited size (< 16 MB) |
  | | Data duplicacy|

- **Referencing** :
  | Pros | Cons |
  |----------|----------|
  | faster writing | slow reading |
  | avoid data duplicacy | expensive lookup |
  | scalability | |

- **Draw io** : (https://app.diagrams.net/)

## 11-5 How to make ER Diagram for PH University Management

- **Lucid chart** : (https://lucid.app/lucidchart/fb060063-7d72-4260-96f3-9e5ceeec068f/edit?beaconFlowId=04F5716E89961AE3&invitationId=inv_883055f7-e696-486d-8e98-8e382e0fb2b7&page=0_0#)

**18 Oct, 24**

![image](/images/Blank%20diagram.png)
![image](/images/connected.png)

## 11-6 Create API Endpoints for PH University Management

![image](/images/connected%202.png)
_Figure: This diagram represents the entities and their relationships in the system._

# API Endpoints

- **User:**

  - users/create-student (POST)
  - users/create-faculty (POST)
  - users/create-admin (POST)

- **Student:**

  - students (GET)
  - students/:id (GET)
  - students/:id (PATCH)
  - students/:id (DELETE)
  - students/my-profile

- **Faculty:**

  - faculties(GET)
  - faculties/:id (GET)
  - faculties/:id (PATCH)
  - faculties/:id (DELETE)
  - faculties/my-profile

- **Admin:**

  - admins (GET)
  - admins /:id (GET)
  - admins /:id (PATCH)
  - admins /:id (DELETE)
  - admins /my-profile

- **Auth:**

  - auth/login
  - auth/refresh-token
  - auth/change-password
  - auth/forgot-password
  - auth/reset-password
