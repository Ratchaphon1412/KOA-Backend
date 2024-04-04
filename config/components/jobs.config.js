import {delTodoCompleteJob} from '../../jobs/delTodo.job.js'

const registerJobs = {
    delTodoCompleteJob
}

export const jobsStart = ()=>{
    for (const key in registerJobs) {
        registerJobs[key].start();
    }
}