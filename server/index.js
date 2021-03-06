const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const faker = require('faker');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/data', (req, res) => {
  const rndNum = faker.random.number({min: 10, max: 30});
  let output = [];

  for (let i = 0; i < rndNum; i++) {
    let avatar = faker.image.avatar();
    let username = faker.internet.userName();
    let email = faker.internet.email();
    let subscriptions = faker.random.number({min: 1, max: 30});
    let follows = faker.random.number({min: 1, max: 50});
    let friends = faker.random.number({min: 1, max: 50});
    let prime = faker.random.boolean();
    let tempRow = {
      avatar,
      username,
      email,
      subscriptions,
      follows,
      friends,
      prime,
      id: i,
    }
    output.push(tempRow);
  }

  res.status(200).send(output)
});

app.use((req, res, next) => {
  res.status(404);
  res.send({ error: 'Not Found' });
});

const port = 1337;
app.listen(port, () => console.log(`App listening on port ${port}!`))