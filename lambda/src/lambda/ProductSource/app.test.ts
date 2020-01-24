import { handler } from './app'

describe('Testing RA integration', () => {
    test('Testing 1', async () => {
        const response = await handler("{\"Id\":336715}");
        expect(response.Id).toBe('336715');
    })
})