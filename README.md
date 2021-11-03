# neolace website

Note: although this code may be publicly available, it is not open source as it contains some licensed content which we do not have permission to redistribute.

Directory structure:

* `archetypes` - templates used when creating new pages with `hugo new`
* `assets` - the files which need be processed by [Hugo Pipes](https://gohugo.io/hugo-pipes/), i.e. CSS source files, in this case Tailwind
* `content` - the actual content (text) of the site, in Markdown files
* `data` - configuration files that can be used by Hugo when generating the website, or [data templates](https://gohugo.io/templates/data-templates/) to pull in dynamic content
* `layouts` - HTML/template partials that determine the HTML structure of the site
* `static` - images and other files - copied as-is during the build process
* `resources` - cache used to speed up the build. Ignored by git.
* `public` - the output, the static site ready to be served.

To develop, run `hugo server --bind 0.0.0.0`
