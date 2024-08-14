"use client";
import React, { useEffect, useState } from 'react';
import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PROFILE_DATA from './PROFILE_DATA';
import Image from 'next/image';

const BLUR_FADE_DELAY = 0.4;

function Profiles() {
  const [githubData, setGithubData] = useState<any>(null);
  const [leetcodeData, setLeetcodeData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const githubResponse = await fetch('https://api.github.com/users/subhadipbhowmik');
        const githubData = await githubResponse.json();

        const leetcodeResponse = await fetch('https://leetcode-stats-api.herokuapp.com/shubhadip_bhowmik');
        const leetcodeData = await leetcodeResponse.json();

        setGithubData(githubData);
        setLeetcodeData(leetcodeData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-500">

        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto w-full pb-12">
        <section id="hero">
          <div className="mx-auto w-full mb-6">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={DATA.memories}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 border">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-4">

          {/* GitHub Profile Card */}
          {githubData && (
            <BlurFade delay={BLUR_FADE_DELAY}>
              <div className="overflow-hidden rounded-lg shadow-lg border-green-300 border-2">
                <div className="p-4">
                  <Image
                    width={48}
                    height={48}
                    src={PROFILE_DATA[0].socialMediaIcon}
                    alt={PROFILE_DATA[0].username}
                    className="w-12 h-12 mr-4 p-1 bg-gray-50 rounded-sm"
                  />
                  <h2 className="text-xl font-semibold">{githubData.name}</h2>
                  <p className="text-gray-600">Followers: {githubData.followers}</p>
                  <p className="text-gray-600">Following: {githubData.following}</p>
                  <p className="text-gray-600">Public Repos: {githubData.public_repos}</p>
                </div>
                <div className="p-4">
                  <a
                    href={PROFILE_DATA[0].linkText}
                    className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
                  >
                    {PROFILE_DATA[0].btnText}
                  </a>
                </div>
              </div>
            </BlurFade>
          )}

          {/* LeetCode Profile Card */}
        {leetcodeData && (
  <BlurFade delay={BLUR_FADE_DELAY}>
    <div className="overflow-hidden rounded-lg shadow-lg border-green-300 border-2 p-4">
      <div className="flex items-center mb-4">
        <Image
          width={48}
          height={48}
          src={PROFILE_DATA[1].socialMediaIcon}
          alt={PROFILE_DATA[1].username}
          className="w-12 h-12 mr-4 p-1 bg-gray-50 rounded-sm"
        />
        <div className="text-xl font-bold">
          {leetcodeData.totalSolved}/{leetcodeData.totalQuestions}
        </div>
      </div>

      {/* Centered Acceptance Rate */}
      <p className="text-center text-gray-600 mb-4">
        Acceptance Rate: {leetcodeData.acceptanceRate}%
      </p>

      {/* Justified Between Difficulty Stats */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="font-semibold">Easy</span>
          <span>{leetcodeData.easySolved}/{leetcodeData.totalEasy}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Medium</span>
          <span>{leetcodeData.mediumSolved}/{leetcodeData.totalMedium}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Hard</span>
          <span>{leetcodeData.hardSolved}/{leetcodeData.totalHard}</span>
        </div>
      </div>

      {/* Left-aligned Button */}
      <div className="text-left mt-4">
        <a
          href={PROFILE_DATA[1].linkText}
          className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
        >
          {PROFILE_DATA[1].btnText}
        </a>
      </div>
    </div>
  </BlurFade>
)}





          {/* Other Profiles from PROFILE_DATA */}
          {PROFILE_DATA.slice(2).map((profile, index) => (
            <BlurFade key={index} delay={(index + 2) * BLUR_FADE_DELAY}>
              <div className="overflow-hidden rounded-lg shadow-lg border-green-300 border-2">
                <div className="flex items-center p-4">
                  <Image
                    width={48}
                    height={48}
                    src={profile.socialMediaIcon}
                    alt={profile.username}
                    className="w-12 h-12 mr-4 p-1 bg-gray-50 rounded-sm"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{profile.username}</h2>
                    <p className="text-gray-600">{profile.about}</p>
                  </div>
                </div>
                <div className="p-4">
                  <a
                    href={profile.linkText}
                    className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
                  >
                    {profile.btnText}
                  </a>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </>
  );
}

export default Profiles;