import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'public', 'db.json');

function readDatabase() {
  try {
    const data = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch {
    return { contacts: [] };
  }
}

function writeDatabase(data: any) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

export async function GET() {
  const db = readDatabase();
  return NextResponse.json(db);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const db = readDatabase();

  const newContact = {
    id: Date.now().toString(),
    ...body,
    fecha: new Date().toLocaleDateString('es-ES'),
  };

  db.contacts.push(newContact);
  writeDatabase(db);

  return NextResponse.json(newContact, { status: 201 });
}
