module.exports.handler = async (event) => {
  const AWS = require('aws-sdk');
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const bcrypt = require('bcryptjs');
  const { username, email, password } = JSON.parse(event.body);

  if (!username || !email || !password) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Name, email, and password are required' }),
    };
  }

  const user_id = AWS.util.uuid.v4(); 
  const hashedPassword = await bcrypt.hash(password, 10);
  const params = {
    TableName: 'user', // This should match the table name in serverless.yml
    Item: {
      user_id: user_id,
      username: username,
      email: email,
      password: hashedPassword, // Note: In production, do not store plaintext passwords
      createdAt: new Date().toISOString(),
    },
  };

  try {
    await dynamoDb.put(params).promise();
    return {
      statusCode: 201,
      body: JSON.stringify({
        message: 'User created successfully',
        user_id: user_id,
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Could not create user', error: error})
    };
  }
};
