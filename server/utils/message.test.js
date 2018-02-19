const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Eric';
        const text = 'text test';
        const message = generateMessage(from, text);

        expect(message).toInclude({ from, text });
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const from = 'Eric';
        const latitude = 123;
        const longitude = 123;
        const url = 'https://www.google.com/maps?q=123,123';
        const message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, url });
        expect(message.url).toBe('https://www.google.com/maps?q=123,123');
    });
});