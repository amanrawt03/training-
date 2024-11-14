const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async (event) => {
  try {
    const { comment_id, reply, author } = JSON.parse(event.body);

    if (!comment_id || !reply || !author) {
      return { statusCode: 400, body: JSON.stringify({ message: 'comment_id, reply, and author are required' }) };
    }

    const commentParams = { TableName: 'commentsTable', Key: { comment_id } };
    const commentResult = await dynamoDb.get(commentParams).promise();

    if (!commentResult.Item) {
      return { statusCode: 404, body: JSON.stringify({ message: 'Comment not found' }) };
    }

    const newReply = { parentcomment_id: comment_id, reply, author, createdAt: new Date().toISOString() };

    await dynamoDb.update({
      TableName: 'commentsTable',
      Key: { comment_id },
      UpdateExpression: 'set reply = :reply',
      ExpressionAttributeValues: { ':reply': newReply },
    }).promise();

    return { statusCode: 200, body: JSON.stringify({ data: newReply }) };

  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ message: 'Could not add reply', error: error.message }) };
  }
};
