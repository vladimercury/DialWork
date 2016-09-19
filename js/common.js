function common_innerElement( elementData, newValue )
{
	document.getElementById( elementData['elementName'] ).innerHTML = elementData['contentLeft'] + newValue + elementData['contentRight'];
}