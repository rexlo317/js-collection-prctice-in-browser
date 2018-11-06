'use strict';

function collectSameElements(collectionA, collectionB) {
	var result = [];
	var k = 0;
	var arraylengthA = collectionA.length;
	var subarrayB = collectionB[0];
	var subarraylengthB = subarrayB.length;
	for (var i=0; i<arraylengthA; i++)
		for (var j=0; j<subarraylengthB; j++)
			if (collectionA[i] == subarrayB[j])
			{
				result[k] = collectionA[i]
				k++;
			}
	console.log(result);
	return result		
}
