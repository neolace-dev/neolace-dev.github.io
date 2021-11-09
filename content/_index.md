---
title: neolace
type: Page
---

**The story so far...**

When we set out to build [a clean tech knowledge base](https://www.technotes.org) that everyone can use and contribute to, we couldn't find an existing platform to build it with.

We wanted a platform that makes organizing and updating huge amounts of interlinked data as efficient as possible, that's easily readable by both machines and humans, that's designed for collaboration, and which looks nice and is easy to use. Something like this:

![Image of a neolace knowledge base showing an entry on the Tesla Model 3](/ev-mockup-xl.png)

## Why not a wiki?

An obvious choice for a knowledge base platform is a wiki. However:

* As [GitLab says](https://about.gitlab.com/handbook/handbook-usage/#wiki-handbooks-dont-scale), wikis don't scale very well: "wikis tend to **go stale** over time, where they are **badly organized** and get **out of date**... In wikis it is impossible to make proposals that touch multiple parts of a page and/or multiple pages... Wikis also do not encourage collaboration on changes, because there is no way to discuss a proposed change like there is with merge requests."
* Popular wiki software is not great:
  * MediaWiki's UI is mediocre and its data format (wikitext) is [notoriously hard for machines to parse](https://github.com/spencermountain/wtf_wikipedia/blob/master/README.md). Or as Wikimedia [puts it](https://meta.wikimedia.org/wiki/Wikimedia_Enterprise): "There is a very high barrier to entry for using Wikimedia data, outside of the common use cases of reading or editing. This is because the content is hard for machines to segment and understand."
  * Confluence [had a net promoter score](https://nira.com/confluence-history/) of -38; "A Net Promoter Score between 0 and -100 indicates that customers are having bad experiences with the product. People are having such negative experiences, that they are likely actively telling other people to avoid the product."

## What about a git repository?

* Putting Markdown files into a GitHub repository can create nice handbooks like [GitLab's](https://about.gitlab.com/handbook/) or [OpenCraft's](https://handbook.opencraft.com/en/latest/), but is difficult for non-technical users to contribute to, and provides a very rudimentary editing experience, without features like auto-completion when linking to another article.

## neolace

When we couldn't find a platform that would work for our project, we decided to build it ourselves. The result is neolace.

neolace is a new tool for creating a structured knowledge base collaboratively, either within an organization, among several organizations, or open to the world.

We're inspired by the best parts of wikis like MediaWiki and Confluence, version control systems like git/GitHub/GitLab, no code database tools like Excel and Airtable, and graph databases like Neo4j.

<center>
<br>
<a href="/features/"><strong>See what neolace can do &gt;</strong></a>
<br><br>
</center>
