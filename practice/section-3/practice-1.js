'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var arrayAlength = collectionA.length;
	var arrayB = objectB.value;
	var arrayBlength = arrayB.length;
	var result = [];
	for (let i=0; i<arrayAlength; i++)
		for(let j=0; j<arrayBlength; j++)
		{		
			if (collectionA[i].key === arrayB[j]){
				collectionA[i].count -= 1;
			}
		}
	console.log(collectionA);
	return collectionA;
}
