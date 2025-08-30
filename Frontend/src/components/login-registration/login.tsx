"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link, useNavigate } from "react-router-dom"
import authService from "@/services/authService"

export function LoginForm({ onReanimate }: { onReanimate?: () => void }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    onReanimate?.()
    setIsLoading(true)
    setError("")

    try {
      const response = await authService.login({ email, password })
      if (response.success) {
        const userStr = localStorage.getItem("user")
        let role = ""
        if (userStr) {
          try {
            const user = JSON.parse(userStr)
            role = user.role
          } catch {}
        }
        if (role === "patient") {
          navigate("/patient/dashboard")
        } else if (role === "doctor") {
          navigate("/doctor/dashboard")
        } else {
          navigate("/")
        }
      }
    } catch (error: unknown) {
      if (error && typeof error === "object" && "message" in error) {
        setError(error.message as string)
      } else {
        setError("Login failed. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md">
      <Card className="card-glossy border-0">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-teal-600 bg-clip-text text-transparent drop-shadow">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-slate-600">Sign in to your account to continue</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-sky-200 focus:border-sky-500 focus:ring-sky-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-sky-200 focus:border-sky-500 focus:ring-sky-500"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-teal-600" />
                <span className="text-slate-600">Remember me</span>
              </label>
              <Link to="#" className="text-teal-600 hover:text-teal-700">
                Forgot password?
              </Link>
            </div>
            <Button
              type="submit"
              onClick={() => onReanimate?.()}
              className="w-full bg-gradient-to-r from-sky-600 to-teal-500 text-white shadow-sm hover:from-sky-700 hover:to-teal-600 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-500 transition-transform duration-200 hover:scale-[1.01]"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          <div className="mt-6 text-center text-sm text-slate-600">
            {"Don't have an account?"}{" "}
            <Link to="/register" className="text-teal-600 hover:text-teal-700 font-medium">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
