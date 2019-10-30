# Tes CODIFY BACKEND -CRUD 



All API Endpoints using base URL :

```
http ://localhost:3000
```





### NOTES BEFORE START

make sure you have

```
- POSTMAN
- INSTALLED NODE.JS
- INSTALLED POSTGRES
- npm install to install all dependencies
```



### Dependecies

```
- axios
- cors
- postgres
- express
- sequelize
```







## PRODUCT API

----------------------------------

|  HTTP  |   ENDPOINT   | HEADERS |                             BODY                             |             DESCRIPTION             |
| :----: | :----------: | :-----: | :----------------------------------------------------------: | :---------------------------------: |
|  GET   |   /product   |  none   |                             none                             |           Get all Product           |
|  GET   | /product/:id |  none   |                             none                             |      Get one spesific Product       |
|  POST  |   /product   |  none   | name : String,<br />price : Integer,<br />stock : Integer,<br />decription : String |         Create new product          |
| PATCH  | /product/:id |  none   | name : String,<br />price : Integer,<br />stock : Integer,<br />decription : String | Update spesific product by id<br /> |
| DELETE | /product/:id |  none   |                             none                             |    Delete spesific product by id    |



## RESPONSE DETAILS

----------------------

#### Users

---------------------

- GET ALL

  method : GET

  endpoint : /product

  

  Response :	

  - 200

  ```
  {
      "code": 200,
      "data": [
          {
              "id": 5,
              "name": "handphone",
              "price": 20,
              "stock": 5,
              "description": "xiaomi",
              "createdAt": "2019-10-30T06:12:50.658Z",
              "updatedAt": "2019-10-30T06:58:33.077Z"
          }
      ]
  }
  ```

  - 404

  ```
  {}
  ```



- GET ONE

  method : GET

  endpoint : /product/:id

  

  Response :	

  - 200

  ```
  {
      "code": 200,
      "data": {
          "id": 5,
          "name": "handphone",
          "price": 20,
          "stock": 5,
          "description": "xiaomi",
          "createdAt": "2019-10-30T06:12:50.658Z",
          "updatedAt": "2019-10-30T06:58:33.077Z"
      }
  }
  ```

  - 404

  ```
  {
      "status": 404,
      "message": "invalid input syntax for integer: \"a\""
  }
  ```

  

- Create Product

  method : POST

  endpoint : /product

  

  Response :	

  - 201

  ```
  {
      "code": 201,
      "data": {
          "id": 6,
          "name": "Tesla Model S",
          "price": 50000,
          "stock": 5,
          "description": "lorem ipsum",
          "updatedAt": "2019-10-30T07:27:31.169Z",
          "createdAt": "2019-10-30T07:27:31.169Z"
      }
  }
  ```

  - 400

  ```
  {
      "code": 400,
      "message": "invalid input syntax for integer: \"\""
  }
  ```

  

- Update Product

  method : Patch

  endpoint : /product/:id

  

  Response :	

  - 200

  ```
  {
      "code": 200,
      "data": [
          1
      ]
  }
  ```

  - 404

  ```
  {
      "code": 404,
      "message": "fields cannot be empty"
  }
  ```



- Delete Product

  method : DELETE

  endpoint : /product/:id

  

  Response :	

  - 200

  ```
  {
      "code": 200,
      "data1": 1
  }
  ```

  - 404

  ```
  {
      "code": 404,
      "message": "data does not exist"
  }
  ```

