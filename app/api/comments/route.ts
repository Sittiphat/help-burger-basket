import { NextRequest, NextResponse } from "next/server";
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../../lib/firebase";

export async function GET() {
  try {
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const comments = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        name: data.name,
        content: data.content,
        createdAt: (data.createdAt as Timestamp)?.toDate().toISOString() ?? new Date().toISOString(),
      };
    });
    return NextResponse.json({ comments });
  } catch (err) {
    console.error("GET /api/comments error:", err);
    return NextResponse.json({ error: "Failed to load comments" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, content } = await req.json();

    if (!name?.trim() || !content?.trim()) {
      return NextResponse.json({ error: "Name and comment are required" }, { status: 400 });
    }
    if (name.trim().length > 100) {
      return NextResponse.json({ error: "Name too long" }, { status: 400 });
    }
    if (content.trim().length > 2000) {
      return NextResponse.json({ error: "Comment too long (max 2000 characters)" }, { status: 400 });
    }

    const docRef = await addDoc(collection(db, "comments"), {
      name: name.trim(),
      content: content.trim(),
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({ id: docRef.id }, { status: 201 });
  } catch (err) {
    console.error("POST /api/comments error:", err);
    return NextResponse.json({ error: "Failed to post comment" }, { status: 500 });
  }
}
