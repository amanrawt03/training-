module.exports.handler = async (event) => {
    const AWS = require('aws-sdk');
    const docClient = new AWS.DynamoDB.DocumentClient();
    
    const { _id } = event.pathParameters;  // Get the id from the URL path parameters
  
    if (!_id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required path parameter: id." }),
      };
    }
  
    const params = {
      TableName: 'blogPosts',
      Key: { _id },  // Use the id as the partition key
    };
  
    try {
      // Get the blog post from DynamoDB
      const data = await docClient.get(params).promise();
  
      if (!data.Item) {
        return {
          statusCode: 404,
          body: JSON.stringify({ message: `Blog post with id ${_id} not found.` }),
        };
      }
  
      return {
        statusCode: 200,
        body: JSON.stringify({
          post: data.Item,  // Return the found blog post
        }),
      };
    } catch (error) {
      console.error("Error fetching post by id:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Internal server error while fetching post." }),
      };
    }
  };
  