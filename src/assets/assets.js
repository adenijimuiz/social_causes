import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import arrow_icon from './arrow_icon.svg'

import animal_walfare from './animal_walfare.jpg';
import education_for_all from './education_for_all.jpg';
import environmental from './environmental_support.jpg';
import mental_health from './mental_health.jpg';


export const assests = {facebook_icon, instagram_icon, twitter_icon, arrow_icon }

const causes = [
  {
    image: education_for_all,
    title: 'Bridge the Education Gap',
    description : 'Help provide access to quality education and learning resources for children in underserved communities.'
  },
  {
    image: environmental,
    title: 'Protect Our Planet',
    description : 'Join reforestation efforts, cleanups, and campaigns to fight climate change and preserve nature.'
  },
  {
    image: animal_walfare,
    title: 'Care for Every Creature',
    description : 'Advocate for rescued and stray animals by supporting shelters and promoting animal protection rights.'
  },
  {
    image: mental_health,
    title: 'Prioritize Mental Wellness',
    description : 'Support access to therapy, awareness programs, and safe spaces for those struggling with mental health challenges'
  }
]

export default causes