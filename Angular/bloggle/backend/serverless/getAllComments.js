const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async (event) => {
  try {
    const { _id } = event.pathParameters;

    if (!_id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'blog id is required' }),
      };
    }

    // Query to get all comments for the blog
    const params = {
      TableName: 'commentsTable', 
      KeyConditionExpression: 'blogId = :blogId',
      ExpressionAttributeValues: {
        ':blogId': _id,
      },
    };

    const result = await dynamoDb.query(params).promise();

    if (!result.Items || result.Items.length === 0) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'No comments found for this blog' }),
      };
    }

    // Return the comments
    return {
      statusCode: 200,
      body: JSON.stringify({ data: result.Items }),
    };
  } catch (error) {
    console.error('Error getting comments:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Could not fetch comments',
        error: error.message || error,
      }),
    };
  }
};
