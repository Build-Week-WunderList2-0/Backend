# **Documentation**

## Endpoints

### Authentication

### **`POST /auth/register`**

Example request body:
```
{
	"username":"alex",
	"password":"bestPassWerd"
}
```
Example response:
```
{
  "saved": {
    "id": 3,
    "username": "alex",
    "password": "$2b$10$Q9YBHtXnL08GsM97XnrC1eVBD.rE62RH76.Ky/M70l8QwgRzeAxq6"
  }
}
```


### **`POST /auth/login`**

Example request body:
```
{
	"username":"alex",
	"password":"bestPassWerd"
}
```
Example response:
```
{
  "user_id": 2,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZvbyIsImlhdCI6MTU2OTMwMjgwNiwiZXhwIjoxNTY5NzM0ODA2fQ.WOgUS5vH1jvFJR7hWuNCVujOoRWleTJoVchN_GJRHVg"
}
```
## Tasks 

### **`POST /tasks/add`**

Requires an `authorization` header with a JWT. it will return an array of objects in this format:

Example request body:
```
{
  "user_id": 1,
  "title": "I wonder which ID this will be",
  "description": "this is my descritpion",
  "segment": "Personal",
  "due_by": "05/29/2029",
  "completed": false
}
```
Example response:
```
{
  "saved": {
    "id": 19,
    "user_id": "1",
    "title": "I wonder which ID this will be",
    "description": "this is my descritpion",
    "segment": "Personal",
    "due_by": "05/29/2029",
    "completed": 0
  }
}
```

### **`GET /tasks/`**

Requires an `authorization`  and  with a JWT and `user_id` with users id head. it will return an array of objects in this format:


Example response:
```
"gotem": [
    {
      "id": 15,
      "user_id": "1",
      "title": "become Mark Zuckerberg",
      "description": "that'd be cool",
      "segment": "Bizniss",
      "due_by": "05/29/2021",
      "completed": 0
    },
    {
      "id": 16,
      "user_id": "1",
      "title": "becomeff Mark Zuckerberg",
      "description": "that'd be cool",
      "segment": "Bizniss",
      "due_by": "05/29/2021",
      "completed": 0
    }
]
```

### **`GET /tasks/:id`**

Requires an `authorization` header with a JWT. it will return an array of objects in this format:

Example response:
```
{
  "result": [
    {
      "id": 15,
      "user_id": "1",
      "title": "become Mark Zuckerberg",
      "description": "that'd be cool",
      "segment": "Bizniss",
      "due_by": "05/29/2021",
      "completed": 0
    }
  ]
}
```

### **`PUT /tasks/update/:id`**

Requires an `authorization` header with a JWT. Expects an object of one of the fields that you want to update. 

Example request body:
```
{
	"title":"this is being updated"
}
```
Example response:
```
[
  {
    "id": 14,
    "user_id": "1",
    "title": "this is being updated",
    "description": "this is my descritpion",
    "segment": "Personal",
    "due_by": "05/29/2020",
    "completed": 0
  },
  {
    "id": 15,
    "user_id": "1",
    "title": "become Mark Zuckerberg",
    "description": "that'd be cool",
    "segment": "Bizniss",
    "due_by": "05/29/2021",
    "completed": 0
  }
]
```

### **`DELETE /tasks/delete/:id`**

Requires an `authorization` header with a JWT. This will delete the task of the ID.

Example response:
```
{
  "success": "the user will never be seen again! Muhahahha!"
}
```