import {container} from "tsyringe";
import {MongoBookRepository} from "./src/Book/Infrastructure/Persistence/MongoBookRepository";
import {MongoConfigFactory} from "./src/Shared/Infrastructure/Persistence/Mongo/MongoConfigFactory";
import {MongoClientFactory} from "./src/Shared/Infrastructure/Persistence/Mongo/MongoClientFactory";
import {BookCreator} from "./src/Book/Application/BookCreator";

export default function createDependencies()
{
    container.register("BookRepository", {
        useClass: MongoBookRepository
    });
    container.register("MongoConfigFactory", {
        useFactory: MongoConfigFactory.createConfig
    });
    container.register("MongoClientFactory", {
        useValue: MongoClientFactory.createClient('dev')
    });
    container.register("BookCreator", {
        useClass: BookCreator
    })
}