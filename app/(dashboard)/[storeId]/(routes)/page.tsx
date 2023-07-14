import prismadb from "@/lib/prismadb"
import { FC } from "react"

interface DashboardPageProps {
  params: { storeId: string }
}

const page: FC<DashboardPageProps> = async ({ params }) => {
  return (
    <div className="flex-col">
      <div></div>
    </div>
  )
}

export default page
