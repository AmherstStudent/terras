const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // Upcoming pages

  server.get('/article/:lin', (req, res) => {
    const actualPage = '/article'
    const queryParams = { slug: req.params.slug }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/section/:slug', (req, res) => {
    const actualPage = '/section'
    const queryParams = { slug: req.params.slug }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/author/:user', (req, res) => {
    const actualPage = '/author'
    const queryParams = { user: req.params.user }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/issue/:issue_num', (req, res) => {
    const actualPage = '/issue'
    const queryParams = { issue_num: req.params.issuenum }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(process.env.PORT, err => {
    if (err) throw err
    // eslint-disable-next-line no-console
    console.log(`🤘 on http://localhost:${process.env.PORT}`)
  })
})
