function filterFunc(arr, startIndex=0, endIndex=0)
{

	if (endIndex===0) {
		arr.splice(startIndex,1);
	}
	else
	arr.splice(startIndex,endIndex-startIndex+1);
	while(arr[0]===0)
		arr.splice(0,1);
	while(arr[arr.length-1]===0)
		arr.pop();
	for(let i=0;i<arr.length;i++)
		if (arr[i]===0 && arr[i+1]==0)
		{
			arr.splice(i+1,1);
			i--;
		}
	return arr;
}
let a=[0,1,2,3,0,0,4,5,0];
filterFunc(a,1,3);