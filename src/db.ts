import {DataSource} from 'typeorm'
import { User } from './entities/User'
 
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    port: 3301,
    database: 'api',
    entities: [User],
    logging: true,
    synchronize: true,
})