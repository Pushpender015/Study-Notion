import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function LeetCode() {

    const[data , setdata] = useState([]);

    useEffect(() => {
        fetch('https://leetcode-stats-api.herokuapp.com/Pushpender006')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setdata(data);
        })
      }, [])

      return (
        <div className="max-w-4xl mx-auto mt-10 mb-10 p-6 bg-white shadow-lg rounded-xl">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-700">LeetCode Progress of Pushpender</h1>
            <p className="text-lg text-gray-500">problem-solving journey</p>
          </div>
    
          {/* Statistics Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-gray-800 text-white rounded-lg shadow">
              <h2 className="text-2xl font-semibold">Solved</h2>
              <p className="text-5xl font-bold mt-4">{data.totalSolved}</p>
              <p className="text-sm text-gray-400 mt-2">Total Problems</p>
            </div>
            <div className="p-4 bg-gray-800 text-white rounded-lg shadow">
              <h2 className="text-2xl font-semibold">Medium</h2>
              <p className="text-5xl font-bold mt-4">{data.mediumSolved}</p>
              <p className="text-sm text-gray-400 mt-2">Medium Level Problems</p>
            </div>
            <div className="p-4 bg-gray-800 text-white rounded-lg shadow">
              <h2 className="text-2xl font-semibold">Hard</h2>
              <p className="text-5xl font-bold mt-4">{data.hardSolved}</p>
              <p className="text-sm text-gray-400 mt-2">Hard Level Problems</p>
            </div>
          </div>
    
          {/* Progress Bars Section */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700">Ranking: {data.ranking}</h2>
            {/* <div className="mt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Array</span>
                <span className="text-gray-600">80%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div className="bg-green-500 h-4 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Dynamic Programming</span>
                <span className="text-gray-600">50%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Tree</span>
                <span className="text-gray-600">30%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <div className="bg-yellow-500 h-4 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div> */}
          </div>
    
          {/* Call to Action Section */}
          <div className="mt-8 text-center">
            <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
                <a href='https://leetcode.com/u/Pushpender006/'>Practice More Problems</a>
            </button>
          </div>
        </div>
      )
}

export default LeetCode