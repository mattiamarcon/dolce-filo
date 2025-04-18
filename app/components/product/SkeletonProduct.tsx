import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

function SkeletonProduct() {
  return (
    <div className="container mx-auto px-4 py-8">
<div className="grid md:grid-cols-2 gap-8">
  <div className="space-y-4">
    <Skeleton className="h-[500px] w-full rounded-lg" />
    <div className="flex gap-2">
      <Skeleton className="h-20 w-20 rounded-md" />
      <Skeleton className="h-20 w-20 rounded-md" />
      <Skeleton className="h-20 w-20 rounded-md" />
    </div>
  </div>
  <div className="space-y-6">
    <Skeleton className="h-8 w-3/4" />
    <Skeleton className="h-6 w-1/4" />
    <Skeleton className="h-24 w-full" />
    <div className="space-y-4">
      <Skeleton className="h-8 w-1/2" />
      <div className="flex gap-2">
        <Skeleton className="h-10 w-20" />
        <Skeleton className="h-10 w-20" />
        <Skeleton className="h-10 w-20" />
      </div>
      <Skeleton className="h-8 w-1/2" />
      <div className="flex gap-2">
        <Skeleton className="h-12 w-12" />
        <Skeleton className="h-12 w-12" />
        <Skeleton className="h-12 w-12" />
        <Skeleton className="h-12 w-12" />
      </div>
    </div>
    <div className="flex gap-4 pt-4">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-12" />
    </div>
  </div>
</div>
</div>
  )
}

export default SkeletonProduct