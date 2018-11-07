'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var arrayAlength = collectionA.length;
	var arrayB = objectB.value;
	var arrayBlength = arrayB.length;
	let charCount = 0;
	for(let j=0; j<arrayBlength; j++){
		for (let i=0; i<arrayAlength; i++)
		{		
			if (collectionA[i].key === arrayB[j]){
				collectionA[i].count -= Math.floor(collectionA[i].count/3)
			}
		}
	}
	console.log(collectionA);
	return collectionA;
}
