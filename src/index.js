import React from 'react'
import ReactDOM from 'react-dom'
import styled, { css, createGlobalStyle } from 'styled-components'

import Progress from './progress'
import Checkmark from './checkmark'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: rgb(31, 33, 36);
    color: white;
    font-family: Helvetica Neue, calibri, helvetica, arial;
  }
`

const TitleWrapper = styled.h1`
  font-family: georgia, calibri, helvetica, arial;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 20px;
`

const FiendWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border: 1px solid;
  border-image: radial-gradient(ellipse at center, white, rgb(31, 33, 35)) 11 0%;
  border-right: none;
  border-left: none;
  margin-bottom: 25px;
  margin-right: 10px;
  margin-left: 10px;
  background-color: rgb(61, 62, 64);
  background: -webkit-gradient(
    linear,
    0 0,
    100% 0,
    from(rgb(31, 33, 35)),
    to(rgb(31, 33, 35)),
    color-stop(
      50%,
      ${props => (props.dark ? 'rgb(44, 45, 47)' : 'rgb(61, 62, 64)')}
    )
  );
`

const ConquestFiendWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  border: 1px solid;
  border-image: radial-gradient(ellipse at center, white, rgb(31, 33, 35)) 11 0%;
  border-right: none;
  border-left: none;
  margin-bottom: 25px;
  margin-right: 10px;
  margin-left: 10px;
  background-color: rgb(61, 62, 64);
  background: -webkit-gradient(
    linear,
    0 0,
    100% 0,
    from(rgb(31, 33, 35)),
    to(rgb(31, 33, 35)),
    color-stop(
      50%,
      ${props => (props.dark ? 'rgb(44, 45, 47)' : 'rgb(61, 62, 64)')}
    )
  );
`

const AreaNameWrapper = styled.h2`
  margin-left: 10px;
  font-weight: 200;
  letter-spacing: 1px;
  margin-bottom: 20px;
`

const FiendNameWrapper = styled.h3`
  width: 255px;
  margin-left: 60px;
  font-weight: 125;
  letter-spacing: 1px;
  font-weight: 125;
`

const ConquestFiendNameWrapper = styled.h3`
  width: 255px;
  margin-left: 60px;
  font-weight: 125;
  letter-spacing: 1px;
  font-weight: 125;
`

const SpeciesWrapper = styled.h3`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 60px;
  width: 255px;
  letter-spacing: 1px;
  font-weight: 125;
`

const ConquestFiendNotes = styled.div`
  margin-right: 60px;
  width: 705px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ConquestFiendNoteWrapper = styled.p`
  font-family: Helvetica Neue, calibri, helvetica, arial;
  font-weight: 125;
  letter-spacing: 1px;
  margin: 2px;
  width: 705px;
`

const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border: solid 3px rgb(36, 81, 145);
  border-radius: 100%;
  text-align: center;
  background-color: rgb(23, 24, 27);
  color: white;
`

const CounterWrapper = styled.div`
  display: flex;
`

const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1.5px rgb(157, 33, 40);
  border-radius: 100%;
  text-align: center;
  cursor: pointer;
  background-color: rgb(23, 24, 27);
  color: white;
  height: 25px;
  width: 25px;
  line-height: 0.2;
  ${props =>
    props.bottom
      ? css`
          align-self: flex-end;
          top: 5px;
          left: 20px;
        `
      : css`
          bottom: 5px;
          right: 20px;
        `}
`

const ImageWrapper = styled.img`
  width: 35px;
  height: 35px;
`

const SpeciesConquestImageWrapper = styled.img`
  width: 65px;
  height: 65px;
  margin: 60px;
`

const CheckMarkWrapper = styled.div`
  position: relative;
`

const NoteWrapper = styled.div`
  font-family: Helvetica Neue, calibri, helvetica, arial;
  font-weight: 125;
  letter-spacing: 2px;
  margin-top: 0px;
  margin-bottom: 5px;
  margin-left: 30px;
`

const FirstNoteWrapper = styled.div`
  font-family: Helvetica Neue, calibri, helvetica, arial;
  font-weight: 125;
  letter-spacing: 2px;
  margin-top: 0px;
  margin-bottom: 5px;
  margin-left: 30px;
`

