//Import Express
const express = require('express');

//Create Express app
const app = express();

//Define port
const PORT = 5000;

// Sample data - our temporary "database"
const sampleVibes = [
  {
    id: 1,
    mood: 'Excited',
    message: 'Learning Node.js and Express!',
    author: 'Avanish Kumar',
    date: '2023-05-15'
  },
  {
    id: 2,
    mood: 'Chill',
    message: 'Enjoying while coding.',
    author: 'Sai Kiran Polaki',
    date: '2023-05-16'
  },
  {
    id: 3,
    mood: 'Focused',
    message: 'Debugging for 3 hours but finally found the issue!',
    author: 'Shivam Pandey',
    date: '2023-05-17'
  }
];

//Root endpoint
app.get('/', (req, res) => {
    res.json('<h1>Welcome to VibeCheck API!</h1><p>Check out our vibes at /api/v1/vibes</p>')
})

//Get all vibes
app.get('/api/v1/vibes', (req, res) => {
    res.send(sampleVibes);
})

//Get one by id
app.get('/api/v1/vibes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const vibe = sampleVibes.find(v => v.id === id);

    if(vibe){
        res.send(vibe);
    }else{
        res.status(404).json({
            success: false,
            message: "That vibe is off the grid, not found."
        })
    }
})


//PORT
app.listen(PORT, () => {
    console.log(`🚀 Server blasting off on port ${PORT}`);
})




