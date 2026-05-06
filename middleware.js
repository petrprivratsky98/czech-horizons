import createMiddleware from 'next-intl/middleware'
import {routing} from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Exclude studio, API routes, static files and Next.js internals
  matcher: ['/((?!api|studio|_next|_vercel|.*\\..*).*)'],
}
