module.exports = {
  title: "Sharedo",
  tagline: "Share Popup for Laravel Apps",
  url: "https://github.com/GeekyAnts/laravel-inertia-share-dialog",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "geekyants", // Usually your GitHub org/user name.
  projectName: "Sharedo", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    sidebarCollapsible: false,
    navbar: {
      logo: {
        alt: "Formst Logo",
        src: "/img/sharedo-logo.svg",
        srcDark: "/img/sharedo-logo-dark.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        {
          href: "https://github.com/GeekyAnts/laravel-inertia-share-dialog",
          label: "GitHub",
          target: "_blank",
          position: "right",
        },
        {
          href:
            "https://geekyants.com/hire?utm_source=Landing_Page&utm_medium=Hire_Us&utm_campaign=Formst",
          label: "Hire Us",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            },
            {
              label: "Customizations",
              to: "docs/basic",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/geekyants",
            },
            {
              label: "StackOverflow",
              href: "https://geekyants.com/",
            },
            {
              label: "Discord",
              href: "https://geekyants.com/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/GeekyAnts/laravel-inertia-share-dialog",
            },
            {
              label: "Contribution Guidelines",
              href:
                "https://github.com/GeekyAnts/laravel-inertia-share-dialog/blob/master/CONTRIBUTING.md",
            },
          ],
        },
        {
          title: " ",
          items: [
            {
              label: "Built with ❤️ at GeekyAnts ",
              href:
                "https://geekyants.com/?utm_source=Landing_Page&utm_medium=Built_with_love&utm_campaign=Formst",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sharedo`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/formstjs/formst-docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
