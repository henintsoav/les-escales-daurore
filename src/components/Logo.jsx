export default function Logo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="47" stroke="#DDB8BB" strokeWidth="2"/>
      <circle cx="50" cy="50" r="42" stroke="#DDB8BB" strokeWidth="0.5"/>
      {/* Sun rays */}
      <line x1="50" y1="14" x2="50" y2="8" stroke="#E9B949" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="63" y1="17" x2="66" y2="11" stroke="#E9B949" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="74" y1="26" x2="79" y2="22" stroke="#E9B949" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="37" y1="17" x2="34" y2="11" stroke="#E9B949" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="26" y1="26" x2="21" y2="22" stroke="#E9B949" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Sun */}
      <circle cx="50" cy="24" r="6" fill="#E9B949"/>
      {/* Wave */}
      <path d="M28 60 Q35 55 42 60 Q49 65 56 60 Q63 55 70 60 Q77 65 80 62" stroke="#A7B09B" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* EA monogram */}
      <text x="50" y="45" textAnchor="middle" fontFamily="Georgia, serif" fontSize="14" fontWeight="bold" fill="#443B38">E</text>
      <text x="50" y="58" textAnchor="middle" fontFamily="Georgia, serif" fontSize="14" fontWeight="bold" fill="#443B38">A</text>
      {/* Circular text placeholder dots */}
      <path d="M50 90 A40 40 0 0 1 10 50" stroke="#DDB8BB" strokeWidth="0" fill="none"/>
    </svg>
  )
}
