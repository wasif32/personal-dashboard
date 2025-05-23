'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Book, Calendar, Star, Code, Camera } from 'lucide-react'; // Import all necessary icons

export default function Personal({ userData }) { // Changed prop name to userData
    // Define your colors directly here
    const dashboardDarkBlue = '#1e3a8a';
    const dashboardBlue = '#3b82f6';
    const dashboardLightBlue = '#e0f2fe';
    const textColorGray = '#6b7280'; // Tailwind's gray-600

    const fadeInAnimation = `
  @keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
  }

  .animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
  }
  `;

    // Check if userData and its personal section exist
    if (!userData || !userData.personal || !userData.personal.hobbies || !userData.personal.goals) {
        return <div>Loading personal data...</div>;
    }

    const { hobbies, goals } = userData.personal; // Destructure personal data

    const getIcon = (iconName) => {
        switch (iconName) {
            case 'Book':
                return Book;
            case 'Code':
                return Code;
            case 'Camera':
                return Camera;
            // Add more cases for other icons you might use in hobbies
            default:
                return null;
        }
    };

    return (
        <div>
            <style>{fadeInAnimation}</style>
            <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-4" style={{ color: dashboardDarkBlue }}>Personal</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Hobbies Section */}
                    <Card className="section-card h-full rounded-lg overflow-hidden">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <Book style={{ color: dashboardBlue }} />
                                <h3 className="text-xl font-semibold" style={{ color: dashboardDarkBlue }}>Hobbies & Interests</h3>
                            </div>

                            <div className="space-y-5">
                                {hobbies.map((hobby) => { // Use destructured hobbies
                                    const IconComponent = getIcon(hobby.icon);
                                    return (
                                        <div key={hobby.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
                                            <div className="p-2 rounded-lg" style={{ backgroundColor: dashboardLightBlue }}> {/* Removed opacity: 0.2 */}
                                                {IconComponent && <IconComponent style={{ color: dashboardBlue }} size={20} />}
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-lg" style={{ color: dashboardDarkBlue }}>{hobby.name}</h4>
                                                <p className="text-gray-600" style={{ color: textColorGray }}>{hobby.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Goals Section */}
                    <Card className="section-card h-full rounded-lg overflow-hidden">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <Star style={{ color: dashboardBlue }} />
                                <h3 className="text-xl font-semibold" style={{ color: dashboardDarkBlue }}>Personal Goals</h3>
                            </div>

                            <div className="space-y-5">
                                {goals.map((goal) => ( // Use destructured goals
                                    <div key={goal.id} className="pb-4 border-b border-gray-100 last:border-0">
                                        <h4 className="font-medium text-lg" style={{ color: dashboardDarkBlue }}>{goal.title}</h4>
                                        <p className="text-gray-600 mb-2" style={{ color: textColorGray }}>{goal.description}</p>
                                        {goal.targetDate && (
                                            <div className="text-sm flex items-center gap-1" style={{ color: dashboardBlue }}>
                                                <Calendar size={14} />
                                                <span>Target: {goal.targetDate}</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}