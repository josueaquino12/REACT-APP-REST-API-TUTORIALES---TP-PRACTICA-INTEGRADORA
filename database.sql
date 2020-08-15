CREATE DATABASE apitutoriales;
CREATE TABLE TUTORIAL(
    ID SERIAL PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    descripcion VARCHAR(50) NOT NULL,
    publicado boolean NOT NULL DEFAULT false
);

INSERT INTO TUTORIAL (titulo, descripcion, publicado) VALUES 
('Programacion Orientada a Objetos', 'Objetos, Herencia, Patrones', true),
('Ingenieria de Software', 'Diseñar Software', false),
('Redes', 'aprender TCP', false),
('Sistema Operativos', 'Aprender Procesos e Hilos', true);
