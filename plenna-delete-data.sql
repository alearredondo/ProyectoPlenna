-- DELETE DATA
ALTER TABLE  doctor DROP CONSTRAINT pk_doctor;
ALTER TABLE  paciente DROP CONSTRAINT pk_paciente;
ALTER TABLE  asistente DROP CONSTRAINT pk_asistente;
ALTER TABLE  especialidad DROP CONSTRAINT pk_especialidad;
ALTER TABLE  doctor_especialidad DROP CONSTRAINT pk_doctor_especialidad;
ALTER TABLE  tipo_consulta DROP CONSTRAINT pk_tipo_consulta;
ALTER TABLE  consulta DROP CONSTRAINT pk_consulta;
ALTER TABLE  tratamiento DROP CONSTRAINT pk_tratamiento;
ALTER TABLE  expediente DROP CONSTRAINT pk_expediente;
ALTER TABLE  ginecologia DROP CONSTRAINT pk_ginecologia;
ALTER TABLE  nutricion DROP CONSTRAINT pk_nutricion;
ALTER TABLE  sexologia DROP CONSTRAINT pk_psicologia;
ALTER TABLE  psicologia DROP CONSTRAINT pk_sexologia;
ALTER TABLE  suenio DROP CONSTRAINT pk_suenio;

DELETE FROM doctor;
DELETE FROM paciente;
DELETE FROM asistente;
DELETE FROM especialidad;
DELETE FROM doctor_especialidad;
DELETE FROM tipo_consulta;
DELETE FROM consulta;
DELETE FROM encuesta;
DELETE FROM expediente;
DELETE FROM tratamiento;
DELETE FROM notas;
DELETE FROM seguimiento;