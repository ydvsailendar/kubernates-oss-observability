# Node Web Application Demo

This is a simple full stack web application using below technologies:
* **Front End:** Bootstrap, HTML, CSS, JavaScript, jQuery, AJAX
* **Back End:** Node.js, Express framework
* **Database:** MySQL

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for the development and testing purposes.

### Prerequisites

What softwares you need to install:

* [Node.js](https://nodejs.org/en/download/) - Install the appropriate version of node.js based on your Operating System
* [MySQL](https://www.mysql.com/downloads/) - Install the appropriate version of MySQL based on your Operating System
* [Postman](https://www.getpostman.com/products) - Install the Postman application to test the APIs

### Installation

The below steps will help you to get the application running on your computer.

**Step 1:** Install the MySQL server and make sure it is up and running on port 3306. Open a client like `MySQL Workbench` and open a tab where queries can be executed. Copy the content of the `mysql-database-schema.sql` into the query editor and execute it. This will create a database named `nodeapp` with a table `student` and some content within the table.

**Step 2:** Download the application in the .zip format or clone the project in any directory on your computer.

**Step 3:** Using the terminal, navigate to the folder where `package.json` file is located. Enter below command to install all the required dependencies.
```
npm install
```

**Step 4:** Using the terminal, navigate to the folder where `server.js` file is located. Enter below command to run the application.
```
node server.js
```
After running the above command, you'll see below log in the terminal. This indicates that the node server is up and running.
```
Server is listening on port 8000....
```

**Step 5:** Open the Postman app and test the API endpoints.

```
http://localhost:8000/api/readData
```
```
http://localhost:8000/api/createData
```
```
http://localhost:8000/api/updateData
```
**Note:** Provide below in the header while testing from Postman
```
Authorization: SecureConnection
```

**Step 6:** The front end of the application can be accessed in the below URL:
```
http://localhost:8000/template.html
```


## Help

If you'd require any help while installing and running the application, please open a git issue.


