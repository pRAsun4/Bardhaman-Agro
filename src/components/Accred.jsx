import { Title, Em, Sec } from './ui'
import { Icon } from './icons'

const AC = ['ISO 9001:2015', 'FSSAI', 'APEDA', 'IEC', 'GST', 'MSME', 'HACCP', 'Agmark']

function Accred() {
  const list = [...AC, ...AC, ...AC]
  return (
    <Sec theme="accred" glow="right">
      <Title theme="accred" n="14" k="Accreditations">Certified and <Em>compliant</Em></Title>
      <div className="marquee">
        <div className="marquee-track mq-left">
          {list.map((a, k) => (
            <span key={k} className="mq-item shrink-0 mr-4 flex items-center gap-3 rounded-full bg-accred-card border border-accred-border px-7 py-4 text-sm font-medium text-accred-title whitespace-nowrap">
              <Icon.shield className="w-5 h-5 text-accred-accent" />{a}
            </span>
          ))}
        </div>
      </div>
      {/* <p className="text-center text-xs text-accred-text mt-4">Placeholder labels. Swap in the client’s accreditation logos.</p> */}
    </Sec>
  )
}

export default Accred
