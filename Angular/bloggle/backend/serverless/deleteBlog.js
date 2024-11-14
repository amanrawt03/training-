module.exports.handler = async (event) => {
    const AWS = require('aws-sdk');
    const docClient = new AWS.DynamoDB.DocumentClient();
  
    const { _id } = event.pathParameters;  // Get the `id` from the path parameters
  
    if (!_id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required path parameter: id." }),
      };
    }
  
    const params = {
      TableName: 'blogPosts',
      Key: { _id },  // Use the `id` as the partition key to delete the item
    };
  
    try {
      // Attempt to delete the blog post from DynamoDB
      const data = await docClient.delete(params).promise();
  
      // Check if the item was successfully deleted
      if (data) {
        return {
          statusCode: 200,
          body: JSON.stringify({ message: `Blog post with id ${_id} deleted successfully.` }),
        };
      }
  
      return {
        statusCode: 404,
        body: JSON.stringify({ message: `Blog post with id ${_id} not found.` }),
      };
    } catch (error) {
      console.error("Error deleting post by id:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Internal server error while deleting post." }),
      };
    }
  };
  