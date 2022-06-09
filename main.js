"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        credentials: true,
        origin: [
            "",
            'null',
            null,
            '*',
            'https://localhost:3000',
            'http://localhost:3000',
            'http://localhost:8080',
        ],
        allowedHeaders: [
            'Authorization',
            'Content-Type',
            'X-Requested-With',
            'Accept',
            'Origin',
            'Access-Control-Allow-Origin',
        ],
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map