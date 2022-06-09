import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getAsistente(): Promise<any>;
    createAsistente(body: any): Promise<{
        success: boolean;
        message: string;
    }>;
    createPaciente(body: any): Promise<{
        success: boolean;
        message: string;
    }>;
    getDoctores(): Promise<any>;
    getPacienteF(): Promise<any>;
    getDocG(): Promise<any>;
    createDoctor(body: any): Promise<{
        success: boolean;
        message: string;
    }>;
    getConsultas(): Promise<any>;
    getExpedientes(): Promise<any>;
    getGinecologas(): Promise<any>;
    getGineV(): Promise<any>;
    getNutriologas(): Promise<any>;
    getPesoElevado(): Promise<any>;
    getPsicologia(): Promise<any>;
    getSexologia(): Promise<any>;
    getSuenio(): Promise<any>;
    getInsomnio(): Promise<any>;
    getPacientes(): Promise<any>;
}
