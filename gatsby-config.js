/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    plugins: [
        'gatsby-theme-material-ui',
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography',
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `GatsbyJS`,
                short_name: `GatsbyJS`,
                start_url: `/`,
                background_color: `#6b37bf`,
                theme_color: `#6b37bf`,
                display: `standalone`,
                icon: `./static/favicon.ico`, // This path is relative to the root of the site.
            },
        },
    ],
// Customize your site metadata:
    siteMetadata: {
        title: "Сокол",
        author: "Anton Bondarenko",
        description: "Cайт дельтапланерного клуба Сокол, Санкт-Петербург",
        siteUrl: "http://Hanggliding.spb.ru",
        social: [],
    },
}
