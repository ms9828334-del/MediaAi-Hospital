import React from 'react';
import { Bell, Search, ShieldCheck } from 'lucide-react';

export default function Navbar({ userRole }) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0 font-sans">
      
      <div className="flex items-center gap-4 w-96">
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />

          <input
            type="text"
            placeholder="Search Patient ID, CNIC, or Doctor..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-medBlue/20"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">

        <button className="p-2 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 text-slate-600 relative">
          <Bell className="w-4 h-4" />

          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="h-8 w-px bg-slate-200"></div>

        <div className="flex items-center gap-3">

          <div className="w-9 h-9 bg-slate-900 text-white font-bold text-xs rounded-xl flex items-center justify-center">
            {userRole ? userRole[0] : 'A'}
          </div>

          <div>
            <span className="text-xs font-black text-slate-900 block">
              {userRole || 'Admin Staff'}
            </span>

            <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              Authenticated
            </span>
          </div>

        </div>
      </div>
    </header>
  );
}
