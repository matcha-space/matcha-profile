import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "matcha",
	subtitle: "イナゴは人生。",
	lang: "ja",
	themeColor: {
		hue: 88,
		fixed: true,
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png",
		position: "center",
		credit: { enable: false, text: "", url: "" },
	},
	toc: {
		enable: true,
		depth: 3,
	},
	favicon: [{ src: "/favicon.svg" }],
};

export const navBarConfig: NavBarConfig = {
	links: [LinkPreset.Home, LinkPreset.Archive, LinkPreset.About],
};

export const profileConfig: ProfileConfig = {
  avatar: "/avatar.svg",
  name: "matcha",
  bio: "イナゴは人生\n専業投資家/VRChat",
  links: [
    {
      name: "X",
      icon: "fa6-brands:x-twitter",
      url: "https://x.com/あなたのユーザー名",
    },
  ],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "",
	url: "",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};
