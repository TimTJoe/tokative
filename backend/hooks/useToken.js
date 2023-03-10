/**
 * Generate random alphanumeric shorter than 9 characters
 */
const useToken = () => {
    let right = (0 | (Math.random() * 9e6)).toString(36);
    let left = Math.random().toString(36).substring(2, 6);
    let token = left + right;
    return token;
}

module.exports = useToken