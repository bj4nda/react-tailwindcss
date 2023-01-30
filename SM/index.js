let arr1 = [1, 2, [5, 2]]
let arr2 = [1, 2, [5, 2]]

let obj1 = {a: 1, b: 2, c: 3, d: [1, 2]}
let obj2 = {a: 1, b: 2, c: 3, d: [1, 2]}

function objAreEqual(obj1, obj2) {
  let isEqual = true

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false
  }
  for (let key in obj1) {
    let obj1Value = obj1[key]
    let obj2Value = obj2[key]
    if (Array.isArray(obj1Value) && Array.isArray(obj2Value)) {
      isEqual = arraysAreEqual(obj1Value, obj2Value)
    } else if (typeof obj1Value === "object" && typeof obj2Value === "object") {
      isEqual = objAreEqual(obj1Value, obj2Value)
    } else {
      isEqual = obj1Value === obj2Value
    }
    if (!isEqual) {
      break
    }
  }
  return isEqual
}

console.log(objAreEqual(obj1, obj2))

function arraysAreEqual(arr1, arr2) {
  let isEqual = true

  if (arr1.length !== arr2.length) {
    return false
  }
  for (let [index, x] of arr1.entries()) {
    if (Array.isArray(x) && Array.isArray(arr2[index])) {
      isEqual = arraysAreEqual(x, arr2[index])
    } else {
      isEqual = x = arr2[index]
    }
    if (!isEqual) {
      break
    }
  }
  return isEqual
}

/* console.log(arraysAreEqual(arr1, arr2));
 */
