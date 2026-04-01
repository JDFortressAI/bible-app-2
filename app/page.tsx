import { redirect } from 'next/navigation';
import { todaySlug } from '@/lib/mcheyne';

// Recalculate "today" on every request — don't cache this route
export const dynamic = 'force-dynamic';

export default function Home() {
  redirect(`/${todaySlug()}`);
}
