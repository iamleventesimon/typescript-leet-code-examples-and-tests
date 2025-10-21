export function mergeOrderedArrays(array1: number[], array2: number[]) : number[] {
    let res = new Set<number>();
    let i: number = 0;    
    let j: number = 0;    
    while (i < array1.length || j < array2.length) {
        if (i < array1.length && (j >= array2.length || array1[i] <= array2[j])) {
            res.add(array1[i]);
            i = i + 1;
        } else if (j < array2.length) {
            res.add(array2[j]);
            j = j + 1;
        } else {
            break;
        }
    }

    return Array.from(res.values());
}

