"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let AppService = class AppService {
    getHello() {
        return 'Hola';
    }
    async getAsistente() {
        let connection;
        let queryRunner;
        if (!(0, typeorm_1.getConnectionManager)().has('default')) {
            const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
            connection = await (0, typeorm_1.createConnection)(connectionOptions);
        }
        else {
            connection = (0, typeorm_1.getConnection)();
        }
        const asistentes = connection.query(`SELECT * FROM asistente`);
        return asistentes;
    }
    async getDoctores() {
        let connection;
        let queryRunner;
        if (!(0, typeorm_1.getConnectionManager)().has('default')) {
            const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
            connection = await (0, typeorm_1.createConnection)(connectionOptions);
        }
        else {
            connection = (0, typeorm_1.getConnection)();
        }
        const doctores = connection.query(`SELECT * FROM doctor`);
        return doctores;
    }
    async getConsultas() {
        let connection;
        let queryRunner;
        if (!(0, typeorm_1.getConnectionManager)().has('default')) {
            const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
            connection = await (0, typeorm_1.createConnection)(connectionOptions);
        }
        else {
            connection = (0, typeorm_1.getConnection)();
        }
        const consultas = connection.query(`SELECT * FROM consulta`);
        return consultas;
    }
    async getExpedientes() {
        let connection;
        let queryRunner;
        if (!(0, typeorm_1.getConnectionManager)().has('default')) {
            const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
            connection = await (0, typeorm_1.createConnection)(connectionOptions);
        }
        else {
            connection = (0, typeorm_1.getConnection)();
        }
        const expedientes = connection.query(`SELECT * FROM expediente`);
        return expedientes;
    }
    async getPacientes() {
        let connection;
        let queryRunner;
        if (!(0, typeorm_1.getConnectionManager)().has('default')) {
            const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
            connection = await (0, typeorm_1.createConnection)(connectionOptions);
        }
        else {
            connection = (0, typeorm_1.getConnection)();
        }
        const paciente = connection.query(`SELECT * FROM paciente`);
        return paciente;
    }
    async getGinecologas() {
        let connection;
        let queryRunner;
        if (!(0, typeorm_1.getConnectionManager)().has('default')) {
            const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
            connection = await (0, typeorm_1.createConnection)(connectionOptions);
        }
        else {
            connection = (0, typeorm_1.getConnection)();
        }
        const ginecologa = connection.query(`SELECT * FROM ginecologia`);
        return ginecologa;
    }
    async getNutriologas() {
        let connection;
        let queryRunner;
        if (!(0, typeorm_1.getConnectionManager)().has('default')) {
            const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
            connection = await (0, typeorm_1.createConnection)(connectionOptions);
        }
        else {
            connection = (0, typeorm_1.getConnection)();
        }
        const nutriologa = connection.query(`SELECT * FROM nutricion`);
        return nutriologa;
    }
    async getPsicologia() {
        let connection;
        let queryRunner;
        if (!(0, typeorm_1.getConnectionManager)().has('default')) {
            const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
            connection = await (0, typeorm_1.createConnection)(connectionOptions);
        }
        else {
            connection = (0, typeorm_1.getConnection)();
        }
        const psicologa = connection.query(`SELECT * FROM psicologia`);
        return psicologa;
    }
    async getSexologia() {
        let connection;
        let queryRunner;
        if (!(0, typeorm_1.getConnectionManager)().has('default')) {
            const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
            connection = await (0, typeorm_1.createConnection)(connectionOptions);
        }
        else {
            connection = (0, typeorm_1.getConnection)();
        }
        const sexologa = connection.query(`SELECT * FROM sexologia`);
        return sexologa;
    }
    async getSuenio() {
        let connection;
        let queryRunner;
        if (!(0, typeorm_1.getConnectionManager)().has('default')) {
            const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
            connection = await (0, typeorm_1.createConnection)(connectionOptions);
        }
        else {
            connection = (0, typeorm_1.getConnection)();
        }
        const suenio = connection.query(`SELECT * FROM suenio`);
        return suenio;
    }
    async createAsistente(asistente) {
        let connection;
        if (!(0, typeorm_1.getConnectionManager)().has('default')) {
            const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
            connection = await (0, typeorm_1.createConnection)(connectionOptions);
        }
        else {
            connection = (0, typeorm_1.getConnection)();
        }
        try {
            const asistentes = await connection.query(`INSERT INTO asistente (nombre, apellidos) values ('Emiliana', 'Soto Gutierrez')`);
            return {
                success: true,
                message: 'alta de asistente exitosa',
            };
        }
        catch (exception) {
            return {
                success: false,
                message: 'hubo un error',
            };
        }
    }
    async createPaciente(paciente) {
        let connection;
        if (!(0, typeorm_1.getConnectionManager)().has('default')) {
            const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
            connection = await (0, typeorm_1.createConnection)(connectionOptions);
        }
        else {
            connection = (0, typeorm_1.getConnection)();
        }
        try {
            const paciente = await connection.query(`INSERT INTO paciente (nombre, apellidos, edad, genero, sexo, tipo_sangre, ocupacion) values
            ('Jimena', 'Perez Perez', 30, 'mujer', 'femenino', 'B+', 'Empleada')`);
            return {
                success: true,
                message: 'alta de paciente exitosa',
            };
        }
        catch (exception) {
            return {
                success: false,
                message: 'hubo un error',
            };
        }
    }
    async createDoctor(doctor) {
        let connection;
        if (!(0, typeorm_1.getConnectionManager)().has('default')) {
            const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
            connection = await (0, typeorm_1.createConnection)(connectionOptions);
        }
        else {
            connection = (0, typeorm_1.getConnection)();
        }
        try {
            const doctor = await connection.query(`INSERT INTO doctor (nombre, apellidos, edad, genero, sexo) values 
            ('Daniela', 'Gomez Figueroa', 40, 'mujer transgenero', 'femenino')`);
            return {
                success: true,
                message: 'alta de doctor exitosa',
            };
        }
        catch (exception) {
            return {
                success: false,
                message: 'hubo un error',
            };
        }
    }
    async getDocG() {
        let connection;
        let queryRunner;
        if (!(0, typeorm_1.getConnectionManager)().has('default')) {
            const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
            connection = await (0, typeorm_1.createConnection)(connectionOptions);
        }
        else {
            connection = (0, typeorm_1.getConnection)();
        }
        const docG = connection.query(`SELECT  nombre, apellidos FROM doctor WHERE genero = 
    'mujer transgenero'::"identidad_genero"`);
        return docG;
    }
    async getPacienteF() {
        let connection;
        let queryRunner;
        if (!(0, typeorm_1.getConnectionManager)().has('default')) {
            const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
            connection = await (0, typeorm_1.createConnection)(connectionOptions);
        }
        else {
            connection = (0, typeorm_1.getConnection)();
        }
        const pacF = connection.query(`SELECT nombre, apellidos FROM paciente WHERE edad > 20`);
        return pacF;
    }
    async getGineV() {
        let connection;
        let queryRunner;
        if (!(0, typeorm_1.getConnectionManager)().has('default')) {
            const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
            connection = await (0, typeorm_1.createConnection)(connectionOptions);
        }
        else {
            connection = (0, typeorm_1.getConnection)();
        }
        const gine = connection.query(`SELECT id_expediente FROM ginecologia WHERE inicio_vida_sexual < 18`);
        return gine;
    }
    async getPesoElevado() {
        let connection;
        let queryRunner;
        if (!(0, typeorm_1.getConnectionManager)().has('default')) {
            const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
            connection = await (0, typeorm_1.createConnection)(connectionOptions);
        }
        else {
            connection = (0, typeorm_1.getConnection)();
        }
        const nutri = connection.query(`SELECT id_expediente FROM nutricion WHERE peso > 60`);
        return nutri;
    }
    async getInsomnio() {
        let connection;
        let queryRunner;
        if (!(0, typeorm_1.getConnectionManager)().has('default')) {
            const connectionOptions = await (0, typeorm_1.getConnectionOptions)();
            connection = await (0, typeorm_1.createConnection)(connectionOptions);
        }
        else {
            connection = (0, typeorm_1.getConnection)();
        }
        const insomnio = connection.query(`SELECT id_expediente FROM suenio WHERE dificultad_suenio = 'siempre'`);
        return insomnio;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map