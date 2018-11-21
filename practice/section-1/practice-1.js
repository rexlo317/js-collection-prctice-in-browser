'use strict';

function collectSameElements(collectionA, collectionB) {
	collectionA.myFilter = myFilter;
	return collectionA.myFilter((a) => collectionB.includes(a));
}

function myFilter(functionPara){
	let filteredCollection=[];
	for (let aCount=0; aCount<this.length; aCount++)
	{
		let pointer = 0;
		if (functionPara(this[aCount])){
			filteredCollection.push(this[aCount]);
		}
	}
	return filteredCollection;
}
/*
function collectSameElements(collectionA, collectionB) {
	return collectionA.filter((a) => collectionB.includes(a));
}
*/
