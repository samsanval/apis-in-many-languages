import {Schema, model, Model} from "mongoose";

class Book extends Model {
    private title: string
    private description : string

    constructor(title: string, description: string) {
        super();
        this.title = title;
        this.description = description;
    }
    setTitle(title: string): void
    {
        this.title = title;

    }
    setDescription(description: string): void
    {
        this.description = description;
    }
}
const BookSchema: Schema = new Schema({
    title: {  type: String, required: true },
    description : {type: String, required: true}
});
BookSchema.loadClass(Book);
export default model<Book>('Book',BookSchema);
