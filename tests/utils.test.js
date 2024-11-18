import { deduplicateByKeys } from '../src/utils.js';

describe('deduplicateByKeys', () => {
    const sampleData = [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 35 },
        { id: 4, name: 'Alice', age: 25 },
    ];

    it('deduplicates by a single key', () => {
        const result = deduplicateByKeys(sampleData, ['name']);
        expect(result).toEqual([
            { id: 1, name: 'Alice', age: 25 },
            { id: 2, name: 'Bob', age: 30 },
            { id: 3, name: 'Charlie', age: 35 },
        ]);
    });

    it('deduplicates by multiple keys', () => {
        const result = deduplicateByKeys(sampleData, ['name', 'age']);
        expect(result).toEqual([
            { id: 1, name: 'Alice', age: 25 },
            { id: 2, name: 'Bob', age: 30 },
            { id: 3, name: 'Charlie', age: 35 },
        ]);
    });

    it('does not deduplicate if no keys match', () => {
        const result = deduplicateByKeys(sampleData, ['id']);
        expect(result).toEqual(sampleData);
    });
});
