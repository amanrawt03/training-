// getAllBlogs.js
module.exports.handler = async (event) => {
    const AWS = require('aws-sdk');
    const docClient = new AWS.DynamoDB.DocumentClient();
    
    const params = {
        TableName: 'blogPosts',
    };

    try {
        const data = await docClient.scan(params).promise();
        if (data.Items.length === 0) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "No blogs found" }),
            };
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ data: data.Items }),
        };
    } catch (error) {
        console.error("Error fetching posts:", error);
        const err = error
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err }),
        };
    }
};
