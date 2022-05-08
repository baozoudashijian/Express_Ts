module.exports = {
    setEncoding(format) {
        return (req, res, next) => {
            res.set({ 'content-type': `application/json; charset=${format}` })
            next()
        }
    }
}