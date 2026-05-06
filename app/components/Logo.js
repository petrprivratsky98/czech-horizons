import Image from 'next/image'

export default function Logo({size = 48, animated = false}) {
  return (
    <Image
      src="/logo.png"
      alt="Czech Horizons"
      width={size}
      height={size}
      style={{
        objectFit: 'contain',
        transition: animated ? 'transform 0.6s cubic-bezier(0.16,1,0.3,1)' : 'none',
      }}
    />
  )
}
