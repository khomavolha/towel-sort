

module.exports = function towelSort (matrix) {
    let arr=[];
    if(matrix === undefined || matrix.length === 0){ return []
        } else {
            for(let a=1; a<matrix.length; a=a+2){
            matrix[a] = matrix[a].reverse();
            }
arr = matrix.flat(Infinity);

        }
    return arr;
}
