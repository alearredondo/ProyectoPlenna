import { Injectable } from '@nestjs/common';
import {
  Connection,
  createConnection,
  getConnection,
  getConnectionManager,
  getConnectionOptions,
  getManager,
  QueryRunner,
} from 'typeorm';

@Injectable()
export class AppService {
  // constructor();

  getHello(): string {
    return 'Hola';
  }

  //GETS

  async getAsistente() {
    let connection: Connection;
    let queryRunner: QueryRunner;

    if (!getConnectionManager().has('default')) {
      const connectionOptions = await getConnectionOptions();
      connection = await createConnection(connectionOptions);
    } else {
      connection = getConnection();
    }

    const asistentes = connection.query(`SELECT * FROM asistente`);

    return asistentes;
  }

  async getDoctores() {
    let connection: Connection;
    let queryRunner: QueryRunner;

    if (!getConnectionManager().has('default')) {
      const connectionOptions = await getConnectionOptions();
      connection = await createConnection(connectionOptions);
    } else {
      connection = getConnection();
    }

    const doctores = connection.query(`SELECT * FROM doctor`);

    return doctores;
  }

  async getConsultas() {
    let connection: Connection;
    let queryRunner: QueryRunner;

    if (!getConnectionManager().has('default')) {
      const connectionOptions = await getConnectionOptions();
      connection = await createConnection(connectionOptions);
    } else {
      connection = getConnection();
    }

    const consultas = connection.query(`SELECT * FROM consulta`);

    return consultas;
  }

  async getExpedientes() {
    let connection: Connection;
    let queryRunner: QueryRunner;

    if (!getConnectionManager().has('default')) {
      const connectionOptions = await getConnectionOptions();
      connection = await createConnection(connectionOptions);
    } else {
      connection = getConnection();
    }

    const expedientes = connection.query(`SELECT * FROM expediente`);

    return expedientes;
  }

  async getPacientes() {
    let connection: Connection;
    let queryRunner: QueryRunner;

    if (!getConnectionManager().has('default')) {
      const connectionOptions = await getConnectionOptions();
      connection = await createConnection(connectionOptions);
    } else {
      connection = getConnection();
    }

    const paciente = connection.query(`SELECT * FROM paciente`);

    return paciente;
  }

  async getGinecologas() {
    let connection: Connection;
    let queryRunner: QueryRunner;

    if (!getConnectionManager().has('default')) {
      const connectionOptions = await getConnectionOptions();
      connection = await createConnection(connectionOptions);
    } else {
      connection = getConnection();
    }

    const ginecologa = connection.query(`SELECT * FROM ginecologia`);

    return ginecologa;
  }

  async getNutriologas() {
    let connection: Connection;
    let queryRunner: QueryRunner;

    if (!getConnectionManager().has('default')) {
      const connectionOptions = await getConnectionOptions();
      connection = await createConnection(connectionOptions);
    } else {
      connection = getConnection();
    }

    const nutriologa = connection.query(`SELECT * FROM nutricion`);

    return nutriologa;
  }

  async getPsicologia() {
    let connection: Connection;
    let queryRunner: QueryRunner;

    if (!getConnectionManager().has('default')) {
      const connectionOptions = await getConnectionOptions();
      connection = await createConnection(connectionOptions);
    } else {
      connection = getConnection();
    }

    const psicologa = connection.query(`SELECT * FROM psicologia`);

    return psicologa;
  }

  async getSexologia() {
    let connection: Connection;
    let queryRunner: QueryRunner;

    if (!getConnectionManager().has('default')) {
      const connectionOptions = await getConnectionOptions();
      connection = await createConnection(connectionOptions);
    } else {
      connection = getConnection();
    }

    const sexologa = connection.query(`SELECT * FROM sexologia`);

    return sexologa;
  }

  async getSuenio() {
    let connection: Connection;
    let queryRunner: QueryRunner;

    if (!getConnectionManager().has('default')) {
      const connectionOptions = await getConnectionOptions();
      connection = await createConnection(connectionOptions);
    } else {
      connection = getConnection();
    }

    const suenio = connection.query(`SELECT * FROM suenio`);

    return suenio;
  }


  //CREATES

