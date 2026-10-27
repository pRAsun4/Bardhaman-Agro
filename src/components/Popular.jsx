import { Title, Em, Sec, Slider } from './ui'
import Card from './Card'

const POP = ['Biriyani & Ghee Rice (Premium)', 'Classic Kaima Rice', 'Jeerakasala (Double Rose)', 'Premium Kaima Rice', 'Ramjan Special Jeera Samba', 'White Sella Classic']

function Popular() {
  return (
    <Sec theme="popular" glow="left">
      <Title theme="popular" n="07" k="Most popular">Customer <Em>favourites</Em></Title>
      <Slider theme="popular">{POP.map((p) => <Card key={p} p={[p, 'Bulk and retail']} />)}</Slider>
    </Sec>
  )
}

export default Popular
