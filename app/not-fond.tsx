import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 text-center bg-background">
      <div className="space-y-8 max-w-md">
        {/* 404 Display */}
        <div className="relative">
          <h1 className="text-9xl font-bold text-muted-foreground/20">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight">Page not found</h2>
              <p className="text-muted-foreground">Sorry, we couldn't find the page you're looking for.</p>
            </div>
          </div>
        </div>

        {/* Illustration */}
        <div className="py-8">
          <div className="w-full max-w-[250px] mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className="w-full h-auto" aria-hidden="true">
              <g>
                <path
                  fill="currentColor"
                  className="text-muted-foreground/20"
                  d="M250,390.5c-79.53,0-144-64.47-144-144s64.47-144,144-144s144,64.47,144,144S329.53,390.5,250,390.5z M250,122.5c-68.51,0-124,55.49-124,124s55.49,124,124,124s124-55.49,124-124S318.51,122.5,250,122.5z"
                />
                <circle fill="currentColor" className="text-muted-foreground/20" cx="250" cy="246.5" r="20" />
                <path
                  fill="currentColor"
                  className="text-muted-foreground/20"
                  d="M250,286.5c-5.52,0-10-4.48-10-10v-60c0-5.52,4.48-10,10-10s10,4.48,10,10v60C260,282.02,255.52,286.5,250,286.5z"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Search */}
        <div className="space-y-4">
          <form className="flex w-full max-w-sm mx-auto items-center space-x-2">
            <Input type="text" placeholder="Search for content..." className="flex-1" />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="outline">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="javascript:history.back()">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go back
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

