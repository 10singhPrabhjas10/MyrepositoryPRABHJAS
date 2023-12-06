const express =  require('express');
// import express from 'express';
const app =  express ();

app.get('/', (req,res) => {
    res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
// Heroku tells us the port that we have to listen to where are http request needs to be repsonded to.... 
// this happens during actual runtime, and hence we cannot know our port beforehand
app.listen(PORT);

// localhost:5000