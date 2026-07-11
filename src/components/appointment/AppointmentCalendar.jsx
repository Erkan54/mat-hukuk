import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DAYS_TR = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
const MONTHS_TR = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
];

const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
];

// Simulated busy slots — in production these would come from an API/database
// Format: { 'YYYY-MM-DD': ['09:00', '10:00', ...] }
const generateBusySlots = () => {
  const busy = {};
  const today = new Date();
  // Generate some realistic busy patterns for the next 60 days
  for (let i = 1; i <= 60; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    const dayOfWeek = d.getDay();
    // Skip weekends
    if (dayOfWeek === 0 || dayOfWeek === 6) continue;
    const key = d.toISOString().split('T')[0];
    // Randomly make some slots busy (seed based on date for consistency)
    const seed = d.getDate() * (d.getMonth() + 1);
    const busyForDay = [];
    TIME_SLOTS.forEach((slot, idx) => {
      if ((seed + idx * 7) % 3 === 0) {
        busyForDay.push(slot);
      }
    });
    if (busyForDay.length > 0) {
      busy[key] = busyForDay;
    }
  }
  return busy;
};

const BUSY_SLOTS = generateBusySlots();

export default function AppointmentCalendar({ selectedDate, selectedTime, onDateSelect, onTimeSelect, dateError, timeError }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [direction, setDirection] = useState(0);

  const calendarDays = useMemo(() => {
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startDay = (firstDay.getDay() + 6) % 7; // Monday = 0
    const days = [];

    // Previous month padding
    const prevLastDay = new Date(currentYear, currentMonth, 0).getDate();
    for (let i = startDay - 1; i >= 0; i--) {
      days.push({ day: prevLastDay - i, currentMonth: false, date: null });
    }

    // Current month days
    for (let d = 1; d <= lastDay.getDate(); d++) {
      const date = new Date(currentYear, currentMonth, d);
      const dateStr = date.toISOString().split('T')[0];
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const isPast = date < today;
      const busySlots = BUSY_SLOTS[dateStr] || [];
      const availableCount = isWeekend || isPast ? 0 : TIME_SLOTS.length - busySlots.length;
      const isFullyBooked = !isWeekend && !isPast && availableCount === 0;

      days.push({
        day: d,
        currentMonth: true,
        date: dateStr,
        isWeekend,
        isPast,
        isFullyBooked,
        availableCount,
        busySlots
      });
    }

    // Next month padding
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({ day: i, currentMonth: false, date: null });
    }

    return days;
  }, [currentMonth, currentYear]);

  const goToPrevMonth = () => {
    setDirection(-1);
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(y => y - 1);
    } else {
      setCurrentMonth(m => m - 1);
    }
  };

  const goToNextMonth = () => {
    setDirection(1);
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(y => y + 1);
    } else {
      setCurrentMonth(m => m + 1);
    }
  };

  const canGoPrev = !(currentMonth === today.getMonth() && currentYear === today.getFullYear());

  const handleDayClick = (day) => {
    if (!day.currentMonth || day.isPast || day.isWeekend || day.isFullyBooked) return;
    onDateSelect(day.date);
    // Clear time if it's busy on the new date
    if (selectedTime && day.busySlots.includes(selectedTime)) {
      onTimeSelect('');
    }
  };

  const selectedDateBusySlots = selectedDate ? (BUSY_SLOTS[selectedDate] || []) : [];

  // Determine status color dot for calendar days
  const getStatusIndicator = (day) => {
    if (!day.currentMonth || day.isPast || day.isWeekend) return null;
    if (day.isFullyBooked) return 'bg-error/60';
    if (day.availableCount <= 2) return 'bg-gold';
    return 'bg-success/70';
  };

  return (
    <div className="space-y-6">
      {/* Calendar */}
      <div className={`bg-white rounded-2xl border shadow-sm overflow-hidden ${dateError ? 'border-error' : 'border-border/30'}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-navy text-white">
          <button
            type="button"
            onClick={goToPrevMonth}
            disabled={!canGoPrev}
            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all ${
              canGoPrev ? 'hover:bg-white/15 active:scale-95' : 'opacity-30 cursor-not-allowed'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h3 className="font-serif text-lg font-semibold tracking-wide">
            {MONTHS_TR[currentMonth]} {currentYear}
          </h3>
          <button
            type="button"
            onClick={goToNextMonth}
            className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-white/15 active:scale-95 transition-all"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Day names */}
        <div className="grid grid-cols-7 border-b border-border/20">
          {DAYS_TR.map((d, i) => (
            <div key={d} className={`py-2.5 text-center text-xs font-semibold tracking-wider uppercase ${
              i >= 5 ? 'text-text-secondary/40' : 'text-navy/70'
            }`}>
              {d}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${currentYear}-${currentMonth}`}
            initial={{ opacity: 0, x: direction * 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -30 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-7"
          >
            {calendarDays.map((day, i) => {
              const isSelected = day.date === selectedDate;
              const isToday = day.currentMonth && day.date === today.toISOString().split('T')[0];
              const isDisabled = !day.currentMonth || day.isPast || day.isWeekend || day.isFullyBooked;
              const statusColor = getStatusIndicator(day);

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleDayClick(day)}
                  disabled={isDisabled}
                  className={`
                    relative aspect-square flex flex-col items-center justify-center text-sm
                    transition-all duration-200 border-b border-r border-border/10
                    ${!day.currentMonth ? 'text-text-secondary/20' : ''}
                    ${day.currentMonth && !isDisabled && !isSelected ? 'hover:bg-navy/5 cursor-pointer' : ''}
                    ${day.isPast && day.currentMonth ? 'text-text-secondary/30' : ''}
                    ${day.isWeekend && day.currentMonth && !day.isPast ? 'text-text-secondary/30' : ''}
                    ${day.isFullyBooked ? 'text-error/40 line-through' : ''}
                    ${isSelected ? 'bg-navy text-white font-bold shadow-lg shadow-navy/20 scale-[0.92] rounded-xl z-10' : ''}
                    ${isToday && !isSelected ? 'font-bold text-navy' : ''}
                    ${day.currentMonth && !isDisabled && !isSelected ? 'text-text-primary font-medium' : ''}
                  `}
                >
                  <span className="relative">
                    {day.day}
                    {isToday && !isSelected && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-navy rounded-full" />
                    )}
                  </span>
                  {statusColor && !isSelected && (
                    <span className={`absolute bottom-1.5 w-1.5 h-1.5 rounded-full ${statusColor}`} />
                  )}
                  {isSelected && (
                    <motion.span
                      layoutId="selected-day"
                      className="absolute inset-0 bg-navy rounded-xl -z-10"
                      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    />
                  )}
                </button>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Legend */}
        <div className="flex items-center justify-center gap-5 py-3 bg-cream/50 border-t border-border/20">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-success/70" />
            <span className="text-[10px] text-text-secondary">Müsait</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="text-[10px] text-text-secondary">Az Yer</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-error/60" />
            <span className="text-[10px] text-text-secondary">Dolu</span>
          </div>
        </div>
      </div>

      {dateError && <p className="text-xs text-error -mt-4">{dateError}</p>}

      {/* Time slots */}
      <AnimatePresence>
        {selectedDate && (
          <motion.div
            initial={{ opacity: 0, y: 15, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`bg-white rounded-2xl border p-5 shadow-sm ${timeError ? 'border-error' : 'border-border/30'}`}>
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-serif text-base font-semibold text-text-primary">
                  Saat Seçimi
                </h4>
                <span className="text-xs text-text-secondary bg-cream px-3 py-1 rounded-full">
                  {new Date(selectedDate + 'T00:00:00').toLocaleDateString('tr-TR', {
                    day: 'numeric', month: 'long', weekday: 'long'
                  })}
                </span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {TIME_SLOTS.map((slot) => {
                  const isBusy = selectedDateBusySlots.includes(slot);
                  const isActive = selectedTime === slot;
                  const endHour = parseInt(slot.split(':')[0]) + 1;
                  const displaySlot = `${slot} - ${endHour.toString().padStart(2, '0')}:00`;

                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => !isBusy && onTimeSelect(slot)}
                      disabled={isBusy}
                      className={`
                        relative py-2.5 px-2 rounded-xl text-xs font-medium transition-all duration-200
                        ${isBusy
                          ? 'bg-cream-dark/50 text-text-secondary/30 cursor-not-allowed line-through'
                          : isActive
                            ? 'bg-gold text-white shadow-md shadow-gold/25 scale-[1.02]'
                            : 'bg-cream hover:bg-navy/5 text-text-primary hover:text-navy border border-border/30 hover:border-navy/30'
                        }
                      `}
                    >
                      {displaySlot}
                      {isBusy && (
                        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-error/80 rounded-full flex items-center justify-center">
                          <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              {timeError && <p className="text-xs text-error mt-2">{timeError}</p>}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
