"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Upload, FileText, CheckCircle, X } from "lucide-react"

export function CVUpload() {
  const [dragActive, setDragActive] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0])
    }
  }

  const removeFile = () => {
    setUploadedFile(null)
  }

  return (
    <Card className="p-8 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold">Upload Your CV</h3>
          <p className="text-muted-foreground">
            Join our talent database and get matched with relevant opportunities automatically.
          </p>
        </div>

        {!uploadedFile ? (
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <div className="space-y-2">
              <p className="text-lg font-medium">Drop your CV here or click to browse</p>
              <p className="text-sm text-muted-foreground">Supports PDF, DOC, DOCX files up to 5MB</p>
            </div>
            <Input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="hidden" id="cv-upload" />
            <Button asChild className="mt-4">
              <label htmlFor="cv-upload" className="cursor-pointer">
                Choose File
              </label>
            </Button>
          </div>
        ) : (
          <div className="border border-accent/20 rounded-lg p-6 bg-accent/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="w-8 h-8 text-accent" />
                <div>
                  <p className="font-medium">{uploadedFile.name}</p>
                  <p className="text-sm text-muted-foreground">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={removeFile}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Full Name" />
            <Input placeholder="Email Address" type="email" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Phone Number" type="tel" />
            <Input placeholder="Current Location" />
          </div>
          <Input placeholder="Desired Job Title" />
        </div>

        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={!uploadedFile}>
          <CheckCircle className="w-4 h-4 mr-2" />
          Submit Application
        </Button>

        <div className="text-center text-xs text-muted-foreground">
          By uploading your CV, you agree to our privacy policy and terms of service.
        </div>
      </div>
    </Card>
  )
}
