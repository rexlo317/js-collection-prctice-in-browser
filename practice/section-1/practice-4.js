'use strict';

function collectSameElements(collectionA, objectB) {
	var result = [];
	var k = 0;
	var arraylengthA = collectionA.length;
	var arrayB = objectB.value;
	var arraylengthB = arrayB.length;
	for (var i=0; i<arraylengthA; i++){
		for (var j=0; j<arraylengthB; j++)
			if (Object.values(collectionA[i]) == arrayB[j])
			{
				result[k] = Object.values(collectionA[i])[0];
				k++;
			}
	}
	console.log(result);
	return result;
}
