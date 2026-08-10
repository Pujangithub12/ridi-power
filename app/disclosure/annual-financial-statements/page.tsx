import PageHero from "@/components/PageHero";
import FinancialDocuments from "@/components/FinancialDocuments";
import { listFinancialDocuments, type FinancialDocument } from "@/lib/r2";
import { getSession } from "@/lib/auth";

export default async function AnnualFinancialStatementsPage() {
  let documents: FinancialDocument[] = [];
  let error: string | null = null;

  try {
    documents = await listFinancialDocuments("annual");
  } catch {
    error = "No documents available yet.";
  }

  const session = await getSession();

  return (
    <PageHero
      eyebrow="Investor Relations"
      title="Annual Financial Statements"
      description="Audited annual financial statements published by Ridi Hydropower."
    >
      <FinancialDocuments
        category="annual"
        initialDocuments={documents}
        initialError={error}
        isAdmin={!!session}
      />
    </PageHero>
  );
}
