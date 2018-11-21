'use strict';

function collectSameElements(collectionA, collectionB) {
	return collectionA.filter( a => collectionB.value.includes(a.key)).map( aWithKey => aWithKey.key);
}
