import { create } from 'zustand';

type StatusStore = {
  status: string;
  setStatus: (newStatus: string) => void;
};

export const useStatusStore = create<StatusStore>((set) => ({
  status: 'overview',
  setStatus: (newStatus : string) => set({ status: newStatus }),
}));
