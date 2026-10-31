import {
  Bell,
  Laptop,
  Monitor,
  Smartphone,
  Tablet,
  Watch,
  Zap,
} from 'lucide-react';

const devices = [
  {
    icon: Laptop,
    name: 'Laptop',
    role: 'Dashboard',
    detail: 'Sales + leads live',
  },
  {
    icon: Tablet,
    name: 'Tablet',
    role: 'Reports',
    detail: 'Weekly performance',
  },
  {
    icon: Smartphone,
    name: 'Phone',
    role: 'Alerts',
    detail: 'Naya lead foran',
  },
  {
    icon: Watch,
    name: 'Watch',
    role: 'Notify',
    detail: 'Instant update',
  },
];

const workflow = [
  { label: 'Meta Ads', status: 'Running' },
  { label: 'New Lead', status: 'Captured' },
  { label: 'Email Sent', status: 'Delivered' },
  { label: 'Sale', status: 'Closed' },
];

export default function AutomationFlow() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-sky-100/60">
      <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-pink-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          <span className="ml-3 text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">
            Automation Console
          </span>
        </div>
        <span className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-700">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
          Live
        </span>
      </div>

      <div className="grid gap-5 p-5 sm:p-8 lg:grid-cols-[1.15fr_0.45fr_1fr] lg:items-center lg:gap-3">
        <div className="rounded-2xl border border-slate-200 bg-sky-50/60 p-5">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                <Monitor size={18} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Main Screen
                </p>
                <p className="text-sm font-semibold text-slate-900">AI Automation</p>
              </div>
            </div>
            <Zap size={16} strokeWidth={1.5} className="text-sky-500" aria-hidden="true" />
          </div>

          <div className="space-y-2.5">
            {workflow.map((step, index) => (
              <div
                key={step.label}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-sky-200 bg-sky-50 text-[10px] font-bold text-sky-700">
                    {index + 1}
                  </span>
                  <span className="text-xs font-medium text-slate-700">{step.label}</span>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700">
                  {step.status}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-end gap-1.5" aria-hidden="true">
            {[35, 50, 42, 65, 58, 78, 70, 92].map((height, index) => (
              <span
                key={index}
                style={{ height: `${height * 0.4}px` }}
                className={
                  index === 7
                    ? 'w-full rounded-sm bg-gradient-to-t from-pink-200 to-pink-400'
                    : 'w-full rounded-sm bg-gradient-to-t from-sky-200 to-sky-500'
                }
              />
            ))}
          </div>
          <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
            Running 24/7 — bina manual kaam
          </p>
        </div>

        <div className="hidden h-full min-h-[280px] lg:block" aria-hidden="true">
          <svg viewBox="0 0 120 400" preserveAspectRatio="none" className="h-full w-full">
            <defs>
              <marker
                id="flow-arrow"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#0EA5E9" />
              </marker>
            </defs>
            {[50, 150, 250, 350].map((y) => (
              <path
                key={y}
                d={`M 0 200 C 55 200, 65 ${y}, 116 ${y}`}
                fill="none"
                stroke="#0EA5E9"
                strokeOpacity="0.55"
                strokeWidth="1.5"
                strokeDasharray="5 6"
                markerEnd="url(#flow-arrow)"
                vectorEffect="non-scaling-stroke"
                className="flow-line"
              />
            ))}
          </svg>
        </div>

        <div className="flex justify-center lg:hidden" aria-hidden="true">
          <div className="h-7 w-px border-l border-dashed border-sky-300" />
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
          {devices.map((device) => {
            const Icon = device.icon;
            return (
              <div
                key={device.name}
                className="group flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 transition-colors hover:border-sky-300 hover:bg-sky-50/40 lg:flex-row lg:items-center lg:gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                  <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-900">{device.name}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                    {device.role}
                  </p>
                  <p className="mt-1 truncate text-[11px] text-slate-600">{device.detail}</p>
                </div>
                <span className="hidden h-2 w-2 shrink-0 rounded-full bg-emerald-500 lg:block" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-slate-200 bg-sky-50/40 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
        <span className="flex items-center gap-1.5">
          <Bell size={12} strokeWidth={1.5} aria-hidden="true" /> Instant alerts
        </span>
        <span>Central system → 4 devices</span>
        <span>100% transparent results</span>
      </div>
    </div>
  );
}
