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

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const db = readDatabase();
  const id = params.id;

  db.contacts = db.contacts.filter((contact: any) => contact.id !== id);
  writeDatabase(db);

  return NextResponse.json({ message: 'Contact deleted' });
}
