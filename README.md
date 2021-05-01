# FancyTodo-Server

**Getting Started**

Create .env file then copy all credentials from .env-template and make sure to fill in all of the credentials needed


**Base URL**

http://localhost:3000

---
# Todos

***End Points***

POST /todos<br/>
GET /todos<br/>
GET /todos/:id<br/>
PUT /todos/:id<br/>
PATCH /todos/:id<br/>
DELETE /todos/:id

***Add***

Returns new todo

* **URL**

    /todos

* **Method:**

    `POST`

* **URL Params**

    None

* **Data Params**

    **Required:**
    ````
    {
        title: req.body.title,
        description: req.body.description
        status: req.body.status
        due_date: req.body.due_date
    }
    ````

* **Success Response:**

    * **Code:** 201 <br/>
      **Content:**
      ```
      {
        "id": 1,
        "title": "<todo title>",
        "description": "<todo description>",
        "status": "<todo status>",
        "due_date": "<todo due_date>",
        "updatedAt": "2020-03-30T06:02:31.794Z",
        "createdAt": "2020-03-30T06:02:31.794Z"
      }
      ```
* **Error Response:**

    * **Code:** 400 <br/>
      **Content:**
      ```
      { error : "SequelizeValidationError" }
      ```
    OR

    * **Code:** 500 <br/>

* **Sample Call:**
    ```
    $.ajax({
        method: 'POST',
        url: `http://localhost:3000/todos`,
        headers: {
        token: localStorage.getItem('token')
        },
        data: {
        title, description, status, due_date
        }
    })
    ```


***Display***

Returns all todos

* **URL**

    /todos

* **Method:**

    `GET`

* **URL Params**

    None

* **Data Params**

    None

* **Success Response:**

    * **Code:** 200 <br/>
      **Content:**
    ```  
    [
        {
            "id": 1,
            "title": "<todo title>",
            "description": "<todo description>",
            "status": "<todo status>",
            "due_date": "<todo due_date>",
            "createdAt": "2020-03-30T05:56:08.893Z",
            "updatedAt": "2020-03-30T05:56:08.893Z"
        },
        {
            "id": 2,
            "title": "<todo title>",
            "description": "<todo description>",
            "status": "<todo status>",
            "due_date": "<todo due_date>",
            "createdAt": "2020-03-30T06:13:15.897Z",
            "updatedAt": "2020-03-30T06:13:15.897Z"
        }
    ]
    ```
* **Error Response:**

    * **Code:** 500 <br/>

* **Sample Call:**
    ```
    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/todos',
        headers: {
            token: localStorage.getItem('token')
        }
    })
    ```


***Detail***

Returns todo by id

* **URL**

    /todos/:id

* **Method:**

    `GET`

* **URL Params**

    **Required:**
    `id`

* **Data Params**

    None

* **Success Response:**

    * **Code:** 200 <br/>
      **Content:**
    ```  
    {
        "id": 1,
        "title": "<todo title>",
        "description": "<todo description>",
        "status": "<todo status>",
        "due_date": "<todo due_date>",
        "createdAt": "2020-03-30T05:56:08.893Z",
        "updatedAt": "2020-03-30T05:56:08.893Z"
    }
    
    ```
* **Error Response:**

    * **Code:** 404 <br/>
      **Content:**
    ```  
    { "message": "todo not found" }
    
    ```


* **Sample Call:**
    ```
    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/todos/:id',
        headers: {
            token: localStorage.getItem('token')
        }
    })
    ```


***Update***

Returns updated todo

* **URL**

    /todos/:id

* **Method:**

    `PUT`

* **URL Params**

    **Required:**
    `id`

* **Data Params**

    **Required:**
    ````
    {
        title: req.body.title,
        description: req.body.description
        status: req.body.status
        due_date: req.body.due_date
    }
    ````

* **Success Response:**

    * **Code:** 200 <br/>
      **Content:**
    ```  
    {
        "id": 1,
        "title": "<todo title>",
        "description": "<todo description>",
        "status": "<todo status>",
        "due_date": "<todo due_date>",
        "createdAt": "2020-03-30T05:56:08.893Z",
        "updatedAt": "2020-03-30T05:56:08.893Z"
    }
    
    ```
* **Error Response:**

    * **Code:** 400 <br/>
      **Content:**
      ```
      { error : "SequelizeValidationError" }
      ```
    OR
    * **Code:** 404 <br/>
      **Content:**
    ```  
    { "message": "todo not found" }
    
    ```
    OR
    * **Code:** 500


* **Sample Call:**
    ```
    $.ajax({
        method: 'PUT',
        url: 'http://localhost:3000/todos/:id',
        headers: {
            token: localStorage.getItem('token')
        },
        data: {
        title, description, status, due_date
        }
    })
    ```


***Update Status***

Returns updated status todo

* **URL**

    /todos/:id

* **Method:**

    `PATCH`

* **URL Params**

    **Required:**
    `id`

* **Data Params**

    **Required:**
    ````
    {
        status: req.body.status
    }
    ````

* **Success Response:**

    * **Code:** 200 <br/>
      **Content:**
    ```  
    {
        "id": 1,
        "title": "<todo title>",
        "description": "<todo description>",
        "status": "<todo status>",
        "due_date": "<todo due_date>",
        "createdAt": "2020-03-30T05:56:08.893Z",
        "updatedAt": "2020-03-30T05:56:08.893Z"
    }
    
    ```
* **Error Response:**

    * **Code:** 400 <br/>
      **Content:**
      ```
      { error : "SequelizeValidationError" }
      ```
    OR
    * **Code:** 404 <br/>
      **Content:**
    ```  
    { "message": "todo not found" }
    
    ```
    OR
    * **Code:** 500


* **Sample Call:**
    ```
    $.ajax({
        method: 'PATCH',
        url: 'http://localhost:3000/todos/:id',
        headers: {
            token: localStorage.getItem('token')
        },
        data: {
        status
        }
    })
    ```


***Delete***

Returns deleted todo

* **URL**

    /todos/:id

* **Method:**

    `DELETE`

* **URL Params**

    **Required:**
    `id`

* **Data Params**

    None

* **Success Response:**

    * **Code:** 200 <br/>
      **Content:**
    ```  
    {
        "id": 1,
        "title": "<todo title>",
        "description": "<todo description>",
        "status": "<todo status>",
        "due_date": "<todo due_date>",
        "createdAt": "2020-03-30T05:56:08.893Z",
        "updatedAt": "2020-03-30T05:56:08.893Z"
    }
    
    ```
    OR
    ```
      { message : "todo success to delete" }
    ```

* **Error Response:**

    * **Code:** 404 <br/>
      **Content:**
    ```  
    { "message": "todo not found" }
    
    ```
    OR
    * **Code:** 500


* **Sample Call:**
    ```
    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:3000/todos/:id',
        headers: {
            token: localStorage.getItem('token')
        }
    })
    ```

---
# User

***End Points***

POST /users/register<br/>
POST /users/login<br/>
POST /users/googleregister<br/>
POST /users/googlelogin

***Register***

  Returns new user

* **URL**

  /users/register

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

  * **Required:**
  ````
    {
      email: req.body.email,
      password: req.body.password,
    }
  ````

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
      {
        "id": 1,
        "email": "<user email>",
        "password": "<user password>"
      }
    ```

