export declare class AppService {
    getHello(): string;
    getAsistente(): Promise<any>;
    getDoctores(): Promise<any>;
    getConsultas(): Promise<any>;
    getExpedientes(): Promise<any>;
    getPacientes(): Promise<any>;
    getGinecologas(): Promise<any>;
    getNutriologas(): Promise<any>;
    getPsicologia(): Promise<any>;
    getSexologia(): Promise<any>;
    getSuenio(): Promise<any>;
    createAsistente(asistente: any): Promise<{
        success: boolean;
        message: string;
    }>;
    createPaciente(paciente: any): Promise<{
        success: boolean;
        message: string;
    }>;
    createDoctor(doctor: any): Promise<{
        success: boolean;
        message: string;
    }>;
    getDocG(): Promise<any>;
    getPacienteF(): Promise<any>;
    getGineV(): Promise<any>;
    getPesoElevado(): Promise<any>;
    getInsomnio(): Promise<any>;
}
