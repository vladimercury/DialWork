searchdata_full = {
	Google_Search: 		'https://www.google.ru/search?sugexp=chrome,mod=0&sourceid=chrome&ie=UTF-8&q=',
	Google_Images: 		'https://www.google.ru/search?newwindow=1&source=lnms&tbm=isch&q=',
	Google_Video: 		'https://www.google.ru/search?newwindow=1&tbm=vid&q=',
	Google_Maps: 		'https://maps.google.ru/maps?newwindow=1&q=',
	Google_Translate: 	'https://translate.google.ru/#auto/ru/',
	Wikipedia: 			'https://ru.wikipedia.org/w/index.php?search=',
}

searchdata_currentResource = '';

function search_searchInit()
{
	for( resName in searchdata_full )
	{
		search_setSearchResource( resName );
		break;
	}

	contentString = '';
	for( resName in searchdata_full )
	{
		contentString = contentString + '<li><a href="javascript:search_setSearchResource(\'' + resName + '\')" tabindex="-1">' + resName.replace( '_', ' ' ) + '</a></li>';
	}
	document.getElementById('searchResourceList').innerHTML = contentString;
}

function search_search()
{
	search_stdSearchQuery( searchdata_currentResource );
}

function search_setSearchResource( resourceName )
{
	searchdata_currentResource = resourceName;
	navbar_SetSearchResource( resourceName.replace( '_', ' ' ) );
}

function search_stdSearchQuery( searchResource )
{
	queryString = searchdata_full[ searchResource ];
	tokens = document.getElementById('searchQuery').value.split(' ');
	for( i in tokens ){
		queryString = queryString + encodeURIComponent(tokens[i]) + '+';
	}
	window.open( queryString );
}

function search_searchInputKeyCheck( keyInfo )
{
	if( keyInfo.keyCode == 13 )
	{
		if( document.getElementById('searchQuery').value == '' || document.getElementById('searchQuery').value == null ) return;
		search_search();
		document.getElementById('searchQuery').value = '';
	}
}