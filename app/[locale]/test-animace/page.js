import TestAnimaceClient from './Client'

export const metadata = {
  robots: { index: false, follow: false },
  title: 'Test animací — Czech Horizons',
}

export default function TestAnimacePage() {
  return <TestAnimaceClient />
}
