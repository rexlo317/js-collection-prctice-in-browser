'use strict';

function collectSameElements(collectionA, collectionB) {
	var result = [];
	var k = 0;
	var arraylengthA = collectionA.length;
	var arraylengthB = collectionB.length;
	for (var i=0; i<arraylengthA; i++)
		for (var j=0; j<arraylengthB; j++)
			if (collectionA[i] == collectionB[j])
			{
				result[k] = collectionA[i]
				k++;
			}
	console.log(result);
	return result		
}
