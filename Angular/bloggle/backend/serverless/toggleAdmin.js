const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.handler = async (event) => {
  try {
    const { id } = event.pathParameters; // Get the user ID from the URL path parameters

    // Fetch the user from DynamoDB
    const params = {
      TableName: 'user', // Replace with your actual table name
      Key: { user_id: id }, // Assuming the primary key is 'user_id'
    };

    const result = await dynamoDb.get(params).promise();
    let user = result.Item;

    if (!user) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "User not found" }),
      };
    }

    // Toggle the 'isAdmin' status
    user.isAdmin = !user.isAdmin;

    // Save the updated user back to DynamoDB
    const updateParams = {
      TableName: 'user', // Replace with your actual table name
      Key: { user_id: id },
      UpdateExpression: 'SET isAdmin = :isAdmin',
      ExpressionAttributeValues: {
        ':isAdmin': user.isAdmin,
      },
    };

    await dynamoDb.update(updateParams).promise();

    // Return the response
    return {
      statusCode: 200,
      body: JSON.stringify({ data: user.isAdmin }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message || error }),
    };
  }
};
