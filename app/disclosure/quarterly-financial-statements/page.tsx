import PageHero from "@/components/PageHero";
import FinancialDocuments from "@/components/FinancialDocuments";
import { listFinancialDocuments, type FinancialDocument } from "@/lib/r2";

export default async function QuarterlyFinancialStatementsPage() {
  let documents: FinancialDocument[] = [];
  let error: string | null = null;

  try {
    documents = await listFinancialDocuments("quarterly");
  } catch {
    error = "No documents available yet.";
  }

  return (
    <PageHero
      eyebrow="Investor Relations"
      title="Quarterly Financial Statements"
      description="Unaudited quarterly financial statements published by Ridi Hydropower."
    >
      <FinancialDocuments
        category="quarterly"
        initialDocuments={documents}
        initialError={error}
      />
    </PageHero>
  );
}
