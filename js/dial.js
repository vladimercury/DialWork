currentTab = '';
contentVisible = true;

function dialInit()
{
	search_searchInit();
	dialSetLinksTab();
	backgroundInit();
}

function dialSetLinksTab()
{
	if( currentTab != 'links' )
	{
		links_stackBack( 0 );
		currentTab = 'links';
	}
}

function dialSetPeopleTab()
{
	//navbar_SetTab('peopleNavbarTab');
}

function dialToggleContent(){
	contentVisible = !contentVisible;
	if (contentVisible){
		document.getElementById('mainContent').style.visibility = 'visible';
		document.getElementById('contentToggle').innerHTML = '<i class="icon-chevron-up icon-white"></i>';
	}
	else{
		document.getElementById('mainContent').style.visibility = 'hidden';
		document.getElementById('contentToggle').innerHTML = '<i class="icon-chevron-down icon-white"></i>';
	}
}