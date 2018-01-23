// API Endpoint declarations
module.exports = function(app){

  app.get('/', (req, res) => res.send({msg:'Hello World!'}))

}
