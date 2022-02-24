/*复杂度
T = O(n^2)
S = O(1)
*/

/*
理论上：拿到数字将其插入原有的排序 
实践：需要设置一个key来代表当前要插入的数字，然后与前面的有序序列进行比对
*/

/*拓展：希尔排序
希尔增量：其选择十分重要
*/

/*算法流程
顺序遍历所有数字，不断形成左边的有序序列和右边的无序序列，进行插入流程
插入时的数字为key，每个key不断和前面的数字进行对比
*/
function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let key = arr[i];
        while(arr[i-1]>key && i>0){
            arr[i] = arr[i-1];
            i--;
        }
        arr[i] = key;
    }

    return arr
}

let arr = [3,4,7,6,2,1];
arr = insertionSort(arr);
console.log(arr)