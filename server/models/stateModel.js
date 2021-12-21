import dbConnect from '../config/db-config.js';

const findAll = () => {
    return new Promise((resolve, reject) => {
        dbConnect.query('SELECT * FROM state', (err, results) => {
            if (err) reject(err);
            else resolve(results);
        })
    })
}
 export default { findAll };