export  function reverseArray(array: any) {
    return array.map((item: any, idx: any) => array[array.length - 1 - idx])
}