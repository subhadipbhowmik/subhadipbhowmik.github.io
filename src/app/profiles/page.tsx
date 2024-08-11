"use client"
import React, { useEffect, useState } from 'react';

function Profiles() {
  interface ProfileData {
    totalSolved: number;
    totalQuestions: number;
    easySolved: number;
    totalEasy: number;
    mediumSolved: number;
    totalMedium: number;
    hardSolved: number;
    totalHard: number;
    [key: string]: any; // Optional: Allows other properties in case the API returns additional fields
  }
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://leetcode-stats-api.herokuapp.com/shubhadip_bhowmik');
        const data: ProfileData = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchData();
  }, []);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center mt-8">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">LeetCode Profile</h2>
        <div className="space-y-2">
          <p><span className="font-semibold">Total Solved:</span> {profileData.totalSolved}</p>
          <p><span className="font-semibold">Total Questions:</span> {profileData.totalQuestions}</p>
          <p><span className="font-semibold">Easy Solved:</span> {profileData.easySolved}</p>
          <p><span className="font-semibold">Total Easy:</span> {profileData.totalEasy}</p>
          <p><span className="font-semibold">Medium Solved:</span> {profileData.mediumSolved}</p>
          <p><span className="font-semibold">Total Medium:</span> {profileData.totalMedium}</p>
          <p><span className="font-semibold">Hard Solved:</span> {profileData.hardSolved}</p>
          <p><span className="font-semibold">Total Hard:</span> {profileData.totalHard}</p>
        </div>
      </div>
    </div>
  );
}

export default Profiles;
