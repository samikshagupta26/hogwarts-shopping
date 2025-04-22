const baseUrl = 'http://localhost:3000/blogPosts';

/***
 *
 * @returns {Promise<Array>}
 */
const findAll = async () => {
    try {
        const response = await fetch(baseUrl);
        
        if (!response.ok) {
            throw new Error('Failed to fetch data' + response.status);
        }
        
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

/***
 *
 * @param {number} id
 * @returns {Promise<Object>}
 */

const findById = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/${id}`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch data' + response.status);
        }
        
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export default {
    findAll,
    findById
}