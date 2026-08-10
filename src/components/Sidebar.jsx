import React from 'react';
import {
  LayoutDashboard,
  Users,
  UserPlus,
  Stethoscope,
  Syringe,
  FlaskConical,
  Bot,
  FileSpreadsheet,
  Settings,
  LogOut,
  HeartPulse
} from 'lucide-react';

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard
    },
    {
      id: 'patients',
      label: 'Patients',
      icon: Users
    },
    {
      id: 'add-patient',
      label: 'Admit Patient',
      icon: UserPlus
    },
    {
      id: 'doctor',
      label: 'Doctor Panel',
      icon: Stethoscope
    },
    {
      id: 'nurse',
      label: 'Nurse Station',
      icon: Syringe
    },
    {
      id: 'laboratory',
      label: 'Laboratory',
      icon: FlaskConical
    },
    {
      id: 'ai-assistant',
      label: 'MediAI Assistant',
      icon: Bot
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: FileSpreadsheet
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings
    }
  ];

  return (
    <aside className="w-64 bg-slate-950 text-white flex flex-col shrink-0 font-sans">
      
      {/* Logo */}
      <div className="h-16 px-5 flex items-center gap-3 border-b border-slate-800">
        <div className="w-9 h-9 bg-medBlue rounded-xl flex items-center justify-center shadow-lg">
          <HeartPulse className="w-5 h-5 text-white" />
        </div>

        <div>
          <h1 className="text-sm font-black tracking-tight">
            MediAI-Hospital
          </h1>
          <p className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">
            Clinical System
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        <p className="px-3 pt-2 pb-3 text-[9px] font-black text-slate-500 uppercase tracking-widest">
          Main Navigation
        </p>

        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-xs font-bold transition-all ${
                isActive
                  ? 'bg-medBlue text-white shadow-md'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* System Status */}
      <div className="px-4 pb-4">
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span className="text-[10px] font-bold text-emerald-400">
              System Operational
            </span>
          </div>

          <p className="text-[9px] text-slate-500 mt-1">
            All clinical services online
          </p>
        </div>
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-slate-800">
        <button
          onClick={() => window.location.reload()}
          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-xs font-bold text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all"
        >
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
