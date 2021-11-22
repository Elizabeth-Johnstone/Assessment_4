const showsList = require('./db.json')
let globalId = 5

module.exports= {
    getShows: (req, res) => res.status(200).send(showsList),

    createShows: (req, res) => {
        let { showName, networkName } = req.body
        let newShow = {
            id: globalId,
            showName,
            networkName
            }
        showsList.push(newShow)
        res.status(200).send(showsList)
        globalId++
        console.log(showsList)
      },

    updateShows: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = showsList.findIndex(elem => +elem.id === +id)

        if (type === 'plus') {
          showsList[index].rating++
            res.status(200).send(showsList)
        } else if (type === 'minus') {
          showsList[index].rating--
            res.status(200).send(showsList)
        } else {
            res.sendStatus(400)
        }
    },

    deleteShows: (req, res) => {
        let i = showsList.findIndex(elem => elem.id === +req.params.id) 
        showsList.splice(i, 1)
                res.status(200).send(showsList)
        console.log(showsList)
              },
}