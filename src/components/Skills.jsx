'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Award } from 'lucide-react';
import { InView } from 'react-intersection-observer';

export default function Skills({ userData }) {
    const dashboardDarkBlue = '#1e3a8a';
    const dashboardBlue = '#3b82f6';
    const certificationCardBg = '#F9FAFB';

    const fadeInAnimation = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .animate-fade-in-on-scroll {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    }

    .animate-fade-in-on-scroll.in-view {
      opacity: 1;
      transform: translateY(0);
    }
  `;

    const slideInAnimation = `
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-10px); }
      to { opacity: 1; transform: translateX(0); }
    }

    .animate-slide-in-on-scroll {
      opacity: 0;
      transform: translateX(-20px);
      transition: opacity 0.4s ease-out, transform 0.4s ease-out;
    }

    .animate-slide-in-on-scroll.in-view {
      opacity: 1;
      transform: translateX(0);
    }

  .animate-slide-in {
    animation: slideIn 0.5s ease-out forwards;
    opacity: 0;
    transform: translateX(-10px);
  }

  @keyframes slideIn {
    to { opacity: 1; transform: translateX(0); }
  }
  `;

    if (!userData || !userData.skills || !userData.certifications) {
        return <div>Loading skills and certifications data...</div>;
    }

    return (
        <div>
            <style>
                {fadeInAnimation}
                {slideInAnimation}
            </style>
            <h2 className="text-2xl font-bold mb-4" style={{ color: dashboardDarkBlue }}>Skills & Expertise</h2>

            {Object.entries(userData.skills).map(([category, skills]) => (
                <InView key={category} threshold={0.1} triggerOnce>
                    {({ ref, inView }) => (
                        <Card
                            ref={ref}
                            className={`section-card mb-8 rounded-lg overflow-hidden animate-fade-in-on-scroll ${inView ? 'in-view' : ''}`}
                        >
                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 mb-6">
                                    <Code style={{ color: dashboardBlue }} size={20} />
                                    <h3 className="text-xl font-semibold capitalize" style={{ color: dashboardDarkBlue }}>
                                        {category.replace(/([A-Z])/g, ' $1').trim()}
                                    </h3>
                                </div>
                                <div className="space-y-5">
                                    {skills.map((skill, index) => (
                                        <InView key={skill.name} threshold={0.1} triggerOnce>
                                            {({ ref, inView }) => (
                                                <div
                                                    ref={ref}
                                                    className={`animate-slide-in-on-scroll ${inView ? 'in-view' : ''}`}
                                                    style={{ transitionDelay: `${index * 100}ms` }}
                                                >
                                                    <div className="flex justify-between items-center mb-1">
                                                        <span className="font-medium">{skill.name}</span>
                                                        <span className="text-sm text-gray-500">{skill.level}%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                        <div
                                                            className="bg-blue-500 h-2.5 rounded-full"
                                                            style={{
                                                                width: `${skill.level}%`,
                                                                background: `linear-gradient(to right, ${dashboardBlue}, ${skill.level > 80 ? '#22d3ee' : '#93c5fd'})`,
                                                            }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            )}
                                        </InView>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </InView>
            ))}

            {/* Certifications Section (Wrapped in a Card) */}
            {userData.certifications && userData.certifications.length > 0 && (
                <InView threshold={0.1} triggerOnce>
                    {({ ref, inView }) => (
                        <Card
                            ref={ref}
                            className={`section-card mt-10 rounded-lg overflow-hidden animate-fade-in-on-scroll ${inView ? 'in-view' : ''}`}
                        >
                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 mb-6">
                                    <Award className="inline-block mr-2" style={{ color: dashboardBlue }} size={24} />
                                    <h2 className="text-2xl font-bold" style={{ color: dashboardDarkBlue }}>Certifications</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {userData.certifications.map((cert, index) => (
                                        <InView key={index} threshold={0.1} triggerOnce>
                                            {({ ref, inView }) => (
                                                <div
                                                    ref={ref}
                                                    className={`p-4 border rounded-lg bg-gray-50 animate-slide-in ${inView ? 'in-view' : ''}`}
                                                    style={{ animationDelay: `${index * 150}ms`, backgroundColor: certificationCardBg }}
                                                >
                                                    <h4 className="font-semibold" style={{ color: dashboardDarkBlue }}>{cert.title}</h4>
                                                    <div className="text-sm text-gray-600">
                                                        {cert.organization && <p>Issued by {cert.organization}</p>}
                                                        {cert.year && <p>Obtained {cert.year}</p>}
                                                    </div>
                                                    {cert.url && (
                                                        <a
                                                            href={cert.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-sm text-blue-500 hover:underline mt-2 inline-block"
                                                        >
                                                            View Certificate
                                                        </a>
                                                    )}
                                                </div>
                                            )}
                                        </InView>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </InView>
            )}
        </div>
    );
}