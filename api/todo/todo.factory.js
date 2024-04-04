import { faker } from '@faker-js/faker';
import { Todo,Comment } from './todo.model.js';


export class TodoFactory {
    constructor() {
        this.todo = {
            title: faker.lorem.words(),
            content: faker.lorem.sentence(),
            completed: faker.datatype.boolean(Math.random(0, 1)),
            comments: [],
            created_at: faker.date.recent(),
        }
    }

    async _build() {
        const todo = new Todo({
            title: this.todo.title,
            content: this.todo.content,
            completed: this.todo.completed,
            comments: this.todo.comments,
            created_at: this.todo.created_at,
        });
        await todo.save();
    }
}

export class CommentFactory {
    constructor() {
        this.comment = {
            
            content: faker.lorem.sentence(),
            created_at: faker.date.recent(),
        }
    }

    async _build() {
        const count = await Todo.countDocuments();
        let random = Math.floor(Math.random() * count)
        const todo = await Todo.findOne().skip(random);
       
        const comment = new Comment({
            todo_id:  todo._id,
            content: this.comment.content,
            created_at: this.comment.created_at,
        });
        await comment.save();

        await todo.comments.push(comment._id);

        await todo.save();
    }
}

