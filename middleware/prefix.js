module.exports = {
    setPrefix(prefix) {
        return (req, res, next) => {
            res.write(prefix)
            next()
        }
    }
}