// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxt/image',
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    Vollkorn: [300, 400, 500, 600],
                },
                subsets: ['latin'],
                display: 'swap',
                prefetch: false,
                preconnect: false,
                preload: false,
                download: true,
                base64: false,
            },
        ],
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
});
