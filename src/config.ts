import type {
	AnnouncementConfig,
	CommentConfig,
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";
import { getTranslateLanguageFromConfig } from "./utils/language-utils";

// Define site language
const SITE_LANG = "zh_CN"; // Language code, e.g., 'en', 'zh_CN', 'ja', etc.

export const siteConfig: SiteConfig = {
	title: "yushunqwq's blog",
	subtitle: "随便写点什么",

	lang: SITE_LANG,

	themeColor: {
		hue: 250, // Default hue for theme color, range from 0 to 360. e.g., red: 0, cyan: 200, teal: 250, pink: 345
		fixed: false, // Hide theme color picker for visitors
	},
	translate: {
		enable: true, // Enable translation feature
		service: "client.edge", // Use Edge browser translation service
		defaultLanguage: getTranslateLanguageFromConfig(SITE_LANG), // Automatically set default translation language based on site language
		showSelectTag: false, // Don't show default language selection dropdown, use custom button
		autoDiscriminate: true, // Automatically detect user language
		ignoreClasses: ["ignore", "banner-title", "banner-subtitle"], // CSS class names to ignore for translation
		ignoreTags: ["script", "style", "code", "pre"], // HTML tags to ignore for translation
	},
	banner: {
		enable: true, // Temporarily disable banner to improve loading speed

		// Support single image or image array, carousel is automatically enabled when array length > 1
		src: {
			desktop: [
				"https://images.760721.xyz/2025081819.webp",
			//	"assets/desktop-banner/1.webp",
			//	"assets/desktop-banner/2.webp",
			//	"assets/desktop-banner/3.webp",
			//	"assets/desktop-banner/4.webp",
			//	"assets/desktop-banner/5.webp",
			//	"assets/desktop-banner/6.webp",
			//	"assets/desktop-banner/7.webp",
			], // Desktop banner images
			mobile: [
				"assets/mobile-banner/1.webp",
				"assets/mobile-banner/2.webp",
				"assets/mobile-banner/3.webp",
				"assets/mobile-banner/4.webp",
				"assets/mobile-banner/5.webp",
				"assets/mobile-banner/6.webp",
				"assets/mobile-banner/7.webp",
			], // Mobile banner images
		}, // Use local banner images

		position: "top", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. Default is 'center'

		carousel: {
			enable: true, // When true: enable carousel for multiple images. When false: randomly display one image from the array

			interval: 10, // Carousel interval time (seconds)
		},

		homeText: {
			enable: true, // Display custom text on homepage
			title: "yushunqwq's blog", // Homepage banner main title

			subtitle: [
				
			], // Homepage banner subtitle, supports multiple texts
			typewriter: {
				enable: false, // Enable subtitle typewriter effect

				speed: 100, // Typing speed (milliseconds)
				deleteSpeed: 50, // Delete speed (milliseconds)
				pauseTime: 2000, // Pause time after complete display (milliseconds)
			},
		},

		credit: {
			enable: false, // Display banner image source text

			text: "Describe", // Source text to display
			url: "", // (Optional) URL link to original artwork or artist page
		},
	},
	toc: {
		enable: true, // Enable table of contents feature
		depth: 3, // TOC depth, 1-6, 1 means only show h1 headings, 2 means show h1 and h2 headings, and so on
	},
	favicon: [
		// Leave empty to use default favicon
		 {
		    src: '/favicon.ico',    // Icon file path
		//   theme: 'light',              // Optional, specify theme 'light' | 'dark'
		//   sizes: '32x32',              // Optional, icon size
		 }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		LinkPreset.Friends,
		LinkPreset.Anime,
		LinkPreset.Diary,
		{
			name: "GitHub",
			url: "https://github.com/yushunqwq", // Internal links should not include base path as it will be automatically added

			external: true, // Show external link icon and open in new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "./IMG_202505211789_512x512.jpg", // Relative to /src directory. If starts with '/', relative to /public directory
	name: "yushunqwq",
	bio: "随便写点什么",
	links: [
		{
			name: "Bilibli",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/545653981",
		},
		{
			name: "Gitee",
			icon: "mdi:git",
			url: "https://gitee.com/yushunqwq",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/yushunqwq",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (like background color) have been overridden, see astro.config.mjs file.
	// Please choose a dark theme as this blog theme currently only supports dark backgrounds
	theme: "github-dark",
};

export const commentConfig: CommentConfig = {
	enable: false, // Enable the comment function. When it is set to false, the comment component will not be displayed in the article area.
	twikoo: {
		envId: "https://twikoo.vercel.app",
	},
};

export const announcementConfig: AnnouncementConfig = {
	enable: true, // Enable announcement feature
	title: "公告", // Announcement title
	content: "欢迎来到我的博客", // Announcement content
	closable: true, // Allow users to close the announcement
	link: {
		enable: true, // Show link button
		text: "了解更多", // Link text
		url: "/about/", // Link URL
		external: true, // Internal link
	},
};
