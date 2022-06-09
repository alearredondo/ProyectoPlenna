"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    getAsistente() {
        return this.appService.getAsistente();
    }
    createAsistente(body) {
        return this.appService.createAsistente(body);
    }
    createPaciente(body) {
        return this.appService.createPaciente(body);
    }
    getDoctores() {
        return this.appService.getDoctores();
    }
    getPacienteF() {
        return this.appService.getPacienteF();
    }
    getDocG() {
        return this.appService.getDocG();
    }
    createDoctor(body) {
        return this.appService.createDoctor(body);
    }
    getConsultas() {
        return this.appService.getConsultas();
    }
    getExpedientes() {
        return this.appService.getExpedientes();
    }
    getGinecologas() {
        return this.appService.getGinecologas();
    }
    getGineV() {
        return this.appService.getGineV();
    }
    getNutriologas() {
        return this.appService.getNutriologas();
    }
    getPesoElevado() {
        return this.appService.getPesoElevado();
    }
    getPsicologia() {
        return this.appService.getPsicologia();
    }
    getSexologia() {
        return this.appService.getSexologia();
    }
    getSuenio() {
        return this.appService.getSuenio();
    }
    getInsomnio() {
        return this.appService.getInsomnio();
    }
    getPacientes() {
        return this.appService.getPacientes();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('asistente'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAsistente", null);
__decorate([
    (0, common_1.Post)('asistente'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createAsistente", null);
__decorate([
    (0, common_1.Post)('paciente'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createPaciente", null);
__decorate([
    (0, common_1.Get)('doctor'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getDoctores", null);
__decorate([
    (0, common_1.Get)('pacienteF'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getPacienteF", null);
__decorate([
    (0, common_1.Get)('docG'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getDocG", null);
__decorate([
    (0, common_1.Post)('doctor'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createDoctor", null);
__decorate([
    (0, common_1.Get)('consulta'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getConsultas", null);
__decorate([
    (0, common_1.Get)('expediente'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getExpedientes", null);
__decorate([
    (0, common_1.Get)('ginecologia'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getGinecologas", null);
__decorate([
    (0, common_1.Get)('gineV'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getGineV", null);
__decorate([
    (0, common_1.Get)('nutriologas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getNutriologas", null);
__decorate([
    (0, common_1.Get)('nutri'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getPesoElevado", null);
__decorate([
    (0, common_1.Get)('psicologas'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getPsicologia", null);
__decorate([
    (0, common_1.Get)('sexologia'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getSexologia", null);
__decorate([
    (0, common_1.Get)('suenio'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getSuenio", null);
__decorate([
    (0, common_1.Get)('insomnio'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getInsomnio", null);
__decorate([
    (0, common_1.Get)('paciente'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getPacientes", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map