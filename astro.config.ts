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
					label: '入门须知',
					autogenerate: {
						directory: 'get-started'
					}
				},
				{
					label: '规则、操作与模式指南',
					autogenerate: {
						directory: 'rules-n-modes'
					}
				},
				{
					label: '版权信息与声明',
					slug: 'copyright-n-statement'
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
