module.exports = {
    siteMetadata: {
        siteUrl: "https://carsonsaunders.dev",
        title: "Carson Saunders Dev",
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
    ],
};
