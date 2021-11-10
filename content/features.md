---
title: Features of neolace
description: Features of neolace
type: Page
toc: false
---

Neolace is a collaborative platform for sharing technical knowledge, with a focus on sharing knowledge across organizational boundaries - such as among members of a consortium. By making it easier to discover the latest knowledge on a given topic, Neolace can accelerate discovery and avoid redundant work. Each Neolace site has the familiar interface of a wiki (with articles, images, technical drawings, etc.) but provides more powerful tools for the collaborative creation, organization and approval of technical content. Content can be restricted to selected groups or open to the public, and contributions can be required to receive approval from an editor before being accepted.

{{< feature title="Familiar reading experience" img="/features-plantdb.png" >}}
  <p>Every entry in a neolace knowledge base can have an article, with text, images, properties, and links. You can read it as easily as reading an article on Wikipedia. But unlike Wikipedia, neolace entries are easy for machines to read too.</p>
{{< /feature >}}

{{< feature title="Relationships and properties" img="/features-properties.png" >}}
  <p>Every entry in a neolace knowledge base has relationships to other entries. Reverse relationships are automatically shown - for example, if you say that "ponderosa pine" is a type of "pine tree", then when you view the "pine tree" entry, you'll see that it automatically lists "ponderosa pine" as one of the types of pines.</p>

  <p>Entries also have properties, specifying key facts about them in an organized way, according to a schema or taxonomy.</p>
{{< /feature >}}

## Lookup expressions

<p>When you're writing text in a Neolace article, or setting a property value, you can use lookup expressions, much like you can use formulas in an Excel spreadsheet. So rather than writing "Apple sells 4 different models of notebook", you can instead write a lookup expression: "Apple sells {=entry("apple-corp").prop("products").filter(is_a=entry("notebook-computer")).count()} different models of notebook". Now the article will always be up to date, automatically showing the correct number based on the latest data in the knowledge base.</p>

## Markdown based

The descriptions and article text of a neolace entry are written with a simple formatting language called Markdown. Markdown is used on many sites and is a simple and well-loved way to format text. If you love Markdown, you'll love neolace.

## Graph property flow

If you put in your knowledge base that a "Tesla Model S" is a type of "car", and on the "car" entry you put that a car "has four wheels", then when you view the "Tesla Model S" entry, the page will display that the Tesla Model S has four wheels. This is because neolace understands how entries are related to each other and relevant properties "flow through the graph", meaning that you can get more useful and accurate information out of neolace while putting less information in.

Other platforms generally don't do this, instead giving you just the relationship data and leaving you to compute the implications yourself. We don't like that approach because it makes more work for the user and can mean that different users get different results.

## Change requests

*(In Development)* When you go to make an edit to an entry in a neolace knowledge base, your changes aren't necessarily saved right away. Usually the edits become a "draft" first, which everyone can see and comment on. An editor will quickly review and make sure the changes make sense before accepting them.

If you're familiar with GitHub, this is similar to a "Pull Request", and is a key technique for making open source collaboration possible. We're just applying it to knowledge rather than code.
