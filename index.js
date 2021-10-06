const express = require('express')
const path = require('path')
const app = express()
const serveStatic = require('serve-static')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer")

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gdlyeabkov@gmail.com',
        pass: 'myreversepassword'
    }
})

app.use('/', serveStatic(path.join(__dirname, '/dist')))

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

const ClientSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    dontDisplayAboutUnfullSecurity: {
        type: Boolean,
        default: false
    },
    receiveNotificationsSecurity: {
        type: Boolean,
        default: false
    },
    receiveSubscribeForActions: {
        type: Boolean,
        default: false
    },
    blocked: {
        type: Boolean,
        default: false
    },
    staticIPService: {
        type: Boolean,
        default: false
    },
    rate: {
        type: String,
        default: "614d5d823042d6bf5c76e19f"
    },
    balance: {
        type: Number,
        default: 0
    },
    clientId: String,
    personalAccountBonus: {
        type: Number,
        default: 0
    },
    ip: String,
    phones: {
        type: [mongoose.Schema.Types.Map],
        default: []
    },
    cards: {
        type: [mongoose.Schema.Types.Map],
        default: []
    },
    debits: {
        type: [mongoose.Schema.Types.Map],
        default: []
    },
    payments: {
        type: [mongoose.Schema.Types.Map],
        default: []
    },
    connections: {
        type: [mongoose.Schema.Types.Map],
        default: []
    },
    promisedPayments: {
        type: [mongoose.Schema.Types.Map],
        default: []
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

app.get('/clients/blocked', async (req, res)=>{

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    ClientModel.updateOne({ clientId: req.query.clientid }, { blocked: true }, (err, client) => {
        if(err){
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })    
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
    // for(let i = 0; i < Math.floor(Math.random() * 10); i++){
    for(let i = 0; i < Math.floor(Math.random() * 25); i++){
        let randomIndex = Math.floor(Math.random() * alphabet.length)
        let randomLetter = alphabet[randomIndex]
        preparedGeneratedClientId += randomLetter
    }

    // generatedClientId = bcrypt.hashSync(preparedGeneratedClientId, 10)
    generatedClientId = preparedGeneratedClientId
    
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

            let newClient = await new ClientModel({ name: req.query.clientname, email: req.query.clientemail, password: encodedPassword, clientId: generatedClientId, ip: req.query.clientaddress });
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
                    setInterval(() => {
                        let queryOfClient = ClientModel.findOne({ clientId: generatedClientId })
                        queryOfClient.exec((err, currentClient) => {
                            if(err){
                                return res.json({ status: "Error" })
                            }
                            let queryOfRate = RateModel.findOne({ _id: currentClient.rate })
                            queryOfRate.exec((err, currentRate) => {
                                if(err){
                                    return res.json({ status: "Error" })
                                }
                                ClientModel.updateOne({ clientId: generatedClientId },
                                    {
                                        $push: 
                                        {
                                            debits: [
                                                {
                                                    amount: currentRate.cost,
                                                    desc: `За месячное пользование тарифом ${currentRate.name}`,
                                                    date: new Date().toLocaleString()
                                                }
                                            ]
                                        },
                                        $inc: { "balance": -currentRate.cost }
                                    }, (err, client) => {
                                        if(err){
                                            return res.json({ status: 'Error' })        
                                        }
                                    })
                            })
                            console.log('Списываю деньги за ежемесячное пользование интернетом')
                        })
                    }, 60 * 60 * 24 * 30)
                    return res.json({ "status": "OK" })
                })
            })
        }
    })
})

app.get('/clients/password/replace', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let encodedPassword = "#"
    let saltRounds = 10
    let salt = bcrypt.genSalt(saltRounds)
    encodedPassword = bcrypt.hashSync(req.query.newpassword, saltRounds)
    ClientModel.updateOne({ clientId: req.query.clientid }, { password: encodedPassword }, (err, client) => {
        if(err){
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })    
    })
})

