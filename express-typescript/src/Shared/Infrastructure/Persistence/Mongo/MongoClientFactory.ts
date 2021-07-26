import "reflect-metadata"
import { MongoClient } from 'mongodb';
import MongoConfig from './MongoConfig';
import {inject, injectable} from "tsyringe";

@injectable()
export class MongoClientFactory {
    private static clients: { [key: string]: MongoClient } = {};
    private static config: MongoConfig;

    constructor(@inject("MongoConfigFactory") private config: MongoConfig)
    {
    }

    static async createClient(contextName: string): Promise<MongoClient> {
        let client = MongoClientFactory.getClient(contextName);

        if (!client) {
            client = await MongoClientFactory.createAndConnectClient(this.config);
            MongoClientFactory.registerClient(client, contextName);
        }
        return client;
    }

    private static getClient(contextName: string): MongoClient | null {
        return MongoClientFactory.clients[contextName];
    }

    private static async createAndConnectClient(config: MongoConfig): Promise<MongoClient> {
        const client = new MongoClient('mongodb://localhost:27017/books-api', { useUnifiedTopology: true, ignoreUndefined: true });

        await client.connect();
        return client;
    }

    private static registerClient(client: MongoClient, contextName: string): void {
        MongoClientFactory.clients[contextName] = client;
    }
}