// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

const copyright =
  "<a href='https://thehangedmanpub.netlify.app'>The Hanged Man</a>";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Arlathan eXchange",
  tagline:
    "A Dragon Age fan exchange focused on a celebration of Elvhen characters.",
  url: "https://arlathanxchange.neocities.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/icon.png",
  titleDelimiter: "|",
  plugins: [require.resolve("docusaurus-plugin-image-zoom")],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          blogTitle: "Announcements",
          blogDescription:
            "See the latest announcements about Arlathan eXchange. Get exchange news and mod updates.",
          showReadingTime: true,
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Arlathan eXchange`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Arlathan eXchange",
        logo: {
          alt: "DA:I Dialogue Wheel Elf Logo",
          src: "img/icon.png",
        },
        items: [
          {
            type: "dropdown",
            label: "Info",
            position: "left",
            className: "info",
            items: [
              {
                type: "doc",
                label: "Rules & Information",
                docId: "intro",
              },
              {
                type: "doc",
                label: "FAQs",
                docId: "faqs",
              },
              {
                label: "2023 Tag Set",
                href: "https://archiveofourown.org/tag_sets/14455",
              },
              {
                label: "2023 Nominations Sheet",
                href: "https://docs.google.com/spreadsheets/d/1ruHKiXgFvfz54Q5m1K7wIMvVpbfI5k-_dk5mvxr9Sv8/edit?usp=sharing",
              },
              {
                label: "2023 AutoAO3: Requests",
                href: "https://autoao3app.fandom.tools/#/arlathanxchange2023/all",
              },
              {
                label: "Request an Extension",
                href: "/extension",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Tutorials",
            position: "left",
            className: "tutorial",
            items: [
              {
                type: "doc",
                label: "How to Nominate",
                docId: "tutorials/nominate",
              },
              {
                type: "doc",
                label: "How to Sign-Up",
                docId: "tutorials/signups",
              },
              {
                type: "doc",
                label: "On Exchange Letters",
                docId: "tutorials/letters",
              },
              {
                type: "doc",
                label: "How to Filter the AutoAO3 App",
                docId: "tutorials/autoao3",
              },
              {
                type: "doc",
                label: "How to Fulfill Your Assignment",
                docId: "tutorials/fulfill",
              },
              {
                type: "doc",
                label: "Keeping It Anon",
                docId: "tutorials/anon",
              },
            ],
          },
          {
            href: "https://archiveofourown.org/collections/arlathanxchange2023/profile",
            position: "left",
            label: "AO3",
            className: "ao3",
          },
          {
            href: "https://arlathanxchange.tumblr.com",
            position: "left",
            label: "Tumblr",
            className: "tumblr",
          },
          {
            href: "https://twitter.com/ArlathanXchange",
            position: "left",
            label: "Twitter",
            className: "twitter",
          },
          {
            href: "https://discord.gg/F73NDYMeGC",
            position: "left",
            label: "Discord",
            className: "discord",
          },
        ],
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} ${copyright}`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
      metadata: [
        { name: "theme-color", content: "#2F3136" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:creator", content: "ArlathanXchange" },
        { name: "og:image", content: "/img/icon.png" },
      ],
      zoom: {
        selector: ".markdown img",
        background: {
          light: "rgb(255, 255, 255, 0.75)",
          dark: "rgba(0, 0, 0, 0.75)",
        },
      },
    }),
};

module.exports = config;
