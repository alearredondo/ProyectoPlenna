var dbConfig = {
  // type: 'mysql',
  // database: process.env.DB_NAME,
  // host: process.env.DB_HOST,
  // port: +process.env.DB_PORT,
  // username: process.env.DB_USERNAME,
  // password: process.env.DB_PASSWORD,
  // entities: ['module/main/*.entity.ts'],
  // entities: ['**/*.entity.{.ts,js}'],
  migrations: ['migrations/*.js'],
  cli: {
    migrationsDir: 'migrations',
  },
  synchronize: false,
};

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbConfig, {
      type: 'postgres',
      database: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '',
      // entities: ['**/*.entity.js'],
      entities: ['**/*.entity.{.ts,js}'],
    });
    break;

  case 'production':
    Object.assign(dbConfig, {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      migrationsRun: true,
      entities: ['**/*.entity.js'],
      ssl: {
        rejectUnauthorized: false,
      },
    });
    break;
  default:
    throw new Error('unknown environment');
}

module.exports = dbConfig;
