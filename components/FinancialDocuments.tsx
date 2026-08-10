"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Download,
  FileText,
  Loader2,
  Lock,
  Upload,
  X,
} from "lucide-react";

type DocumentCategory = "annual" | "quarterly";

type FinancialDocument = {
  key: string;
  name: string;
  size: number;
  uploadedAt: string;
};

function formatSize(bytes: number): string {
  if (!bytes) return "";
  const units = ["B", "KB", "MB", "GB"];
  let size = bytes;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }
  return `${size.toFixed(1)} ${units[unitIndex]}`;
}

export default function FinancialDocuments({
  category,
  initialDocuments = [],
  initialError,
  isAdmin = false,
}: {
  category: DocumentCategory;
  initialDocuments?: FinancialDocument[];
  initialError?: string | null;
  isAdmin?: boolean;
}) {
  const [documents, setDocuments] = useState<FinancialDocument[]>(
    initialDocuments
  );
  const [listError, setListError] = useState<string | null>(
    initialError ?? null
  );
  const [refreshing, setRefreshing] = useState(false);

  const [showUpload, setShowUpload] = useState(false);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  useEffect(() => {
    if (!showUpload) return;
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeUpload();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showUpload]);

  function openUpload() {
    setTitle("");
    setFile(null);
    setUploadError(null);
    setUploadSuccess(false);
    setShowUpload(true);
  }

  function closeUpload() {
    setShowUpload(false);
  }

  async function refreshDocuments() {
    setRefreshing(true);
    setListError(null);
    try {
      const res = await fetch(`/api/documents?category=${category}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load documents");
      setDocuments(data.documents);
    } catch (err) {
      setListError(
        err instanceof Error ? err.message : "Failed to load documents"
      );
    } finally {
      setRefreshing(false);
    }
  }

  async function handleUpload(event: FormEvent) {
    event.preventDefault();
    if (!file) return;

    setUploading(true);
    setUploadError(null);
    setUploadSuccess(false);

    const formData = new FormData();
    formData.append("category", category);
    formData.append("title", title);
    formData.append("file", file);

    try {
      const res = await fetch("/api/documents", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");
      setUploadSuccess(true);
      setTitle("");
      setFile(null);
      await refreshDocuments();
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="mt-16 space-y-8">
      <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
        {refreshing ? (
          <div className="p-10 text-center text-xs text-slate-400 font-mono uppercase tracking-widest">
            Refreshing documents...
          </div>
        ) : documents.length === 0 ? (
          <div className="p-10 text-center text-xs text-slate-400 font-mono uppercase tracking-widest">
            {listError ?? "No documents available yet"}
          </div>
        ) : (
          <ul className="divide-y divide-slate-100">
            {documents.map((doc) => (
              <li
                key={doc.key}
                className="flex items-center justify-between gap-4 p-5 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-sky-900 flex items-center justify-center text-cyan-400 shrink-0">
                    <FileText className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-800 truncate">
                      {doc.name}
                    </p>
                    <p className="text-xs text-slate-400">
                      {doc.uploadedAt
                        ? new Date(doc.uploadedAt).toLocaleDateString()
                        : ""}
                      {doc.size ? ` · ${formatSize(doc.size)}` : ""}
                    </p>
                  </div>
                </div>
                <a
                  href={`/api/documents/download?key=${encodeURIComponent(
                    doc.key
                  )}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-900 text-white text-xs font-bold hover:bg-cyan-600 transition-colors shrink-0"
                >
                  <Download className="w-3.5 h-3.5" strokeWidth={2} />
                  Download
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {isAdmin && (
        <button
          type="button"
          onClick={openUpload}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-600 hover:text-cyan-700 font-mono"
        >
          <Lock className="w-3.5 h-3.5" strokeWidth={2} />
          Upload document
        </button>
      )}

      {isAdmin && showUpload && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
          onClick={closeUpload}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="upload-dialog-title"
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 relative"
          >
            <button
              type="button"
              onClick={closeUpload}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div
              id="upload-dialog-title"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 font-mono mb-6"
            >
              <Lock className="w-3.5 h-3.5" strokeWidth={2} />
              Upload document
            </div>

            <form onSubmit={handleUpload} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                  Document title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. FY 2025 Annual Report"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                  PDF file
                </label>
                <input
                  type="file"
                  accept="application/pdf"
                  required
                  onChange={(event) =>
                    setFile(event.target.files?.[0] ?? null)
                  }
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 bg-white text-sm file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:bg-sky-900 file:text-white file:text-xs file:font-bold"
                />
              </div>

              <button
                type="submit"
                disabled={uploading || !file || !title}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-600 text-white text-xs font-bold uppercase tracking-widest hover:bg-cyan-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {uploading ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Upload className="w-3.5 h-3.5" strokeWidth={2} />
                )}
                {uploading ? "Uploading..." : "Upload document"}
              </button>

              {uploadError && (
                <p className="flex items-center gap-2 text-xs text-red-500">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {uploadError}
                </p>
              )}
              {uploadSuccess && (
                <p className="flex items-center gap-2 text-xs text-emerald-600">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" /> Document
                  uploaded successfully
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
