const router = require('express').Router()

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  res.json('get')
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  res.json('get')
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
  res.json('get')
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  res.json('get')
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  res.json('get')
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.json('get')
})

module.exports = router;
