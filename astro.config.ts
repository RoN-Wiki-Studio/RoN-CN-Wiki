// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '严阵以待中国百科',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/RoN-Wiki-Studio/RoN-CN-Wiki' }],
			sidebar: [
				{
					label: '内容',
					autogenerate: {
						directory: 'wiki'
					}
				}
			],
			defaultLocale: 'zh-CN',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			customCss: [
				'./src/stylesheets/global.css',
				'./src/stylesheets/fonts.css'
			],
			components: {
				SiteTitle: './src/components/rewritten/SiteTitle.astro',
				Footer: './src/components/rewritten/Footer.astro',
			},
		}),
	],
});
