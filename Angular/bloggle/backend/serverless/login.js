module.exports.handler = async (event) => {
  const AWS = require('aws-sdk');
const bcrypt = require('bcryptjs');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const { email, password } = JSON.parse(event.body);

if (!email || !password) {
  return {
    statusCode: 400,
    body: JSON.stringify({ message: 'Email and password are required' }),
  };
}

// Use GSI to query by email
const params = {
  TableName: 'user',
  IndexName: 'email-index',  // The name of the GSI on `email`
  KeyConditionExpression: 'email = :email',  // Query condition
  ExpressionAttributeValues: {
    ':email': email,  // email from the request body
  },
};

try {
  const result = await dynamoDb.query(params).promise();

  if (!result.Items || result.Items.length === 0) {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: 'User not found' }),
    };
  }

  const user = result.Items[0];  // Assuming email is unique and we only expect one result

  // Compare the provided password with the stored hashed password
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Invalid credentials' }),
    };
  }


  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Signin successful',
      user_id: user.user_id,
      email: user.email,
    }),
  };
} catch (error) {
  console.error('Error:', error);
  return {
    statusCode: 500,
    body: JSON.stringify({
      message: 'Could not authenticate user',
      error: error.message || error,
    }),
  };
}

};
