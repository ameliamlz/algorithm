/*复杂度
T = O(nlog(n))
S = log(n)
*/

/*算法流程(不稳定)
1、选择pivot
2、将大于pivot的数字放其右边
3、将小于picor的数字放其左边
4、对剩余部分反复进行此项操作
注意：遍历替换值的顺序
*/
function quickSort(arr, start, end){
    if(arr.length === 1) return 
    let pivot = arr[start];
    let l= start, r = end;
    if(start < end){
        while(l<r){
            // 从右向左找小于pivot的数值
            while(l<r && arr[r] >= pivot){
                r--;
            }
            if(l<r){
                arr[l] = arr[r];
                l++;
            }
            // 从左向右找大于pivot的数值
            while(l<r && arr[l] <= pivot){
                l++;
            }
            if(l<r){
                arr[r] = arr[l];
                r--;
            }
                
        }
        arr[l] = pivot;
        quickSort(arr, start, l-1);
        quickSort(arr, l+1, end);
    }  
}

let arr = [2,5,3,1,10,4];
quickSort(arr, 0, arr.length-1)
console.log(arr);