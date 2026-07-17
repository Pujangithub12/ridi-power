import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";

const sites = [
  { href: "/about/management-team/head-office", label: "Head Office" },
  {
    href: "/about/management-team/iwa-khola-project",
    label: "Iwa Khola Project",
  },
  {
    href: "/about/management-team/ridi-khola-project",
    label: "Ridi Khola Project",
  },
  {
    href: "/about/management-team/rairang-khola-project",
    label: "Rairang Khola Project",
  },
  {
    href: "/about/management-team/butwal-solar-project",
    label: "Butwal Solar Project",
  },
];

export default function ManagementTeamPage() {
  return (
    <PageHero
      eyebrow="Governance"
      title="Management Team"
      description="The teams leading operations across our head office and active project sites."
    >
      <div className="mt-16 grid sm:grid-cols-2 gap-4">
        {sites.map((site) => (
          <Link
            key={site.href}
            href={site.href}
            className="group flex items-center justify-between p-6 rounded-xl bg-white border border-slate-200/60 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-sky-900/5 transition-all duration-300"
          >
            <span className="font-bold text-sky-900 font-mono text-xs uppercase tracking-widest">
              {site.label}
            </span>
            <ArrowUpRight className="w-4 h-4 text-cyan-500 opacity-0 group-hover:opacity-100 -translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200" />
          </Link>
        ))}
      </div>
    </PageHero>
  );
}
