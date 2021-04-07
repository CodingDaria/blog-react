import express from 'express'
import http from 'http'
import cookieParser from 'cookie-parser'
import favicon from 'serve-favicon'
import axios from 'axios'
import { nanoid } from 'nanoid'
import io from 'socket.io'

import config from './config'
import mongooseService from './services/mongoose'

import Html from '../client/html'

const { resolve } = require('path')

const server = express()
const httpServer = http.createServer(server)

const PORT = config.port

const middleware = [
  cookieParser(),
  express.json({ limit: '50kb' }),
  express.static(resolve(__dirname, '../dist')),
  favicon(`${__dirname}/public/favicon.ico`)
]

middleware.forEach((it) => server.use(it))

server.get('/api/v1/posts', async (req, res) => {
  try {
    const { data: posts } = await axios('https://bloggy-api.herokuapp.com/posts')
    res.json(posts)
  } catch (err) {
    console.log(err)
  }
})

server.get('/api/v1/posts/:postId', async (req, res) => {
  const { postId } = req.params
  try {
    const { data: post } = await axios(`https://bloggy-api.herokuapp.com/posts/${postId}?_embed=comments`)
    res.json(post)
  } catch (err) {
    console.log(err)
  }
})

server.post('/api/v1/posts', async (req, res) => {
  const { title, body } = req.body
  const id = nanoid()
  try {
    const post = await axios.post('https://bloggy-api.herokuapp.com/posts', { id, title, body })
    res.json(post)
  } catch (err) {
    console.log(err)
  }
})

server.put('/api/v1/posts/:postId', async (req, res) => {
  const { postId } = req.params
  const { title, body } = req.body
  try {
    // const { data: post } = await axios(
    //   `https://bloggy-api.herokuapp.com/posts/${postId}?_embed=comments`
    // )
    // const title = req.body.title ? req.body.title : post.title
    // const body = req.body.body ? req.body.body : post.body
    const { data: updatedPost } = await axios.put(`https://bloggy-api.herokuapp.com/posts/${postId}`, {
      title,
      body
    })
    res.json(updatedPost)
    // const { data: posts } = await axios('https://bloggy-api.herokuapp.com/posts')
    // res.json(posts)
  } catch (err) {
    throw new Error(err)
  }
})

server.post('/api/v1/posts/:postId', async (req, res) => {
  const { postId } = req.params
  const { body } = req.body
  const commentId = nanoid()
  try {
    const { data: comment } = await axios.post('https://bloggy-api.herokuapp.com/comments', {
      postId,
      id: commentId,
      body
    })
    res.json(comment)
  } catch (err) {
    console.log(err)
  }
})

server.delete('/api/v1/posts/:postId', async (req, res) => {
  const { postId } = req.params
  try {
    axios.delete(`https://bloggy-api.herokuapp.com/posts/${postId}`)
    res.json({ status: 'deleted' })
  } catch (err) {
    console.log(err)
  }
})

server.get('/test', (req, res) => {
  res.send('server works')
})

// MongoDB
if (config.mongoEnabled) {
  console.log('MongoDB Enabled: ', config.mongoEnabled)
  mongooseService.connect()
}

// SocketsIO
if (config.socketsEnabled) {
  console.log('Sockets Enabled: ', config.socketsEnabled)
  const socketIO = io(httpServer, {
    path: '/ws'
  })

  socketIO.on('connection', (socket) => {
    console.log(`${socket.id} login`)

    socket.on('disconnect', () => {
      console.log(`${socket.id} logout`)
    })
  })
}

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }

  return res.send(
    Html({
      body: '',
      initialState
    })
  )
})

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

httpServer.listen(PORT)

console.log(`Serving at http://localhost:${PORT}`)
