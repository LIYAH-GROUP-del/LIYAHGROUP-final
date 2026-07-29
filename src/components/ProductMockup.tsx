import {
  Search, Bell, Settings, Plus, TrendingUp, TrendingDown, Users, DollarSign,
  ShoppingCart, Package, CheckCircle, Clock, Star, Calendar, Filter, MoreHorizontal,
  ArrowUpRight, Activity, Heart, GraduationCap, Stethoscope, Calculator, Building2,
  PiggyBank, Boxes, MessageSquare, ChevronRight, Download,
} from 'lucide-react';

interface MockupProps {
  type: string;
  productName: string;
  accent: string;
}

export default function ProductMockup({ type, productName, accent }: MockupProps) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-300/40 bg-white">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 mx-4 bg-white rounded-md px-3 py-1 text-xs text-slate-400 border border-slate-200 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          app.liafrik.com / {productName.toLowerCase().replace(/\s+/g, '-')}
        </div>
      </div>

      {/* App body */}
      <div className="flex h-[420px]">
        {/* Sidebar */}
        <div className="w-48 bg-slate-900 flex flex-col flex-shrink-0">
          <div className="flex items-center gap-2 px-4 py-4 border-b border-slate-800">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${accent} flex items-center justify-center flex-shrink-0`}>
              <Boxes size={16} className="text-white" strokeWidth={2} />
            </div>
            <span className="text-white text-sm font-bold">LiAfrik</span>
          </div>
          <nav className="flex-1 py-4">
            {[
              { icon: Activity, label: 'Dashboard', active: true },
              { icon: Users, label: 'Contacts' },
              { icon: ShoppingCart, label: 'Orders' },
              { icon: Package, label: 'Products' },
              { icon: DollarSign, label: 'Finance' },
              { icon: Settings, label: 'Settings' },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-4 py-2.5 text-xs ${
                  item.active ? 'bg-secondary-600/20 text-secondary-400 border-l-2 border-secondary-500' : 'text-slate-400'
                }`}
              >
                <item.icon size={14} strokeWidth={1.5} />
                {item.label}
              </div>
            ))}
          </nav>
          <div className="px-4 py-3 border-t border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-secondary-500 to-accent-500" />
              <div>
                <p className="text-white text-xs font-medium">Admin User</p>
                <p className="text-slate-500 text-[10px]">Pro Plan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-hidden">
          {renderMockupContent(type, accent)}
        </div>
      </div>
    </div>
  );
}

function renderMockupContent(type: string, accent: string) {
  switch (type) {
    case 'dashboard': return <DashboardMockup accent={accent} />;
    case 'learning': return <LearningMockup accent={accent} />;
    case 'pos': return <POSMockup accent={accent} />;
    case 'wellness': return <WellnessMockup accent={accent} />;
    case 'hr': return <HRMockup accent={accent} />;
    case 'health': return <HealthMockup accent={accent} />;
    case 'crm': return <CRMMockup accent={accent} />;
    case 'accounting': return <AccountingMockup accent={accent} />;
    case 'school': return <SchoolMockup accent={accent} />;
    case 'realestate': return <RealEstateMockup accent={accent} />;
    case 'tontine': return <TontineMockup accent={accent} />;
    case 'ecommerce': return <EcommerceMockup accent={accent} />;
    default: return <DashboardMockup accent={accent} />;
  }
}

function TopBar({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b border-slate-100">
      <h2 className="text-sm font-bold text-slate-800">{title}</h2>
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input className="pl-8 pr-3 py-1.5 text-xs border border-slate-200 rounded-lg w-48 bg-slate-50" placeholder="Search..." readOnly />
        </div>
        <Bell size={16} className="text-slate-400" />
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-secondary-500 to-accent-500" />
      </div>
    </div>
  );
}

