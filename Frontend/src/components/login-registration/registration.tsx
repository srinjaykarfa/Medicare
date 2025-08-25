"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Link } from "react-router-dom"

export function Registration() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="w-full max-w-md">
      <Card className="shadow-lg border-0">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">Create Account</CardTitle>
          <CardDescription className="text-gray-600">Join MediCare as a patient or healthcare provider</CardDescription>
        </CardHeader>
        <CardContent>
        <Tabs defaultValue="patient" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="patient">Patient</TabsTrigger>
            <TabsTrigger value="doctor">Doctor</TabsTrigger>
          </TabsList>

          <TabsContent value="patient">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input id="dateOfBirth" type="date" required className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" required className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" required className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>

              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Create Patient Account"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="doctor">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="doctorFirstName">First Name</Label>
                  <Input id="doctorFirstName" placeholder="Dr. Jane" required className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctorLastName">Last Name</Label>
                  <Input id="doctorLastName" placeholder="Smith" required className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="doctorEmail">Email</Label>
                <Input id="doctorEmail" type="email" placeholder="dr.smith@hospital.com" required className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="doctorPhone">Phone Number</Label>
                <Input id="doctorPhone" type="tel" placeholder="+1 (555) 123-4567" required className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="licenseNumber">Medical License Number</Label>
                <Input id="licenseNumber" placeholder="MD123456789" required className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialization">Specialization</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select specialization" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cardiology">Cardiology</SelectItem>
                    <SelectItem value="dermatology">Dermatology</SelectItem>
                    <SelectItem value="neurology">Neurology</SelectItem>
                    <SelectItem value="pediatrics">Pediatrics</SelectItem>
                    <SelectItem value="orthopedics">Orthopedics</SelectItem>
                    <SelectItem value="general">General Practice</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hospital">Hospital/Clinic</Label>
                <Input id="hospital" placeholder="City General Hospital" required className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Input id="experience" type="number" placeholder="5" min="0" required className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="doctorPassword">Password</Label>
                <Input id="doctorPassword" type="password" required className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="doctorConfirmPassword">Confirm Password</Label>
                <Input id="doctorConfirmPassword" type="password" required className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Create Doctor Account"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-600 hover:text-emerald-700 font-medium">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}

export default Registration
