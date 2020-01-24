import { getProduct } from './product'
import { getSkus } from './product'

describe('testing product api', () => {
    test('test getProduct', async () => {
        const product = await getProduct(336715);
        console.log(product.Categoria);
        expect(product.Id).toBe('336715');
    });
});

describe('testing skus api', () => {
    test('test getSkus', async () => {
        const skus = await getSkus(1, 10);
        console.log(skus);
        expect(skus[1]).toBe(1251);
    });
});