--PLENNA SCRIPT TABLAS 
--BASE DE DATOS SCRIPT 1

--
-- TABLE: doctor
--  

create table doctor (
  id_doctor integer (7) constraint pk_doctor primary key,
  nombre varchar(50) NOT NULL,
  apellidos varchar(50) NOT NULL,
  especialidad varchar (50) not null,
  edad numeric(3,0) NOT NULL,
  genero varchar(50) not NULL,
  sexo varchar(50) NOT NULL
);
--
CREATE SEQUENCE doctor_id_doctor_seq START 1000000 INCREMENT 1 ;
ALTER TABLE doctor ALTER COLUMN id_doctor SET DEFAULT nextval('doctor_id_doctor_seq');
--


--
-- TABLE: paciente
-- 
create TABLE paciente (
  id_paciente integer(7) constraint pk_paciente primary key,
  nombre varchar(50) NOT NULL,
  apellidos varchar(50) NOT NULL,
  edad integer(3) NOT null,
  genero varchar(50) NOT null,
  sexo varchar(50) NOT null,
  doctora_visita varchar (100) not null,
  tipo_sangre char(2) NOT NULL,
  peso numeric(5,2) not null,
  estatura numeric(5,2) not null,
  ocupacion varchar(50) NOT NULL
);
create SEQUENCE paciente_id_paciente_seq START 2000000 INCREMENT 1 ;
ALTER TABLE paciente ALTER COLUMN id_paciente SET DEFAULT nextval('paciente_id_paciente_seq');
--

--
-- TABLE: asistente
-- 
CREATE table asistente (
  id_asistente numeric(7,0) constraint pk_asistente primary key,
  nombre varchar(50) NOT NULL,
  apellidos varchar(50) NOT NULL
);
CREATE sequence asistente_id_asistente_seq START 3000000 INCREMENT 1 ;
ALTER table asistente ALTER COLUMN id_asistente SET DEFAULT nextval('asistente_id_asistente_seq');
--

--
-- TABLE: doctor_especialidad
--  
CREATE TABLE doctor_especialidad (
  id_doctor numeric(7,0) references doctor (id_doctor) ON UPDATE CASCADE ON DELETE CASCADE,
  id_especialidad numeric(7,0) references especialidad (id_especialidad) ON UPDATE cascade,
  constraint pk_doctor_especialidad primary key (id_doctor, id_especialidad)
);
-- 

--
-- TABLE: tipo_consulta
--  
CREATE TABLE tipo_consulta (
  id_tipo_consulta numeric(7,0) constraint pk_tipo_consulta primary key,
  nombre varchar(100) NOT NULL ,
  id_especialidad numeric(7,0) references especialidad (id_especialidad)
);
CREATE SEQUENCE tipo_consulta_id_tipo_consulta_seq START 1 INCREMENT 1 ;
ALTER TABLE tipo_consulta ALTER COLUMN id_tipo_consulta SET DEFAULT nextval('tipo_consulta_id_tipo_consulta_seq');
--

--
-- TABLE: consulta
-- 
create TABLE consulta (
  id_consulta numeric(7,0) constraint pk_consulta primary key,
  id_tipo_consulta numeric(7,0) references tipo_consulta (id_tipo_consulta),
  id_doctor numeric(7,0) references doctor (id_doctor),
  id_paciente numeric(7,0) references paciente (id_paciente),
  fecha date not null,
  hora_inicio time NOT NULL,
  hora_fin time not null
);
CREATE SEQUENCE consulta_id_consulta_seq START 1 INCREMENT 1 ;
ALTER TABLE consulta ALTER COLUMN id_consulta SET DEFAULT nextval('consulta_id_consulta_seq');
-- 

--
-- TABLE: encuesta
--
CREATE TABLE encuesta (
    id_encuesta numeric(7,0) constraint pk_encuesta primary key,
    pregunta1 varchar(100) NOT NULL,
    pregunta2 varchar(100) NOT NULL,
    pregunta3 varchar(100) NOT NULL,
    pregunta4 varchar(100) NOT NULL,
    pregunta5 varchar(100) NOT NULL,
    pregunta6 varchar(100) NOT NULL,
    pregunta7 varchar(100) NOT NULL,
    pregunta8 varchar(100) NOT NULL,
    pregunta9 varchar(100) NOT NULL,
    pregunta10 varchar(100) NOT NULL,
    pregunta11 varchar(100) NOT NULL,
    pregunta12 varchar(100) NOT NULL,
    pregunta13 varchar(100) NOT NULL,
    pregunta14 varchar(100) NOT NULL,
    pregunta15 varchar(100) NOT NULL,
    pregunta16 varchar(100) NOT NULL,
    pregunta17 varchar(100) NOT NULL,
    pregunta18 varchar(100) NOT NULL,
    pregunta19 varchar(100) NOT NULL,
    pregunta20 varchar(100) NOT NULL,
    pregunta21 varchar(100) NOT NULL,
    pregunta22 varchar(100) NOT NULL,
    pregunta23 varchar(100) NOT NULL,
    pregunta24 varchar(100) NOT NULL,
    pregunta25 varchar(100) NOT NULL,
    pregunta26 varchar(100) NOT NULL,
    pregunta27 varchar(100) NOT NULL,
    pregunta28 varchar(100) NOT NULL,
    pregunta29 varchar(100) NOT NULL,
    pregunta30 varchar(100) NOT NULL
);
CREATE SEQUENCE encuesta_id_encuesta_seq START 1 INCREMENT 1 ;
ALTER TABLE encuesta ALTER COLUMN id_encuesta SET DEFAULT nextval('encuesta_id_encuesta_seq');
--

