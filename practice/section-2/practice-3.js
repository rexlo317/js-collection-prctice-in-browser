'use strict';

function countSameElements(collection) {
	var objectArray = [];
	var objectCount = 0;
	var collectionCount = collection.length;
	var result;
	var check = false;
	objectArray[0] = {name:collection[0].charAt(0), summary:1}; 
	for (let i=1; i<collectionCount; i++){
		
		if (!checkNumber(collection[i])){
			for (let j=0; j<=objectCount; j++){
				if (objectArray[j].name === collection[i].charAt(0)){
					objectArray[j].summary = objectArray[j].summary + 1;
					check = true;
					break;
				}
				else 
					check = false;
			}
			if (!check){
				objectCount++;
				objectArray[objectCount] = {name:collection[i].charAt(0), summary:1};
			}
		}
		else{
			//console.log(checkNumber(collection[i]));
			for (let j=0; j<=objectCount; j++){
				if (objectArray[j].name === collection[i].charAt(0)){
					objectArray[j].summary = objectArray[j].summary + checkNumber(collection[i]);
					check = true;
					break;
				}
				else 
					check = false;
			}
			if (!check){
				objectCount++;
				objectArray[objectCount] = {name:collection[i].charAt(0), summary:checkNumber(collection[i])};
			}
		}
		if (collection[i] === 't' || collection[i] === 't-2' || collection[i] === 't[10]')
			console.log(objectArray[3]);
	}
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
					numbers = numbers * Math.pow(10, numberCount) + 0;
					//console.log(numbers);
					numberCount++;
					break;
				case 49:
					numbers = numbers * Math.pow(10, numberCount) + 1;
					numberCount++;
					break;
				case 50:
					numbers = numbers * Math.pow(10, numberCount) + 2;
					numberCount++;
					break;
				case 51:
					numbers = numbers * Math.pow(10, numberCount) + 3;
					numberCount++;
					break;
				case 52:
					numbers = numbers * Math.pow(10, numberCount) + 4;
					numberCount++;
					break;
				case 53:
					numbers = numbers * Math.pow(10, numberCount) + 5;
					numberCount++;
					break;
				case 54:
					numbers = numbers * Math.pow(10, numberCount) + 6;
					numberCount++;
					break;
				case 55:
					numbers = numbers * Math.pow(10, numberCount) + 7;
					numberCount++;
					break;
				case 56:
					numbers = numbers * Math.pow(10, numberCount) + 8;
					numberCount++;
					break;
				case 57:
					numbers = numbers * Math.pow(10, numberCount) + 9;
					numberCount++;
					break;
			}
		}
	return numbers;
}