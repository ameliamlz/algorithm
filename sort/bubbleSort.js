/*复杂度
T = O(n^2)
S = O(1)
*/
/*两值交换问题
法一：注意ES6语法中的两值交换问题
法二：a = [b, b=a][0] 
*/

/*算法流程：
下标i代表一个排序范围逐渐减小的过程，
下标j则代表每次循环遍历的范围，一次循环两两相邻比较筛选出当前遍历值中的最大值或最小值
*/
function bubbleSort(arr){
  for(let i = arr.length; i>=0; i--){
    for(let j = 0; j<i-1; j++){
      if(arr[j]>arr[j+1]){
        [arr[j], arr[j+1]]= [arr[j+1], arr[j]];
      }
    }
  }
  return arr
}
let arr = [3,4,7,6,2,1];
arr = bubbleSort(arr);

console.log(arr)