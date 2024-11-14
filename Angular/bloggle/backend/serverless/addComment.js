const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async (event) => {
  try {
    // Parse the request body
    const { _id, comment, author } = JSON.parse(event.body);

    if (!_id || !comment || !author) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'id, comment, and author are required' }),
      };
    }

    // Check if the blog exists by querying the blogs table
    const Params = {
      TableName: 'blogPosts',  // Replace with your actual table name
      Key: { _id },  // Assuming `_id` is the partition key
    };

    const blogResult = await dynamoDb.get(Params).promise();

    if (!blogResult.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'No such blog found' }),
      };
    }

    // Now, create the comment record in the comments table
    const newComment = {
      comment_id:AWS.util.uuid.v4(),
      blogId:_id,
      comment,
      author,
      createdAt: new Date().toISOString(), 
    };

    const commentParams = {
      TableName: 'commentsTable',  
      Item: newComment,
    };

    await dynamoDb.put(commentParams).promise();

    // Return a success response with the created comment
    return {
      statusCode: 200,
      body: JSON.stringify({ data: newComment }),
    };

  } catch (error) {
    console.error('Error adding comment:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Could not add comment', error: error.message }),
    };
  }
};
