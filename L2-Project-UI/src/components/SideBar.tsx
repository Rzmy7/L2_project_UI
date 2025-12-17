import React, { useState } from 'react';
import { 
  LayoutDashboard, MessageSquare, BarChart3, Target, Plug, 
  Building2, Users, Settings, Bell, User, HelpCircle, Mail, LogOut, ChevronLeft 
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('Reviews');

  return (
    <nav className="sidebar">
      {/* 1. HEADER (Remains fixed at the top) */}
      <div className="sidebar-header">
        <div className="logo-avatar">HR</div>
        <div className="header-info">
          <span className="brand-name">ReviewHub</span>
          <span className="hotel-name">Grand Hotel NYC</span>
        </div>
        <button className="collapse-btn">
          <ChevronLeft size={16} />
        </button>
      </div>

      {/* 2. MENU (Now contains EVERYTHING and scrolls together) */}
      <div className="sidebar-menu">
        
        {/* Main Section */}
        <div className="menu-section">
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active={activeLink === 'Dashboard'} onClick={() => setActiveLink('Dashboard')} />
          <SidebarItem icon={<MessageSquare size={20} />} text="Reviews" active={activeLink === 'Reviews'} onClick={() => setActiveLink('Reviews')} />
          <SidebarItem icon={<BarChart3 size={20} />} text="Insights" active={activeLink === 'Insights'} onClick={() => setActiveLink('Insights')} />
          <SidebarItem icon={<Target size={20} />} text="Competitors" active={activeLink === 'Competitors'} onClick={() => setActiveLink('Competitors')} />
          <SidebarItem icon={<Plug size={20} />} text="Sources" active={activeLink === 'Sources'} onClick={() => setActiveLink('Sources')} />
        </div>

        <div className="divider"></div>

        {/* Organization Section */}
        <div className="menu-section">
          <div className="section-title">ORGANIZATION</div>
          <SidebarItem icon={<Building2 size={20} />} text="Groups & Branches" active={activeLink === 'Groups'} onClick={() => setActiveLink('Groups')} />
          <SidebarItem icon={<Users size={20} />} text="Team" active={activeLink === 'Team'} onClick={() => setActiveLink('Team')} />
        </div>

        <div className="divider"></div>

        {/* System Section */}
        <div className="menu-section">
          <div className="section-title">SYSTEM</div>
          <SidebarItem icon={<Settings size={20} />} text="Settings" active={activeLink === 'Settings'} onClick={() => setActiveLink('Settings')} />
          <SidebarItem icon={<Bell size={20} />} text="Notifications" badge="3" active={activeLink === 'Notifications'} onClick={() => setActiveLink('Notifications')} />
          <SidebarItem icon={<User size={20} />} text="Profile" active={activeLink === 'Profile'} onClick={() => setActiveLink('Profile')} />
        </div>

        <div className="divider"></div>

        {/* Footer Items (Now part of the scrollable list) */}
        <div className="menu-section">
          <SidebarItem icon={<HelpCircle size={20} />} text="Help & Docs" />
          <SidebarItem icon={<Mail size={20} />} text="Contact Support" />
          <SidebarItem icon={<LogOut size={20} />} text="Logout" isDanger />
        </div>

        <div className="version-tag">v2.4.1</div>
        
        {/* Add extra padding at bottom so the last item isn't cut off */}
        <div style={{ height: '20px' }}></div>
      </div>
    </nav>
  );
};

// Reusable component (Same as before)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SidebarItem = ({ icon, text, active = false, badge, isDanger = false, onClick }: any) => {
  return (
    <div 
      className={`sidebar-item ${active ? 'active' : ''} ${isDanger ? 'danger' : ''}`}
      onClick={onClick}
    >
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
      {badge && <span className="badge">{badge}</span>}
      {active && <div className="active-bar"></div>}
    </div>
  );
};

export default Sidebar;