--
-- TABLE: expediente
--
CREATE TABLE expediente (
    id_expediente numeric(7,0) constraint pk_expediente primary key,
    id_paciente numeric(7,0) references paciente (id_paciente),
    id_doctor numeric(7,0) references doctor (id_doctor),
    id_encuesta numeric(7,0) references encuesta (id_encuesta),
    respuesta1 varchar(100) NOT NULL,
    respuesta2 varchar(100) NOT NULL,
    respuesta3 varchar(100) NOT NULL,
    respuesta4 varchar(100) NOT NULL,
    respuesta5 varchar(100) NOT NULL,
    respuesta6 varchar(100) NOT NULL,
    respuesta7 varchar(100) NOT NULL,
    respuesta8 varchar(100) NOT NULL,
    respuesta9 varchar(100) NOT NULL,
    respuesta10 varchar(100) NOT NULL,
    respuesta11 varchar(100) NOT NULL,
    respuesta12 varchar(100) NOT NULL,
    respuesta13 varchar(100) NOT NULL,
    respuesta14 varchar(100) NOT NULL,
    respuesta15 varchar(100) NOT NULL,
    respuesta16 varchar(100) NOT NULL,
    respuesta17 varchar(100) NOT NULL,
    respuesta18 varchar(100) NOT NULL,
    respuesta19 varchar(100) NOT NULL,
    respuesta20 varchar(100) NOT NULL,
    respuesta21 varchar(100) NOT NULL,
    respuesta22 varchar(100) NOT NULL,
    respuesta23 varchar(100) NOT NULL,
    respuesta24 varchar(100) NOT NULL,
    respuesta25 varchar(100) NOT NULL,
    respuesta26 varchar(100) NOT NULL,
    respuesta27 varchar(100) NOT NULL,
    respuesta28 varchar(100) NOT NULL,
    respuesta29 varchar(100) NOT NULL,
    respuesta30 varchar(100) NOT NULL
);
CREATE SEQUENCE expediente_id_expediente_seq START 1 INCREMENT 1 ;
ALTER TABLE expediente ALTER COLUMN id_expediente SET DEFAULT nextval('expediente_id_expediente_seq');
--

--
-- TABLE: tratamiento
-- 
create TABLE tratamiento (
  id_tratamiento numeric(7,0) constraint pk_tratamiento primary key,
  id_consulta numeric(7,0) references consulta (id_consulta),
  id_doctor numeric(7,0) references doctor (id_doctor),
  id_paciente numeric(7,0) references paciente (id_paciente),
  nombre varchar(100) NOT NULL,
  medicamento varchar(100) NOT NULL,
  marca varchar(100) NOT NULL,
  dosis varchar(100) NOT NULL,
  instrucciones varchar(100) NOT NULL,
  fecha_inicio timestamp NOT NULL,
  fecha_fin timestamp not null
);
CREATE SEQUENCE tratamiento_id_tratamiento_seq START 1 INCREMENT 1 ;
ALTER TABLE tratamiento ALTER COLUMN id_tratamiento SET DEFAULT nextval('tratamiento_id_tratamiento_seq');
-- 

--
-- TABLE: notas
-- 
create TABLE notas (
  id_notas numeric(7,0) constraint pk_notas primary key,
  id_consulta numeric(7,0) references consulta (id_consulta),
  id_doctor numeric(7,0) references doctor (id_doctor),
  id_paciente numeric(7,0) references paciente (id_paciente),
  id_expediente numeric(7,0) references expediente (id_expediente),
  id_tratamiento numeric(7,0) references tratamiento (id_tratamiento),
  descripcion varchar(500) NOT NULL,
  fecha_realizacion timestamp not null
);
CREATE SEQUENCE notas_id_notas_seq START 1 INCREMENT 1 ;
ALTER TABLE notas ALTER COLUMN id_notas SET DEFAULT nextval('notas_id_notas_seq');
-- 

--
-- TABLE: seguimiento
-- 
create TABLE seguimiento (
  id_seguimiento numeric(7,0) constraint pk_seguimiento primary key,
  id_consulta numeric(7,0) references consulta (id_consulta),
  id_expediente numeric(7,0) references expediente (id_expediente),
  descripcion varchar(500) not null
);
CREATE SEQUENCE seguimiento_id_seguimiento_seq START 1 INCREMENT 1 ;
ALTER TABLE seguimiento ALTER COLUMN id_seguimiento SET DEFAULT nextval('seguimiento_id_seguimiento_seq');
--







