function mergeOrderedArrays(array1: number[], array2: number[]) : number[]{
    let res : number[] = [];
    let i: number = 0;    
    let j: number = 0;    
    while (i<array1.length || j<array2.length ){
        if(i<array1.length && array1[i] <= array2[j]){
            res.push(array1[i]);
            i = i+1;
        } else {
            res.push(array2[j]);
            j = j+1;
        }
    }

    return res

}

console.log('res', mergeOrderedArrays([1,3,5], [2,45,109]) )