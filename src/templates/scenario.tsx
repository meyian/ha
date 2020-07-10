import React, { useState } from 'react';
import Layout from "../components/layout"
import styles from "../styles/scenario.module.css"

type Prop = {
  pageContext: {
    sections: SectionsInterface
  }
}

interface VolumeInterface {
  html: string;
}

interface DensitiesInterface {
  [density: string]: VolumeInterface;
}

interface SectionsInterface {
  [section: string]: DensitiesInterface; 
}

interface makeSectionGridParam {
  sections: SectionsInterface,
  selectedSectionNum: string,
  selectedDensity: string
}

function makeSectionGrid({sections, selectedSectionNum, selectedDensity }: makeSectionGridParam){
  const sectionGrid: JSX.Element[] = []

  for (let sectionNum in sections){
    for (let density in sections[sectionNum]){
      let html: string = sections[sectionNum][density]["html"]
      let classes: string[] = [styles.scenarioCell]

      if (selectedSectionNum == sectionNum && selectedDensity == density){
        classes.push(styles.selected)
      }

      sectionGrid.push(
      <div className={classes.join(" ")}>
        <h2>{`${sectionNum}.${density}`}</h2>
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </div>)
    }
  }

  return sectionGrid
}

/*

Fn inputs
* sections for the list of sections
* current section

*/

export default function Scenario({ pageContext: { sections } }: Prop) {

  const [sectionNum, setSectionNum] = useState("1")
  const [density, setDensity] = useState("3")
  const grid: JSX.Element[] = makeSectionGrid({
    sections,
    selectedSectionNum: sectionNum,
    selectedDensity: density
  })

  const changeSection = (delta: number) => {
    const sectionNames = Object.keys(sections)
    const numSections = sectionNames.length
    const sectionIndex = sectionNames.indexOf(sectionNum)
    const newIndex = sectionIndex + delta

    if (sectionIndex === -1){
      throw new Error("Found a non-existent section when changing section")
    }

    if ([-1, 1].indexOf(delta) === -1){
      throw new Error("Delta needs to be -1 or 1")
    }

    if (newIndex === -1 || newIndex === numSections){
      return
    }

    const newSection = sectionNames[newIndex]
    setSectionNum(newSection)
  }

  const changeDensity = (delta: number) => {
    const densities = Object.keys(sections[sectionNum])
    const numDensities = densities.length
    const densityIndex = densities.indexOf(density)
    const newIndex = densityIndex + delta

    if (densityIndex === -1){
      throw new Error("Found a non-existent section when changing section")
    }

    if ([-1, 1].indexOf(delta) === -1){
      throw new Error("Delta needs to be -1 or 1")
    }

    if (newIndex === -1 || newIndex === numDensities){
      return
    }

    const newDensity = densities[newIndex]
    setDensity(newDensity)
  }

  return (
    <Layout>
      <nav>
        <button onClick={() => changeSection(-1)}>previous</button>
        <button onClick={() => changeSection(1)}>next</button>
        <button onClick={() => changeDensity(1)}>richer</button>
        <button onClick={() => changeDensity(-1)}>lighter</button>
      </nav>
      <div className={styles.volumeGrid}>
      {grid}
      </div>
      <div>
        <p>section: {sectionNum}</p>
        <p>density: {density}</p>
      </div>
      
      
    </Layout>
  )
}

// {/* <div dangerouslySetInnerHTML={{ __html: "post.html" }} /> */}

/*

Todo

* Render the html in a grid (overflow: scroll) of 200px x 200px squares
  + handle the CSS of putting shit into a grid
    + css modules (11:25 AM)
    + grid
+ build out the section/density useStates, etc.    
+ Collapse everything into one 200 x 200 square    
+ Make a border around the selected element (12:20 PM)
+ check code in 
+ start to back up my computer (12:38 PM)
= write tests
  + read the medium article (10:20 AM)
  - read two codebases, see how they test react
  - write your 3 tests
* boil down to one box
* Style


Tests

Add a test to make sure that correct # of sections and densities shows up
  - just test lib/scenario.jsx (not a react test)
React
  - adding something to the props changes the number of volumes rendering
  - adjust density and sectionNum fns work
  - clicking the buttons changes the density and section Num
(Then we can start coding again!)


Test notes:

* You can change the props and prove that something different renders

*/