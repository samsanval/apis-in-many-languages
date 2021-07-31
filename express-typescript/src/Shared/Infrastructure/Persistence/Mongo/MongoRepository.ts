import { Collection, MongoClient } from "mongodb";
import {AggregateRoot} from "../../../Domain/AggregateRoot";
import {container} from "tsyringe";

export abstract class MongoRepository<T extends AggregateRoot>
{
    constructor(private _client: Promise<MongoClient>)
    {
        this._client = container.resolve("MongoClientFactory");
    }

    protected abstract moduleName(): string;

    protected client(): Promise <MongoClient>
    {
        return this._client;
    }

    protected async collection(): Promise<Collection>
    {
        return (await this._client).db().collection(this.moduleName());

    }

    protected async persist(id: number, aggregateRoot: AggregateRoot): Promise<void>
    {
        const collection = await this.collection();
        const document = {...aggregateRoot.toPrimitives(), _id: id, id:undefined};
        await collection.updateOne({_id: id}, {$set: document}, {upsert: true});

    }
}