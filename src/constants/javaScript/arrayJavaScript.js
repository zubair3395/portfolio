const arrayJavaScript = [
  {
    id: "0",
    title: "Array in JavaScript",
    description:
      "A array can store the multiple items in single data type. Array can be declare as let arr= []. The index of array of is start with 0.",
    show: "none",
    example: `let arr= [1,2,3,4,5]
               console.log(arr)
    `,
  },
  {
    id: "1",
    title: "Length of Array",
    description:
      "We can use the .length method to check the length of array.For example let arr= [1,2,3,4,5,6,7] console.log(arr.length) The length of this arry is 7.",
    show: "none",
    example: `let arr= [1,2,3,4,5,6,7]
    console.log(arr.length)`,
  },
  {
    id: "2",
    title: "push() Method",
    description:
      "push() Method is used add the new element at the end of array.For exapmle let arr=[1,2,3,4,5] arr.push(6) then array become arr=[1,2,3,4,5,6]",
    show: "none",
    example: `let arr= [1,2,3,4,5,6,7]
     arr.push(8)
     console.log(arr)`,
  },
  {
    id: "3",
    title: "pop()",
    description:
      "pop() method is used to remove the last element in array.For exapmle let arr=[1,2,3,4,5,6] arr.pop() then array become arr=[1,2,3,4,5]",
    show: "none",
    example: `let arr=[1,2,3,4,5,6]
    arr.pop()
    console.log(arr)`,
  },
  {
    id: "4",
    title: "reverse() method",
    description:
      "The reverse method is uded to reverse the array value such that let arr= [1,2,3,4,5,6] arr.reverse() then the output of this array is 6,5,4,3,2,1",
    show: "none",
    example: `let arr=[1,2,3,4,5,6]
    arr.reverse()
    console.log(arr)
    `,
  },
  {
    id: "5",
    title: "shift()",
    description:
      "The shift() method is used to remove the first element in array. For exapmle arr=[1,2,3,4,5] then arr.shift() the output of this array is 2,3,4,5 beacuse first element of this array is removed",
    show: "none",
    example: `let arr=[1,2,3,4,5]
    arr.shift()
    console.log(arr)`,
  },
  {
    id: "6",
    title: "unshift()",
    description:
      "The unshift() method is used to add the new element at the begining. For exapmle arr=[1,2,3,4,5] then arr.unshift(6) the output of this array is 6,1,2,3,4,5 beacuse 6 is add at the begining of this array.",
    show: "none",
    example: `let arr=[1,2,3,4,5]
    arr.unshift(6)
    console.log(arr)`,
  },
  {
    id: "7",
    title: "concat()",
    description:
      "The concat() method is used to merrege the two or more arrays together. arr1=[1,2,3] and arr2=[4,5,6] then const arr3 = arr1.concat(arr2) the arr3 become [1,2,3,4,5,6]",
    show: "none",
    example: `let arr1=[1,2,3]
       arr2=[4,5,6]
       arr3= arr1.concat(arr2)
       console.log(arr3)
    `,
  },
  {
    id: "8",
    title: "indexOf() method",
    description:
      "The indexOf() is used to find the index of array element such that let arr= [1,2,3,4,5,6,7,8] now we check the index of 4 such that arr.indexOf(4) then index of 4 is 3",
    show: "none",
    example: `let arr= [1,2,3,4,5,6,7,8]
      let index= arr.indexOf(4)
      console.log(index)
    `,
  },
  {
    id: "9",
    title: "splice() method",
    description:
      "Splice method is used to remove the specific eletment in array. The method contain two parameter first parameter is index and second parameter is how many element you want to delete.Second parameter is optional. such that arr=[1,2,3,4,5] arr.splice(2) the 3 is removed from arr beacuse the index of three is 2 and the arr become arr[1,2,4,5]",
    show: "none",
    example: `let arr= [1,2,3,4,5,6,7,8]
        arr.splice(2,1)
      console.log(arr)
    `,
  },
  {
    id: "10",
    title: "isAray() Method",
    description:
      "isArray() is used to check this is array or not. If this is array then it return the true otherwise return false. For example let str= HELLO World! then Array.isArray(str) is return false beacuse this is string if arr=[1,2,3,4,5] then Array.isArray(arr) it return true. ",
    show: "none",
    example: `let arr= [1,2,3,4,5,6,7,8]
      let result= Array.isArry(arr)
      console.log(result)
    `,
  },
];
export default arrayJavaScript;
