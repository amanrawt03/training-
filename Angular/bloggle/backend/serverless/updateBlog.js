module.exports.handler = async (event) => {
    const AWS = require('aws-sdk');
    const docClient = new AWS.DynamoDB.DocumentClient();
    
    const { _id, title, content, author } = JSON.parse(event.body);  // Extract post data from request body
  
    // Validation: Ensure the 'id' and at least one of the fields ('title', 'content', 'author') is provided
    if (!_id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Missing required field: id." }),
      };
    }
    if (!title && !content && !author) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "At least one field (title, content, author) must be provided to update." }),
      };
    }
  
    // Prepare update parameters
    const updateExpression = [];
    const expressionAttributeValues = {};
    
    if (title) {
      updateExpression.push("title = :title");
      expressionAttributeValues[":title"] = title;
    }
    if (content) {
      updateExpression.push("content = :content");
      expressionAttributeValues[":content"] = content;
    }
    if (author) {
      updateExpression.push("author = :author");
      expressionAttributeValues[":author"] = author;
    }
  
    const params = {
      TableName: 'blogPosts',
      Key: { _id },  // The 'id' used to locate the post
      UpdateExpression: `SET ${updateExpression.join(', ')}`,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: "ALL_NEW",  // This ensures the updated post is returned
    };
  
    try {
      // Update the post in DynamoDB
      const result = await docClient.update(params).promise();
  
      return {
        statusCode: 200,  // HTTP status code for "OK"
        body: JSON.stringify({
          message: "Post updated successfully",
          post: result.Attributes,  // Return the updated post details
        }),
      };
    } catch (error) {
      console.error("Error updating post:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: "Internal server error while updating post." }),
      };
    }
  };
  