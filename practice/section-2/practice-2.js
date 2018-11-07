'use strict';

function countSameElements(collection) {
	var objectArray = [];
	var objectCount = 0;
	var collectionCount = collection.length;
	var result;
	var check = false;
	objectArray[0] = {key:collection[0].charAt(0), count:1}; 
	for (let i=1; i<collectionCount; i++){
		if (!checkNumber(collection[i])){
			for (let j=0; j<=objectCount; j++){
				if (objectArray[j].key === collection[i].charAt(0)){
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
		else{
			for (let j=0; j<=objectCount; j++){
				if (objectArray[j].key === collection[i].charAt(0)){
					objectArray[j].count = objectArray[j].count + checkNumber(collection[i]);
					check = true;
					break;
				}
				else 
					check = false;
			}
			if (!check){
				objectCount++;
				objectArray[objectCount] = {key:collection[i].charAt(0), count:checkNumber(collection[i])};
			}
		}
	}
	console.log(objectArray);
	return objectArray;
}

function checkNumber(substring){
	var count = substring.length;
	var numbers = 0;
	var numberCount = 0;
	for (var i = 0; i < count; i++)
		if (substring.charCodeAt(i)>=48 && substring.charCodeAt(i)<=57){
			switch(substring.charCodeAt(i)){
				case 48:
					numberCount++;
					numbers = numbers * numberCount + 0;
					break;
				case 49:
					numberCount++;
					numbers = numbers * numberCount + 1;
					break;
				case 50:
					numberCount++;
					numbers = numbers * numberCount + 2;
					break;
				case 51:
					numberCount++;
					numbers = numbers * numberCount + 3;
					break;
				case 52:
					numberCount++;
					numbers = numbers * numberCount + 4;
					break;
				case 53:
					numberCount++;
					numbers = numbers * numberCount + 5;
					break;
				case 54:
					numberCount++;
					numbers = numbers * numberCount + 6;
					break;
				case 55:
					numberCount++;
					numbers = numbers * numberCount + 7;
					break;
				case 56:
					numberCount++;
					numbers = numbers * numberCount + 8;
					break;
				case 57:
					numberCount++;
					numbers = numbers * numberCount + 9;
					break;
			}
		}
	return numbers;
}