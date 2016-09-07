

//线性表A，B。求AUB。
function AUB(arrA, arrB){
	for(var i = 0; i< arrB.length; i++){
		if(arrA.indexOf(arrB[i]) == -1){
			arrA.push(arrB[i]);
		}
	}
	return arrA;
}


//LA有序排列，LB也是有序排列，现在要把LA和LB合并，并且有序拍列到LC表。
// 如：LA = [1,2,3,4,5];
//  LB = [2,3,4,5,6]
// LC = [1,2,2,3,3,4,4,5,5,6]

function SortAandB(arrA, arrB){
	arrA.contact(arrB).sort();

}