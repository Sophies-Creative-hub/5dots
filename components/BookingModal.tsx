
import React, { useState, useRef } from 'react';
import { X, CheckCircle2, Upload, Calendar as CalendarIcon, Info, ChevronRight, ChevronLeft, ChevronLeftSquare, ChevronRightSquare } from 'lucide-react';
import { ARTISTS } from '../constants';
import { BookingFormData } from '../types';

interface BookingModalProps { isOpen: boolean; onClose: () => void; }

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>({ artistId: '', name: '', email: '', phone: '', idea: '', date: '' });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Calendar State for Prototype
  const [viewDate, setViewDate] = useState(new Date());
  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1).getDay();
  
  const calendarDays = Array.from({ length: daysInMonth(viewDate.getFullYear(), viewDate.getMonth()) }, (_, i) => i + 1);
  const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

  if (!isOpen) return null;

  const handleNext = () => {
    if (step === 1 && !formData.artistId) { setError('Bitte wähle zuerst einen Artist aus.'); return; }
    if (step === 2 && !formData.idea) { setError('Erzähl uns bitte ein wenig von deiner Idee.'); return; }
    setError(''); setStep(step + 1);
  };

  const handleBack = () => { setError(''); setStep(step - 1); };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date) { setError('Bitte Namen, E-Mail und Wunschtermin angeben.'); return; }
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setIsSuccess(true); setTimeout(() => { onClose(); resetForm(); }, 3500); }, 1800);
  };

  const resetForm = () => {
    setStep(1); setFormData({ artistId: '', name: '', email: '', phone: '', idea: '', date: '' });
    setSelectedFile(null); setIsSuccess(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) { setSelectedFile(e.target.files[0]); }
  };

  const selectCalendarDate = (day: number) => {
    const dateStr = `${day}. ${monthNames[viewDate.getMonth()]} ${viewDate.getFullYear()}`;
    setFormData(prev => ({ ...prev, date: dateStr }));
  };

  const inputStyles = "w-full px-6 py-5 bg-gray-900 text-white border-2 border-gray-800 rounded-[1.5rem] focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 outline-none transition-all text-lg placeholder:text-gray-600";
  const labelStyles = "block text-sm font-black text-gray-400 uppercase tracking-widest mb-3 ml-2";

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center bg-black/60 backdrop-blur-md p-0 md:p-6 transition-all animate-ink">
      <div className="bg-white w-full max-w-3xl h-full md:h-auto md:rounded-[3rem] shadow-2xl flex flex-col overflow-hidden relative">
        
        {/* Progress Visual */}
        <div className="absolute top-0 left-0 w-full h-2 flex">
          {[1, 2, 3].map(s => (
            <div key={s} className={`flex-grow transition-all duration-700 ${step >= s ? 'bg-orange-500' : 'bg-gray-100'}`} />
          ))}
        </div>

        {/* Header Area */}
        <div className="p-8 md:p-12 pb-2 flex justify-between items-start mt-2">
          <div className="space-y-1">
            <p className="text-orange-500 font-black text-xs uppercase tracking-tighter">Booking Request</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">
              {isSuccess ? 'Erfolgreich!' : step === 1 ? 'Wähle deinen Artist' : step === 2 ? 'Projekt-Details' : 'Termin & Kontakt'}
            </h2>
          </div>
          <button onClick={onClose} className="p-3 bg-gray-50 hover:bg-red-50 hover:text-red-900 rounded-2xl transition-all">
            <X size={28} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-grow overflow-y-auto px-8 md:px-12 py-6 no-scrollbar">
          {isSuccess ? (
            <div className="py-20 flex flex-col items-center text-center space-y-8 animate-ink">
              <div className="w-32 h-32 bg-green-50 text-green-500 rounded-full flex items-center justify-center border-4 border-green-100">
                <CheckCircle2 size={64} />
              </div>
              <div className="space-y-3">
                <h3 className="text-4xl font-black text-gray-900">Anfrage erhalten!</h3>
                <p className="text-gray-500 text-xl font-medium">Wir prüfen deine Idee und melden uns <br/>schnellstmöglich bei dir.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-8 min-h-[450px]">
              {error && <div className="p-5 bg-red-50 text-red-700 text-sm rounded-[1.5rem] border border-red-100 flex gap-3 animate-pulse"><Info size={20}/> {error}</div>}

              {step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-ink">
                  {ARTISTS.map(a => (
                    <button
                      key={a.id}
                      onClick={() => setFormData({...formData, artistId: a.id})}
                      className={`flex flex-col p-6 rounded-[2.5rem] border-2 transition-all text-left group relative overflow-hidden ${
                        formData.artistId === a.id ? 'border-orange-500 bg-orange-50/30' : 'border-gray-100 hover:border-orange-200'
                      }`}
                    >
                      <div className="flex items-center gap-6 mb-4">
                        <img src={a.imageUrl} className="w-20 h-20 rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform" />
                        <div>
                          <p className="font-black text-gray-900 text-2xl tracking-tighter">{a.name}</p>
                          <p className="text-orange-500 text-xs font-black uppercase tracking-widest">{a.handle}</p>
                        </div>
                      </div>
                      <p className="text-gray-500 text-sm italic font-medium">"{a.description.split('.')[0]}."</p>
                      {formData.artistId === a.id && <div className="absolute top-4 right-4 text-orange-500"><CheckCircle2 size={24} /></div>}
                    </button>
                  ))}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8 animate-ink">
                  <div>
                    <label className={labelStyles}>Deine Tattoo-Idee*</label>
                    <textarea 
                      name="idea" value={formData.idea} onChange={handleChange} rows={5}
                      placeholder="Erzähl uns von Größe, Stelle, Stil..."
                      className={inputStyles}
                    />
                  </div>
                  <div>
                    <label className={labelStyles}>Referenzbilder / Inspiration</label>
                    <div onClick={() => fileInputRef.current?.click()} className="border-4 border-dashed border-gray-100 rounded-[2rem] p-12 flex flex-col items-center justify-center cursor-pointer hover:border-orange-400 hover:bg-orange-50/30 transition-all group">
                      <input type="file" className="hidden" ref={fileInputRef} onChange={handleFileChange} accept="image/*" />
                      <div className="w-20 h-20 bg-gray-900 text-orange-500 rounded-3xl shadow-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Upload size={32} />
                      </div>
                      <p className="text-gray-900 font-black text-xl">{selectedFile ? selectedFile.name : 'Bilddatei auswählen'}</p>
                      <p className="text-gray-400 text-sm mt-1 italic font-medium">Drag & Drop oder Klick</p>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-8 animate-ink">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Calendar Selection */}
                    <div className="space-y-4">
                      <label className={labelStyles}>Wunschtermin wählen*</label>
                      <div className="bg-gray-50 rounded-[2rem] p-6 border border-gray-100">
                        <div className="flex justify-between items-center mb-6 px-2">
                          <p className="font-black text-gray-900">{monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}</p>
                          <div className="flex gap-2">
                            <button onClick={() => setViewDate(new Date(viewDate.setMonth(viewDate.getMonth() - 1)))} className="hover:text-orange-500 transition-colors"><ChevronLeftSquare size={24}/></button>
                            <button onClick={() => setViewDate(new Date(viewDate.setMonth(viewDate.getMonth() + 1)))} className="hover:text-orange-500 transition-colors"><ChevronRightSquare size={24}/></button>
                          </div>
                        </div>
                        <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-black text-gray-400 uppercase mb-4">
                          {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map(d => <div key={d}>{d}</div>)}
                        </div>
                        <div className="grid grid-cols-7 gap-2">
                          {Array(firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1).fill(null).map((_, i) => <div key={i} />)}
                          {calendarDays.map(day => (
                            <button 
                              key={day}
                              onClick={() => selectCalendarDate(day)}
                              className={`aspect-square flex items-center justify-center rounded-xl text-sm font-bold transition-all ${
                                formData.date.includes(`${day}. ${monthNames[viewDate.getMonth()]}`)
                                ? 'bg-orange-500 text-white shadow-lg shadow-orange-200 scale-110'
                                : 'hover:bg-white hover:shadow-sm text-gray-700'
                              }`}
                            >
                              {day}
                            </button>
                          ))}
                        </div>
                      </div>
                      {formData.date && (
                        <div className="flex items-center gap-2 text-orange-600 font-black text-sm px-4 bg-orange-50 py-3 rounded-2xl border border-orange-100">
                          <CalendarIcon size={18} /> Gewählt: {formData.date}
                        </div>
                      )}
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                      <div>
                        <label className={labelStyles}>Dein Name*</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Vor- & Nachname" className={inputStyles} />
                      </div>
                      <div>
                        <label className={labelStyles}>E-Mail Adresse*</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@beispiel.de" className={inputStyles} />
                      </div>
                      <div>
                        <label className={labelStyles}>Handynummer</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+49 123..." className={inputStyles} />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        {!isSuccess && (
          <div className="p-8 md:p-12 pt-4 bg-gray-50 border-t border-gray-100 flex gap-4">
            {step > 1 && (
              <button onClick={handleBack} className="px-8 py-5 bg-white border-2 border-gray-200 text-gray-900 font-black rounded-[1.5rem] hover:bg-gray-100 flex items-center gap-2 transition-all">
                <ChevronLeft size={20} /> <span className="hidden md:inline">Zurück</span>
              </button>
            )}
            {step < 3 ? (
              <button onClick={handleNext} className="flex-grow py-5 bg-orange-500 text-white font-black rounded-[1.5rem] shadow-xl shadow-orange-100 hover:bg-orange-600 hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2 transition-all">
                Weiter zum Termin <ChevronRight size={20} />
              </button>
            ) : (
              <button onClick={handleSubmit} disabled={isSubmitting} className="flex-grow py-5 bg-gray-900 text-white font-black rounded-[1.5rem] shadow-2xl hover:bg-orange-600 transition-all disabled:opacity-50 flex items-center justify-center gap-3">
                {isSubmitting ? 'Wird übermittelt...' : 'Anfrage jetzt absenden'}
                <ArrowRight size={20} className="hidden md:block"/>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Internal icon for better footer feel
const ArrowRight = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

export default BookingModal;
