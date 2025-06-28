import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="mt-16 py-8 px-4">
      <Separator className="mb-8" />
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
          <span>© 2024 Free QR Code Generator</span>
          <a href="#privacy" className="hover:text-primary transition-colors duration-200 underline">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-primary transition-colors duration-200 underline">
            Terms of Service
          </a>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Generate QR codes for free. No registration required.</p>
        <a href="https://erdene.dev" className="hover:text-primary transition-colors duration-200 text-xs text-muted-foreground mt-2">
            Built By Erdene
          </a>

      </div>
    </footer>
  )
}
