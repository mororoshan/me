import { useParams } from 'react-router-dom'

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  return (
    <div>
      <h1>Project</h1>
      <p>ID: {id ?? '—'}</p>
    </div>
  )
}
