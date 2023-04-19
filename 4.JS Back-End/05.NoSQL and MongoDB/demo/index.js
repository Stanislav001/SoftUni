const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/testdb';

const Car = require('./models/Car');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

async function start() {
    await mongoose.connect(connectionString, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('Database connected!');

    await Post.create({
        author: 'Peter',
        title: 'My first post',
        content: 'Lorem Ipsun Sit Amet'
    });

    await Comment.create({
        author: 'John',
        content: 'Nice article!'
    });

    const comment = await Comment.findOne({});
    const post = await Post.findOne({});
    post.comments.push(comment);
    await post.save();

    const onePost = await Post.findOne({}).populate('comments', 'content');
    console.log(onePost);
   
    /* Simple demo with cars
        try {
            const car = new Car({
                name: 'Honda Civic',
                price: 20000
            });
            await car.save();
        } catch (error) {
            console.log(error.message);
            console.log(error._message);
        }
    
        const data = await Car.find({ price: { $gte: 19000, $lte: 5000 } });
        console.log(data);
        data.forEach(car => car.startEngine())
    
        
        const hondaCar = await Car.findById('643e4a11f8a9d40a3f68ab1f');
        hondaCar.price  = 19000;
        await hondaCar.save();
    
        await Car.findByIdAndUpdate('643e4a11f8a9d40a3f68ab1f', { price: 19500 });*/
}

start();