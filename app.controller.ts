import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('asistente')
  getAsistente() {
    return this.appService.getAsistente();
  }

  @Post('asistente')
  createAsistente(@Body() body) {
    return this.appService.createAsistente(body);
  }

  @Post('paciente')
  createPaciente(@Body() body) {
    return this.appService.createPaciente(body);
  }

  @Get('doctor')
  getDoctores() {
    return this.appService.getDoctores();
  }

  @Get('pacienteF')
  getPacienteF() {
    return this.appService.getPacienteF();
  }

  //SELECT GENERO DOCTOR
  @Get('docG')
  getDocG() {
    return this.appService.getDocG();
  }

  @Post('doctor')
  createDoctor(@Body() body) {
    return this.appService.createDoctor(body);
  }

  @Get('consulta')
  getConsultas() {
    return this.appService.getConsultas();
  }

  @Get('expediente')
  getExpedientes() {
    return this.appService.getExpedientes();
  }

  @Get('ginecologia')
  getGinecologas() {
    return this.appService.getGinecologas();
  }

  @Get('gineV')
  getGineV() {
    return this.appService.getGineV();
  }

  @Get('nutriologas')
  getNutriologas() {
    return this.appService.getNutriologas();
  }

  @Get('nutri')
  getPesoElevado() {
    return this.appService.getPesoElevado();
  }

  @Get('psicologas')
  getPsicologia() {
    return this.appService.getPsicologia();
  }

  @Get('sexologia')
  getSexologia() {
    return this.appService.getSexologia();
  }

  @Get('suenio')
  getSuenio() {
    return this.appService.getSuenio();
  }

  @Get('insomnio')
  getInsomnio() {
    return this.appService.getInsomnio();
  }

  @Get('paciente')
  getPacientes() {
    return this.appService.getPacientes();
  }




}
