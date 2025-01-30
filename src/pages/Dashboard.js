import React from 'react'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="flex">
        <aside className="w-64 bg-blue-800 text-white h-screen p-4">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <ul className="space-y-4">
            <li className="hover:bg-blue-700 p-2 rounded">
              <a href="#">Overview</a>
            </li>
            <li className="hover:bg-blue-700 p-2 rounded">
              <a href="#">Courses</a>
            </li>
            <li className="hover:bg-blue-700 p-2 rounded">
              <a href="#">Assignments</a>
            </li>
            <li className="hover:bg-blue-700 p-2 rounded">
              <a href="#">Profile</a>
            </li>
            <li className="hover:bg-blue-700 p-2 rounded">
              <a href="#">Settings</a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Dashboard!</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Courses Enrolled</h3>
              <p className="text-gray-600">You have 4 courses active.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Assignments</h3>
              <p className="text-gray-600">2 assignments due this week.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Profile Completion</h3>
              <p className="text-gray-600">80% complete.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
