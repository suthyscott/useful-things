app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully.')
})

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/styles.css'))
    rollbar.info('html file served successfully.')
})