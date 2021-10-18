module.exports = (request, response, next) => {
  console.log('------------')
  console.log(request.method)
  console.log(request.path)
  if (request.method === 'POST' || request.method === 'PUT') {
    console.log(request.body)
  }
  console.log('------------')
  next()
}
