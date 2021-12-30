module.exports = {
    port: 3000,
    db: {
        url: "mongodb://root:example@172.17.0.2:27017/",
        options: {
            "auth": { "authSource": "admin" },
            "user": "root",
            "pass": "example",
            useNewUrlParser: true,
            useUnifiedTopology: true            
        }
    }
} 