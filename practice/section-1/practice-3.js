'use strict';

function collectSameElements(collectionA, objectB) {
	var result = [];
	var k = 0;
	var arraylengthA = collectionA.length;
	var arrayB = objectB.value;
	var arraylengthB = arrayB.length;
	for (var i=0; i<arraylengthA; i++)
		for (var j=0; j<arraylengthB; j++)
			if (collectionA[i] == arrayB[j])
			{
				result[k] = collectionA[i]
				k++;
			}
	console.log(result);
	return result;
}
