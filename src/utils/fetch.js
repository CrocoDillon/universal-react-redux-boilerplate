'use strict';

// Placeholder text by http://www.fillerati.com/
const articles = [
  {
    slug: 'the-wizard-of-oz',
    title: 'The Wizard of Oz',
    body: 'Dorothy followed her through many of the beautiful rooms in her castle until they came to the kitchen, where the Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.'
  },
  {
    slug: 'alice-in-wonderland',
    title: 'Alice in Wonderland',
    body: 'Alice thought the whole thing very absurd, but they all looked so grave that she did not dare to laugh; and, as she could not think of anything to say, she simply bowed, and took the thimble, looking as solemn as she could.'
  },
  {
    slug: 'moby-dick',
    title: 'Moby Dick',
    body: 'In man, breathing is incessantly going on—one breath only serving for two or three pulsations; so that whatever other business he has to attend to, waking or sleeping, breathe he must, or die he will. But the Sperm Whale only breathes about one seventh or Sunday of his time.'
  },
  {
    slug: 'around-the-world-in-80-days',
    title: 'Around the World in 80 Days',
    body: 'The old rajah was not dead, then, since he rose of a sudden, like a spectre, took up his wife in his arms, and descended from the pyre in the midst of the clouds of smoke, which only heightened his ghostly appearance.'
  },
  {
    slug: 'the-war-of-the-worlds',
    title: 'The War of the Worlds',
    body: 'And while the Martians behind me were thus preparing for their next sally, and in front of me Humanity gathered for the battle, I made my way with infinite pains and labour from the fire and smoke of burning Weybridge towards London.'
  }
];

// Mimics server-side field filtering to limit the amount of data transfer
const filterFields = (entity, fields) => {
  if (fields) {
    return fields.split(',').reduce((acc, field) => {
      acc[field] = entity[field];
      return acc;
    }, {});
  }

  return entity;
};

const fetch = (url) => {
  let match = /^\/api\/articles(?:\/?|\/(.*))(?:\?fields=(.*))?$/.exec(url);
  if (match) {
    let slug = match[1];
    let fields = match[2];

    if (slug) {
      return filterFields(articles.find((article) => (article.slug === slug)), fields);
    } else {
      return articles.map((article) => (filterFields(article, fields)));
    }
  }
};

export default fetch;
