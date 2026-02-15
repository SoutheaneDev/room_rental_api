import { DataSource, DataSourceOptions } from 'typeorm';
import * as path from 'path';
import 'dotenv/config';

export function get_db_config(): DataSource {
  return new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: true,
    entities: [path.resolve(__dirname, '../**/*.entity.{ts,js}')],
    migrations: [path.resolve(__dirname, '../migrations/*.{ts,js}')],
  });
}
