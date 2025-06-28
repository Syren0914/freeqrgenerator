"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface TextInputProps {
  value: string
  onChange: (value: string) => void
}

export function TextInput({ value, onChange }: TextInputProps) {
  return (
    <div className="w-full max-w-md mx-auto space-y-2">
      <div className="relative">
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter text or URL..."
          className="text-lg py-6 pr-12"
        />
        {value && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onChange("")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      <p className="text-sm text-muted-foreground text-center">Enter any text, URL, or message to generate a QR code</p>
    </div>
  )
}
