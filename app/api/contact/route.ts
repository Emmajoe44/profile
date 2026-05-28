import { promises as fs } from 'fs'
import { join } from 'path'
import { NextResponse } from 'next/server'

const messagesFile = join(process.cwd(), 'data', 'messages.json')

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, subject, message } = body || {}

  if (!name || !email || !subject || !message) {
    return new NextResponse(JSON.stringify({ message: 'All fields are required.' }), { status: 422, headers: { 'Content-Type': 'application/json' } })
  }

  const current = await fs.readFile(messagesFile, 'utf8')
  const messages = JSON.parse(current)
  const nextEntry = { id: Date.now(), name, email, subject, message, createdAt: new Date().toISOString() }

  messages.push(nextEntry)
  await fs.writeFile(messagesFile, JSON.stringify(messages, null, 2), 'utf8')

  return NextResponse.json({ success: true })
}
