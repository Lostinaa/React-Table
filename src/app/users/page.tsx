import { User, columns } from "./columns"
import { DataTable } from '@/components/data-table'

async function getUsers(): Promise<User[]> {
  // Fetch data from your API here.
 const res = await fetch(
  'https://67ebed3faa794fb3222c25b1.mockapi.io/users'
 )
 const data = await res.json()
 return data
}

export default async function Page() {
  const data = await getUsers()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
