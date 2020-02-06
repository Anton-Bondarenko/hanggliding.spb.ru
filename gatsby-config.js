/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {

    plugins: [
        'gatsby-theme-material-ui',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            },
        },
    ],
// Customize your site metadata:
    siteMetadata: {
        title: "Сокол",
        author: "Anton Bondarenko",
        description: "Cайт дельтапланерного клуба Сокол, Санкт-Петербург",
        siteUrl: "http://localhost",
        social: [],
    },
}
