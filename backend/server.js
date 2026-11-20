const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');

const app = express()

const MONGO_URI = 'mongodb://localhost:27017';
const DB_NAME = 'PortfolioDB';

let tasksCollection;

app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000,() => console.log("listening on port 3000"))