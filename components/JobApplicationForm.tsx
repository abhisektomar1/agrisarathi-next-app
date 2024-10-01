'use client'
import { useState } from "react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"

export default function JobApplicationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    qualification: '',
    jobRole: '',
    cv: null as File | null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, cv: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your server
  }

  return (
    <section className="bg-[#FDF7F2] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Ready To Join Us?</h2>
        <p className="text-center text-gray-600 mb-8">Fill In Your Details Below, And We will Be In Touch With The Next Steps</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter Your Phone Number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="email">Email Id</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Your Email Id"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="qualification">Qualification</Label>
              <Input
                id="qualification"
                name="qualification"
                placeholder="Your Qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <Label htmlFor="jobRole">Job Roles</Label>
              <Select onValueChange={(value:any) => setFormData(prev => ({ ...prev, jobRole: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose Job Role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  {/* Add more job roles as needed */}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="cv">Upload CV</Label>
              <Input
                id="cv"
                name="cv"
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
              />
            </div>
          </div>
          
          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
            Submit
          </Button>
        </form>
      </div>
    </section>
  )
}