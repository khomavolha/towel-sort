
module.exports = function towelSort (matrix) {
    if(matrix === undefined || matrix.length === 0) {
        return [];
    } else {
        for(let i = 1; i < matrix.length; i=i+2) {
            matrix[i] = matrix[i].reverse();
        };
        let arr = [].concat(...matrix);
        return arr; 
    };
}