app.get('/clients/settings/set', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    if(req.query.option.includes('dont')){
        ClientModel.updateOne({ clientId: req.query.clientid }, { dontDisplayAboutUnfullSecurity: req.query.newvalue.includes('true') }, (err, client) => {
            if(err){
                return res.json({ status: 'Error' })        
            }
            return res.json({ status: 'OK' })    
        })        
    } else if(req.query.option.includes('notification')){
        ClientModel.updateOne({ clientId: req.query.clientid }, { receiveNotificationsSecurity: req.query.newvalue.includes('true') }, (err, client) => {
            if(err){
                return res.json({ status: 'Error' })        
            }
            return res.json({ status: 'OK' })    
        })
    } else if(req.query.option.includes('sub')){
        ClientModel.updateOne({ clientId: req.query.clientid }, { receiveSubscribeForActions: req.query.newvalue.includes('true') }, (err, client) => {
            if(err){
                return res.json({ status: 'Error' })        
            }
            return res.json({ status: 'OK' })    
        })
    }
    
})


app.get('/clients/email/delete', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    ClientModel.updateOne({ clientId: req.query.clientid }, { email: '' }, (err, client) => {
        if(err){
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })    
    })
})

app.get('/clients/cards/activate', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let insertCard = true
    let queryOfClient = ClientModel.findOne({ clientId: req.query.clientid })
    queryOfClient.exec((err, currentClient) => {
        if(err){
            console.log('ошибка здесь')
            return res.json({ status: "Error" })
        }
        currentClient.cards.map(card => {
            if(new Map(card).get('cardnumber').includes(req.query.cardnumber)){
                insertCard = false
            }
        })
        if(insertCard && currentClient.cards.length <= 0){
            ClientModel.updateOne({ clientId: req.query.clientid },{ $push: 
                { 
                    cards: [
                        {
                            cardnumber: req.query.cardnumber,
                            pincode: req.query.pincode
                        }
                    ]
                    
                }
            }, (err, client) => {
                if(err){
                    return res.json({ status: 'Error' })        
                }
                return res.json({ status: 'OK' })    
            })
        } else {
            return res.json({ status: 'Error' })
        }
    })

})

app.get('/clients/promised/add', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let queryOfClient = ClientModel.findOne({ clientId: req.query.clientid })
    queryOfClient.exec((err, currentClient) => {
        if(err){
            return res.json({ status: "Error" })
        }
        if(currentClient.promisedPayments.length <= 0){
            ClientModel.updateOne({ clientId: req.query.clientid },
            {
                $push: 
                {
                    promisedPayments: [
                        {
                            id: "1",
                            date: new Date().toLocaleString()
                        }
                    ]
                },
                $inc: { "balance": 168 }
            }, (err, client) => {
                if(err){
                    return res.json({ status: 'Error' })        
                }
                console.log("добавляю обещанный платёж")
                setTimeout(() => {
                    // if(currentClient.promisedPayments.length >= 1){
                        console.log("удаляю обещанный платёж")    
                        mongoose.connection.collection("myclients").updateOne(
                            { clientId: req.query.clientid },
                            { $pull: { 'promisedPayments': { id: "1" } } }
                        )
                    // }
                }, 60 * 60 * 24 * 3)
                return res.json({ status: 'OK' })    
            })
        } else {
            console.log("обещанный платёж несколько раз взять нельзя")
            return res.json({ status: 'Error' })    
        }
    })
})

app.get('/clients/connections/add', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    ClientModel.updateOne({ clientId: req.query.clientid },
    {
        $push: 
        {
            connections: [
                {
                    start: `${Math.floor(Math.random() * 100)}`,
                    stop: `${Math.floor(Math.random() * 100)}`,
                    transfer: `${Math.floor(Math.random() * 100)}`,
                    receive: `${Math.floor(Math.random() * 100)}`,
                    debit: `${Math.floor(Math.random() * 100)}`,
                }
            ]
            
        }
    }, (err, client) => {
        if(err){
            return res.json({ status: 'Error' })        
        }
        return res.json({ status: 'OK' })    
    })

})

