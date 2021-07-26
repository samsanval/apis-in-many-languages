import config from './config';
import MongoConfig from './MongoConfig';
import {injectable} from "tsyringe";

@injectable()
export class MongoConfigFactory {
    static createConfig(): MongoConfig {
        return {
            url: config.get('mongo.url')
        };
    }
}