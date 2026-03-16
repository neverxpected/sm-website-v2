import type { Service } from '@/types/database'
import ServicePickerClient from './ServicePicker.client'

interface ServicePickerProps {
  label: string
  services: Service[]
}

export default function ServicePicker({ label, services }: ServicePickerProps) {
  return <ServicePickerClient label={label} services={services} />
}
