'use strict';

function countSameElements(collection) {
	var objectArray = [];
	var objectCount = 0;
	var collectionCount = collection.length;
	var result;
	var check = false;
	objectArray[0] = {key:collection[0].charAt(0), count:1}; 
	for (let i=1; i<collectionCount; i++){
		for (let j=0; j<=objectCount; j++){
			if (objectArray[j].key === collection[i]){
				objectArray[j].count = objectArray[j].count + 1;
				check = true;
				break;
			}
			else 
				check = false;
		}
		if (!check){
			objectCount++;
			objectArray[objectCount] = {key:collection[i].charAt(0), count:1};
		}
	}
	return objectArray;
}

function createUpdatedCollection(collectionA, objectB) {
	var arrayA = countSameElements(collectionA);
	var arrayAlength = arrayA.length;
	var arrayB = objectB.value;
	var arrayBlength = arrayB.length;
	let charCount = 0;
	for(let j=0; j<arrayBlength; j++){
		for (let i=0; i<arrayAlength; i++)
		{		
			if (arrayA[i].key === arrayB[j]){
				arrayA[i].count -= Math.floor(arrayA[i].count/3)
			}
		}
	}
	console.log(arrayA);
	return arrayA;
}