import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Vérifier si le chemin commence déjà par /fr ou /en
  const pathnameHasLocale = /^\/(fr|en)(\/|$)/.test(pathname)
  
  if (!pathnameHasLocale) {
    // Rediriger vers /fr par défaut
    const locale = 'fr'
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: [
    // Matcher toutes les routes sauf les fichiers statiques et les API routes
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

