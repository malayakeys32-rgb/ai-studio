export default function Header() {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">AI Studio</h1>
        <p className="text-sm text-gray-400">
          Multi‑tool AI workspace for text, code, and documents.
        </p>
      </div>
      <div className="flex items-center gap-3 text-sm text-gray-400">
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
        <span>Deployment: Live</span>
      </div>
    </div>
  );
}
