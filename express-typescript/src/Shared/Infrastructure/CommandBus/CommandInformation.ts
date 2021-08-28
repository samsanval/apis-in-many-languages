import {Command} from "../../Domain/CommandBus/Command";
import {CommandHandler} from "../../Domain/CommandBus/CommandHandler";
import {inject, injectable} from "tsyringe";

@injectable()
export class CommandHandlersInformation {
    private commandHandlersMap: Map<Command, CommandHandler<Command>>;

    constructor(@inject("CommandHandlers")commandHandlers: Array<CommandHandler<Command>>) {
        this.commandHandlersMap = this.formatHandlers(commandHandlers);
    }

    private formatHandlers(commandHandlers: Array<CommandHandler<Command>>): Map<Command, CommandHandler<Command>> {
        const handlersMap = new Map();

        commandHandlers.forEach(commandHandler => {
            handlersMap.set(commandHandler.subscribedTo(), commandHandler);
        });

        return handlersMap;
    }

    public search(command: Command): CommandHandler<Command> {
        const commandHandler = this.commandHandlersMap.get(command.constructor);

        if (!commandHandler) {
            throw new Error();
        }

        return commandHandler;
    }
}
