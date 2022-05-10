const Test = require("../model/Test")

const TestController = {
    createTest: async function (req, res, next){
        try{
            const { title } = req.body
            const testCreate = await Test.create({
                title
            })
            res.status(200).json(testCreate)
        } catch (err){
            console.log(err)
        }
    },
    getAllTest: async function (req, res, next){
        try{
            const allTest = await Test.find({})
            res.status(200).json(allTest)
        } catch (err){
            console.log(err)
        }
    }
}

module.exports = TestController