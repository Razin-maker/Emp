import React from 'react';
import { motion } from 'framer-motion';

export const OrganizationCalendar = () => {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-8"
                >
                    <p className="text-sm text-gray-500 mb-2 uppercase tracking-wide">ORGANIZATION CALENDAR</p>
                    <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold mb-4 text-slate-900">Everything in One View</h2>
                    <p className="text-gray-600">Holidays, absences, meetings, and tasks—all in one unified view.</p>
                </motion.div>

                {/* Desktop View */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="hidden md:block bg-white rounded-3xl shadow-xl p-6 border border-gray-100"
                >
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" style={{ color: '#50a7e3' }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold text-gray-900">January 2026</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs">
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#50a7e3' }}></div>
                                <span className="text-gray-600">Meetings</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-orange-400"></div>
                                <span className="text-gray-600">Absences</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                <span className="text-gray-600">Holidays</span>
                            </div>
                        </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="max-w-[450px] mx-auto mb-6">
                        <div className="grid grid-cols-7 gap-1 mb-1">
                            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                <div key={day} className="text-center text-xs font-medium text-gray-500 py-1">
                                    {day}
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                            {Array.from({ length: 35 }, (_, i) => {
                                const day = i - 2;
                                const isValid = day > 0 && day <= 31;
                                const isHighlighted = day === 1;
                                const isSelected = day === 15;
                                const isAbsence = day === 20 || day === 21;
                                
                                return (
                                    <div
                                        key={i}
                                        className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-colors ${
                                            !isValid ? '' :
                                            isSelected ? 'text-white font-semibold' :
                                            isHighlighted ? 'bg-green-100 text-gray-900' :
                                            isAbsence ? 'bg-orange-100 text-gray-900' :
                                            'text-gray-700 hover:bg-gray-50'
                                        }`}
                                        style={isSelected ? { backgroundColor: '#50a7e3' } : undefined}
                                    >
                                        {isValid ? day : ''}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-4 gap-3 max-w-[450px] mx-auto">
                        {[
                            { number: '1', label: 'Holidays This Month' },
                            { number: '2', label: 'Team Absences' },
                            { number: '4', label: 'Scheduled Meetings' },
                            { number: '22', label: 'Working Days Left' }
                        ].map((stat, index) => (
                            <div key={index} className="bg-gray-50 rounded-xl p-3 text-center">
                                <div className="text-xl font-bold text-gray-900 mb-0.5">{stat.number}</div>
                                <div className="text-xs text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Mobile View */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:hidden bg-white rounded-2xl shadow-xl p-4 border border-gray-100"
                >
                    {/* Calendar Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" style={{ color: '#50a7e3' }} fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold text-gray-900 text-sm">January 2026</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs mb-4">
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#50a7e3' }}></div>
                            <span className="text-gray-600">Meetings</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                            <span className="text-gray-600">Absences</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            <span className="text-gray-600">Holidays</span>
                        </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="mb-4">
                        <div className="grid grid-cols-7 gap-1 mb-1">
                            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                                <div key={i} className="text-center text-xs font-medium text-gray-500 py-1">
                                    {day}
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-7 gap-1">
                            {Array.from({ length: 35 }, (_, i) => {
                                const day = i - 2;
                                const isValid = day > 0 && day <= 31;
                                const isHighlighted = day === 1;
                                const isSelected = day === 15;
                                const isAbsence = day === 20 || day === 21;
                                
                                return (
                                    <div
                                        key={i}
                                        className={`aspect-square flex items-center justify-center text-xs rounded-lg ${
                                            !isValid ? '' :
                                            isSelected ? 'text-white font-semibold' :
                                            isHighlighted ? 'bg-green-100 text-gray-900' :
                                            isAbsence ? 'bg-orange-100 text-gray-900' :
                                            'text-gray-700'
                                        }`}
                                        style={isSelected ? { backgroundColor: '#50a7e3' } : undefined}
                                    >
                                        {isValid ? day : ''}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-2">
                        {[
                            { number: '1', label: 'Holidays' },
                            { number: '2', label: 'Absences' },
                            { number: '4', label: 'Meetings' },
                            { number: '22', label: 'Days Left' }
                        ].map((stat, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-2 text-center">
                                <div className="text-lg font-bold text-gray-900">{stat.number}</div>
                                <div className="text-xs text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
