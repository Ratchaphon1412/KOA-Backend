import { CronJob } from 'cron';

import {Todo,Comment} from '../api/todo/todo.model.js';



export const delTodoCompleteJob =  CronJob.from({cronTime:'*/30 * * * * *',onTick: async () => {
    // Code to be executed every 30 seconds
    
    const todos = await Todo.find().where('completed').equals(true);

    for (let todo of todos) {
        await Comment.deleteMany({todo_id: todo._id});
        await Todo.deleteOne({_id: todo._id});
    }

    console.log('Delete completed todo job is running ...')

    


},onComplete:null, start: true,timeZone: 'Asia/Bangkok'});