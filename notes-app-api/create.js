import uuid from 'uuid';
import AWS from 'aws-sdk';
import * as dynamoDbLib from './libs/dynamo-lib';
import { success, failure } from './libs/response-lib';

AWS.config.update({ region: 'us-east-2' });

export async function main(event, context) {
  const data = JSON.parse(event.body);

  const params = {
    TableName: 'notes',
    Item: {
      userId: event.requestContext.identity.cognitoIdentityId,
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
      createdAt: Date.now()
    }
  };

  try {
    await dynamoDbLib.call('put', params);
    return success(params.Item);
  } catch (e) {
    console.log(e);
    return failure({ status: false });
  }
}
