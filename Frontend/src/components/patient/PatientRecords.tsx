import { FileText, Search, Filter, Plus } from "lucide-react"

export default function PatientRecords() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-teal-500 to-teal-600 bg-clip-text text-transparent mb-2 drop-shadow-lg">
            Medical Records
          </h1>
          <p className="text-gray-600">Access and manage your medical history</p>
        </div>
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all flex items-center gap-2 shadow-lg">
          <Plus className="w-5 h-5" />
          Add Record
        </button>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search records..."
            className="w-full pl-10 pr-4 py-3 bg-white/80 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button className="bg-white/80 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors flex items-center gap-2 border border-gray-200">
          <Filter className="w-5 h-5" />
          Filter
        </button>
      </div>

      {/* Records List */}
      <div className="space-y-4">
        {/* No records message */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No medical records found</h3>
          <p className="text-gray-600 mb-6">
            Your medical records will appear here once they are uploaded by your healthcare providers.
          </p>
          <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-green-700 transition-all">
            Request Records
          </button>
        </div>

        {/* Sample record card (commented out) */}
        {/* 
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20 hover:shadow-xl transition-all">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Blood Test Results</h3>
                <p className="text-gray-600">Complete Blood Count (CBC)</p>
                <p className="text-sm text-gray-500">Dr. Sarah Johnson • March 10, 2024</p>
              </div>
            </div>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">Lab Report</span>
          </div>
          
          <div className="flex gap-3">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors flex items-center gap-2">
              <Eye className="w-4 h-4" />
              View
            </button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download
            </button>
          </div>
        </div>
        */}
      </div>
    </div>
  )
}
