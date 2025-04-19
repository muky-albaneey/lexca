import { create } from 'zustand';

type StatusStore = {
  status: string;
  setStatus: (newStatus: string) => void;
};

export const useStatusStore = create<StatusStore>((set) => ({
  status: 'overview',
  setStatus: (newStatus : string) => set({ status: newStatus }),
}));


type AdminStatusStore = {
  adminStatus: string;
  setAdminStatus: (newStatus: string) => void;
};

export const AdminUseStatusStore = create<AdminStatusStore>((set) => ({
  adminStatus: 'dashboard',
  setAdminStatus: (newStatus : string) => set({ adminStatus: newStatus }),
}));
