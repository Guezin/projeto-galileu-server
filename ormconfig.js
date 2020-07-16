module.exports = {
  name: 'default',
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [
    `./${process.env.PRODUCTION_OR_DEVELOPMENT}/models/*.${process.env.EXTENSION}`,
  ],
  migrations: [
    `./${process.env.PRODUCTION_OR_DEVELOPMENT}/database/migrations/*.${process.env.EXTENSION}`,
  ],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
