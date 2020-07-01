const path = require('path')
const _ = require('lodash')

const isScenarioNode = node => {

  const slug = node.fields.slug
  const searchPath = path.join('content', 'scenarios')
  const searchPathIndex = slug.indexOf(searchPath)

  return searchPathIndex !== -1
}

const getSectionAndDensity = node => {
  const unneededPathParts = path.join('content', 'scenarios')
  const slug = node.fields.slug.replace(unneededPathParts, '')

  const [_, sectionAndDensity] = slug.split(path.sep).filter((x) => x !== "")
  const [section, density] = sectionAndDensity.split(".")

  if (!section && !density) throw new Error("Incorrect scenario schema")

  return {section, density}
}

module.exports = {
  packagePosts: function(nodes){
    const postsHash = {}
    console.log('packagePosts')

    for (let node of nodes){
      // if in the right folder, add to hash
      if (isScenarioNode(node)){
        const title = node.fields.title
        const slug = _.kebabCase(title)
        const { section, density } = getSectionAndDensity(node)

        postsHash[title] = postsHash[title] || { slug }
        postsHash[title][section] = postsHash[title][section] || {}
        postsHash[title][section][density] = {
          html: node.html
        }
      }
    }

    return postsHash
  }
}