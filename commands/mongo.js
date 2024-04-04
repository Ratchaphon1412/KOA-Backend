import { Command } from 'commander';
import { registerForFactory } from '../config/components/seeder.config.js';
import Facade from '../config/index.js';
import db from '../config/components/database.config.js';


const facade = new Facade();
const program = new Command();  

async function freshDB(){
    console.log("");
    await facade._connectDB();
    await db.dropDatabase();
    console.log("Database has been freshed");
    await facade._disconnectDB();
    console.log("");
}


function listFactory(){
    console.log("");
    console.log("List of available factory");
    console.log("--------------------------");
    console.log("");
    for (const key in registerForFactory) {
        console.log(" - ",key);
    }
    console.log("");
}


async function seedData(schema, options){
    await facade._connectDB();
    const ob = registerForFactory[schema];
    console.log("");
    
    if (!ob) {
        console.log("Schema not found");
        await facade._disconnectDB();
        return;
    }
   
    for (let i = 0; i < options.number; i++) {
        const factory = new ob();
        await factory._build();
        console.log(`Seeding ${schema} ${i+1} of ${options.number}`);
    }
    console.log("");
    await facade._disconnectDB();
}

program
    .name('mongo')
    .description('mongo CLI')
    .version('0.1.0')


program
    .command('seed')
    .description(' this Command will seed fake data to database MongoDB')
    .argument('<schema>','Schema name to seed data')
    .option('-n, --number <number>','Number of data to seed')
    .action(seedData)

program
    .command('factory')
    .description(' this Command will list all available factory')
    .option('-l, --list','List all available factory')
    .action(listFactory)

program
    .command('fresh')
    .description('Fresh database All data will be lost!')
    .action(freshDB);

program.parse(process.argv);

export default program;