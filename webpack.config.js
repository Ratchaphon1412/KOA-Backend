import path from 'path';

const __dirname = path.resolve();

export default {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                
                exclude: /node_modules/
            }
        ]
    },
    mode : 'development',
    
}