const Test = require("../model/Test")

const TestController = {
    createTest: async function (req, res, next){
        try{
            const test = {title: "1243"}
            const testCreate = await Test.create({
                test
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