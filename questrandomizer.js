const towns = ['Shire','Hyrule','Azeroth','Spiral Mountain']
const heroNames = ['Banjo','Frodo','King Anduin','Link']
const prizes = [' save Zelda','receive 100000 Gold Pieces','rescue Tooty','destroy The Ring']
const races = ['Hobbit','Human','Bear','Hylian']
const descriptor = {
  hero: ['Brave','Valiant','Fuzzy','Mighty'],
  villian: ['Warty','Deadly','Scary','Terrifying']
}
const bosses = ["Ganon","Grunty","Sauron","Lich King"]


const QuestFact = () => {
  return {
    heroDesc: randomPicker(descriptor.hero),
    heroName: randomPicker(heroNames),
    heroOrigin: randomPicker(towns),
    heroRace: randomPicker(races),
    prize: randomPicker(prizes),
    bossDesc: randomPicker(descriptor.villian),
    boss: randomPicker(bosses),
    hero () {
      return `${this.heroDesc} ${this.heroName} the ${this.heroRace} from ${this.heroOrigin} `
    },
    villian () {
      return `${this.bossDesc} ${this.boss}`
    }
  }
}

const randomPicker = (values) => {
  return values[Math.floor(Math.random() * values.length)]
}

const createQuests = (count) => {
  let quests = [];
  for(let i = 0; i < count; i++) {
    quests.push(QuestFact())
  }
  return quests
}
console.log(createQuests(4))
document.getElementById('QuestMes').innerHTML = `${QuestFact().hero()} go forth and defeat the ${QuestFact().villian()} and ${QuestFact().prize} `