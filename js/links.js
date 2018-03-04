var dialLinks = {
    google: {
        name: "Google",
        links: [
            {
                name: "Google maps",
                pic: "gmaps.png",
                href: "https://www.google.ru/maps/"
            },
            {
                name: "Google drive",
                pic: "googledrive.png",
                href: "https://drive.google.com/drive/"
            },
            {
                name: "Google translate",
                pic: "googletranslate.png",
                href: "https://translate.google.com/"
            },
            {
                name: "Google mail",
                pic: "googlemail.png",
                href: "https://mail.google.com/mail/"
            }
        ],
        parent: "root"
    },
    itmo: {
        name: "ITMO University",
        links: [
            {
                name: "Distance learning center",
                pic: "itmodlc.png",
                href: "https://de.ifmo.ru/?node=signin"
            },
            {
                name: "ISU ITMO",
                pic: "itmoisu.png",
                href: "https://isu.ifmo.ru/"
            }
        ],
        parent: "root"
    },
	root: {
        name: "Root",
        links: [
			{
				name: "VK",
				pic: "",
				ref: "vk"
			},
			{
				name: "Youtube subscriptions",
				pic: "",
				href: "https://www.youtube.com/feed/subscriptions"
			},
            {
                name: "Mail.ru mail",
                pic: "mailru.png",
                href: "https://e.mail.ru/messages/inbox/"
            },
            {
                name: "Google",
                pic: "google.png",
                ref: "google"
            },
            {
                name: "ITMO University",
                pic: "itmo.png",
                ref: "itmo"
            },
            {
                name: "GitHub",
                pic: "github.png",
                href: "https://github.com/"
            }
		],
        parent: null
    },
	vk: {
		name: "VK menu",
		links: [

		],
		parent: "root"
	}
};