import { create } from "zustand";

export const useStore = create((set) => ({
  selectedDoctor: null,
  appointments: [],

  setSelectedDoctor: (doctor) => set({ selectedDoctor: doctor }),

  clearSelectedDoctor: () => set({ selectedDoctor: null }),

  addAppointment: (appointment) =>
    set((state) => ({
      appointments: [...state.appointments, appointment],
    })),
}));
