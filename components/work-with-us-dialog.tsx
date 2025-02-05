"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/components/ui/use-toast"

interface WorkWithUsDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function WorkWithUsDialog({ open, onOpenChange }: WorkWithUsDialogProps) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    instagramHandle: "",
    onlyfansUrl: "",
    workedWithAgencyBefore: "",
    currentAgency: "",
    contactMethod: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    toast({
      title: "Application Submitted",
      description: "Thank you for your interest. We'll be in touch soon!",
    })
    onOpenChange(false)
    setFormData({
      name: "",
      email: "",
      instagramHandle: "",
      onlyfansUrl: "",
      workedWithAgencyBefore: "",
      currentAgency: "",
      contactMethod: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <AnimatePresence>
      {open && (
        <Dialog open={open} onOpenChange={onOpenChange}>
          <DialogContent className="sm:max-w-[600px] p-4 sm:p-6 md:p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader>
                <DialogTitle className="text-2xl sm:text-3xl font-serif text-center mb-4 sm:mb-6">
                  Apply to Join Hushly
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    WHAT IS YOUR NAME?
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full px-3 py-2 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    EMAIL
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full px-3 py-2 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="instagramHandle" className="text-sm font-medium">
                    INSTAGRAM HANDLE (IF YOU HAVE ONE)
                  </Label>
                  <Input
                    id="instagramHandle"
                    name="instagramHandle"
                    value={formData.instagramHandle}
                    onChange={handleChange}
                    placeholder="Instagram Handle"
                    className="w-full px-3 py-2 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="onlyfansUrl" className="text-sm font-medium">
                    ONLYFANS PAGE LINK (IF YOU HAVE ONE)
                  </Label>
                  <Input
                    id="onlyfansUrl"
                    name="onlyfansUrl"
                    value={formData.onlyfansUrl}
                    onChange={handleChange}
                    placeholder="Https://"
                    className="w-full px-3 py-2 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm font-medium">HAVE YOU WORKED WITH AN AGENCY BEFORE?</Label>
                  <RadioGroup
                    name="workedWithAgencyBefore"
                    value={formData.workedWithAgencyBefore}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, workedWithAgencyBefore: value }))}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="text-sm">
                        Yes
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="text-sm">
                        No
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentAgency" className="text-sm font-medium">
                    CURRENT AGENCY (IF ANY)
                  </Label>
                  <Input
                    id="currentAgency"
                    name="currentAgency"
                    value={formData.currentAgency}
                    onChange={handleChange}
                    placeholder="Agency Name"
                    className="w-full px-3 py-2 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactMethod" className="text-sm font-medium">
                    PREFERRED CONTACT METHOD
                  </Label>
                  <Input
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    placeholder="Email, phone, telegram, etc."
                    className="w-full px-3 py-2 text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-roseGold hover:bg-roseGold/90 text-white py-3 text-base sm:text-lg rounded-md transition-colors"
                >
                  Send
                </Button>
              </form>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  )
}

