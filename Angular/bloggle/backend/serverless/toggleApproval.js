const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient(); // Assuming you're using DynamoDB
module.exports.handler = async (event) => {
  try {
    const { id } = event.pathParameters; // Get the ID from the URL path parameters

    // Fetch the blog from DynamoDB (adjust as needed for your DB setup)
    const params = {
      TableName: 'blogPosts', // Your DynamoDB table
      Key: { _id: id }, // Assuming 'blog_id' is the primary key
    };
    
    const result = await dynamoDb.get(params).promise();
    let blog = result.Item;

    if (!blog) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Blog not found" }),
      };
    }

    // Toggle the approval status
    blog.isApproved = !blog.isApproved;

    // Save the updated blog back to the database
    const updateParams = {
      TableName: 'blogPosts', // Your DynamoDB table
      Key: { _id: id }, // Assuming 'blog_id' is the primary key
      UpdateExpression: 'SET isApproved = :isApproved',
      ExpressionAttributeValues: {
        ':isApproved': blog.isApproved,
      },
    };

    await dynamoDb.update(updateParams).promise();

    // Return the response
    return {
      statusCode: 200,
      body: JSON.stringify({ data: blog.isApproved }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
