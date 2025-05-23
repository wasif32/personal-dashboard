"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { User, Briefcase, Award, Book, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const navItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'personal', label: 'Personal', icon: Book },
];

const NavItem = ({ id, label, Icon, active, onClick }) => (
    <Button
        onClick={() => onClick(id)}
        size="sm"
        className={`  hover:bg-blue-100 flex items-center gap-1 px-3 py-1 rounded transition-colors duration-300
      ${active ? 'bg-blue-500 text-white border-none' : 'text-blue-900 border border-blue-900 bg-transparent'}
    `}
    >
        <Icon size={16} />
        {label}
    </Button>
);

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('profile');
    const router = useRouter();

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        setActiveSection(searchParams.get('section') || 'profile');
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleNavLinkClick = (id) => {
        setActiveSection(id);
        router.push(`/?section=${id}`);
        setMobileMenuOpen(false);
    };

    return (
        <div className="bg-white shadow-md py-4 px-6 sticky top-0 z-10">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-900">Personal Dashboard</h1>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleMobileMenu}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </Button>
                </div>

                {/* Desktop navigation */}
                <div className="hidden md:flex space-x-2">
                    {navItems.map(item => (
                        <NavItem
                            key={item.id}
                            id={item.id}
                            label={item.label}
                            Icon={item.icon}
                            active={activeSection === item.id}
                            onClick={handleNavLinkClick}
                        />
                    ))}
                </div>
            </div>

            {/* Mobile navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden mt-4 flex flex-col space-y-2">
                    {navItems.map(item => (
                        <NavItem
                            key={item.id}
                            id={item.id}
                            label={item.label}
                            Icon={item.icon}
                            active={activeSection === item.id}
                            onClick={handleNavLinkClick}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
