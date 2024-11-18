import fs from 'fs';

/**
 * Fetches data from a JSON file.
 * @param {string} filePath - Path to the JSON file.
 * @returns {Promise<Array>} Parsed JSON data.
 */
const fetchData = async (filePath) => {
    try {
        const fileData = await fs.promises.readFile(filePath, 'utf-8');
        return JSON.parse(fileData);
    } catch (error) {
        console.error(`Error reading file at ${filePath}:`, error);
        throw error;
    }
};

/**
 * Deduplicates an array of objects based on specified keys.
 * @param {Array<Object>} data - The array of objects to deduplicate.
 * @param {Array<string>} keys - The keys to use for deduplication.
 * @returns {Array<Object>} The deduplicated array of objects.
 */
const deduplicateByKeys = (data, keys) => {
    const seen = new Set();
    return data.filter((item) => {
        const identifier = keys.map((key) => item[key]).join('|');
        if (seen.has(identifier)) {
            return false;
        }
        seen.add(identifier);
        return true;
    });
};

export { fetchData, deduplicateByKeys };
