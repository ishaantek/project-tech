type Member = {
  name: string,
  positions: string[],
  linkedin?: string,
  github?: string,
  email?: string
}

const exec: Member[] = [ 
  {
    name: 'Ishaan Garg',
    positions: ['Founder'],
    email: 'ishaan@ishaantek.com',
    linkedin: 'ishaantek',
    github: 'ishaantek',
  },
]

const team: Member[] = [
  {
    name: 'Ishaan Garg',
    positions: ['Web Developer'],
    linkedin: 'ishaantek',
    github: 'ishaantek',
  },
]

export {team, exec}
