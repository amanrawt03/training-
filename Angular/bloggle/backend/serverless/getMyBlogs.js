module.exports.handler = async (event) => {
    const AWS = require('aws-sdk');
    const docClient = new AWS.DynamoDB.DocumentClient();
  
    const { author } = event.pathParameters;  // Extract author from query parameters
  
    if (!author) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required query parameter: author." }),
      };
    }
  
    const params = {
      TableName: 'blogPosts',
      FilterExpression: 'author = :author',
      ExpressionAttributeValues: {
        ':author': author,
      },
    };
  
    try {
      const data = await docClient.scan(params).promise();
  
      if (data.Items.length === 0) {
        return {
          statusCode: 404,
          body: JSON.stringify({ message: "No blogs found for the author" }),
        };
      }
  
      return {
        statusCode: 200,
        body: JSON.stringify({
          data: data.Items,
        }),
      };
    } catch (error) {
      console.error("Error fetching posts by author:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Internal server error while fetching posts." }),
      };
    }
  };
  