const SecondNoteWrapper = styled.div`
  font-family: Helvetica Neue, calibri, helvetica, arial;
  font-weight: 125;
  letter-spacing: 2px;
  margin-top: 0px;
  margin-bottom: 5px;
  margin-left: 30px;
`

const LastNoteWrapper = styled.div`
  font-family: Helvetica Neue, calibri, helvetica, arial;
  font-weight: 125;
  letter-spacing: 2px;
  margin-top: 0px;
  margin-bottom: 40px;
  margin-left: 30px;
`

class Counter extends React.Component {
  render() {
    return (
      <CounterWrapper>
        <Button bottom onClick={this.props.decrement}>
          -
        </Button>
        <Count>{this.props.count}</Count>
        <Button onClick={this.props.increment}>+</Button>
      </CounterWrapper>
    )
  }
}

class Fiend extends React.Component {
  render() {
    const data = species[this.props.species] || {}
    let progress = this.props.count / data.progress
    if (progress > 1) {
      progress = 1
    }
    return (
      <FiendWrapper dark={this.props.dark}>
        <FiendNameWrapper>{this.props.name}</FiendNameWrapper>
        <Counter
          count={this.props.count}
          increment={this.props.increment}
          decrement={this.props.decrement}
        />
        <SpeciesWrapper>
          {this.props.species && (
            <>
              {this.props.species}
              <Progress
                progress={progress}
                size={32}
                width={3}
                color="rgb(157, 33, 40)"
              >
                <ImageWrapper src={data.image} />
              </Progress>
            </>
          )}
        </SpeciesWrapper>
      </FiendWrapper>
    )
  }
}

class ConquestFiend extends React.Component {
  render() {
    const data = species[this.props.species] || {}
    let progress = this.props.count / data.progress
    if (progress > 1) {
      progress = 1
    }
    return (
      <ConquestFiendWrapper dark={this.props.dark}>
        <ConquestFiendNameWrapper>{this.props.name}</ConquestFiendNameWrapper>
        <ConquestFiendNotes>
          <ConquestFiendNoteWrapper>
            {this.props.unlockConditions}
          </ConquestFiendNoteWrapper>
          <ConquestFiendNoteWrapper>
            {this.props.unlockReward}
          </ConquestFiendNoteWrapper>
          <ConquestFiendNoteWrapper>
            {this.props.lootDrop}
          </ConquestFiendNoteWrapper>
        </ConquestFiendNotes>
      </ConquestFiendWrapper>
    )
  }
}

class SpeciesConquestFiend extends React.Component {
  render() {
    const data = species[this.props.species] || {}
    let progress = this.props.count / data.progress
    if (progress > 1) {
      progress = 1
    }
    return (
      <ConquestFiendWrapper dark={this.props.dark}>
        <ConquestFiendNameWrapper>{this.props.name}</ConquestFiendNameWrapper>
        <ConquestFiendNotes>
          <ConquestFiendNoteWrapper>
            {this.props.unlockConditions}
          </ConquestFiendNoteWrapper>
          <ConquestFiendNoteWrapper>
            {this.props.unlockReward}
          </ConquestFiendNoteWrapper>
          <ConquestFiendNoteWrapper>
            {this.props.lootDrop}
          </ConquestFiendNoteWrapper>
        </ConquestFiendNotes>
        <SpeciesConquestImageWrapper src={data.image} />
      </ConquestFiendWrapper>
    )
  }
}

class AreaConquest extends React.Component {
  render() {
    let complete = true
    for (let i = 0; i < this.props.counts.length; ++i) {
      if (this.props.counts[i] === 0) {
        complete = false
      }
    }
    return (
      <FiendWrapper dark={this.props.dark}>
        <FiendNameWrapper>{this.props.name}</FiendNameWrapper>
        <CheckMarkWrapper>
          <Count />
          <Checkmark checked={complete} />
        </CheckMarkWrapper>
        <SpeciesWrapper>{complete ? 'Complete!' : 'Incomplete'}</SpeciesWrapper>
      </FiendWrapper>
    )
  }
}

