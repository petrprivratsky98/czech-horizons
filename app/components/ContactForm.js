'use client'

import {useState} from 'react'
import {useTranslations} from 'next-intl'
import {C} from './Colors'

export default function ContactForm() {
  const t = useTranslations('contact')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formsubmit.co/ajax/info@czechhorizons.eu', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify({
          _subject: `Web – zpráva od ${name}`,
          jmeno: name,
          email,
          zprava: msg,
        }),
      })
      const data = await res.json()
      setStatus(data.success === 'true' || data.success === true ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') return (
    <div style={{
      padding: 'clamp(40px, 5vw, 64px)', textAlign: 'center',
      border: `1.5px solid ${C.green}30`, borderRadius: 24,
      background: `${C.green}08`,
    }}>
      <div style={{fontSize: 48, marginBottom: 16}}>🌿</div>
      <h3 style={{fontSize: 'clamp(22px, 2.2vw, 32px)', fontWeight: 800, color: C.dark, margin: '0 0 10px', letterSpacing: '-0.02em'}}>
        {t('form.successTitle')}
      </h3>
      <p style={{fontSize: 'clamp(15px, 1.1vw, 18px)', color: `${C.ink}99`, margin: 0}}>
        {t('form.successDesc')}
      </p>
    </div>
  )

  const inputStyle = {
    padding: '14px 18px', borderRadius: 12,
    border: `1.5px solid ${C.ink}18`,
    background: C.cream, color: C.ink,
    fontSize: 'clamp(14px, 1.05vw, 16px)',
    outline: 'none', width: '100%', boxSizing: 'border-box',
    fontFamily: 'var(--font-poppins), sans-serif',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.14em', color: `${C.ink}66`, marginBottom: 6, display: 'block',
  }

  return (
    <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: 16}}>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12}}>
        <div>
          <label style={labelStyle}>{t('form.name')}</label>
          <input
            type="text" required value={name} onChange={e => setName(e.target.value)}
            placeholder="Jan Novák"
            style={inputStyle}
            onFocus={e => { e.target.style.borderColor = C.orange }}
            onBlur={e => { e.target.style.borderColor = `${C.ink}18` }}
          />
        </div>
        <div>
          <label style={labelStyle}>{t('form.email')}</label>
          <input
            type="email" required value={email} onChange={e => setEmail(e.target.value)}
            placeholder="vas@email.cz"
            style={inputStyle}
            onFocus={e => { e.target.style.borderColor = C.orange }}
            onBlur={e => { e.target.style.borderColor = `${C.ink}18` }}
          />
        </div>
      </div>
      <div>
        <label style={labelStyle}>{t('form.message')}</label>
        <textarea
          required value={msg} onChange={e => setMsg(e.target.value)} rows={5}
          placeholder={t('form.messagePlaceholder')}
          style={{...inputStyle, resize: 'vertical'}}
          onFocus={e => { e.target.style.borderColor = C.orange }}
          onBlur={e => { e.target.style.borderColor = `${C.ink}18` }}
        />
      </div>
      <button
        type="submit" disabled={status === 'sending'}
        style={{
          alignSelf: 'flex-start',
          padding: 'clamp(14px, 1.2vw, 18px) clamp(32px, 3vw, 48px)',
          borderRadius: 100, border: 'none',
          background: status === 'sending' ? `${C.orange}66` : C.orange,
          color: C.cream,
          fontSize: 'clamp(13px, 1vw, 15px)', fontWeight: 800,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          cursor: status === 'sending' ? 'default' : 'pointer',
          fontFamily: 'var(--font-poppins), sans-serif',
          transition: 'opacity 0.2s',
          boxShadow: `0 8px 24px ${C.orange}30`,
        }}
      >
        {status === 'sending' ? t('form.sending') : t('form.submit')}
      </button>
      {status === 'error' && (
        <p style={{fontSize: 13, color: `${C.ink}88`, margin: 0}}>
          {t('form.error')}{' '}
          <a href="mailto:info@czechhorizons.eu" style={{color: C.orange}}>info@czechhorizons.eu</a>
        </p>
      )}
    </form>
  )
}
