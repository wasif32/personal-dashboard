'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { School, Briefcase, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Style constants
const styles = {
    sectionTitle: 'text-2xl font-bold mb-4 text-blue-900',
    card: 'section-card mb-8 rounded-lg overflow-hidden',
    content: 'p-6',
    header: 'flex items-center gap-2 mb-6',
    iconBlue: 'text-blue-500',
    titleBlue: 'text-blue-900',
    timeline: 'ml-4 relative before:absolute before:top-0 before:bottom-0 before:left-[-0.5rem] before:w-[2px] before:bg-gray-300',
    dot: 'absolute top-0 left-[-1rem] w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs',
    subTitle: 'font-bold text-lg',
    company: 'font-medium text-blue-500',
    dateText: 'text-sm flex items-center gap-1 mb-2 text-gray-600',
    description: 'text-gray-700 mb-3',
    badge: 'rounded-full px-3 py-1 bg-blue-100 text-blue-900',
};

// CSS keyframes inside component (can move to a global stylesheet)
const fadeInAnimation = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.4s ease-out forwards;
  }
`;

export default function Experience({ userData }) {
    return (
        <div>
            <style>{fadeInAnimation}</style>

            <div className="animate-fade-in">
                <h2 className={styles.sectionTitle}>Experience & Education</h2>

                {/* Work Experience */}
                <Card className={styles.card}>
                    <CardContent className={styles.content}>
                        <div className={styles.header}>
                            <Briefcase className={styles.iconBlue} />
                            <h3 className={`text-xl font-semibold ${styles.titleBlue}`}>Work Experience</h3>
                        </div>
                        <div className={styles.timeline}>
                            {userData?.experience?.map((exp, index) => (
                                <div key={index} className="mb-4 relative pl-6 last:pb-0">
                                    <div className={styles.dot}></div>
                                    <div className="mb-1">
                                        <h4 className={styles.subTitle}>{exp.title}</h4>
                                        <div className={styles.company}>{exp.company}</div>
                                        <div className={styles.dateText}>
                                            <Calendar size={14} />
                                            <span>{exp.duration || exp.year || 'N/A'}</span>
                                        </div>
                                    </div>
                                    <p className={styles.description}>{exp.description}</p>
                                    {exp.skills && (
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, skillIndex) => (
                                                <Badge key={skillIndex} variant="secondary" className={styles.badge}>
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Education */}
                <Card className="section-card rounded-lg overflow-hidden">
                    <CardContent className={styles.content}>
                        <div className={styles.header}>
                            <School className={styles.iconBlue} />
                            <h3 className={`text-xl font-semibold ${styles.titleBlue}`}>Education</h3>
                        </div>
                        <div className={styles.timeline}>
                            {userData?.education?.map((edu, index) => (
                                <div key={index} className="mb-4 relative pl-6 last:pb-0">
                                    <div className={styles.dot}></div>
                                    <div className="mb-1">
                                        <h4 className={styles.subTitle}>{edu.degree}</h4>
                                        <div className={styles.company}>{edu.institution}</div>
                                        {edu.year && (
                                            <div className={styles.dateText}>
                                                <Calendar size={14} />
                                                <span>{edu.year}</span>
                                            </div>
                                        )}
                                    </div>
                                    {edu.description && <p className={styles.description}>{edu.description}</p>}
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
