import PageHero from "@/components/PageHero";
import NewsAndNotice from "@/components/NewsAndNotice";
import { listNewsItems, type NewsItem } from "@/lib/news";
import { getSession } from "@/lib/auth";

export default async function NewsAndNoticePage() {
  let items: NewsItem[] = [];
  let error: string | null = null;

  try {
    items = await listNewsItems();
  } catch {
    error = "No news or notices published yet";
  }

  const session = await getSession();

  return (
    <PageHero
      eyebrow="Investor Relations"
      title="News & Notice"
      description="Official news updates and public notices from Ridi Hydropower."
    >
      <NewsAndNotice
        initialItems={items}
        initialError={error}
        isAdmin={!!session}
      />
    </PageHero>
  );
}
