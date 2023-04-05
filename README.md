# Entrega Prueba de Certificacion Talento Digital

## Cuenta de Github:

## Descripcion

Proyecto Blog...

*HTML
*Bootstrap
*JavaScript
*Node
*Express
*PostgreSQL
\*Handlebars

Se utiliza HTML(Handlebars) para crear el maquetado de la pagina y Boostrap para estilos.
Ademas se realiza peticiones a la api con fetch desde handlebars.

-Para hacer funcionar el proyecto se deben crear la Base de datos Blog_de_Noticias y crear las tablas.
Acontinuacion se deja las tablas que se deben crear.

CREATE TABLE usuarios (
id varchar(10) primary key,
nombre varchar(50) NOT NULL,
email varchar(50) NOT NULL,
password varchar(20) NOT NULL
);
CREATE TABLE publicaciones (
id varchar(10) primary key,
titulo varchar(255) NOT NULL,
contenido varchar(1000) NOT NULL,
fecha varchar NOT NULL,
nombreCategoria varchar NOT NULL,
nombreUsuario varchar NOT NULL,
imagen varchar(255)
);
CREATE TABLE categorias (
id varchar(10) primary key,
nombre varchar(50) NOT NULL
);
INSERT INTO categorias(id, nombre) VALUES ('1','Terror')
INSERT INTO categorias(id, nombre) VALUES ('2','Suspenso')

Para poder iniciar y probar el proyecto, realizar en el directorio del proyecto npm install y ejecutar con npm start
