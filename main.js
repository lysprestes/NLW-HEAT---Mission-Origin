const linksSocialMedia = {
  github: 'lysprestes',
  youtube: 'channel/UC00ZoIvOMSpLyCBYy5Rea-wUC00ZoIvOMSpLyCBYy5Rea-w',
  facebook: 'hikarilys',
  instagram: 'lysprestes',
  twitter: 'lysprestes'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfo()
