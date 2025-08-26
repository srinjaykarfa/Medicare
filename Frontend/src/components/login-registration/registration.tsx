"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Link, useNavigate } from "react-router-dom"
import authService, { type RegisterData } from "@/services/authService"

export function Registration() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [activeTab, setActiveTab] = useState("patient")
  const navigate = useNavigate()

  // Patient form data
  const [patientData, setPatientData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    password: "",
    confirmPassword: ""
  })

  // Doctor form data
  const [doctorData, setDoctorData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    licenseNumber: "",
    specialization: "",
    hospital: "",
    yearsOfExperience: 0,
    password: "",
    confirmPassword: ""
  })

  const handlePatientSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    setError("")

    // Validation
    if (patientData.password !== patientData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      const registerData: RegisterData = {
        firstName: patientData.firstName,
        lastName: patientData.lastName,
        email: patientData.email,
        phone: patientData.phone,
        password: patientData.password,
        role: "patient",
        dateOfBirth: patientData.dateOfBirth,
        gender: patientData.gender as "male" | "female" | "other" | "prefer-not-to-say"
      }

      const response = await authService.register(registerData)
      
      if (response.success) {
        // Registration successful, redirect to dashboard or home
        navigate('/')
      }
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'message' in error) {
        setError(error.message as string)
      } else if (error && typeof error === 'object' && 'errors' in error && Array.isArray(error.errors)) {
        setError((error.errors as string[]).join(', '))
      } else {
        setError('Registration failed. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleDoctorSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsLoading(true)
    setError("")

    // Validation
    if (doctorData.password !== doctorData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      const registerData: RegisterData = {
        firstName: doctorData.firstName,
        lastName: doctorData.lastName,
        email: doctorData.email,
        phone: doctorData.phone,
        password: doctorData.password,
        role: "doctor",
        licenseNumber: doctorData.licenseNumber,
        specialization: doctorData.specialization,
        hospital: doctorData.hospital,
        yearsOfExperience: doctorData.yearsOfExperience
      }

      const response = await authService.register(registerData)
      
      if (response.success) {
        // Registration successful, redirect to dashboard or home
        navigate('/')
      }
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'message' in error) {
        setError(error.message as string)
      } else if (error && typeof error === 'object' && 'errors' in error && Array.isArray(error.errors)) {
        setError((error.errors as string[]).join(', '))
      } else {
        setError('Registration failed. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md">
      <Card className="card-glossy border-0">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-700 via-blue-700 to-blue-800 bg-clip-text text-transparent drop-shadow-lg">Create Account</CardTitle>
          <CardDescription className="text-gray-600">Join MediCare as a patient or healthcare provider</CardDescription>
        </CardHeader>
        <CardContent>
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}
        <Tabs defaultValue="patient" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="patient">Patient</TabsTrigger>
            <TabsTrigger value="doctor">Doctor</TabsTrigger>
          </TabsList>

          <TabsContent value="patient">
            <form onSubmit={handlePatientSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John" 
                    required 
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    value={patientData.firstName}
                    onChange={(e) => setPatientData({...patientData, firstName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe" 
                    required 
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    value={patientData.lastName}
                    onChange={(e) => setPatientData({...patientData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  required 
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  value={patientData.email}
                  onChange={(e) => setPatientData({...patientData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+1 (555) 123-4567" 
                  required 
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  value={patientData.phone}
                  onChange={(e) => setPatientData({...patientData, phone: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input 
                  id="dateOfBirth" 
                  type="date" 
                  required 
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  value={patientData.dateOfBirth}
                  onChange={(e) => setPatientData({...patientData, dateOfBirth: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select onValueChange={(value) => setPatientData({...patientData, gender: value})}>
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
                <Input 
                  id="password" 
                  type="password" 
                  required 
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  value={patientData.password}
                  onChange={(e) => setPatientData({...patientData, password: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input 
                  id="confirmPassword" 
                  type="password" 
                  required 
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  value={patientData.confirmPassword}
                  onChange={(e) => setPatientData({...patientData, confirmPassword: e.target.value})}
                />
              </div>

              <Button type="submit" className="w-full btn-glossy-blue text-white transform transition-all duration-300 hover:scale-105" disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Create Patient Account"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="doctor">
            <form onSubmit={handleDoctorSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="doctorFirstName">First Name</Label>
                  <Input 
                    id="doctorFirstName" 
                    placeholder="Dr. Jane" 
                    required 
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    value={doctorData.firstName}
                    onChange={(e) => setDoctorData({...doctorData, firstName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctorLastName">Last Name</Label>
                  <Input 
                    id="doctorLastName" 
                    placeholder="Smith" 
                    required 
                    className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                    value={doctorData.lastName}
                    onChange={(e) => setDoctorData({...doctorData, lastName: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="doctorEmail">Email</Label>
                <Input 
                  id="doctorEmail" 
                  type="email" 
                  placeholder="dr.smith@hospital.com" 
                  required 
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  value={doctorData.email}
                  onChange={(e) => setDoctorData({...doctorData, email: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="doctorPhone">Phone Number</Label>
                <Input 
                  id="doctorPhone" 
                  type="tel" 
                  placeholder="+1 (555) 123-4567" 
                  required 
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  value={doctorData.phone}
                  onChange={(e) => setDoctorData({...doctorData, phone: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="licenseNumber">Medical License Number</Label>
                <Input 
                  id="licenseNumber" 
                  placeholder="MD123456789" 
                  required 
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  value={doctorData.licenseNumber}
                  onChange={(e) => setDoctorData({...doctorData, licenseNumber: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialization">Specialization</Label>
                <Select onValueChange={(value) => setDoctorData({...doctorData, specialization: value})}>
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
                <Input 
                  id="hospital" 
                  placeholder="City General Hospital" 
                  required 
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  value={doctorData.hospital}
                  onChange={(e) => setDoctorData({...doctorData, hospital: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Years of Experience</Label>
                <Input 
                  id="experience" 
                  type="number" 
                  placeholder="5" 
                  min="0" 
                  required 
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  value={doctorData.yearsOfExperience}
                  onChange={(e) => setDoctorData({...doctorData, yearsOfExperience: parseInt(e.target.value) || 0})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="doctorPassword">Password</Label>
                <Input 
                  id="doctorPassword" 
                  type="password" 
                  required 
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  value={doctorData.password}
                  onChange={(e) => setDoctorData({...doctorData, password: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="doctorConfirmPassword">Confirm Password</Label>
                <Input 
                  id="doctorConfirmPassword" 
                  type="password" 
                  required 
                  className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
                  value={doctorData.confirmPassword}
                  onChange={(e) => setDoctorData({...doctorData, confirmPassword: e.target.value})}
                />
              </div>

              <Button type="submit" className="w-full btn-glossy-blue text-white transform transition-all duration-300 hover:scale-105" disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Create Doctor Account"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:text-blue-700 font-medium">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}

export default Registration
