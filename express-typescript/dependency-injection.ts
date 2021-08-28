import {container} from "tsyringe";
import {MongoBookRepository} from "./src/Book/Infrastructure/Persistence/MongoBookRepository";
import {MongoConfigFactory} from "./src/Shared/Infrastructure/Persistence/Mongo/MongoConfigFactory";
import {MongoClientFactory} from "./src/Shared/Infrastructure/Persistence/Mongo/MongoClientFactory";
import {BookCreator} from "./src/Book/Application/BookCreator";
import {CommandHandlersInformation} from "./src/Shared/Infrastructure/CommandBus/CommandInformation";
import {MemoryCommandBus} from "./src/Shared/Infrastructure/CommandBus/MemoryCommandBus";
import {CreateBookCommandHandler} from "./src/Book/Application/CreateBookCommandHandler";

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
    });
    container.register("CommandHandlers", {
        useValue: Array(new CreateBookCommandHandler(container.resolve("BookCreator")))
    });
    container.register("CommandInformation", {
        useClass: CommandHandlersInformation
    });
    container.register("CommandBus", {
        useClass: MemoryCommandBus
    });

}