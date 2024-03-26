'use client'

import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'
import { useId } from 'react'
import { useDictionary } from '@/components/dictionary-provider'; // Assurez-vous que le chemin est correct


function TextInput({ label, ...props }) {
    let id = useId()
    
  
    return (
      <div className="group relative z-0 transition-all focus-within:z-10">
        <input
          type="text"
          id={id}
          {...props}
          placeholder=" "
          className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
        >
          {label}
        </label>
      </div>
    )
  }

export function ContactForm() {
  const dict = useDictionary()

    const [state, handleSubmit] = useForm("meqygver");
    if (state.succeeded) {
        return <h2 className="font-display text-base font-semibold text-neutral-950">
        We will contact you as soon as possible, thank you.
      </h2>;
    }
    return (
      <FadeIn className="lg:order-last">
        <form
          onSubmit={handleSubmit}>
          <h2 className="font-display text-base font-semibold text-neutral-950">
           {dict.ContactFooter.inquiries}
          </h2>
          <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
            <TextInput label="Name" name="name" autoComplete="name" />
            <TextInput
              label ="Email"
              type="email"
              name="email"
              autoComplete="email"
            />
            <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
            />
            <TextInput
              label="Company"
              name="company"
              autoComplete="organization"
            />
            <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
            <TextInput label="Message" name="message" />
            <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
           />
          </div>
          <Button type="submit" disabled={state.submitting} className="mt-10">
          {dict.ContactFooter.together}
          </Button>
        </form>
      </FadeIn>
    )
  }