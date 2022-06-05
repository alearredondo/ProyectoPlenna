--PLENNA SCRIPT TABLAS 
--BASE DE DATOS SCRIPT 1

create type identidad_genero as enum (
    'mujer',
    'hombre',
    'no binario'
);
create type sexo_biologico as enum (
    'femenino',
    'masculino',
    'intersexual'
);
create type enfermedad as enum (
    'hipertension',
    'diabetes',
    'hipotiroidismo',
    'sindrome de ovario poliquistico',
    'anemia',
    'ninguna',
    'otro'
);
create type fecha_menstruacion as enum (
    'antes de los 10',
    'de los 10 a los 14',
    'despues de los 14'
);
create type metodo as enum (
    'condon',
    'sistema de larga duracion hormonal',
    'diu',
    'implante subdermico',
    'anticonceptivos orales combinados',
    'anillo vaginal',
    'parche',
    'inyeccion',
    'ciclo natural',
    'espermicidas',
    'coitus interruptus',
    'ligacion o corte de trompas uterinas',
    'vasectomia',
    'ninguno',
    'otro'
);
create type ejercicio as enum (
    'caminar',
    'eliptica',
    'bicicleta',
    'pesas',
    'yoga',
    'actividades al aire libre',
    'ninguno',
    'otro'
);
create type frecuencia as enum (
    'nunca',
    'pocas veces',
    'a veces',
    'frecuentemente',
    'siempre'
);
create type desde as enum (
    'menos de 2 semanas',
    '2 semanas',
    'mas de 2 semanas'
);
--

-- Tablas
--
-- TABLE: doctor
--  
create table doctor (
  id_doctor numeric(7,0) constraint pk_doctor primary key,
  nombre varchar(50) not null,
  apellidos varchar(50) not null,
  edad numeric(3,0) not null,
  genero identidad_genero default 'mujer'::identidad_genero not null,
  sexo sexo_biologico default 'femenino'::sexo_biologico not null
);
--
create sequence doctor_id_doctor_seq start 1000000 increment 1 ;
alter table doctor alter column id_doctor set default nextval('doctor_id_doctor_seq');
--

--
-- TABLE: paciente
-- 
create TABLE paciente (
  id_paciente numeric(7,0) constraint pk_paciente primary key,
  nombre varchar(50) NOT NULL,
  apellidos varchar(50) NOT NULL,
  edad numeric(3,0) NOT null,
  genero identidad_genero default 'mujer'::identidad_genero not null,
  sexo sexo_biologico default 'femenino'::sexo_biologico not null,
  tipo_sangre char(2) NOT NULL,
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
-- TABLE: especialidad
-- 
CREATE TABLE especialidad (
  id_especialidad numeric(7,0) constraint pk_especialidad primary key,
  nombre varchar(50) not null 
);
CREATE SEQUENCE especialidad_id_especialidad_seq START 1 INCREMENT 1 ;
ALTER TABLE especialidad ALTER COLUMN id_especialidad SET DEFAULT nextval('especialidad_id_especialidad_seq');
--

--
-- TABLE: doctor_especialidad
--  
CREATE TABLE doctor_especialidad (
  id_doctor numeric(7,0) references doctor (id_doctor) ON UPDATE CASCADE ON DELETE CASCADE,
  id_especialidad numeric(7,0) references especialidad (id_especialidad) ON UPDATE cascade ON DELETE CASCADE,
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
  hora_fin time not null,
  notas_doctor varchar(500) NOT NULL
);
CREATE SEQUENCE consulta_id_consulta_seq START 1 INCREMENT 1 ;
ALTER TABLE consulta ALTER COLUMN id_consulta SET DEFAULT nextval('consulta_id_consulta_seq');
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
  instrucciones varchar(500) NOT NULL,
  fecha_inicio timestamp NOT NULL,
  fecha_fin timestamp
);
CREATE SEQUENCE tratamiento_id_tratamiento_seq START 1 INCREMENT 1 ;
ALTER TABLE tratamiento ALTER COLUMN id_tratamiento SET DEFAULT nextval('tratamiento_id_tratamiento_seq');
-- 