app.get('/clients/cards/pay', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    
    let queryOfClient = ClientModel.findOne({ clientId: req.query.clientid })
    queryOfClient.exec((err, currentClient) => {
        if(err){
            return res.json({ status: "Error" })
        }
        if(currentClient.balance >= req.query.amount){
            
            let alphabet = "abcdefghjiklmnoprstuvwxyz"
            let preparedGeneratedOrderId = ''
            for(let i = 0; i < Math.floor(Math.random() * 25); i++){
                let randomIndex = Math.floor(Math.random() * alphabet.length)
                let randomLetter = alphabet[randomIndex]
                preparedGeneratedOrderId += randomLetter
            }
            
            let possiblePromisedPayment = 0
            if(currentClient.promisedPayments.length >= 1 && Number(req.query.amount) >= 168){
                possiblePromisedPayment = 168
                mongoose.connection.collection("myclients").updateOne(
                    { clientId: req.query.clientid },
                    { $pull: { 'promisedPayments': { id: "1" } } }
                )   
            }

            ClientModel.updateOne({ clientId: req.query.clientid },
            {
                $push: 
                {
                    payments: [
                        {
                            orderNumber: preparedGeneratedOrderId,
                            amount: req.query.amount - possiblePromisedPayment,
                            date: new Date().toLocaleString()
                        }
                    ]
                    
                },
                $inc: { "balance": -req.query.amount }
            }, (err, client) => {
                if(err){
                    return res.json({ status: 'Error' })        
                }
                return res.json({ status: 'OK' })    
            })
        } else {
            return res.json({ status: 'Error' })  
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
        let queryOfRate =  RateModel.findOne({'_id': client.rate }, function(err, rate){
            if(err){
                return res.json({ "status": "Error" })
            }
            return res.json({ "client": client, rate: rate, "status": "OK" })
        })
        // return res.json({ "client": client, "status": "OK" })
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
            let supportTV = false
            let supportTVDesc = "Без ТВ"
            if(req.query.supporttv.includes("true")){
                supportTV = true
                supportTVDesc = req.query.tvdesc
            }
            
            // let newRate = await new RateModel({ name: req.query.ratename, speed: Number(req.query.ratespeed), tv: Boolean(req.query.supporttv), tvDesc: req.query.tvdesc, cost: Number(req.query.ratecost) });
            let newRate = await new RateModel({ name: req.query.ratename, speed: Number(req.query.ratespeed), tv: supportTV, tvDesc: supportTVDesc, cost: Number(req.query.ratecost) });

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

app.get("/client/phone", async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    ClientModel.updateOne({ clientId: req.query.clientid },
    { $push: 
        { 
            phones: [
                {
                    phone: req.query.phone
                }
            ]
            
        }
    }, (err, client) => {
        if(err){
            return res.json({ "status": "Error" })
        }
        return res.json({ "status": "OK" })
    })
})

app.get('/subscribers/notify', (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    let query = ClientModel.find({ })
    query.exec((err, clients) => {
        if(err){
            return res.json({ "status": "Error" })
        }
        clients.map((client) => {
            if(client.email.length >= 1 && client.receiveSubscribeForActions){
                let mailOptions = {
                    from: `"${'gdlyeabkov'}" <${"gdlyeabkov"}>`,
                    to: `${client.email}`,
                    subject: `ISP оповещение! ${req.query.title}`,
                    html: `<h3>Вы подписаны на оповещения ISP. Посетите наш сайт, чтобы посмотреть новинки.</h3><br/><p>${req.query.content}.</p>`,
                }
                transporter.sendMail(mailOptions, function (err, info) {
                })
            }
        })
        return res.json({ "status": "OK" })
    })

})

app.get("**", (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, X-Access-Token, X-Socket-ID, Content-Type");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");

    return res.json({ "status": "OK" })
})
    


// const port = process.env.PORT || 8080
const port = 4000 

app.listen(port)