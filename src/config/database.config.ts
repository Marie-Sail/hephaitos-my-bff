export default () => ({
    database: {
        uri: process.env.MONGO_URI || 'mongodb://localhost:27017',
        name: process.env.MONGO_DB_NAME,
    },
});