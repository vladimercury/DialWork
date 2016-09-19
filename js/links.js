linkdata_Links = {
	mainmenu: {
		title: 'Root', links: [
			{ img: 'worksw.png', href: 'https://www.soft-werke.com/', title: 'Softwerke site', ismenu: false },
			{ img: 'workswdev.png', href: 'http://www.swdev.isvsof.bget.ru/', title: 'SWDEV', ismenu: false },
			{ img: 'workpost.png', href: 'https://mainserver.soft-werke.com/owa/', title: 'Softwerke Mail', ismenu: false },
			{ img: 'svnedge.png', href: 'https://svnedge.softwerke.local:8888/svn/site_softwerke', title: 'SVN Site Softwerke', ismenu: false },
			{ img: 'progcodecamp.png', href: 'https://www.freecodecamp.com/', title: 'FreeCodeCamp', ismenu: false },
			{ img: 'prog.png', href: 'javascript:links_stackUp(\'progmenu\')', title: 'Programming', ismenu: true },
			{ img: 'itmo.png', href: 'javascript:links_stackUp(\'itmomenu\')', title: 'ITMO University', ismenu: true },
			{ img: 'google.png', href: 'javascript:links_stackUp(\'googlemenu\')', title: 'Google', ismenu: true },
			{ img: 'mailru.png', href: 'https://e.mail.ru/messages/inbox/', title: 'Mail.ru', ismenu: false },
		]
	},

	googlemenu:
	{
		title: 'Google web search engine', links: [
			{ img: 'googlemail.png', href: 'https://mail.google.com/', title: 'Google Mail', ismenu: false },
			{ img: 'googledrive.png', href: 'https://drive.google.com/', title: 'Google Drive', ismenu: false },
			{ img: 'googletranslate.png', href: 'https://translate.google.ru/', title: 'Google Translate', ismenu: false },
			{ img: 'gmaps.png', href: 'https://www.google.ru/maps/@59.9642403,30.3063017,10.5z', title: 'Google Maps', ismenu: false},
		]
	},

	itmomenu: {
		title: 'ITMO University', links: [
			{ img: 'itmolessons.png', href: 'dynamic:http://www.ifmo.ru/ru/schedule/0/<ifmo_group>/<week_num_ifmo>/raspisanie_zanyatiy_M3406.htm#<week_day>day', title: 'Class schedule', ismenu: false },
			{ img: 'itmosession.png', href: 'dynamic:http://www.ifmo.ru/ru/exam/0/<ifmo_group>/raspisanie_sessii.htm', title: 'Session schedule', ismenu: false },
			{ img: 'itmodlc.png', href: 'http://de.ifmo.ru/', title: 'Distance learning center', ismenu: false },
			{ img: 'itmoisu.png', href: 'https://isu.ifmo.ru/pls/apex/f?p=2005:1:', title: 'ISU ITMO', ismenu: false },
		]
	},
	
	progcppmenu:
	{
		title: 'C/C++ Programming language', links:[
			{ img: 'progcppref.png', href: 'http://www.cplusplus.com/reference/', title: 'C++ reference', ismenu: false },
			{ img: 'proggnumake.png', href: 'http://www.opennet.ru/docs/RUS/gnumake/', title: 'GNU Make', ismenu: false },
		]
	},

	proghtmlmenu:
	{
		title: 'HTML & CSS', links: [
			{ img: 'proghtmlbook.png', href: 'http://htmlbook.ru/', title: 'HTMLBook', ismenu: false },
			{ img: 'progbootstrap.png', href: 'http://mybootstrap.ru/', title: 'MyBootstrap', ismenu: false },
			{ img: 'emmety.png', href: 'http://docs.emmet.io/cheat-sheet/', title: 'Emmet Cheat Sheet', ismenu: false },
		]
	},

	progmenu: 
	{
		title: 'Programming sites', links: [
			{ img: 'progcpp.png', href: 'javascript:links_stackUp(\'progcppmenu\')', title: 'C/C++', ismenu: true },
			{ img: 'progpython.png', href: 'javascript:links_stackUp(\'progpymenu\')', title: 'Python', ismenu: true },
			{ img: 'proghtmlcss.png', href: 'javascript:links_stackUp(\'proghtmlmenu\')', title: 'HTML & CSS', ismenu: true },
			{ img: 'progjs.png', href:'javascript:links_stackUp(\'progjsmenu\')', title: 'JavaScript', ismenu: true },
			{ img: 'progmatlab.png', href: 'http://www.chemometrics.ru/materials/textbooks/matlab.htm', title: 'Matlab Guide', ismenu: false },
			{ img: 'progvimbook.png', href: 'https://ru.wikibooks.org/wiki/Vim', title: 'Vim wikibook', ismenu: false },		
			{ img: 'proggithub.png', href: 'https://github.com/', title: 'GitHub', ismenu: false },
			{ img: 'proggit.png', href: 'http://git-scm.com/book/ru/v1/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5', title: 'Git reference', ismenu: false },
		]
	},

	progjsmenu:
	{
		title: 'Javascript references', links:[
			{ img: 'progjslearn.png', href: 'https://learn.javascript.ru/pre-coding', title: 'Learn Javascript', ismenu: false },
		]
	},

	progpymenu:
	{
		title: 'Python references', links: [
			{ img: 'py26.png', href: 'https://ru.wikibooks.org/wiki/Python/%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D0%B8%D0%BA_Python_2.6', title: 'Python 2.6', ismenu: false },
			{ img: 'py31.png', href: 'https://ru.wikibooks.org/wiki/Python/%D0%A3%D1%87%D0%B5%D0%B1%D0%BD%D0%B8%D0%BA_Python_3.1', title: 'Python 3.1', ismenu: false },
		]
	},
};

menuStack = new Array(['mainmenu']);

function links_stackBack( index )
{
	while( menuStack.length > index + 1 ) menuStack.pop();
	showLinks( menuStack[index] );
}

function links_stackUp( menu )
{
	menuStack.push( menu );
	showLinks( menu );
}

function showLinks( menu )
{
	breadcrumbString = '<ul class="breadcrumb">';
	for( elem in menuStack )
	{
		if( elem != menuStack.length - 1 )
			breadcrumbString = breadcrumbString + '<li><a href="javascript:links_stackBack(' + elem + ')">' + linkdata_Links[ menuStack[elem] ][ 'title' ] + '</a><span class="divider"><i class="icon-chevron-right"></i></span></li>';
		else
			breadcrumbString = breadcrumbString + '<li class="active">' + linkdata_Links[ menuStack[elem] ][ 'title' ] + '</li>';
	}
	breadcrumbString = breadcrumbString + '</ul>';

	linksString = '<ul class="thumbnails">';
	for( elem in linkdata_Links[menu]['links'] )
	{
		obj = linkdata_Links[menu]['links'][elem];
		if( ! obj['ismenu'] ) linkTitleSign = '<i class="icon-share-alt"></i>';
		else linkTitleSign = '<i class="icon-th"></i>';
		linksString = linksString + '<li class="span3"><a class="thumbnail" href="' + dlapi_dynamic(obj['href']) + '" target="_blank"><br><img class="linkImage" src="img/thumb/' + obj['img'] + '">' + linkTitleSign + ' ' + obj['title'] +'</a></li>';
	}
	linksString = linksString + '</ul>';

	document.getElementById('mainContent').innerHTML = breadcrumbString + linksString;
}