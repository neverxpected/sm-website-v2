'use client'

import { useState } from 'react'
import type { Service } from '@/types/database'

interface ServicePickerClientProps {
  label: string
  services: Service[]
}

export default function ServicePickerClient({ label, services }: ServicePickerClientProps) {
  const [selected, setSelected] = useState<string[]>([])

  function toggle(serviceName: string) {
    setSelected((prev) =>
      prev.includes(serviceName)
        ? prev.filter((s) => s !== serviceName)
        : [...prev, serviceName]
    )
  }

  const activeItems = services.filter((s) => s.is_active !== false)

  return (
    <div>
      <label className="block text-xs font-semibold mb-2" style={{ color: '#374151' }}>
        {label}{' '}
        <span style={{ color: '#FF2D78' }}>*</span>{' '}
        <span style={{ color: '#6B7280', fontWeight: 400 }}>(select all that apply)</span>
      </label>
      <div className="flex flex-wrap gap-2">
        {activeItems.map((service) => {
          const active = selected.includes(service.name)
          return (
            <button
              key={service.id}
              type="button"
              onClick={() => toggle(service.name)}
              className="px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200"
              style={{
                background: active
                  ? 'linear-gradient(135deg, rgba(255,45,120,0.15), rgba(155,48,255,0.15))'
                  : '#F3F4F6',
                border: active
                  ? '1px solid rgba(255,45,120,0.55)'
                  : '1px solid rgba(0,0,0,0.15)',
                color: active ? '#FF2D78' : '#374151',
                boxShadow: active ? '0 0 12px rgba(255,45,120,0.15)' : 'none',
              }}
            >
              {active && (
                <span className="mr-1.5" style={{ color: '#FF2D78' }}>
                  ✓
                </span>
              )}
              {service.name}
            </button>
          )
        })}
      </div>
      <input
        type="text"
        name="_service_required_guard"
        required
        aria-hidden="true"
        tabIndex={-1}
        value={selected.length > 0 ? 'ok' : ''}
        onChange={() => {}}
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', height: 0, width: 0 }}
      />
      {selected.map((s) => (
        <input key={s} type="hidden" name="service_interest" value={s} />
      ))}
    </div>
  )
}
