"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { TextInput } from "@/components/text-input";
import { QRCodeDisplay } from "@/components/qr-code-display";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Download } from "lucide-react";

export default function Page() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <Header />

        <main className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                <TextInput value={inputText} onChange={setInputText} />

                <div className="flex justify-center">
                  <QRCodeDisplay text={inputText} />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Instant Generation</h3>
                <p className="text-sm text-muted-foreground">
                  Generate QR codes as you type—no waiting, no reloads. Supports
                  websites, phone numbers, email addresses, and custom text.
                  Great for fast marketing and real-time testing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Completely Free</h3>
                <p className="text-sm text-muted-foreground">
                  No sign-up required. No usage limits. Your input stays in your browser—perfect
                  for privacy-focused users and developers alike.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">High Quality</h3>
                <p className="text-sm text-muted-foreground">
                  Download your QR code as a crisp PNG image. Optimized for
                  print, menus, business cards, product packaging, and social
                  media sharing. Always sharp and scannable.
                </p>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
