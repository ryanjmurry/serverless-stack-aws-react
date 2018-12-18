export default {
  s3: {
    REGION: "us-east-1",
    BUCKET: "murry-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://nf8rkfwqwk.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_AApCEvMpu",
    APP_CLIENT_ID: "3uld7c1j4jldmp8r27m1ohhs4c",
    IDENTITY_POOL_ID: "us-east-1:a78c74e6-c55a-4951-b0ce-1888fa0dd6ff"
  }
};
