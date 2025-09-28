"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Search, MapPin, Briefcase, DollarSign, Filter } from "lucide-react"

interface JobFiltersProps {
  onFiltersChange: (filters: any) => void
}

export function JobFilters({ onFiltersChange }: JobFiltersProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [location, setLocation] = useState("")
  const [jobType, setJobType] = useState("")
  const [salaryRange, setSalaryRange] = useState("")

  const handleSearch = () => {
    onFiltersChange({
      searchTerm,
      location,
      jobType,
      salaryRange,
    })
  }

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm">
      <div className="space-y-4">
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold">Filter Jobs</h3>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search jobs, companies, keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Location Filter */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Location (e.g., Nairobi, Remote)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Job Type Filter */}
        <Select value={jobType} onValueChange={setJobType}>
          <SelectTrigger>
            <div className="flex items-center space-x-2">
              <Briefcase className="w-4 h-4 text-muted-foreground" />
              <SelectValue placeholder="Job Type" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="full-time">Full Time</SelectItem>
            <SelectItem value="part-time">Part Time</SelectItem>
            <SelectItem value="contract">Contract</SelectItem>
            <SelectItem value="remote">Remote</SelectItem>
            <SelectItem value="internship">Internship</SelectItem>
          </SelectContent>
        </Select>

        {/* Salary Range Filter */}
        <Select value={salaryRange} onValueChange={setSalaryRange}>
          <SelectTrigger>
            <div className="flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-muted-foreground" />
              <SelectValue placeholder="Salary Range" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-50k">KSh 0 - 50,000</SelectItem>
            <SelectItem value="50k-100k">KSh 50,000 - 100,000</SelectItem>
            <SelectItem value="100k-200k">KSh 100,000 - 200,000</SelectItem>
            <SelectItem value="200k-500k">KSh 200,000 - 500,000</SelectItem>
            <SelectItem value="500k+">KSh 500,000+</SelectItem>
          </SelectContent>
        </Select>

        {/* Search Button */}
        <Button onClick={handleSearch} className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          <Search className="w-4 h-4 mr-2" />
          Search Jobs
        </Button>

        {/* Clear Filters */}
        <Button
          variant="outline"
          onClick={() => {
            setSearchTerm("")
            setLocation("")
            setJobType("")
            setSalaryRange("")
            onFiltersChange({})
          }}
          className="w-full"
        >
          Clear Filters
        </Button>
      </div>
    </Card>
  )
}
