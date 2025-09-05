"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoPopupProps {
  videoUrl: string
  isOpen: boolean
  onClose: () => void
  title: string
}

export function VideoPopup({ videoUrl, isOpen, onClose, title }: VideoPopupProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4">
        <div className="bg-slate-900 rounded-lg overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-slate-400 hover:text-white">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="aspect-video">
            <video
              src={videoUrl}
              controls
              autoPlay
              className="w-full h-full"
              onError={() => {
                console.error("Failed to load video:", videoUrl)
              }}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}
