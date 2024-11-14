const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient()

module.exports.handler = async(event)=>{
    const Params = {
        TableName: 'user'
    } 
    try {
        const res = await docClient.scan(Params).promise();
        if (res.Items.length === 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "No blogs found" }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ res: res.Items }),
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({errMessage:error.message})
        } 
    }
}