function StatCard({ label, value, change, up, icon: Icon, accent }: { label: string; value: string; change: string; up: boolean; icon: typeof Users; accent: string }) {
  return (
    <div className="bg-white border border-slate-100 rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${accent} flex items-center justify-center`}>
          <Icon size={14} className="text-white" strokeWidth={1.5} />
        </div>
        <span className={`text-xs font-bold flex items-center gap-0.5 ${up ? 'text-green-600' : 'text-red-500'}`}>
          {up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {change}
        </span>
      </div>
      <p className="text-xl font-bold text-slate-900">{value}</p>
      <p className="text-xs text-slate-400">{label}</p>
    </div>
  );
}

function DashboardMockup({ accent }: { accent: string }) {
  return (
    <div>
      <TopBar title="Dashboard Overview" />
      <div className="p-6 space-y-5">
        <div className="grid grid-cols-4 gap-4">
          <StatCard label="Total Revenue" value="$48,250" change="+12.5%" up icon={DollarSign} accent={accent} />
          <StatCard label="Active Users" value="1,842" change="+8.2%" up icon={Users} accent={accent} />
          <StatCard label="Orders" value="326" change="+5.4%" up icon={ShoppingCart} accent={accent} />
          <StatCard label="Conversion" value="4.2%" change="-1.2%" up={false} icon={Activity} accent={accent} />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 bg-white border border-slate-100 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold text-slate-700">Revenue Analytics</h3>
              <div className="flex gap-2">
                <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-500">7D</span>
                <span className="text-[10px] bg-secondary-600 px-2 py-1 rounded text-white">30D</span>
                <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-500">12M</span>
              </div>
            </div>
            <div className="flex items-end gap-2 h-32">
              {[40, 65, 50, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className={`w-full rounded-t bg-gradient-to-t ${accent}`} style={{ height: `${h}%` }} />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white border border-slate-100 rounded-xl p-5">
            <h3 className="text-xs font-bold text-slate-700 mb-3">Module Activity</h3>
            <div className="space-y-2.5">
              {[
                { name: 'CRM', val: 82, color: 'bg-sky-500' },
                { name: 'POS Commerce', val: 65, color: 'bg-orange-500' },
                { name: 'OS E-Commerce', val: 48, color: 'bg-cyan-500' },
                { name: 'Libooks', val: 35, color: 'bg-green-500' },
              ].map((m) => (
                <div key={m.name}>
                  <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                    <span>{m.name}</span><span>{m.val}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full">
                    <div className={`h-full rounded-full ${m.color}`} style={{ width: `${m.val}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LearningMockup({ accent }: { accent: string }) {
  return (
    <div>
      <TopBar title="My Courses" />
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-xl overflow-hidden">
              <div className={`h-20 bg-gradient-to-br ${accent} flex items-center justify-center`}>
                <GraduationCap size={24} className="text-white" />
              </div>
              <div className="p-3">
                <h4 className="text-xs font-bold text-slate-800 mb-1">Course Module {i}</h4>
                <div className="h-1.5 bg-slate-100 rounded-full mb-2">
                  <div className={`h-full rounded-full bg-gradient-to-r ${accent}`} style={{ width: `${60 + i * 10}%` }} />
                </div>
                <p className="text-[10px] text-slate-400">{60 + i * 10}% complete</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white border border-slate-100 rounded-xl p-5">
          <h3 className="text-xs font-bold text-slate-700 mb-3">Learning Progress</h3>
          <div className="space-y-2">
            {['Digital Marketing 101', 'Financial Literacy', 'Web Development Basics'].map((c, i) => (
              <div key={c} className="flex items-center gap-3 py-2 border-b border-slate-50 last:border-b-0">
                <CheckCircle size={14} className={i < 2 ? 'text-green-500' : 'text-slate-300'} />
                <span className="text-xs text-slate-700 flex-1">{c}</span>
                <span className="text-[10px] text-slate-400">{i < 2 ? 'Completed' : 'In progress'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function POSMockup({ accent }: { accent: string }) {
  return (
    <div>
      <TopBar title="Point of Sale" />
      <div className="p-6 grid grid-cols-2 gap-4 h-full">
        <div>
          <h3 className="text-xs font-bold text-slate-700 mb-3">Products</h3>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-lg p-2 text-center">
                <div className={`w-full h-12 rounded bg-gradient-to-br ${accent} opacity-80 mb-1`} />
                <p className="text-[10px] font-bold text-slate-700">Item {i}</p>
                <p className="text-[10px] text-slate-400">${(i * 5).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white border border-slate-100 rounded-xl p-4 flex flex-col">
          <h3 className="text-xs font-bold text-slate-700 mb-3">Current Order</h3>
          <div className="flex-1 space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between text-xs">
                <span className="text-slate-600">Item {i} x2</span>
                <span className="font-bold text-slate-800">${(i * 10).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-100 pt-3 mt-3">
            <div className="flex justify-between text-xs mb-1"><span className="text-slate-400">Subtotal</span><span className="font-bold">$90.00</span></div>
            <div className="flex justify-between text-xs mb-1"><span className="text-slate-400">Tax</span><span className="font-bold">$7.20</span></div>
            <div className="flex justify-between text-sm font-bold mt-2"><span>Total</span><span>$97.20</span></div>
            <button className={`mt-3 w-full bg-gradient-to-r ${accent} text-white text-xs font-bold py-2.5 rounded-lg`}>Charge $97.20</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function WellnessMockup({ accent }: { accent: string }) {
  return (
    <div>
      <TopBar title="My Wellness" />
      <div className="p-6 space-y-4">
        <div className="bg-white border border-slate-100 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold text-slate-700">Cycle Calendar</h3>
            <Heart size={14} className="text-pink-500" />
          </div>
          <div className="grid grid-cols-7 gap-1.5">
            {Array.from({ length: 28 }).map((_, i) => {
              const isPeriod = i >= 0 && i <= 4;
              const isFertile = i >= 12 && i <= 16;
              return (
                <div
                  key={i}
                  className={`aspect-square rounded-lg text-[9px] flex items-center justify-center font-bold ${
                    isPeriod ? 'bg-pink-500 text-white' : isFertile ? 'bg-purple-100 text-purple-600' : 'bg-slate-50 text-slate-400'
                  }`}
                >
                  {i + 1}
                </div>
              );
            })}
          </div>
          <div className="flex gap-4 mt-3">
            <span className="flex items-center gap-1.5 text-[10px] text-slate-500"><div className="w-2 h-2 rounded-full bg-pink-500" /> Period</span>
            <span className="flex items-center gap-1.5 text-[10px] text-slate-500"><div className="w-2 h-2 rounded-full bg-purple-300" /> Fertile</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white border border-slate-100 rounded-xl p-4">
            <p className="text-[10px] text-slate-400">Cycle Day</p>
            <p className="text-lg font-bold text-slate-900">Day 14</p>
          </div>
          <div className="bg-white border border-slate-100 rounded-xl p-4">
            <p className="text-[10px] text-slate-400">Next Period</p>
            <p className="text-lg font-bold text-slate-900">14 days</p>
          </div>
          <div className="bg-white border border-slate-100 rounded-xl p-4">
            <p className="text-[10px] text-slate-400">Avg Cycle</p>
            <p className="text-lg font-bold text-slate-900">28 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HRMockup({ accent }: { accent: string }) {
  return (
    <div>
      <TopBar title="Employee Management" />
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-4 gap-3">
          <StatCard label="Employees" value="124" change="+3" up icon={Users} accent={accent} />
          <StatCard label="On Leave" value="8" change="+2" up icon={Calendar} accent={accent} />
          <StatCard label="Payroll" value="$62K" change="+5%" up icon={DollarSign} accent={accent} />
          <StatCard label="Pending" value="5" change="-2" up={false} icon={Clock} accent={accent} />
        </div>
        <div className="bg-white border border-slate-100 rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-slate-700">Employee Directory</h3>
            <button className={`flex items-center gap-1 text-[10px] bg-gradient-to-r ${accent} text-white px-2 py-1 rounded`}>
              <Plus size={10} /> Add
            </button>
          </div>
          <div className="space-y-2">
            {[
              { name: 'Aminata Diallo', role: 'Sales Manager', dept: 'Sales', status: 'Active' },
              { name: 'Kwame Mensah', role: 'Developer', dept: 'Engineering', status: 'Active' },
              { name: 'Fatima Bello', role: 'HR Officer', dept: 'HR', status: 'On Leave' },
              { name: 'Jean-Paul Kouam', role: 'Accountant', dept: 'Finance', status: 'Active' },
            ].map((e) => (
              <div key={e.name} className="flex items-center gap-3 py-2 border-b border-slate-50 last:border-b-0">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center text-white text-[10px] font-bold`}>
                  {e.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-800">{e.name}</p>
                  <p className="text-[10px] text-slate-400">{e.role} · {e.dept}</p>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${e.status === 'Active' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                  {e.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HealthMockup({ accent }: { accent: string }) {
  return (
    <div>
      <TopBar title="Patient Management" />
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-4 gap-3">
          <StatCard label="Patients" value="3,420" change="+48" up icon={Users} accent={accent} />
          <StatCard label="Appointments" value="86" change="+12" up icon={Calendar} accent={accent} />
          <StatCard label="Waiting" value="14" change="+3" up icon={Clock} accent={accent} />
          <StatCard label="Revenue" value="$12.4K" change="+8%" up icon={DollarSign} accent={accent} />
        </div>
        <div className="bg-white border border-slate-100 rounded-xl p-5">
          <h3 className="text-xs font-bold text-slate-700 mb-3">Today's Appointments</h3>
          <div className="space-y-2">
            {[
              { time: '09:00', name: 'Patient #1042', doc: 'Dr. Kamara', type: 'Consultation' },
              { time: '10:30', name: 'Patient #1043', doc: 'Dr. Bello', type: 'Follow-up' },
              { time: '11:00', name: 'Patient #1044', doc: 'Dr. Kamara', type: 'Lab Results' },
            ].map((a) => (
              <div key={a.time} className="flex items-center gap-3 py-2 border-b border-slate-50 last:border-b-0">
                <span className="text-xs font-bold text-slate-700 w-12">{a.time}</span>
                <Stethoscope size={14} className="text-slate-400" />
                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-800">{a.name}</p>
                  <p className="text-[10px] text-slate-400">{a.doc} · {a.type}</p>
                </div>
                <span className="text-[10px] bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full">Confirmed</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CRMMockup({ accent }: { accent: string }) {
  return (
    <div>
      <TopBar title="Sales Pipeline" />
      <div className="p-6">
        <div className="grid grid-cols-4 gap-3">
          {[
            { stage: 'New Leads', count: 24, color: 'bg-sky-100' },
            { stage: 'Qualified', count: 18, color: 'bg-blue-100' },
            { stage: 'Proposal', count: 12, color: 'bg-amber-100' },
            { stage: 'Won', count: 8, color: 'bg-green-100' },
          ].map((col) => (
            <div key={col.stage} className="bg-slate-50 rounded-xl p-3">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-700">{col.stage}</span>
                <span className={`text-[10px] ${col.color} px-2 py-0.5 rounded-full font-bold text-slate-600`}>{col.count}</span>
              </div>
              <div className="space-y-2">
                {[1, 2].map((j) => (
                  <div key={j} className="bg-white border border-slate-100 rounded-lg p-2.5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center text-white text-[8px] font-bold`}>
                        {String.fromCharCode(64 + j)}
                      </div>
                      <span className="text-[10px] font-bold text-slate-700">Lead #{100 + j}</span>
                    </div>
                    <p className="text-[9px] text-slate-400 mb-1">Company Name Ltd</p>
                    <div className="flex items-center gap-1">
                      <Star size={8} className="text-yellow-400" />
                      <Star size={8} className="text-yellow-400" />
                      <Star size={8} className="text-yellow-400" />
                      <Star size={8} className="text-slate-200" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AccountingMockup({ accent }: { accent: string }) {
  return (
    <div>
      <TopBar title="Financial Overview" />
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-4 gap-3">
          <StatCard label="Revenue" value="$84.2K" change="+12%" up icon={TrendingUp} accent={accent} />
          <StatCard label="Expenses" value="$52.1K" change="+4%" up={false} icon={TrendingDown} accent={accent} />
          <StatCard label="Net Profit" value="$32.1K" change="+18%" up icon={DollarSign} accent={accent} />
          <StatCard label="Outstanding" value="$8.4K" change="-6%" up icon={Clock} accent={accent} />
        </div>
        <div className="bg-white border border-slate-100 rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold text-slate-700">Recent Invoices</h3>
            <Calculator size={14} className="text-slate-400" />
          </div>
          <div className="space-y-2">
            {[
              { id: 'INV-1042', client: 'Client Name A', amount: '$1,200', status: 'Paid' },
              { id: 'INV-1041', client: 'Client Name B', amount: '$3,400', status: 'Pending' },
              { id: 'INV-1040', client: 'Client Name C', amount: '$890', status: 'Paid' },
            ].map((inv) => (
              <div key={inv.id} className="flex items-center gap-3 py-2 border-b border-slate-50 last:border-b-0">
                <span className="text-[10px] font-mono text-slate-500">{inv.id}</span>
                <span className="text-xs text-slate-700 flex-1">{inv.client}</span>
                <span className="text-xs font-bold text-slate-800">{inv.amount}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${inv.status === 'Paid' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                  {inv.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SchoolMockup({ accent }: { accent: string }) {
  return (
    <div>
      <TopBar title="School Dashboard" />
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-4 gap-3">
          <StatCard label="Students" value="842" change="+24" up icon={Users} accent={accent} />
          <StatCard label="Teachers" value="38" change="+2" up icon={GraduationCap} accent={accent} />
          <StatCard label="Classes" value="22" change="0%" up icon={Calendar} accent={accent} />
          <StatCard label="Fees Paid" value="78%" change="+5%" up icon={DollarSign} accent={accent} />
        </div>
        <div className="bg-white border border-slate-100 rounded-xl p-5">
          <h3 className="text-xs font-bold text-slate-700 mb-3">Today's Timetable</h3>
          <div className="space-y-2">
            {[
              { time: '08:00', class: 'Mathematics', teacher: 'Mr. Okafor', room: 'Room 12' },
              { time: '10:00', class: 'Science', teacher: 'Mrs. Adebayo', room: 'Lab 1' },
              { time: '14:00', class: 'History', teacher: 'Mr. Nkomo', room: 'Room 8' },
            ].map((s) => (
              <div key={s.time} className="flex items-center gap-3 py-2 border-b border-slate-50 last:border-b-0">
                <span className="text-xs font-bold text-slate-700 w-12">{s.time}</span>
                <div className="flex-1">
                  <p className="text-xs font-bold text-slate-800">{s.class}</p>
                  <p className="text-[10px] text-slate-400">{s.teacher} · {s.room}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function RealEstateMockup({ accent }: { accent: string }) {
  return (
    <div>
      <TopBar title="Property Management" />
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-4 gap-3">
          <StatCard label="Properties" value="48" change="+2" up icon={Building2} accent={accent} />
          <StatCard label="Occupied" value="92%" change="+3%" up icon={CheckCircle} accent={accent} />
          <StatCard label="Rent Collected" value="$34K" change="+8%" up icon={DollarSign} accent={accent} />
          <StatCard label="Maintenance" value="6" change="-2" up icon={Clock} accent={accent} />
        </div>
        <div className="bg-white border border-slate-100 rounded-xl p-5">
          <h3 className="text-xs font-bold text-slate-700 mb-3">Property Listings</h3>
          <div className="grid grid-cols-3 gap-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-slate-100 rounded-lg overflow-hidden">
                <div className={`h-16 bg-gradient-to-br ${accent} opacity-70 flex items-center justify-center`}>
                  <Building2 size={20} className="text-white" />
                </div>
                <div className="p-2.5">
                  <p className="text-xs font-bold text-slate-800">Property #{i}</p>
                  <p className="text-[10px] text-slate-400 mb-1">3 units · 2 occupied</p>
                  <span className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full">Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TontineMockup({ accent }: { accent: string }) {
  return (
    <div>
      <TopBar title="Savings Group" />
      <div className="p-6 space-y-4">
        <div className="bg-white border border-slate-100 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xs font-bold text-slate-700">Group: Savings Circle A</h3>
              <p className="text-[10px] text-slate-400">12 members · $200/month contribution</p>
            </div>
            <PiggyBank size={20} className="text-amber-500" />
          </div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="text-center">
              <p className="text-lg font-bold text-slate-900">$2,400</p>
              <p className="text-[10px] text-slate-400">Total Collected</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-slate-900">10/12</p>
              <p className="text-[10px] text-slate-400">Contributions</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-slate-900">Member 4</p>
 <p className="text-[10px] text-slate-400">Next Payout</p>
            </div>
          </div>
          <div className="space-y-2">
            {['Member 1', 'Member 2', 'Member 3', 'Member 4'].map((m, i) => (
              <div key={m} className="flex items-center gap-3 py-1.5 border-b border-slate-50 last:border-b-0">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${accent} flex items-center justify-center text-white text-[8px] font-bold`}>
                  {i + 1}
                </div>
                <span className="text-xs text-slate-700 flex-1">{m}</span>
                {i < 10 ? (
                  <span className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full">Paid</span>
                ) : (
                  <span className="text-[10px] bg-yellow-100 text-yellow-600 px-2 py-0.5 rounded-full">Pending</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EcommerceMockup({ accent }: { accent: string }) {
  return (
    <div>
      <TopBar title="Online Store" />
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-4 gap-3">
          <StatCard label="Orders" value="156" change="+12%" up icon={ShoppingCart} accent={accent} />
          <StatCard label="Revenue" value="$8,420" change="+18%" up icon={DollarSign} accent={accent} />
          <StatCard label="Visitors" value="2.4K" change="+5%" up icon={Users} accent={accent} />
          <StatCard label="Conv. Rate" value="3.2%" change="+0.4%" up icon={Activity} accent={accent} />
        </div>
        <div className="bg-white border border-slate-100 rounded-xl p-5">
          <h3 className="text-xs font-bold text-slate-700 mb-3">Recent Orders</h3>
          <div className="space-y-2">
            {[
              { id: '#1042', customer: 'Customer A', total: '$120', status: 'Shipped' },
              { id: '#1041', customer: 'Customer B', total: '$340', status: 'Processing' },
              { id: '#1040', customer: 'Customer C', total: '$89', status: 'Delivered' },
            ].map((o) => (
              <div key={o.id} className="flex items-center gap-3 py-2 border-b border-slate-50 last:border-b-0">
                <span className="text-[10px] font-mono text-slate-500">{o.id}</span>
                <span className="text-xs text-slate-700 flex-1">{o.customer}</span>
                <span className="text-xs font-bold text-slate-800">{o.total}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                  o.status === 'Delivered' ? 'bg-green-100 text-green-600' :
                  o.status === 'Shipped' ? 'bg-blue-100 text-blue-600' :
                  'bg-yellow-100 text-yellow-600'
                }`}>{o.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
