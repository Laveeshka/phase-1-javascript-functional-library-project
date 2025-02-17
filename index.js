//check if collection is an object
//convert to array if yes
function convertToArray(collection){
    return (typeof(collection) === "object") ? Object.values(collection) : collection;
}

//myEach
function myEach(collection, callback){
    const checkedCollection = convertToArray(collection);
    for (let i=0 ; i < checkedCollection.length; i++){
        callback(checkedCollection[i]);
    }
    return collection;
}

//myMap
function myMap(collection, callback){
    const checkedCollection = convertToArray(collection);
    let newArray = [];
    for (let i = 0; i < checkedCollection.length; i++){
        newArray.push(callback(checkedCollection[i]))
    }

    return newArray;
}

//myReduce
function myReduce(collection, callback, acc){
    let checkedCollection = convertToArray(collection);
    //if no starting value is passed
    if (!acc){
        acc = checkedCollection[0]; //assign the first element to the accumulator
        checkedCollection = checkedCollection.slice(1);
    }
    for (let i = 0; i < checkedCollection.length; i++){
        acc = callback(acc, checkedCollection[i], checkedCollection);
    }
    return acc;
}

//myFind
function myFind(collection, predicate){
    const checkedCollection = convertToArray(collection);
    for (let i = 0; i < checkedCollection.length; i++){
        if (predicate(checkedCollection[i])){
            return checkedCollection[i];
        }
    }
    return undefined;
}

//myFilter
function myFilter(collection, predicate){
    const checkedCollection = convertToArray(collection);
    let filteredArray = [];
    for (let i = 0; i < checkedCollection.length; i++){
        if (predicate(checkedCollection[i])){
            filteredArray.push(checkedCollection[i]);
        }
    }
    return filteredArray;
}

//mySize
function mySize(collection){
    const checkedCollection = convertToArray(collection);
    return checkedCollection.length;
}

////ARRAY FUNCTIONS///////

//myFirst
function myFirst(array, n){
    if (!n)
        return array[0];
    return array.slice(0, n);
}

//myLast
function myLast(array, n){
    if (!n)
        return array[array.length-1];
    return array.slice(array.length-n);
}

/////Object Functions///////

//myKeys
function myKeys(object){
    return Object.keys(object);
}

//myValues
function myValues(object){
    return Object.values(object);
}

////BONUS BABY BONUS////

function mySortBy(array, callback){
    let sortedArray = [...array]; //creates a copy of the array argument
    return sortedArray.sort((i, j) => //use the compare function to prevent the sort order based on the unicode  code point values
    {
        if (callback(i) > callback(j)){ //callback(j) will come first
            return 1;
        }
        else if (callback(i) < callback(j)){ //callback(i) will come first
            return -1;
        }
        else {
            return 0; //positions unchanged
        }
    }
    );
}

//myFlatten([1, [2], [3, [[4]]]], true);
//=> [1, 2, 3, [[4]]];
function myFlatten(array, shallow, newArray=[]){
    //start of shallow
    if (shallow){
        for (let i = 0; i < array.length; i++){
            if (Array.isArray(array[i]) === false){
                newArray.push(array[i])
            }
            else {
                for (let j = 0; j < array[i].length; j++){
                    newArray.push(array[i][j])
                }
            }
        }
    } //end of shallow
    else {
        for (let i = 0; i < array.length; i++){
            if (Array.isArray(array[i]) === false){
                newArray.push(array[i])
            }
            else {
                //recurse REEECURSE
                myFlatten(array[i], false, newArray)
            }
        }
    }

    return newArray
}