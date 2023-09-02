// const express = require('express');
// let axios = require('axios');
// var app = express();

// app.post('/', function(req, res, next) {
//   try {
//     let results = req.body.developers.map(async d => {
//       return await axios.get(`https://api.github.com/users/${d}`);
//     });
//     let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

//     return res.send(JSON.stringify(out));
//   } catch {
//     next(err);
//   }
// });

// app.listen(3000);

// ^^^ OLD CODE THAT NEEDS FIXED!!

// New code that is correct.
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json()); // Add JSON body parsing middleware

app.post('/', async (req, res, next) => {
  try {
    const developers = req.body.developers;

    if (!Array.isArray(developers)) {
      return res.status(400).json({ error: 'Invalid input. Expecting an array of developers.' });
    }

    const results = await Promise.all(
      developers.map(async (d) => {
        const response = await axios.get(`https://api.github.com/users/${d}`);
        return { name: response.data.name, bio: response.data.bio };
      })
    );

    return res.json(results);
  } catch (err) {
    next(err); // Pass the error to Express for error handling
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

