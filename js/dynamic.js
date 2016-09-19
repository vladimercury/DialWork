/* Dynamic Link API */

var DLAPI_DATA = {};

function dlapi_dynamic(link){
	if( link.startsWith('dynamic:') ){
		link = link.replace(/^dynamic:/, '');
		match = link.match(/<\w+>/g);
		if (match){
			match.forEach(function(item, i, arr){
				if (DLAPI_DATA
				[item]){
					link = link.replace(item, DLAPI_DATA
					[item]());
				}
				else{
					link = link.replace(item, '');
				}
			});
		}
	}
	return link;
}

DLAPI_DATA['<ifmo_group>'] = function(){
	return 'M3406';
}

DLAPI_DATA['<week_day>'] = function(){
	return new Date().format('N');
}

DLAPI_DATA['<week_num_ifmo>'] = function(){
	return (parseInt(new Date().format('W'))) % 2 + 1 ;
}