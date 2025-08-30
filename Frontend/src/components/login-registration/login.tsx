"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link, useNavigate } from "react-router-dom"
import authService from "@/services/authService"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    
    try {
      const response = await authService.login({ email, password })
      if (response.success) {
        // Get user role from localStorage (set by authService)
        const userStr = localStorage.getItem('user')
        let role = ''
        if (userStr) {
          try {
            const user = JSON.parse(userStr)
            role = user.role
          } catch {
            // Ignore JSON parse error
          }
        }
        // Redirect based on role
        if (role === 'patient') {
          navigate('/patient/dashboard')
        } else if (role === 'doctor') {
          navigate('/doctor/dashboard')
        } else {
          navigate('/')
        }
      }
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'message' in error) {
        setError(error.message as string)
      } else {
        setError('Login failed. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md">
      <Card className="card-glossy border-0">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-700 via-blue-700 to-blue-800 bg-clip-text text-transparent drop-shadow-lg">Welcome Back</CardTitle>
          <CardDescription className="text-gray-600">Sign in to your account to continue</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-blue-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-blue-600" />
                <span className="text-gray-600">Remember me</span>
              </label>
              <Link to="#" className="text-blue-600 hover:text-blue-700">
                Forgot password?
              </Link>
            </div>
            <Button
              type="submit"
              className="w-full btn-glossy-blue text-white transform transition-all duration-300 hover:scale-105"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
