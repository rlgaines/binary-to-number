function binaryToNum(number){
	var numbers = number.toString();
	numbers = numbers.split('')
 	if(numbers.length < 8){
 		do{
 			numbers.unshift(0)
 		} while(numbers.length < 8)
 	} else if(numbers.length > 8){
 		
 	}
 	console.log(((numbers[0]*128)+(numbers[1]*64)+(numbers[2]*32)+(numbers[3]*16)+(numbers[4]*8)+(numbers[5]*4)+(numbers[6]*2)+(numbers[7]*1)))
}

binaryToNum(11111111)
binaryToNum(1010)