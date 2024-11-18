import { fetchData, deduplicateByKeys } from './utils.js';

const main = async () => {
    try {
        const source1 = await fetchData('./data/source1.json');
        const source2 = await fetchData('./data/source2.json');

        // Combine the data
        const combinedData = [...source1, ...source2];

        // Deduplicate by keys (e.g., "id", "name")
        const deduplicatedData = deduplicateByKeys(combinedData, ['name', 'age']);

        // Sort the data alphabetically by "name"
        const sortedData = deduplicatedData.sort((a, b) =>
            a.name.localeCompare(b.name)
        );

        console.log('Final Processed Data:', sortedData);
    } catch (error) {
        console.error('Error during processing:', error);
    }
};

main();
