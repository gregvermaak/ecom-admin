"use client"

import { FC } from "react"
import { Plus } from "lucide-react"
import { Billboard } from "@prisma/client"

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { useParams, useRouter } from "next/navigation"

interface BillboardClientProps {
  data: Billboard[]
}

export const BillboardClient: FC<BillboardClientProps> = ({ data }) => {
  const router = useRouter()
  const params = useParams()

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage billboards for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
    </>
  )
}
