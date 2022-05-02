module.exports = {
	title: '前端面试(React)',
	description: 'You gotta win once in your life.',
	extend: '@vuepress/theme-default',
	plugins: ['@vuepress/back-to-top'],
	base: '/',
	head: [
		[
			'link',
			{
				rel: 'icon',
				href: `/favicon.ico`,
			},
			[
				'script',
				{
					src:
						'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js',
				},
			],
			[
				'script',
				{
					src:
						'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js',
				},
			],
			[
				'link',
				{
					rel: 'stylesheet',
					type: 'text/css',
					href:
						'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css',
				},
			],
		],
	],
	dest: './docs/.vuepress/dist',
	ga: '',
	evergreen: true,
	serviceWorker: true,
	themeConfig: {
		smoothScroll: true,
		docsRepo: 'https://github.com/jokereven/vuepress',
		docsDir: 'docs',
		docsBranch: 'master',
		activeHeaderLinks: true,
		editLinks: true,
		lastUpdated: '上次更新 ',
		editLinkText: '发现问题!及时纠正',
		nav: [
			{ text: '首页', link: '/' },
			{ text: '笔记文档', link: '/jokereven/' },
			{ text: '面试题', link: '/Interview/' },
			{ text: '源码', link: 'https://github.com/jokereven/vuepress/' },
			{
				text: 'jokereven',
				items: [
					{
						text: '个人博客',
						link: 'https://blog.code520.com.cn',
					},
					{
						text: 'CSDN',
						link: 'https://blog.csdn.net/ZHOU125disorder',
					},
					{
						text: 'github',
						link: 'https://github.com/jokereven',
					},
				],
			},
		],
		sidebarDepth: 2,
		sidebar: {
			'/jokereven/': [
				'',
				{
					title: '前端之路',
					collapsable: true,
					children: ['css', 'html'],
				},
			],
			xmind: [''],
		},
	},
	markdown: {
		lineNumbers: true,
	},
};
