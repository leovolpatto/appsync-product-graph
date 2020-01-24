// import { getProduct } from './../../api/product';
// //import { getProduct } from '~/src/api/product'
// import 'source-map-support/register';

// interface Request{
//     Id: string
// }

// export async function handler(request: Request) {
//     console.debug('Id', request);
//     const product = await getProduct(request.Id);
//     console.debug('product', JSON.stringify(product));
//     return product;
// }

import { getProduct } from './../../api/product';
import 'source-map-support/register';
let response;

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */

interface Request{
    Id: number
}
import { APIGatewayEvent } from "aws-lambda";
export const handler = async (event: APIGatewayEvent["body"]): Promise<any> => {
    try {
        const request: Request = JSON.parse(event||'');
        //if(request.Id=='') console.error('invalid request');
        const product = await getProduct(request.Id);
        response = product
    } catch (err) {
        console.log(err);
        return err;
    }
    return response
}