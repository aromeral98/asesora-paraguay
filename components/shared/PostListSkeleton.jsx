import React from 'react'

export default function PostListSkeleton() {
  const postList = new Array(6).fill(0)
  const postSkeleton = postList.map((_, index) => { return <div key={index} className='h-100 mx-auto anim group hover:no-underline focus:no-underline dark:bg-gray-900 lg:w-[300px] xl:min-w-[375px] rounded-2xl overflow-hidden shadow-lg skeletonAnimation'></div> })

  return (
    <article className="container p-12 mx-auto space-y-6 sm:space-y-12">
      <section className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {postSkeleton}
      </section>
    </article>
  )
}