class Area extends React.Component {
  render() {
    return (
      <div>
        <AreaNameWrapper>{this.props.name}</AreaNameWrapper>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

class Conquests extends React.Component {
  render() {
    return (
      <div>
        <AreaNameWrapper>{this.props.name}</AreaNameWrapper>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

const species = {
  Wolf: { image: require('./images/Wolf.png'), progress: 3 },
  Lizard: { image: require('./images/Lizard.png'), progress: 3 },
  Bird: { image: require('./images/Bird.png'), progress: 5 },
  Insect: { image: require('./images/Insect.png'), progress: 4 },
  Imp: { image: require('./images/Imp.png'), progress: 4 },
  Eye: { image: require('./images/Eye.png'), progress: 4 },
  Flan: { image: require('./images/Flan.png'), progress: 3 },
  Element: { image: require('./images/Element.png'), progress: 3 },
  'Armored Helm': { image: require('./images/Armored Helm.png'), progress: 3 },
  Drake: { image: require('./images/Drake.png'), progress: 4 },
  Fungus: { image: require('./images/Fungus.png'), progress: 5 },
  Bomb: { image: require('./images/Bomb.png'), progress: 5 },
  Horned: { image: require('./images/Horned.png'), progress: 5 },
  'Iron Giant': { image: require('./images/Iron Giant.png'), progress: 10 }
}

const areas = [
  {
    name: 'Besaid',
    fiends: [
      { name: 'Dingo', species: 'Wolf' },
      { name: 'Condor', species: 'Bird' },
      { name: 'Water Flan', species: 'Flan' }
    ]
  },
  {
    name: 'Kilika',
    fiends: [
      { name: 'Dinonix', species: 'Lizard' },
      { name: 'Killer Bee', species: 'Insect' },
      { name: 'Yellow Element', species: 'Element' },
      { name: 'Ragora' }
    ]
  },
  {
    name: "Mi'ihen Highroad",
    fiends: [
      { name: "Mi'ihen Fang", species: 'Wolf' },
      { name: 'Ipiria', species: 'Lizard' },
      { name: 'Floating Eye', species: 'Eye' },
      { name: 'White Element', species: 'Element' },
      { name: 'Raldo', species: 'Armored Helm' },
      { name: 'Vouivre', species: 'Drake' },
      { name: 'Bomb', species: 'Bomb' },
      { name: 'Dual Horn', species: 'Horned' }
    ]
  },
  {
    name: 'Mushroom Rock Road',
    firstNote: '*Raptor and Lamashtu can also be encountered on "Djose Road".',
    secondNote:
      '**Gandarewa and Funguar can also be encountered on "Djose Road" and rarely on "Moonflow - South Bank Road".',
    lastNote:
      '***Thunder Flan can also be encountered on Mi\'ihen Highroad, most often on "Highroad - Oldroad, North".',
    fiends: [
      { name: 'Raptor*', species: 'Lizard' },
      { name: 'Gandarewa**', species: 'Imp' },
      { name: 'Thunder Flan***', species: 'Flan' },
      { name: 'Red Element', species: 'Element' },
      { name: 'Lamashtu*', species: 'Drake' },
      { name: 'Funguar**', species: 'Fungus' },
      { name: 'Garuda' }
    ]
  },
  {
    name: 'Djoes Road',
    firstNote:
      '*Garm, Bite Bug, Snow Flan, and Bunyip can also be encountered on "Moonflow - South Bank Road" which is included in "Djose Road" area. (Go left at the fork at the end of Djose Road).',
    lastNote: '**Ochu can ONLY be encountered on "Moonflow - South Bank Road".',
    fiends: [
      { name: 'Garm*', species: 'Wolf' },
      { name: 'Simurgh', species: 'Bird' },
      { name: 'Bite Bug*', species: 'Insect' },
      { name: 'Snow Flan*', species: 'Flan' },
      { name: 'Bunyip*', species: 'Armored Helm' },
      { name: 'Basilisk' },
      { name: 'Ochu**' }
    ]
  },
  {
    name: 'Thunder Plains',
    fiends: [
      { name: 'Melusine', species: 'Lizard' },
      { name: 'Aerouge', species: 'Imp' },
      { name: 'Buer', species: 'Eye' },
      { name: 'Gold Element', species: 'Element' },
      { name: 'Kusariqqu', species: 'Drake' },
      { name: 'Larva' },
      { name: 'Iron Giant', species: 'Iron Giant' },
      { name: 'Qactuar' }
    ]
  },
  {
    name: 'Macalania',
    lastNote: '"Lake Macalania" is included in the "Macalania" area.',
    fiends: [
      { name: 'Snow Wolf', species: 'Wolf' },
      { name: 'Iguion', species: 'Lizard' },
      { name: 'Wasp', species: 'Insect' },
      { name: 'Evil Eye', species: 'Eye' },
      { name: 'Ice Flan', species: 'Flan' },
      { name: 'Blue Element', species: 'Element' },
      { name: 'Murussu', species: 'Armored Helm' },
      { name: 'Mafdet', species: 'Armored Helm' },
      { name: 'Xiphos' },
      { name: 'Chimera' }
    ]
  },
  {
    name: 'Bikanel',
    fiends: [
      { name: 'Sand Wolf', species: 'Wolf' },
      { name: 'Alcyone', species: 'Bird' },
      { name: 'Mushussu', species: 'Drake' },
      { name: 'Zuu' },
      { name: 'Sand Worm' },
      { name: 'Cactuar' }
    ]
  },
  {
    name: 'Calm Lands',
    fiends: [
      { name: 'Skoll', species: 'Wolf' },
      { name: 'Nebiros', species: 'Insect' },
      { name: 'Flame Flan', species: 'Flan' },
      { name: 'Shred', species: 'Armored Helm' },
      { name: 'Anacondaur' },
      { name: 'Ogre' },
      { name: 'Coeurl' },
      { name: 'Chimera Brain' },
      { name: 'Malboro' }
    ]
  },
  {
    name: 'Stolen Fayth Cavern',
    note:
      'This area is labled as "Sunken Cave" in the English version of the game that was released before the HD Remaster version for PS3 and PS4.',
    firstNote: '*Imp and Nidhogg can also be encountered on Mt. Gagazet.',
    lastNote:
      '**Epaaj can be encountered inside the cavern however, it is more frequently encountered in the area just outside of the cavern in "Calm Lands - Gorge Bottom".',
    fiends: [
      { name: 'Yowie', species: 'Lizard' },
      { name: 'Imp*', species: 'Imp' },
      { name: 'Dark Element', species: 'Element' },
      { name: 'Nidhogg*', species: 'Drake' },
      { name: 'Thorn', species: 'Fungus' },
      { name: 'Valaha', species: 'Horned' },
      { name: 'Epaaj**' },
      { name: 'Ghost' },
      { name: 'Tonberry' }
    ]
  },
  {
    name: 'Mt. Gagazet',
    firstNote:
      '*Ahriman, Dark Flan, Mandragora, and Behemoth can\'t be encountered on "Gagazet - Mountain Trail". They can only be encountered in "Gagazet - Mountain Cave" and on "Zanarkand Ruins - Overpass".',
    secondNote:
      '**Splasher, Achelous, and Maelspike can ONLY be encountered in the water found in "Gagazet - Mountain Cave".',
    lastNote:
      '**NOTE: Since you are swimming in the water, these three fiends can only be captured by Tidus, Wakka, or Rikku.',
    fiends: [
      { name: 'Bandersnatch', species: 'Wolf' },
      { name: 'Ahriman*', species: 'Eye' },
      { name: 'Dark Flan*', species: 'Flan' },
      { name: 'Grenade', species: 'Bomb' },
      { name: 'Grat' },
      { name: 'Grendel', species: 'Horned' },
      { name: 'Bashura' },
      { name: 'Mandragora*' },
      { name: 'Behemoth*' },
      { name: 'Splasher**' },
      { name: 'Achelous**' },
      { name: 'Maelspike**' }
    ]
  },
  {
    name: 'Inside Sin',
    lastNote:
      '*Wraith, Gemini, Demonolith, Great Malboro, and Adamantoise can also be encountered in Omega Dungeon.',
    fiends: [
      { name: 'Exoray', species: 'Fungus' },
      { name: 'Wraith*' },
      { name: 'Gemini* (armed with sword)', species: 'Iron Giant' },
      { name: 'Gimini* (armed with club)', species: 'Iron Giant' },
      { name: 'Demonolith*' },
      { name: 'Great Malboro*' },
      { name: 'Barbatos' },
      { name: 'Adamantoise*' },
      { name: 'Behemoth King' }
    ]
  },
  {
    name: 'Omega Dungeon',
    lastNote: '*Varuna can also be encountered Inside Sin.',
    fiends: [
      { name: 'Zaurus', species: 'Lizard' },
      { name: 'Floating Death', species: 'Eye' },
      { name: 'Black Element', species: 'Element' },
      { name: 'Halma', species: 'Armored Helm' },
      { name: 'Puroboros', species: 'Bomb' },
      { name: 'Spirit' },
      { name: 'Machea' },
      { name: 'Master Coeurl' },
      { name: 'Master Tonberry' },
      { name: 'Varuna*' }
    ]
  }
]

const conquests = [
  {
    name: 'Area Conquest',
    fiends: [
      {
        name: 'Stratoavis',
        unlockConditions:
          'Unlock Conditions: Capture at least one of each fiend from Besaid.',
        unlockReward: 'Unlock Reward: Stamina Tonic x99',
        lootDrop: 'Loot Drop: Amulet x2 (x4 for overkill)'
      },
      {
        name: 'Malboro Menace',
        unlockConditions:
          'Unlock Conditions: Capture at least one of each fiend from Kilika.',
        unlockReward: 'Unlock Reward: Poison Fang x99',
        lootDrop: 'Loot Drop: Mana Tonic x2 (x4 for overkill)'
      },
      {
        name: 'Kottos',
        unlockConditions:
          "Unlock Conditions: Capture at least one of each fiend from Mi'ihen Highroad.",
        unlockReward: 'Unlock Reward: Soul Spring x99',
        lootDrop: 'Loot Drop: Healing Spring x20 (x40 for overkill)'
      },
      {
        name: 'Coeurlregina',
        unlockConditions:
          'Unlock Conditions: Capture at least one of each fiend from Mushroom Rock Road.',
        unlockReward: 'Unlock Reward: Candle of Life x99',
        lootDrop: 'Loot Drop: Shining Gem x3 (x6 for overkill)'
      },
      {
        name: 'Jormungand',
        unlockConditions:
          'Unlock Conditions: Capture at least one of each fiend from Djose Road.',
        unlockReward: 'Unlock Reward: Petrify Grenade x99',
        lootDrop: 'Loot Drop: Supreme Gem x2 (x4 for overkill)'
      },
      {
        name: 'Cactuar King',
        unlockConditions:
          'Unlock Conditions: Capture at least one of each fiend from Thunder Plains.',
        unlockReward: 'Unlock Reward: Chocobo Wing x99',
        lootDrop: 'Loot Drop: Blessed Gem x3 (x6 for overkill)'
      },
      {
        name: 'Espada',
        unlockConditions:
          'Unlock Conditions: Capture at least one of each fiend from Macalania.',
        unlockReward: 'Unlock Reward: Shining Gem x60',
        lootDrop: 'Loot Drop: Rename Card x1 (x2 for overkill)'
      },
      {
        name: 'Abyss Worm',
        unlockConditions:
          'Unlock Conditions: Capture at least one of each fiend from Bikanel.',
        unlockReward: 'Unlock Reward: Shadow Gem x99',
        lootDrop: 'Loot Drop: Stamina Tonic x1 (x2 for overkill)'
      },
      {
        name: 'Chimerageist',
        unlockConditions:
          'Unlock Conditions: Capture at least one of each fiend from Calm Lands.',
        unlockReward: 'Unlock Reward: Farplane Wind x60',
        lootDrop: 'Loot Drop: Return Sphere x1 (x2 for overkill)'
      },
      {
        name: 'Don Tonberry',
        unlockConditions:
          'Unlock Conditions: Capture at least one of each fiend from Stolen Fayth Cavern.',
        unlockReward: 'Unlock Reward: Silver Hourglass x40',
        lootDrop: 'Loot Drop: Farplane Wind x3 (x6 for overkill)'
      },
      {
        name: 'Catoblepas',
        unlockConditions:
          'Unlock Conditions: Capture at least one of each fiend from Mt. Gagazet.',
        unlockReward: 'Unlock Reward: Blossom Crown',
        lootDrop: 'Loot Drop: Three Stars x1 (x2 for overkill)'
      },
      {
        name: 'Abaddon',
        unlockConditions:
          'Unlock Conditions: Capture at least one of each fiend from Inside Sin.',
        unlockReward: 'Unlock Reward: Lunar Curtain x99',
        lootDrop: 'Loot Drop: Mana Tablet x1 (x2 for overkill)'
      },
      {
        name: 'Vorban',
        unlockConditions:
          'Unlock Conditions: Capture at least one of each fiend from Omega Dungeon.',
        unlockReward: 'Unlock Reward: Designer Wallet x60',
        lootDrop: 'Loot Drop: Friend Sphere x1 (x2 for overkill)'
      }
    ]
  }
]
const speciesConquests = [
  {
    name: 'Species Conquest',
    fiends: [
      {
        name: 'Fenrir',
        unlockConditions:
          'Unlock conditions: Capture at least 3 of each fiend amongst the Wolf species.',
        unlockReward: 'Unlock Reward: Chocobo Feather x99',
        lootDrop: 'Loot Drop: Agility Sphere x1 (x2 for overkill)',
        species: 'Wolf'
      },
      {
        name: 'Ornitholestes',
        unlockConditions:
          'Unlock conditions: Capture at least 3 of each fiend amongst the Lizard species.',
        unlockReward: 'Unlock Reward: Stamina Spring x99',
        lootDrop: "Loot Drop: Gambler's Spirit x2 (x4 for overkill)",
        species: 'Lizard'
      },
      {
        name: 'Pteryx',
        unlockConditions:
          'Unlock conditions: Capture at least 5 of each fiend amongst the Bird species.',
        unlockReward: 'Unlock Reward: Mega Phoenix x99',
        lootDrop: 'Loot Drop: Evasion Sphere x1 (x2 for overkill)',
        species: 'Bird'
      },
      {
        name: 'Hornet',
        unlockConditions:
          'Unlock conditions: Capture at least 4 of each fiend amongst the Insect species.',
        unlockReward: 'Unlock Reward: Mana Tonic x60',
        lootDrop: 'Loot Drop: Accuracy Sphere x1 (x2 for overkill)',
        species: 'Insect'
      },
      {
        name: 'Vidatu',
        unlockConditions:
          'Unlock conditions: Capture at least 4 of each fiend amongst the Imp species.',
        unlockReward: 'Unlock Reward: Mana Spring x99',
        lootDrop: 'Loot Drop: MP Sphere x1 (x2 for overkill)',
        species: 'Imp'
      },
      {
        name: 'One-Eye',
        unlockConditions:
          'Unlock conditions: Capture at least 4 of each fiend amongst the Eye species.',
        unlockReward: 'Unlock Reward: Stamina Tablet x60',
        lootDrop: 'Loot Drop: Magic Defense Sphere x1 (x2 for overkill)',
        species: 'Eye'
      },
      {
        name: 'Jumbo Flan',
        unlockConditions:
          'Unlock conditions: Capture at least 3 of each fiend amongst the Flan species.',
        unlockReward: 'Unlock Reward: Twin Stars x60',
        lootDrop: 'Loot Drop: Magic Sphere x1 (x2 for overkill)',
        species: 'Flan'
      },
      {
        name: 'Nega Elemental',
        unlockConditions:
          'Unlock conditions: Capture at least 3 of each fiend amongst the Element species.',
        unlockReward: 'Unlock Reward: Star Curtain x99',
        lootDrop: 'Loot Drop: Twin Stars x2 (x4 for overkill)',
        species: 'Element'
      },
      {
        name: 'Tanket',
        unlockConditions:
          'Unlock conditions: Capture at least 3 of each fiend amongst the Armored Helm species.',
        unlockReward: 'Unlock Reward: Star Curtain x99',
        lootDrop: 'Loot Drop: Defense Sphere x1 (x2 for overkill)',
        species: 'Armored Helm'
      },
      {
        name: 'Fafnir',
        unlockConditions:
          'Unlock conditions: Capture at least 4 of each fiend amongst the Drake species.',
        unlockReward: 'Unlock Reward: Purifying Salt x99',
        lootDrop: 'Loot Drop: Light Curtain x20 (x40 for overkill)',
        species: 'Drake'
      },
      {
        name: 'Sleep Sprout',
        unlockConditions:
          'Unlock conditions: Capture at least 5 of each fiend amongst the Fungus species.',
        unlockReward: 'Unlock Reward: Healing Spring x99',
        lootDrop: 'Loot Drop: Teleport Sphere x1 (x2 for overkill)',
        species: 'Fungus'
      },
      {
        name: 'Bomb King',
        unlockConditions:
          'Unlock conditions: Capture at least 5 of each fiend amongst the Bomb species.',
        unlockReward: 'Unlock Reward: Turbo Ether x60',
        lootDrop: 'Loot Drop: Door to Tomorrow x1 (x2 for overkill)',
        species: 'Bomb'
      },
      {
        name: 'Juggernaut',
        unlockConditions:
          'Unlock conditions: Capture at least 5 of each fiend amongst the Horned species.',
        unlockReward: 'Unlock Reward: Light Curtain x99',
        lootDrop: 'Loot Drop: Strength Sphere x1 (x2 for overkill)',
        species: 'Horned'
      },
      {
        name: 'Ironclad',
        unlockConditions:
          'Unlock conditions: Capture 10 of each fiend amongst the Iron Giant species.',
        unlockReward: 'Unlock Reward: Mana Tablet x60',
        lootDrop: 'Loot Drop: HP Sphere x1 (x2 for overkill)',
        species: 'Iron Giant'
      }
    ]
  }
]
const original = [
  {
    name: 'Original',
    fiends: [
      {
        name: 'Earth Eater',
        unlockConditions:
          'Unlock Conditions: Unlock 2 fiends in Area Conquest.',
        unlockReward: 'Unlock Reward: Three Stars x60',
        lootDrop: 'Loot Drop: Fortune Sphere x1 (x2 for overkill)'
      },
      {
        name: 'Greater Sphere',
        unlockConditions:
          'Unlock Conditions: Unlock 2 fiends in Species Conquest.',
        unlockReward: 'Unlock Reward: Supreme Gem x60',
        lootDrop: 'Loot Drop: Luck Sphere x1 (x2 for overkill)'
      },
      {
        name: 'Catastrophe',
        unlockConditions:
          'Unlock Conditions: Unlock 6 fiends in Area Conquest.',
        unlockReward: 'Unlock Reward: Door to Tomorrow x99',
        lootDrop: 'Loot Drop: Designer Wallet x1 (x2 for overkill)'
      },
      {
        name: "Th'uban",
        unlockConditions:
          'Unlock Conditions: Unlock 6 fiends in Species Conquest.',
        unlockReward: "Unlock Reward: Gambler's Spirit x99",
        lootDrop: "Loot Drop: Underdog's Secret x1 (x2 for overkill)"
      },
      {
        name: 'Neslug',
        unlockConditions:
          'Unlock Conditions: Capture at least 1 of each fiend in Spira.',
        unlockReward: 'Unlock Reward: Winning Formula x99',
        lootDrop: 'Loot Drop: Pendulum x1 (x2 for overkill)'
      },
      {
        name: 'Ultima Buster',
        unlockConditions:
          'Unlock Conditions: Capture at least 5 of each fiend in Spira.',
        unlockReward: 'Unlock Reward: Dark Matter x99',
        lootDrop: 'Loot Drop: Winning Formula x1 (x2 for overkill)'
      },
      {
        name: 'Shinryu',
        unlockConditions:
          'Unlock Conditions: Capture at least 2 Splashers, Achelous, and Maelspikes from Mt. Gagazet.',
        unlockReward: 'Unlock Reward: Mega Elixer x30',
        lootDrop: 'Loot Drop: Wings to Discovery x1 (x2 for overkill)'
      },
      {
        name: 'Nemesis',
        unlockConditions:
          'Unlock Conditions: Capture 10 of every fiend and defeat all Conquest and Original fiends.',
        unlockReward: 'Unlock Reward: Master Sphere x10',
        lootDrop: 'Loot Drop: Warp Sphere x1 (x2 for overkill)'
      }
    ]
  }
]

class Notes extends React.Component {
  render() {
    return (
      <div>
        <NoteWrapper>{this.props.note}</NoteWrapper>
        <FirstNoteWrapper>{this.props.firstNote}</FirstNoteWrapper>
        <SecondNoteWrapper>{this.props.secondNote}</SecondNoteWrapper>
        <LastNoteWrapper>{this.props.lastNote}</LastNoteWrapper>
      </div>
    )
  }
}

class App extends React.Component {
  state = { counts: areas.map(area => area.fiends.map(() => 0)) }

  increment = (i, j) => {
    const newCount = this.state.counts[i][j] + 1
    if (newCount <= 10) {
      this.state.counts[i][j] = newCount
      this.setState({ counts: this.state.counts })
    }
  }

  decrement = (i, j) => {
    const newCount = this.state.counts[i][j] - 1
    if (newCount >= 0) {
      this.state.counts[i][j] = newCount
      this.setState({ counts: this.state.counts })
    }
  }

  render() {
    let a = 0
    return (
      <div>
        <div>
          <TitleWrapper>Final Fantasy X Arena Companion App!</TitleWrapper>
        </div>
        {areas.map((area, i) => (
          <Area name={area.name}>
            <Notes
              note={area.note}
              firstNote={area.firstNote}
              secondNote={area.secondNote}
              lastNote={area.lastNote}
            />
            <div>
              {area.fiends.map((fiend, j) => (
                <Fiend
                  count={this.state.counts[i][j]}
                  increment={() => this.increment(i, j)}
                  decrement={() => this.decrement(i, j)}
                  name={fiend.name}
                  species={fiend.species}
                  dark={a++ % 2 === 0}
                />
              ))}
              <AreaConquest
                counts={this.state.counts[i]}
                dark={a++ % 2 === 0}
                name="Area Conquest Completion"
              />
            </div>
          </Area>
        ))}
        {conquests.map(conquest => (
          <Conquests name={conquest.name}>
            <div>
              {conquest.fiends.map(fiend => (
                <ConquestFiend
                  name={fiend.name}
                  unlockConditions={fiend.unlockConditions}
                  unlockReward={fiend.unlockReward}
                  lootDrop={fiend.lootDrop}
                  dark={a++ % 2 === 0}
                />
              ))}
            </div>
          </Conquests>
        ))}
        {speciesConquests.map(speciesConquests => (
          <Conquests name={speciesConquests.name}>
            <div>
              {speciesConquests.fiends.map(fiend => (
                <SpeciesConquestFiend
                  name={fiend.name}
                  unlockConditions={fiend.unlockConditions}
                  unlockReward={fiend.unlockReward}
                  lootDrop={fiend.lootDrop}
                  species={fiend.species}
                  dark={a++ % 2 === 0}
                />
              ))}
            </div>
          </Conquests>
        ))}
        {original.map(original => (
          <Conquests name={original.name}>
            <div>
              {original.fiends.map(fiend => (
                <ConquestFiend
                  name={fiend.name}
                  unlockConditions={fiend.unlockConditions}
                  unlockReward={fiend.unlockReward}
                  lootDrop={fiend.lootDrop}
                  dark={a++ % 2 === 0}
                />
              ))}
            </div>
          </Conquests>
        ))}
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
)

// class App extends React.Component {
//   render() {
//     return (
//       <AppWrapper>
//         <div>
//           <div>
//             <TitleWrapper>Final Fantasy X Arena Companion App!</TitleWrapper>
//           </div>
//           <Area name="Besaid">
//             <div>
//               <Fiend name="Dingo" species="Wolf" />
//               <Fiend dark name="Conder" species="Bird" />
//               <Fiend name="Water Flan" species="Flan" />
//               <AreaConquest dark name="Area Conquest Completion" />
//             </div>
//           </Area>
//           <Area name="Kilika">
//             <div>
//               <Fiend name="Dinonix" species="Lizard" />
//               <Fiend dark name="Killer Bee" species="Insect" />
//               <Fiend name="Yellow Element" species="Element" />
//               <Fiend dark name="Ragora" />
//               <AreaConquest name="Area Conquest Completion" />
//             </div>
//           </Area>
//         </div>
//       </AppWrapper>
//     )
//   }
// }
