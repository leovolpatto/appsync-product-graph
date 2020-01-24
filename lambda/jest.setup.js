
jest.setTimeout(30000);
process.env.ENV = 'dev'
process.env.awsRegion = 'us-east-1';
process.env.zendeskSecretNameOnAwsSecretsManager = 'zendesk-crc-homol';
process.env.reclameAquiSecretNameOnAwsSecretsManager = 'crc-zendesk-ra-integration-homol';
process.env.dynamodbTableName = 'crc-ra-integration-table-homol';

const AWS = require("aws-sdk");
AWS.config.credentials = new AWS.SharedIniFileCredentials({ profile: 'toksam' });
AWS.config.region = process.env.awsRegion;