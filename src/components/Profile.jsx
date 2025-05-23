'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Linkedin, Github, Globe } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Profile({ userData }) {
    const dashboardDarkBlue = '#1e3a8a';
    const dashboardBlue = '#3b82f6';

    const fadeInAnimation = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
            animation: fadeIn 0.4s ease-out forwards;
        }
    `;

    if (!userData) {
        return <div>Loading profile...</div>;
    }

    return (
        <div>
            <style>{fadeInAnimation}</style>
            <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-4" style={{ color: dashboardDarkBlue }}>Profile</h2>
                <Card className="section-card rounded-lg overflow-hidden min-h-[300px]">
                    <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row items-center md:items-start mb-4">
                            <Avatar className="h-24 w-24 md:h-32 md:w-32 rounded-xl border-2" style={{ borderColor: dashboardBlue }}>
                                {userData.imageUrl ? (
                                    <AvatarImage
                                        src={userData.imageUrl}
                                        alt={userData.name ? `${userData.name}'s profile picture` : 'Profile'}
                                    />
                                ) : null}
                                <AvatarFallback>{userData.name ? userData.name.charAt(0).toUpperCase() : '?'}</AvatarFallback>
                            </Avatar>
                            <div className="md:ml-10 mt-4 md:mt-0 text-center md:text-left w-full">
                                <h1 className="text-3xl font-bold mb-1" style={{ color: dashboardDarkBlue }}>{userData.name}</h1>
                                <p className="text-lg mb-2" style={{ color: dashboardBlue }}>{userData.role || 'Full Stack Developer'}</p>
                                <p className="mb-4 text-gray-600">{userData.bio}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                    <div className="space-y-2">
                                        {userData.email && (
                                            <p className="flex items-start gap-2 text-sm text-gray-600 break-all">
                                                <Mail style={{ color: dashboardBlue }} size={16} />
                                                <span>{userData.email}</span>
                                            </p>
                                        )}
                                        {userData.linkedin && (
                                            <p className="flex items-start gap-2 text-sm text-gray-600 break-all">
                                                <Linkedin style={{ color: dashboardBlue }} size={16} />
                                                <a
                                                    href={userData.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:underline break-all"
                                                >
                                                    {userData.linkedin.replace(/^https?:\/\//, '')}
                                                </a>
                                            </p>
                                        )}
                                        {userData.website && (
                                            <p className="flex items-start gap-2 text-sm text-gray-600 break-all">
                                                <Globe style={{ color: dashboardBlue }} size={16} />
                                                <a
                                                    href={userData.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:underline break-all"
                                                >
                                                    {userData.website.replace(/^https?:\/\//, '')}
                                                </a>
                                            </p>
                                        )}
                                    </div>
                                    <div className="space-y-2">
                                        {userData.phone && (
                                            <p className="flex items-start gap-2 text-sm text-gray-600 break-all">
                                                <Phone style={{ color: dashboardBlue }} size={16} />
                                                <span>{userData.phone}</span>
                                            </p>
                                        )}
                                        {userData.github && (
                                            <p className="flex items-start gap-2 text-sm text-gray-600 break-all">
                                                <Github style={{ color: dashboardBlue }} size={16} />
                                                <a
                                                    href={userData.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:underline break-all"
                                                >
                                                    {userData.github.replace(/^https?:\/\//, '')}
                                                </a>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}