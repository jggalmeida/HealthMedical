# HealthMedical

> Management System to create, edit and delete appointments.


## Run Application


Into Frontend folder run:
```
yarn start
```

Docker Install

```
https://hub.docker.com/editions/community/docker-ce-desktop-windows/
```

Docker Run
```
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Into Backend folder run:

Docker Start

```
docker start database
```

```
yarn dev
```

Migrate tables to Database
```
yarn sequelize db:migrate
```

To create the first user (admin) click in the "Primeiro Usuário" button in the home page:
```
email: breda@teste.com
senha: 123456
```

From this user you can create both doctor and pacient users to test appointment functions.

Access localhost to initialize the application
```
http://localhost:3000
```

Users Type:
```
Admin: Can create another users
Doctor: Can view the appointments and the schedule
Pacient: Can make an appointment with a doctor
```

## Personal Inofrmation

João Guilherme Guimarães Almeida - 120693
Samuel Rodrigues - 160083


