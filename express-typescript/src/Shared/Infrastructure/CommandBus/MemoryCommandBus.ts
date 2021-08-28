import {CommandBus} from "../../Domain/CommandBus/CommandBus";
import {inject, injectable} from "tsyringe";
import {CommandHandlersInformation} from "./CommandInformation";
import {Command} from "../../Domain/CommandBus/Command";

@injectable()
export class MemoryCommandBus implements CommandBus
{
    constructor(@inject("CommandInformation") private commandInformation: CommandHandlersInformation) {
    }

    async dispatch(command: Command): Promise<void> {
        const handler = this.commandInformation.search(command);
        await handler.handle(command);
    }
}