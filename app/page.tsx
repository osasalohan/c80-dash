"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";

import Card from "@/components/Card";
import BarChart from "@/components/BarChart";
import AreaChart from "@/components/AreaChart";
import PieChart from "@/components/PieChart";

import { useStore } from "../store/useStore";
import ProgressBar from "@/components/ProgressBar";

const colors = ["#FCB859", "#A9DFD8", "#28AEF3", "#F2C8ED"];

export default function Home() {
  const { users, posts, comments, albums, photos, todos, fetchData } =
    useStore();

  useEffect(() => {
    console.log({ users, posts, comments, albums, photos, todos });
    fetchData();
  }, [fetchData]);

  const barChartData = useMemo(
    () =>
      comments.reduce(
        (acc: { postId: number; comment: number; post: number }[], curr) => {
          const existingPost = acc.find((item) => item.postId === curr.postId);
          if (existingPost) {
            existingPost.comment += 1;
          } else {
            acc.push({ postId: curr.postId, comment: 1, post: 1 });
          }
          return acc;
        },
        []
      ),
    [comments]
  );

  return (
    <div className="bg-black text-white font-inter font-medium min-h-screen flex justify-center p-4">
      <main className="grow max-w-[757px]">
        <header className="relative mb-[23px]">
          <input
            className="bg-coal rounded-[8px] w-full p-[14.5px] pl-[35px] text-input text-[#D2D2D2] placeholder-[#D2D2D2]"
            type="text"
            placeholder="Search here..."
          />
          <Image
            src="/search.svg"
            alt="search"
            className="absolute bottom-4 left-4"
            width={13}
            height={13}
          />
        </header>
        <div className="flex gap-x-[14px] mb-[14px]">
          <div className="w-fit bg-coal rounded-[10px] px-[14px] py-5">
            <h2 className="text-header mb-[5px]">Welcome, Jonas</h2>
            <p className="text-small text-[#A0A0A0] mb-5">Summary</p>
            <div className="grid grid-cols-4 gap-x-5">
              <Card
                image="/posts.svg"
                summary={posts.length}
                text="Total Posts"
              />
              <Card
                image="/comments.svg"
                summary={comments.length}
                text="Total Comments"
              />
              <Card
                image="/albums.svg"
                summary={albums.length}
                text="Total Albums"
              />
              <Card
                image="/photos.svg"
                summary={photos.length}
                text="Total Photos"
              />
            </div>
          </div>
          <div className="grow bg-coal rounded-[10px] pt-[14px] pb-1 px-[14px] flex flex-col items-center">
            <h2 className="text-header mb-[22px]">Posts By Comment Volume</h2>
            <BarChart data={barChartData} />
          </div>
        </div>
        <div className="w-full bg-coal rounded-[10px] pt-[14px] pb-2 mb-[14px]">
          <h2 className="text-header mb-[19px] pl-[21px]">
            Top Users By Album
          </h2>
          <table className="w-full table-auto text-left">
            <thead className="text-table text-[#87888C]">
              <tr className="border-0 border-b border-white border-opacity-[6%]">
                <th className="pb-2.5 pl-[31.5px] pr-[79.5px]">#</th>
                <th className="pb-2.5 pr-[91.5px]">Name</th>
                <th className="pb-2.5 pr-[54px]">Photos</th>
                <th className="pb-2.5 pr-[42px]">Albums</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr
                  className="border-b border-white border-opacity-[6%] last:border-0"
                  key={user.id}
                >
                  <td className="pt-2 pb-2.5 last:pb-0 pl-[27px] pr-[75px]">
                    {user.id.toLocaleString("en-US", {
                      minimumIntegerDigits: 2,
                    })}
                  </td>
                  <td className="pt-2 pb-2.5 last:pb-0 text-small pr-[91.5px]">
                    {user.name}
                  </td>
                  <td className="pt-2 pb-2.5 last:pb-0 pr-[54px]">
                    <ProgressBar
                      color={colors[i % colors.length]}
                      progress={
                        (photos.filter((photo) =>
                          albums
                            .filter((album) => album.userId === user.id)
                            .map((album) => album.id)
                            .includes(photo.albumId)
                        ).length /
                          photos.length) *
                        100
                      }
                    />
                  </td>
                  <td className="pb-2.5 last:pb-0 pr-[36px]">
                    <div className="flex items-center">
                      <div
                        className={`border-[0.5px] border-[${
                          colors[i % colors.length]
                        }] bg-[${
                          colors[i % colors.length]
                        }] bg-opacity-[12%] rounded-[4px] py-[5px] px-[12px] w-[57px] h-[22px] text-small text-[${
                          colors[i % colors.length]
                        }]`}
                      >
                        {
                          albums.filter((album) => album.userId === user.id)
                            .length
                        }
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex gap-x-[14px] mb-[14px]">
          <div className="w-[238px] bg-coal rounded-[10px] p-[14px] relative overflow-hidden">
            <h2 className="text-header mb-[5px]">Todo</h2>
            <p className="text-small text-[#87888C] mb-[9px]">Total Todos</p>
            <h3 className="text-large text-[#A9DFD8] mb-[9px]">
              {todos.length}
            </h3>
            <p className="text-medium text-[#87888C] mb-[7px]">
              Completed Todos / Total
            </p>
            <div className="w-full h-[170px] absolute bottom-[-48px] left-[-6px]">
              <PieChart
                value={todos.filter((todo) => todo.completed).length}
                max={todos.length}
              />
            </div>
          </div>
          <div className="grow bg-coal rounded-[10px] pt-[14px] pl-[14px] pb-[15px] h-[247px]">
            <h2 className="text-header mb-[25px]">Post Insights</h2>
            <div className="w-full h-[175px]">
              <AreaChart />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
