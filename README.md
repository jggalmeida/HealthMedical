# HealthMedical

> Management System to create, edit, delete and create appointments.


## Run Application


Into Frontend folder run:
```
yarn start
```

Docker Install

```
https://hub.docker.com/editions/community/docker-ce-desktop-windows/
```

Postgres Image

```
docker pull microsoft/mssql-server-linux:2017-latest
```

Docker Run

```
docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432
```
Into Backend folder run:

Docker Start

```
docker start database
```

```
yarn dev
```

To create the first user (admin) run:
```
yarn dev
```

Access localhost to initialize the application

```
http://localhost:3000
```

## Personal Inofrmation

João Guilherme Guimarães Almeida - 120693
Samuel Rodrigues - 