--
-- TABLE: expediente
--
CREATE TABLE expediente (
    id_expediente numeric(7,0) constraint pk_expediente primary key,
    id_paciente numeric(7,0) references paciente (id_paciente),
    que_enfermedad enfermedad default 'ninguna'::enfermedad not null,
    toma_medicamentos boolean default false NOT NULL,
    medicamentos varchar(500)
);
CREATE SEQUENCE expediente_id_expediente_seq START 1 INCREMENT 1 ;
ALTER TABLE expediente ALTER COLUMN id_expediente SET DEFAULT nextval('expediente_id_expediente_seq');
--

--
-- TABLE: ginecologia
--
CREATE TABLE ginecologia (
    id_ginecologia numeric(7,0) constraint pk_ginecologia primary key,
    id_expediente numeric(7,0) references expediente (id_expediente),
    primer_menstruacion fecha_menstruacion default 'antes de los 10'::fecha_menstruacion,
    ultima_menstruacion date,
    inicio_vida_sexual numeric(2,0),
    metodo_anticonceptivo metodo default 'ninguno'::metodo not null
);
CREATE SEQUENCE ginecologia_id_ginecologia_seq START 1 INCREMENT 1 ;
ALTER TABLE ginecologia ALTER COLUMN id_ginecologia SET DEFAULT nextval('ginecologia_id_ginecologia_seq');
--

--
-- TABLE: nutricion
--
CREATE TABLE nutricion (
    id_nutricion numeric(7,0) constraint pk_nutricion primary key,
    id_expediente numeric(7,0) references expediente (id_expediente),
    peso numeric(5,2) NOT NULL,
    estatura numeric(3,2) NOT NULL,
    litros_agua_diaria numeric(3,2) not null,
    hace_ejercicio boolean default false NOT null,
    dias_ejercicio numeric(1,0),
    tipo_ejercicio ejercicio default 'ninguno'::ejercicio not null
);
CREATE SEQUENCE nutricion_id_nutricion_seq START 1 INCREMENT 1 ;
ALTER TABLE nutricion ALTER COLUMN id_nutricion SET DEFAULT nextval('nutricion_id_nutricion_seq');
--

--
-- TABLE: psicologia
--
CREATE TABLE psicologia (
    id_psicologia numeric(7,0) constraint pk_psicologia primary key,
    id_expediente numeric(7,0) references expediente (id_expediente),
    preocupaciones varchar(500) NOT NULL,
    desde_cuando desde default 'menos de 2 semanas'::desde not null,
    agotado_emocionalmente frecuencia default 'siempre'::frecuencia not null,
    vida_afectada boolean default true NOT null
);
CREATE SEQUENCE psicologia_id_psicologia_seq START 1 INCREMENT 1 ;
ALTER TABLE psicologia ALTER COLUMN id_psicologia SET DEFAULT nextval('psicologia_id_psicologia_seq');
--

--
-- TABLE: sexologia
--
CREATE TABLE sexologia (
    id_sexologia numeric(7,0) constraint pk_sexologia primary key,
    id_expediente numeric(7,0) references expediente (id_expediente),
    dificultad_orgasmo boolean default true NOT null,
    frecuencia_dificultad_orgasmo frecuencia default 'siempre'::frecuencia not null,
    comformidad_vida_sexual boolean default false not null,
    seguridad_sexualidad boolean default true NOT null
);
CREATE SEQUENCE sexologia_id_sexologia_seq START 1 INCREMENT 1 ;
ALTER TABLE sexologia ALTER COLUMN id_sexologia SET DEFAULT nextval('sexologia_id_sexologia_seq');
--

--
-- TABLE: suenio
--
CREATE TABLE suenio (
    id_suenio numeric(7,0) constraint pk_suenio primary key,
    id_expediente numeric(7,0) references expediente (id_expediente),
    horas_suenio numeric(3,1) NOT NULL,
    ronca boolean default true not null,
    dificultad_suenio frecuencia default 'siempre'::frecuencia not null,
    pesadillas boolean default true not null
);
CREATE SEQUENCE suenio_id_suenio_seq START 1 INCREMENT 1 ;
ALTER TABLE suenio ALTER COLUMN id_suenio SET DEFAULT nextval('suenio_id_suenio_seq');
--





