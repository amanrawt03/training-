// This is the function to handle the POST request and create a new blog post
module.exports.handler = async (event) => {
  const AWS = require('aws-sdk');
  const docClient = new AWS.DynamoDB.DocumentClient();
  const { title, content, author } = JSON.parse(event.body);  // Extract post data from request body

  // Validation: Ensure all necessary fields are provided
  if (!title || !content || !author) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing required fields: title, content, and author." }),
    };
  }

  const params = {
    TableName: 'blogPosts',
    Item: {
      _id: AWS.util.uuid.v4(),  // Generate a unique ID for the post
      title,
      content,
      author,
      isApproved : false,
      isAdmin : false,
      isSuperAdmin:false,
      createdAt: new Date().toISOString(),  // Add a createdAt timestamp
    },
  };

  try {
    // Insert the new post into DynamoDB
    await docClient.put(params).promise();

    return {
      statusCode: 201,  // HTTP status code for "Created"
      body: JSON.stringify({
        message: "Post created successfully",
        post: params.Item,  // Return the created post details
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: `Internal server error while creating post: ${error}`, }),
    };
  }
};
