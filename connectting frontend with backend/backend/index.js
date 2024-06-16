import express from "express"

const app = express();

app.listen( 8000 , () => {
    console.log('server running at port 8000')
})

app.get('/' , (req , res) => {
  
    res.send('server is ready')
})

app.get('/api/jokes' , (req , res) => {
    const jokes = [
        {
          id: 1,
          title: "Atom Joke",
          content: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
          id: 2,
          title: "Scarecrow Award",
          content: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
          id: 3,
          title: "Skeleton Fight",
          content: "Why don't skeletons fight each other? They don't have the guts."
        },
        {
          id: 4,
          title: "Fake Spaghetti",
          content: "What do you call fake spaghetti? An impasta!"
        },
        {
          id: 5,
          title: "Penguin House",
          content: "How does a penguin build its house? Igloos it together."
        }
      ];
    res.send(jokes);
} )