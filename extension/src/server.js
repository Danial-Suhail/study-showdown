const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(env('DATABASE_URL'), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => console.log(err));

// Define Schema and Model
const scoreSchema = new mongoose.Schema({
  userId: String,
  score: Number,
});

const Score = mongoose.model('Score', scoreSchema);

// API Endpoints
app.post('/updateScore', async (req, res) => {
  const { userId, score } = req.body;

  try {
    // Update or create a score record
    const result = await Score.findOneAndUpdate({ userId }, { score }, { new: true, upsert: true });
    res.json(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
