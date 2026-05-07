"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Loader2, AlertCircle, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  "Creative & Design",
  "Production",
  "Digital",
  "Performance",
  "Strategy",
  "Sound & Score",
] as const;

const INDUSTRIES = [
  "Fashion & Apparel",
  "Beauty & Personal Care",
  "Food & Beverage",
  "Home & Lifestyle",
  "Wellness",
  "Hospitality",
  "Consumer Tech",
  "Spirits & Wine",
  "Entertainment",
  "Other",
] as const;

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company is required"),
  industry: z.string().min(1, "Industry is required"),
  services: z.array(z.string()).min(1, "Select at least one service"),
  budget: z.string().min(1, "Budget is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const inputClass =
  "w-full bg-transparent border-b border-white/15 focus:border-white text-white py-4 px-0 font-sans focus:outline-none transition-colors placeholder:text-white/30";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { services: [], industry: "", budget: "" },
  });

  const selectedServices = watch("services") || [];

  const toggleService = (service: string) => {
    const current = selectedServices;
    const next = current.includes(service)
      ? current.filter((s) => s !== service)
      : [...current, service];
    setValue("services", next, { shouldValidate: true });
  };

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? "Something went wrong");
      }

      setSuccess(true);
      reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setServerError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-line p-12 md:p-16 text-center"
      >
        <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center mx-auto mb-8 text-white">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="display-heading text-white text-3xl md:text-4xl mb-4">Thanks. We&rsquo;ll be in touch.</h3>
        <p className="text-white/55 mb-10 font-sans max-w-md mx-auto">
          We typically respond within one business day. In the meantime, feel free to keep exploring.
        </p>
        <Button variant="luxury" onClick={() => setSuccess(false)}>
          Send another inquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        <Field label="Full name" error={errors.name?.message}>
          <input {...register("name")} placeholder="Your name" className={inputClass} />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} type="email" placeholder="you@brand.com" className={inputClass} />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <input {...register("company")} placeholder="Brand or company" className={inputClass} />
        </Field>
        <Field label="Industry" error={errors.industry?.message}>
          <select
            {...register("industry")}
            className={cn(inputClass, "appearance-none pr-8 cursor-pointer")}
            defaultValue=""
          >
            <option value="" disabled className="bg-black">
              Select industry
            </option>
            {INDUSTRIES.map((ind) => (
              <option key={ind} value={ind} className="bg-black">
                {ind}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="space-y-5">
        <Label>Services of interest</Label>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((service) => {
            const selected = selectedServices.includes(service);
            return (
              <button
                type="button"
                key={service}
                onClick={() => toggleService(service)}
                className={cn(
                  "px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-sans transition-all duration-200 border",
                  selected
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white/60 border-white/20 hover:border-white/60 hover:text-white",
                )}
              >
                {service}
              </button>
            );
          })}
        </div>
        {errors.services && <ErrorText>{errors.services.message}</ErrorText>}
      </div>

      <div className="space-y-5">
        <Label>Project budget</Label>
        <div className="flex flex-wrap gap-3">
          {["< $5k", "$5k–$10k", "$10k–$25k", "$25k–$100k", "$100k+"].map((b) => (
            <label key={b} className="cursor-pointer">
              <input type="radio" value={b} {...register("budget")} className="hidden peer" />
              <span className="px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-sans border border-white/20 text-white/60 peer-checked:bg-white peer-checked:text-black peer-checked:border-white hover:border-white/60 hover:text-white transition-all inline-block">
                {b}
              </span>
            </label>
          ))}
        </div>
        {errors.budget && <ErrorText>{errors.budget.message}</ErrorText>}
      </div>

      <Field label="Project details" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us about your goals, timeline, and where things stand today."
          className={cn(inputClass, "resize-none")}
        />
      </Field>

      {serverError && (
        <div className="flex items-start gap-3 border border-white/30 px-5 py-4 text-white/85 text-sm font-sans">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <p>{serverError}</p>
        </div>
      )}

      <div className="pt-4 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-white/50 text-xs uppercase tracking-[0.22em] font-sans">
          We respond within 1 business day
        </p>
        <Button type="submit" variant="default" size="lg" disabled={submitting} className="px-10">
          {submitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending
            </>
          ) : (
            <>
              <span>Send inquiry</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[10px] uppercase tracking-[0.22em] text-white/50 font-sans block">
      {children}
    </label>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label>{label}</Label>
      {children}
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="text-white/70 text-xs font-sans">{children}</p>;
}
