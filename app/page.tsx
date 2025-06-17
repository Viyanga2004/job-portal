"use client"

import { useState, useMemo } from "react"
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Filter,
  Menu,
  X,
  Briefcase,
  Bookmark,
  BookmarkCheck,
  ArrowRight,
  ChevronDown,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Job data with all 22 jobs
const jobData = [
  {
    id: 1,
    title: "Work From Home Specialist",
    company: "Remote Solutions Inc.",
    location: "Remote",
    type: "Full-time",
    salary: "$45,000 - $65,000",
    salaryMin: 45000,
    salaryMax: 65000,
    description:
      "Join our remote team and work from the comfort of your home. Perfect opportunity for self-motivated individuals looking to balance work and life.",
    category: "Remote Work",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/4QX811T/?sub1=fromhome",
    featured: true,
    urgent: false,
    postedDate: "2024-01-15",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Google",
    location: "Mountain View, CA",
    type: "Full-time",
    salary: "$120,000 - $180,000",
    salaryMin: 120000,
    salaryMax: 180000,
    description:
      "Build the next generation of Google products. Work with cutting-edge technology and brilliant minds to solve complex problems at scale.",
    category: "Technology",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/4QZLTQG/?sub2=googlejob",
    featured: true,
    urgent: true,
    postedDate: "2024-01-14",
  },
  {
    id: 3,
    title: "Warehouse Associate",
    company: "Amazon",
    location: "Multiple Locations",
    type: "Full-time",
    salary: "$35,000 - $45,000",
    salaryMin: 35000,
    salaryMax: 45000,
    description:
      "Join the Amazon team and be part of the world's largest e-commerce operation. Great benefits and career growth opportunities.",
    category: "Transportation",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/4R21QH3/?sub3=amazonjob",
    featured: false,
    urgent: false,
    postedDate: "2024-01-13",
  },
  {
    id: 4,
    title: "Delivery Driver",
    company: "FedEx",
    location: "Various Cities",
    type: "Full-time",
    salary: "$40,000 - $55,000",
    salaryMin: 40000,
    salaryMax: 55000,
    description:
      "Deliver packages and provide excellent customer service as a FedEx driver. Competitive pay and excellent benefits package.",
    category: "Transportation",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/51F5PFD/?sub2=fedexjobs",
    featured: false,
    urgent: true,
    postedDate: "2024-01-12",
  },
  {
    id: 5,
    title: "Store Associate",
    company: "Aldi",
    location: "Multiple Locations",
    type: "Part-time",
    salary: "$28,000 - $35,000",
    salaryMin: 28000,
    salaryMax: 35000,
    description:
      "Provide exceptional customer service and maintain store operations at Aldi. Great entry-level opportunity with growth potential.",
    category: "Retail",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/548B3D1/?sub2=aldijob",
    featured: false,
    urgent: false,
    postedDate: "2024-01-11",
  },
  {
    id: 6,
    title: "Airport Ground Crew",
    company: "Airport Services",
    location: "Major Airports",
    type: "Full-time",
    salary: "$38,000 - $48,000",
    salaryMin: 38000,
    salaryMax: 48000,
    description:
      "Work in a dynamic airport environment handling aircraft ground operations. Exciting opportunity in aviation industry.",
    category: "Airlines",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/54MF58T/?sub4=airportjob",
    featured: false,
    urgent: false,
    postedDate: "2024-01-10",
  },
  {
    id: 7,
    title: "Social Media Manager",
    company: "Instagram",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$70,000 - $95,000",
    salaryMin: 70000,
    salaryMax: 95000,
    description:
      "Manage social media presence and create engaging content for Instagram. Join one of the world's leading social platforms.",
    category: "Technology",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/54Q6WQ3/?sub2=instagramjob",
    featured: true,
    urgent: false,
    postedDate: "2024-01-09",
  },
  {
    id: 8,
    title: "Cleaning Specialist",
    company: "CleanPro Services",
    location: "Multiple Locations",
    type: "Part-time",
    salary: "$25,000 - $32,000",
    salaryMin: 25000,
    salaryMax: 32000,
    description:
      "Maintain cleanliness and hygiene standards in commercial and residential properties. Flexible scheduling available.",
    category: "Cleaning",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/616SFKD/?sub4=cleaningjob",
    featured: false,
    urgent: false,
    postedDate: "2024-01-08",
  },
  {
    id: 9,
    title: "Quick Hire Position",
    company: "Rapid Staffing",
    location: "Various",
    type: "Temporary",
    salary: "$30,000 - $40,000",
    salaryMin: 30000,
    salaryMax: 40000,
    description:
      "Immediate hiring for various positions. Quick application process with same-day interviews available.",
    category: "All Jobs",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/619L72L/?sub2=quickhirejob",
    featured: false,
    urgent: true,
    postedDate: "2024-01-16",
  },
  {
    id: 10,
    title: "Registered Nurse",
    company: "Healthcare Plus",
    location: "Multiple Hospitals",
    type: "Full-time",
    salary: "$65,000 - $85,000",
    salaryMin: 65000,
    salaryMax: 85000,
    description:
      "Provide compassionate patient care in a supportive healthcare environment. Join our dedicated team of healthcare professionals.",
    category: "Healthcare",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/61C13R7/?sub3=nursejob",
    featured: true,
    urgent: true,
    postedDate: "2024-01-07",
  },
  {
    id: 11,
    title: "Food Quality Tester",
    company: "Food Safety Corp",
    location: "Food Processing Plants",
    type: "Full-time",
    salary: "$42,000 - $52,000",
    salaryMin: 42000,
    salaryMax: 52000,
    description:
      "Ensure food quality and safety standards in food processing facilities. Great opportunity in food industry.",
    category: "Food Service",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/61DCZHS/?sub3=foodtesterjob",
    featured: false,
    urgent: false,
    postedDate: "2024-01-06",
  },
  {
    id: 12,
    title: "Remote Work Specialist",
    company: "WorkFromHome Co.",
    location: "Remote",
    type: "Full-time",
    salary: "$50,000 - $70,000",
    salaryMin: 50000,
    salaryMax: 70000,
    description:
      "Flexible remote work opportunity with competitive benefits. Perfect for experienced professionals seeking work-life balance.",
    category: "Remote Work",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/79FZ7K7/?sub3=workhome",
    featured: true,
    urgent: false,
    postedDate: "2024-01-05",
  },
  {
    id: 13,
    title: "Airport Operations Specialist",
    company: "Airport Authority",
    location: "International Airports",
    type: "Full-time",
    salary: "$45,000 - $60,000",
    salaryMin: 45000,
    salaryMax: 60000,
    description:
      "Available positions in airport operations and management. Join our team ensuring smooth airport operations.",
    category: "Airlines",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/35S8WJD4/?sub3=airavila",
    featured: false,
    urgent: false,
    postedDate: "2024-01-04",
  },
  {
    id: 14,
    title: "Google Career Opportunity",
    company: "Google",
    location: "Multiple Offices",
    type: "Full-time",
    salary: "$90,000 - $150,000",
    salaryMin: 90000,
    salaryMax: 150000,
    description:
      "Join Google and work on products used by billions of people worldwide. Multiple positions available across different teams.",
    category: "Technology",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/35SB9F4P/?sub4=gbavail",
    featured: true,
    urgent: true,
    postedDate: "2024-01-03",
  },
  {
    id: 15,
    title: "FedEx Career Position",
    company: "FedEx",
    location: "Distribution Centers",
    type: "Full-time",
    salary: "$42,000 - $58,000",
    salaryMin: 42000,
    salaryMax: 58000,
    description: "Available career opportunities at FedEx distribution centers. Join the global logistics leader.",
    category: "Transportation",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/361X789B/?sub5=fdxavail",
    featured: false,
    urgent: true,
    postedDate: "2024-01-02",
  },
  {
    id: 16,
    title: "Staffing Specialist",
    company: "Kelly Services",
    location: "Multiple Locations",
    type: "Full-time",
    salary: "$40,000 - $55,000",
    salaryMin: 40000,
    salaryMax: 55000,
    description:
      "Help connect talented individuals with great career opportunities. Join our staffing and recruitment team.",
    category: "All Jobs",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/377T3HNL/?sub2=KellyServices",
    featured: false,
    urgent: false,
    postedDate: "2024-01-01",
  },
  {
    id: 17,
    title: "Retail Associate",
    company: "Dollar Tree",
    location: "Store Locations",
    type: "Part-time",
    salary: "$24,000 - $30,000",
    salaryMin: 24000,
    salaryMax: 30000,
    description:
      "Provide excellent customer service at Dollar Tree retail locations. Great entry-level opportunity with flexible scheduling.",
    category: "Retail",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/37DP63S4/?sub5=DollarTree",
    featured: false,
    urgent: false,
    postedDate: "2023-12-30",
  },
  {
    id: 18,
    title: "Flight Attendant (Spanish Speaking)",
    company: "American Airlines",
    location: "Major Airports",
    type: "Full-time",
    salary: "$50,000 - $70,000",
    salaryMin: 50000,
    salaryMax: 70000,
    description:
      "Provide exceptional service to passengers on American Airlines flights. Spanish language skills required.",
    category: "Airlines",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/38BQ7W6T/?sub4=AmAir",
    featured: true,
    urgent: false,
    postedDate: "2023-12-29",
  },
  {
    id: 19,
    title: "Amazon Fulfillment Associate",
    company: "Amazon",
    location: "Fulfillment Centers",
    type: "Full-time",
    salary: "$36,000 - $46,000",
    salaryMin: 36000,
    salaryMax: 46000,
    description:
      "Work in Amazon fulfillment centers with competitive benefits. Be part of the world's largest e-commerce operation.",
    category: "Transportation",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/38JWFFG5/?sub5=Ama",
    featured: false,
    urgent: false,
    postedDate: "2023-12-28",
  },
  {
    id: 20,
    title: "Housekeeping Supervisor",
    company: "Hotel Management",
    location: "Hotels & Resorts",
    type: "Full-time",
    salary: "$35,000 - $45,000",
    salaryMin: 35000,
    salaryMax: 45000,
    description:
      "Supervise housekeeping operations in hospitality settings. Lead a team to maintain high cleanliness standards.",
    category: "Cleaning",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/38K85LLD/?sub5=HouseKeeping",
    featured: false,
    urgent: false,
    postedDate: "2023-12-27",
  },
  {
    id: 21,
    title: "Professional Driver",
    company: "Transport Solutions",
    location: "Various Routes",
    type: "Full-time",
    salary: "$45,000 - $60,000",
    salaryMin: 45000,
    salaryMax: 60000,
    description:
      "Professional driving opportunities with flexible schedules. Join our transportation team with competitive pay.",
    category: "Transportation",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/38KDB8S7/?sub3=Driv",
    featured: false,
    urgent: true,
    postedDate: "2023-12-26",
  },
  {
    id: 22,
    title: "Airport Security Officer",
    company: "Airport Security Services",
    location: "Airport Terminals",
    type: "Full-time",
    salary: "$40,000 - $50,000",
    salaryMin: 40000,
    salaryMax: 50000,
    description:
      "Ensure airport security and passenger safety. Critical role in maintaining aviation security standards.",
    category: "Airlines",
    applyLink: "https://www.gn3atrk.com/2WH8SDD7/38KFP5JS/?sub3=Airp",
    featured: false,
    urgent: false,
    postedDate: "2023-12-25",
  },
]

