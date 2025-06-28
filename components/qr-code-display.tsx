"use client"

import { useEffect, useRef } from "react"
import QRCode from "qrcode"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download } from "lucide-react"

interface QRCodeDisplayProps {
  text: string
}

export function QRCodeDisplay({ text }: QRCodeDisplayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current && text.trim()) {
      QRCode.toCanvas(
        canvasRef.current,
        text,
        {
          width: 256,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#FFFFFF",
          },
        },
        (error: any) => {
          if (error) console.error(error)
        },
      )
    } else if (canvasRef.current && !text.trim()) {
      const ctx = canvasRef.current.getContext("2d")
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      }
    }
  }, [text])

  return (
    <div className="flex flex-col items-center space-y-4">
      <Card className="p-6 bg-white border border-gray-200 rounded-3xl shadow-sm">
        <canvas ref={canvasRef} className="max-w-full h-auto rounded-md" width={256} height={256} />
        {!text.trim() && (
          <div className="w-64 h-25 flex items-center justify-center text-muted-foreground text-sm">
            Enter text to generate QR code
          </div>
        )}
      </Card>
      {text.trim() && (
        <Button
          onClick={() => {
            if (canvasRef.current) {
              const link = document.createElement("a")
              link.download = "qrcode.png"
              link.href = canvasRef.current.toDataURL()
              link.click()
            }
          }}
          className="gap-2 rounded-2xl"
        >
          <Download className="h-4 w-4" />
          Download QR Code
        </Button>
      )}
    </div>
  )
}
