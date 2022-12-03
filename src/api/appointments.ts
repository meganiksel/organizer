import {
  useFetch,
  useLoadMore,
  usePrefetch,
  useUpdate,
} from '../utils/reactQuery';
import { apiRoutes } from '../routes';
import {
  AppointmentInterface,
  PhoneDetailInterface,
  InsuranceDetailsInterface,
} from '../interfaces/appointments';
import { pathToUrl } from '../utils/router';

export const useGetAppointmentsList = () =>
  useLoadMore<AppointmentInterface[]>(apiRoutes.getUserList);

export const useGetAppointment = (id: number) =>
  useFetch<AppointmentInterface>(pathToUrl(apiRoutes.appointment, { id }));

export const usePatchAppointment = (id: number) =>
  useUpdate<AppointmentInterface, AppointmentInterface>(
    pathToUrl(apiRoutes.appointment, { id })
  );

export const useGetPhoneDetail = (id: number | null) =>
  useFetch<PhoneDetailInterface>(
    pathToUrl(apiRoutes.getPhoneDetail, { id }),
    undefined,
    { staleTime: 2000 }
  );

export const useGetInsurance = (id: number | null) =>
  useFetch<InsuranceDetailsInterface>(
    id ? pathToUrl(apiRoutes.getInsurance, { id }) : null
  );

export const usePrefetchPhoneDetails = (id: number | null) =>
  usePrefetch<InsuranceDetailsInterface>(
    id ? pathToUrl(apiRoutes.getPhoneDetail, { id }) : null
  );
