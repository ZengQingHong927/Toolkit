const CronJob = require('cron').CronJob;
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const { Profile } = require('./models/profile');
const { User } = require('./models/user');

// 1. Find out all withdrawrecords with success status
// 2. Settle balance for every withdrawrecord and update withdrawrecords

const url = 'mongodb://127.0.0.1:27017/stripe-test-express';
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

mongoose.connect(url, options)
    .then(() => {
        console.log('Connect to database successfully...');
    })
    .catch((err) => {
        console.log('Connect to database fail...');
    });

async function QueryProfile() {

    // const data = await User.find({
    //     username: 'Vermeer'
    // }).populate('profile')
    const ops = await User.aggregate([
        { '$match': { 'username': 'Vermeer' } },
        { '$lookup': {
            'from': 'profiles',
            'foreignField': '_id',
            'localField': 'profile',
            'as': 'pro'
        } },
        { '$project': { 'pro._id':1, '_id':0 } }
    ]);
    ops.push({pro:[{_id:'abc123456789'}]})
    const temp = await Profile.updateOne({_id: ObjectId('5d88d99cca068e37e2968280')}, {profession: 'AI Developer'})
    const schedule = ops.map(element => {
        console.log(element)
        return {
            "updateOne": {
                "filter": {
                    "_id": ObjectId(element.pro[0]._id)
                },
                "update": { $set: { "profession": 'TEST' } }
            }
        };
    });
    Profile.collection.bulkWrite(schedule).then(result => console.log(result)).catch(err=>console.log(err));
}

QueryProfile()