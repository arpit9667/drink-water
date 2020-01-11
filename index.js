import './helpers/connect';
import bodyParser from 'body-parser';
import express from 'express';
import route from './routers/route';
import scheduleMail from './helpers/mailscheduler';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(route);

app.listen( PORT, () => {
    setInterval( () => scheduleMail(), 14400000);
})