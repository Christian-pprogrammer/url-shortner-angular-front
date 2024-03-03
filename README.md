# IremboProject

## Development server

# Backend

To run the backend server, Open the project directory in terminal
and run the command `mvn spring-boot:run`

Because the frontend does not have register functionality, you can use postman to register a user for using while logging in to test.

Call the register api `http//localhost:8080/api/user/register`, with the payload like this

```json
{
    "username": "chris",
    "password": "Chris@Irembo"
}
```
You can then login with the credentials you used for register.

To run the tests, you can kill this terminal and run the command `mvn test` still with in the project directory.

If anything fails, please try the local database, you can open the file resouces/application.properties
and replace the code below with your own database configuration (Postgres).

```
spring.datasource.username=fljigdrv
spring.datasource.password=EYIxY-I3zkDVL1vx4kla4jlECfFsKBbq
spring.datasource.url=jdbc:postgresql://bubble.db.elephantsql.com:5432/fljigdrv?allowPublicKeyRetrieval=true&autoReconnect=true&useSSL=false
```

change to
```
spring.datasource.username=postgres
spring.datasource.password=psql
spring.datasource.url=jdbc:postgresql://localhost:5432/db_name?allowPublicKeyRetrieval=true&autoReconnect=true&useSSL=false
```

It might fail because the online PostgreSQL I used (Just the free trial version) does not allow more than
one connection from same user!

 # Frontend

Run `ng serve` for a dev server. Navigate to http://localhost:4200/.

Also make sure you change the backend_url in src/environment.ts to ` http://localhost:8080 ` (no `/` at the end) If you are running the project with local backend
````