* **Error Response:**

  * **Code:** 400 <br/>
      **Content:**
      ```
      { error : "SequelizeValidationError" }
      ```
  OR
    * **Code:** 500

* **Sample Call:**

  ```javascript
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/users/register',
      data: {
        email, password
      }
    })
  ```


***Login***

  User Login

* **URL**

  /users/login

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

  * **Required:**
  ````
    {
      email: req.body.email,
      password: req.body.password,
    }
  ````

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      "access_token": "<token>"
    }
    ```

* **Error Response:**

  * **Code:** 401 <br />
    **Content:** 
    ```
    { "message": "email or password wrong" }
    ```
  OR
  * **Code:** 500

* **Sample Call:**

  ```javascript
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/users/login',
      data: {
        email, password
      }
    })
  ```


***Register with Google Account***

  Returns new user from google account

* **URL**

  /users/googleregister

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

  * **Required:**
  ````
    {
      google_token: req.body.google_token
    }
  ````

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** 
    ```
      {
        "id": 1,
        "email": "<user email>",
        "password": "<user password>"
      }
    ```

* **Error Response:**

  * **Code:** 400 <br/>
      **Content:**
      ```
      { error : "SequelizeValidationError" }
      ```
  OR
  * **Code:** 401 <br/>
      **Content:**
      ```
      { message : "Google account is already registered" }
      ```
  OR
    * **Code:** 500

* **Sample Call:**

  ```javascript
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/users/googleregister',
      data: {
        email, password
      }
    })
  ```


***Login with Google Account***

  User login from google account

* **URL**

  /users/googlelogin

* **Method:**

  `POST`
  
*  **URL Params**

    None

* **Data Params**

  * **Required:**
  ````
    {
      google_token: req.body.google_token
    }
  ````

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
      "access_token": "<token>"
    }
    ```

* **Error Response:**

  * **Code:** 401 <br />
    **Content:** 
    ```
    { "message": "Google account has not been registered" }
    ```
  OR
  * **Code:** 500

* **Sample Call:**

  ```javascript
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/users/googlelogin',
      data: {
        email, password
      }
    })
  ```