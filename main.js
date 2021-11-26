const linksSocialMedia = {
  github: 'lysprestes',
  youtube: 'channel/UC00ZoIvOMSpLyCBYy5Rea-wUC00ZoIvOMSpLyCBYy5Rea-w',
  facebook: 'hikarilys',
  instagram: 'lysprestes',
  twitter: 'lysprestes'
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}/`;
  }
}

changeSocialMediaLinks();