  async createAsistente(asistente) {
    let connection: Connection;

    if (!getConnectionManager().has('default')) {
      const connectionOptions = await getConnectionOptions();
      connection = await createConnection(connectionOptions);
    } else {
      connection = getConnection();
    }
    try{
      const asistentes = await connection.query(
            `INSERT INTO asistente (nombre, apellidos) values ('Emiliana', 'Soto Gutierrez')`,
          );
          return {
            success: true,
            message: 'alta de asistente exitosa',
          };
    }catch(exception){
      return {
        success: false,
        message: 'hubo un error',
      };
    }
  }

  async createPaciente(paciente) {
    let connection: Connection;

    if (!getConnectionManager().has('default')) {
      const connectionOptions = await getConnectionOptions();
      connection = await createConnection(connectionOptions);
    } else {
      connection = getConnection();
    }
    try{
      const paciente = await connection.query(
            `INSERT INTO paciente (nombre, apellidos, edad, genero, sexo, tipo_sangre, ocupacion) values
            ('Jimena', 'Perez Perez', 30, 'mujer', 'femenino', 'B+', 'Empleada')`,
          );
          return {
            success: true,
            message: 'alta de paciente exitosa',
          };
    }catch(exception){
      return {
        success: false,
        message: 'hubo un error',
      };
    }
  }


  async createDoctor(doctor) {
    let connection: Connection;

    if (!getConnectionManager().has('default')) {
      const connectionOptions = await getConnectionOptions();
      connection = await createConnection(connectionOptions);
    } else {
      connection = getConnection();
    }
    try{
      const doctor = await connection.query(
            `INSERT INTO doctor (nombre, apellidos, edad, genero, sexo) values 
            ('Daniela', 'Gomez Figueroa', 40, 'mujer transgenero', 'femenino')`,
          );
          return {
            success: true,
            message: 'alta de doctor exitosa',
          };
    }catch(exception){
      return {
        success: false,
        message: 'hubo un error',
      };
    }
  }

  //OTROS SELECTS FILTROS
  async getDocG() {
    let connection: Connection;
    let queryRunner: QueryRunner;

    if (!getConnectionManager().has('default')) {
      const connectionOptions = await getConnectionOptions();
      connection = await createConnection(connectionOptions);
    } else {
      connection = getConnection();
    }
    const docG = connection.query(`SELECT  nombre, apellidos FROM doctor WHERE genero = 
    'mujer transgenero'::"identidad_genero"`,);
    return docG;
  }

  async getPacienteF() {
    let connection: Connection;
    let queryRunner: QueryRunner;

    if (!getConnectionManager().has('default')) {
      const connectionOptions = await getConnectionOptions();
      connection = await createConnection(connectionOptions);
    } else {
      connection = getConnection();
    }
    const pacF = connection.query(`SELECT nombre, apellidos FROM paciente WHERE edad > 20`);
    return pacF;
  }

  async getGineV() {
    let connection: Connection;
    let queryRunner: QueryRunner;

    if (!getConnectionManager().has('default')) {
      const connectionOptions = await getConnectionOptions();
      connection = await createConnection(connectionOptions);
    } else {
      connection = getConnection();
    }
    const gine = connection.query(`SELECT id_expediente FROM ginecologia WHERE inicio_vida_sexual < 18`);
    return gine;
  }

  async getPesoElevado() {
    let connection: Connection;
    let queryRunner: QueryRunner;

    if (!getConnectionManager().has('default')) {
      const connectionOptions = await getConnectionOptions();
      connection = await createConnection(connectionOptions);
    } else {
      connection = getConnection();
    }
    const nutri = connection.query(`SELECT id_expediente FROM nutricion WHERE peso > 60`);
    return nutri;
  }

  async getInsomnio() {
    let connection: Connection;
    let queryRunner: QueryRunner;

    if (!getConnectionManager().has('default')) {
      const connectionOptions = await getConnectionOptions();
      connection = await createConnection(connectionOptions);
    } else {
      connection = getConnection();
    }
    const insomnio = connection.query(`SELECT id_expediente FROM suenio WHERE dificultad_suenio = 'siempre'`);
    return insomnio;
  }














}
