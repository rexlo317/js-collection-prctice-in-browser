'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var arrayAlength = collectionA.length;
	var arrayB = objectB.value;
	var arrayBlength = arrayB.length;
	let count = 0;
	for(let j=0; j<arrayBlength; j++)
		for (let i=0; i<arrayAlength; i++)
		{		
			if (collectionA[i].key === arrayB[j]){
				if (count === 0){
					collectionA[i].count -= 1;
					count++;
				}
				else{
					collectionA[i].count -= count;
					count++;
				}
			}
		}
	console.log(collectionA);
	return collectionA;
}
