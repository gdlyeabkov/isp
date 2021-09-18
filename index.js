const express = require('express')
const path = require('path')
const app = express()
const serveStatic = require('serve-static')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

app.use('/', serveStatic(path.join(__dirname, '/dist')))

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

const ClientSchema = new mongoose.Schema({
    name: String,
    password: String,
    rate: {
        type: String,
        default: "614381fa21140a08e85570b5"
    },
    balance: {
        type: Number,
        default: 0
    },
    clientId: String,
    personalAccountBonus: {
        type: Number,
        default: 0
    }
}, { collection : 'myclients' });

const RateSchema = new mongoose.Schema({
    name: String,
    speed: Number,
    tv: Boolean,
    tvDesc: String,
    cost: Number,
    bindingClients: {
        type: [mongoose.Schema.Types.Map],
        default: []
    }
}, { collection : 'myrates' });

const NewsSchema = new mongoose.Schema({
    name: String,
    section: {
        type: String,
        default: "news"
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { collection : 'mynews' });

const LicensesSchema = new mongoose.Schema({
    name: String,
    note: String,
    date: {
        type: Date,
        default: Date.now
    }
}, { collection : 'mylicenses' });

const AdsSchema = new mongoose.Schema({
    url: String
}, { collection : 'myads' });

const AdsModel = mongoose.model('AdsModel', AdsSchema);

const LicensesModel = mongoose.model('LicensesModel', LicensesSchema);

const NewsModel = mongoose.model('NewsModel', NewsSchema);

const RateModel = mongoose.model('RateModel', RateSchema);

const ClientModel = mongoose.model('ClientModel', ClientSchema);

const url = `mongodb+srv://glebClusterUser:glebClusterUserPassword@cluster0.fvfru.mongodb.net/clients?retryWrites=true&w=majority`;
mongoose.connect(url, connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.get("/client/info", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    let query = ClientModel.findOne({ _id: req.query.clientid })
    query.exec((err, clientinfo) => {
        if(err){
            return res.json({ "status": "Error" })
        }
        return res.json({ "status": "OK", "clientinfo": clientinfo })
    })

})

app.get("/client/writeoff", (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    let queryOfClient = RateModel.findOne({ clientid: req.query.clientid })
    queryOfClient.exec((err, client) => {
        if(err){
            return res.json({ "status": "Error" })
        }
        let queryOfRate = RateModel.findOne({ _id: req.query.client.rate })
        queryOfRate.exec((err, rate) => {
            if(err){
                return res.json({ "status": "Error" })
            }
            ClientModel.updateOne({ clientId: req.query.clientid }, 
                { 
                    "$inc": { "balance": -rate.cost }
                }, (err, user) => {
                if(err){
                    return res.json({ "status": "Error" })
                }  
                return res.json({ "status": "OK" })
            })
        })
    })

})

app.get('/clients/create', async (req, res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
   
    let generatedClientId = "#"
    let alphabet = "abcdefghjiklmnoprstuvwxyz"
    
    let preparedGeneratedClientId = ''
    for(let i = 0; i < Math.floor(Math.random() * 10); i++){
        let randomIndex = Math.floor(Math.random() * alphabet.length)
        let randomLetter = alphabet[randomIndex]
        preparedGeneratedClientId += randomLetter
    }

    generatedClientId = bcrypt.hashSync(preparedGeneratedClientId, 10)
    // generatedClientId = bcrypt.hash(preparedGeneratedClientId, 10, ())

    let queryOfClients = ClientModel.find({})
    queryOfClients.exec(async (err, allClients) => {
        if (err){
            return res.json({ "status": "Error" })
        }
        let clientExists = false
        allClients.forEach(client => {
            if(client.clientId.includes(generatedClientId)){
                clientExists = true
            }
        })
        if(clientExists){
            return res.json({ "status": "Error" })
        } else {

            let encodedPassword = "#"
            let salt = bcrypt.genSalt(10)
            encodedPassword = bcrypt.hashSync(req.query.clientpassword, 10)

            let newClient = await new ClientModel({ name: req.query.clientname, password: encodedPassword, clientId: generatedClientId });
            newClient.save(function (err) {
                if(err){
                    return res.json({ "status": "Error" })
                }
                RateModel.updateOne({ _id: '614381fa21140a08e85570b5' },
                    { $push: 
                        { 
                            bindingClients: [
                                {
                                    clientId: generatedClientId,
                                    name: req.query.clientname,
                                    balance: 0,
                                }
                            ]
                            
                        }
                }, (err, client) => {
                    return res.json({ "status": "OK" })
                })
            })
        }
    })
})

app.get('/clients/check', (req,res)=>{
  
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
   
    let queryOfClient =  ClientModel.findOne({'clientId': req.query.clientid}, function(err, client){
        if (err || client == undefined || client == null){
            return res.json({ "status": "Error" })
        } else {
            let passwordCheck = bcrypt.compareSync(req.query.password, client.password) && req.query.password !== ''

            if(req.query.clientid == client.clientId && passwordCheck){
                return res.json({ "client": client, "status": "OK" })
            }
            return res.json({ "status": "Error" })
        }
    })
})

app.get('/clients/get', (req,res)=>{
  
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
   
    let queryOfClient =  ClientModel.findOne({'clientId': req.query.clientid}, function(err, client){
        if(err){
            return res.json({ "status": "Error" })
        }
        return res.json({ "client": client, "status": "OK" })
    })
})


app.get('/client/rates/add', (req, res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    ClientModel.updateOne({ clientId: req.query.clientid },
        { 
            "rate": req.query.rateid
        }, (err, user) => {
        if(err){
            return res.json({ "status": "Error" })
        }
        mongoose.connection.collection("myrates").updateOne(
            { _id: req.query.rateid },
            { $pull: { 'bindingClients': { clientId: req.query.clientid } } }
        )
        RateModel.updateOne({ _id: req.query.rateid },
            { $push: 
                { 
                    bindingClients: [
                        {
                            clientId: req.query.clientId,
                            name: req.query.clientName,
                            balance: req.query.clientBalance,
                        }
                    ]
                    
                }
        }, (err, client) => {
            return res.json({ "status": "OK" })
        })
    })
})

app.get('/home', async (req, res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
   
    let queryOfRates = RateModel.find({})
    queryOfRates.exec(async (err, allRates) => {
        if (err){
            return res.json({ "status": "Error" })
        }
        let queryOfNews = NewsModel.find({})
        queryOfNews.exec(async (err, allNews) => {
            if (err){
                return res.json({ "status": "Error" })
            }
            let queryOfLicenses = LicensesModel.find({})
            queryOfLicenses.exec(async (err, allLicenses) => {
                if (err){
                    return res.json({ "status": "Error" })
                }
                let queryOfAds = AdsModel.find({})
                queryOfAds.exec(async (err, allAds) => {
                    if (err){
                        return res.json({ "status": "Error" })
                    }
                    return res.json({ "rates": allRates, "news": allNews, "licenses": allLicenses, "ads": allAds, "status": "OK" })
                })
            })
        })
    })
})

app.get('/rates/create', async (req, res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
   
    let queryOfRates = RateModel.find({})
    queryOfRates.exec(async (err, allRates) => {
        if (err){
            return res.json({ "status": "Error" })
        }
        let rateExists = false
        allRates.forEach(rate => {
            if(rate.name.includes(req.query.ratename)){
                rateExists = true
            }
        })
        if(rateExists){
            return res.json({ "status": "Error" })
        } else {

            let newRate = await new RateModel({ name: req.query.ratename, speed: Number(req.query.ratespeed), tv: Boolean(req.query.supporttv), tvDesc: req.query.tvdesc, cost: Number(req.query.ratecost) });
            newRate.save(function (err) {
                if(err){
                    return res.json({ "status": "Error" })
                }
                return res.json({ "status": "OK" })
            })
        }
    })
})

app.get('/news/create', async (req, res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
   
    let queryOfNews = NewsModel.find({})
    queryOfNews.exec(async (err, allNews) => {
        if (err){
            return res.json({ "status": "Error" })
        }
        let newsExists = false
        allNews.forEach(news => {
            if(news.name.includes(req.query.newsname)){
                newsExists = true
            }
        })
        if(newsExists){
            return res.json({ "status": "Error" })
        } else {

            let newNews = await new NewsModel({ name: req.query.newsname, section: req.query.newssection });
            newNews.save(function (err) {
                if(err){
                    return res.json({ "status": "Error" })
                }
                return res.json({ "status": "OK" })
            })
        }
    })
})

app.get('/licenses/create', async (req, res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
   
    let queryOfLicenses = LicensesModel.find({})
    queryOfLicenses.exec(async (err, allLicenses) => {
        if (err){
            return res.json({ "status": "Error" })
        }
        let licenseExists = false
        allLicenses.forEach(license => {
            if(license.name.includes(req.query.licensename)){
                licenseExists = true
            }
        })
        if(licenseExists){
            return res.json({ "status": "Error" })
        } else {

            let newLicense = await new LicensesModel({ name: req.query.licensename, note: req.query.note });
            newLicense.save(function (err) {
                if(err){
                    return res.json({ "status": "Error" })
                }
                return res.json({ "status": "OK" })
            })
        }
    })
})

app.get('/ads/create', async (req, res)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
   
    let queryOfAds = AdsModel.find({})
    queryOfAds.exec(async (err, allAds) => {
        if (err){
            return res.json({ "status": "Error" })
        }
        let adsExists = false
        allAds.forEach(ads => {
            if(ads.url.includes(req.query.adsname)){
                adsExists = true
            }
        })
        if(adsExists){
            return res.json({ "status": "Error" })
        } else {

            let newAds = await new AdsModel({ url: req.query.adsurl });
            newAds.save(function (err) {
                if(err){
                    return res.json({ "status": "Error" })
                }
                return res.json({ "status": "OK" })
            })
        }
    })
})

app.get("**", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    return res.json({ "status": "Error" })
})
    


// const port = process.env.PORT || 8080
const port = 4000 

app.listen(port)