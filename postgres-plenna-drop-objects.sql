-- DROP TABLES

DROP TABLE  doctor CASCADE;
DROP TABLE  paciente CASCADE;
DROP TABLE  asistente CASCADE;
DROP TABLE  especialidad CASCADE;
DROP TABLE  doctor_especialidad CASCADE;
DROP TABLE  tipo_consulta CASCADE;
DROP TABLE  consulta CASCADE;
DROP TABLE  tratamiento CASCADE;
DROP TABLE  expediente CASCADE;
DROP TABLE  ginecologia CASCADE;
DROP TABLE  nutricion CASCADE;
DROP TABLE  sexologia CASCADE;
DROP TABLE  psicologia CASCADE;
DROP TABLE  suenio CASCADE;

-- DROP TYPES

drop type identidad_genero;
drop type sexo_biologico;
drop type enfermedad;
drop type fecha_menstruacion;
drop type metodo;
drop type ejercicio;
drop type frecuencia;
drop type desde;

-- DROP SEQUENCES

DROP SEQUENCE doctor_id_doctor_seq CASCADE;
DROP SEQUENCE paciente_id_paciente_seq CASCADE;
DROP SEQUENCE asistente_id_asistente_seq CASCADE;
DROP SEQUENCE especialidad_id_especialidad_seq CASCADE;
DROP SEQUENCE tipo_consulta_id_tipo_consulta_seq CASCADE;
DROP SEQUENCE consulta_id_consulta_seq CASCADE;
DROP SEQUENCE tratamiento_id_tratamiento_seq CASCADE;
DROP SEQUENCE expediente_id_expediente_seq CASCADE;
DROP SEQUENCE ginecologia_id_ginecologia_seq CASCADE;
DROP SEQUENCE nutricion_id_nutricion_seq CASCADE;
DROP SEQUENCE psicologia_id_psicologia_seq CASCADE;
DROP SEQUENCE sexologia_id_sexologia_seq CASCADE;
DROP SEQUENCE suenio_id_suenio_seq CASCADE;

--Comprobar que ya no existan tablas de plena:
--select * from information_schema.tables;