// Job categories
const jobCategories = [
  "All Jobs",
  "Remote Work",
  "Technology",
  "Healthcare",
  "Transportation",
  "Retail",
  "Food Service",
  "Cleaning",
  "Airlines",
]

export default function JobPortal() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Jobs")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedJob, setSelectedJob] = useState<(typeof jobData)[0] | null>(null)
  const [savedJobs, setSavedJobs] = useState<number[]>([])
  const [sortBy, setSortBy] = useState("newest")
  const [showFilters, setShowFilters] = useState(false)

  // Filter jobs based on search term and category
  const filteredJobs = useMemo(() => {
    const filtered = jobData.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory === "All Jobs" || job.category === selectedCategory

      return matchesSearch && matchesCategory
    })

    // Sort jobs
    switch (sortBy) {
      case "salary-high":
        filtered.sort((a, b) => b.salaryMax - a.salaryMax)
        break
      case "salary-low":
        filtered.sort((a, b) => a.salaryMin - b.salaryMin)
        break
      case "company":
        filtered.sort((a, b) => a.company.localeCompare(b.company))
        break
      default:
        filtered.sort((a, b) => new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime())
    }

    return filtered
  }, [searchTerm, selectedCategory, sortBy])

  const handleApply = (applyLink: string) => {
    window.open(applyLink, "_blank")
  }

  const toggleSaveJob = (jobId: number) => {
    setSavedJobs((prev) => (prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]))
  }

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return "1 day ago"
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`
    return `${Math.ceil(diffDays / 30)} months ago`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="lg:hidden mr-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <Menu className="h-5 w-5" />
              </Button>
              <div className="flex items-center">
                <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-xl font-bold text-blue-600">JobFinder</span>
              </div>
            </div>

            {/* Desktop Search */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2"
                />
              </div>
            </div>

            <div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Post a Job
              </Button>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="mt-4 md:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className={`lg:w-64 ${sidebarOpen ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
              <div className="flex items-center justify-between mb-4 lg:hidden">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Job Categories</h3>
                  <div className="space-y-2">
                    {jobCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedCategory === category
                            ? "bg-blue-100 text-blue-700 font-medium"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {category}
                        <span className="float-right text-xs text-gray-400">
                          {category === "All Jobs"
                            ? jobData.length
                            : jobData.filter((job) => job.category === category).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Job Type */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Job Type</h3>
                  <div className="space-y-2">
                    {["Full-time", "Part-time", "Contract", "Temporary"].map((type) => (
                      <label key={type} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 mr-2" />
                        <span className="text-sm text-gray-600">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="newest">Newest First</option>
                    <option value="salary-high">Salary: High to Low</option>
                    <option value="salary-low">Salary: Low to High</option>
                    <option value="company">Company A-Z</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {selectedCategory === "All Jobs" ? "All Jobs" : selectedCategory}
                  </h1>
                  <p className="text-gray-600">
                    Showing {filteredJobs.length} jobs
                    {searchTerm && ` for "${searchTerm}"`}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md text-sm lg:hidden"
                  >
                    <option value="newest">Newest First</option>
                    <option value="salary-high">Salary: High to Low</option>
                    <option value="salary-low">Salary: Low to High</option>
                    <option value="company">Company A-Z</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                              {job.featured && (
                                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Featured</Badge>
                              )}
                              {job.urgent && <Badge className="bg-red-100 text-red-800 border-red-200">Urgent</Badge>}
                            </div>
                            <p className="text-blue-600 font-medium">{job.company}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleSaveJob(job.id)}
                            className="text-gray-400 hover:text-blue-600"
                          >
                            {savedJobs.includes(job.id) ? (
                              <BookmarkCheck className="h-5 w-5" />
                            ) : (
                              <Bookmark className="h-5 w-5" />
                            )}
                          </Button>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {job.type}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1" />
                            {job.salary}
                          </div>
                          <div className="text-gray-500 text-xs">Posted {getTimeAgo(job.postedDate)}</div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{job.description}</p>

                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <Badge variant="secondary" className="text-xs">
                            {job.category}
                          </Badge>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm" onClick={() => setSelectedJob(job)} className="text-sm">
                              Details
                            </Button>
                            <Button
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700 text-sm"
                              onClick={() => handleApply(job.applyLink)}
                            >
                              Apply
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-600">Try adjusting your search criteria or browse all available positions.</p>
                <Button
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All Jobs")
                  }}
                >
                  View All Jobs
                </Button>
              </div>
            )}

            {/* Load More */}
            {filteredJobs.length > 10 && (
              <div className="text-center mt-6">
                <Button variant="outline" className="w-full sm:w-auto">
                  Load More Jobs
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h2>
                    {selectedJob.featured && (
                      <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Featured</Badge>
                    )}
                    {selectedJob.urgent && <Badge className="bg-red-100 text-red-800 border-red-200">Urgent</Badge>}
                  </div>
                  <p className="text-lg text-blue-600 font-medium">{selectedJob.company}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSelectedJob(null)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {selectedJob.location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {selectedJob.type}
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-1" />
                  {selectedJob.salary}
                </div>
                <Badge variant="secondary">{selectedJob.category}</Badge>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Job Description</h3>
                <p className="text-gray-600 leading-relaxed">{selectedJob.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Relevant experience in the field</li>
                  <li>Strong communication skills</li>
                  <li>Ability to work in a team environment</li>
                  <li>Problem-solving abilities</li>
                </ul>
              </div>

              <div className="flex space-x-3">
                <Button
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleApply(selectedJob.applyLink)}
                >
                  Apply Now
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <Button variant="outline" onClick={() => setSelectedJob(null)}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Simple Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Briefcase className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-lg font-bold text-blue-600">JobFinder</span>
            </div>
            <div className="text-sm text-gray-600">&copy; 2024 JobFinder. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
