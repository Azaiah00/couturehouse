"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES = [
  "Creative & Design",
  "Specialized Production",
  "Digital & Web",
  "Workflow & Campaign Automation",
  "Strategy",
  "Soundtrack & Scoring"
] as const;

const INDUSTRIES = [
  "Fashion & Apparel",
  "Cannabis Dispensary",
  "Jewelry & Accessories",
  "Home Goods",
  "Automotive",
  "Music & Entertainment",
  "Other"
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

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      services: [],
      industry: "",
      budget: ""
    },
  });

  const selectedServices = watch("services") || [];

  const toggleService = (service: string) => {
    const current = selectedServices;
    const newServices = current.includes(service)
      ? current.filter(s => s !== service)
      : [...current, service];
    setValue("services", newServices, { shouldValidate: true });
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    console.log(data);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel-dark p-12 rounded-xl text-center border-t-4 border-rose-gold"
      >
        <div className="w-20 h-20 bg-rose-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-gold">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-serif text-white mb-4">Message Sent Successfully</h3>
        <p className="text-neutral-400 mb-8 font-sans">
          Thank you for reaching out. We will review your inquiry and get back to you within 24 hours.
        </p>
        <Button variant="outline" onClick={() => setIsSuccess(false)}>Send Another Message</Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 glass-panel-dark p-8 md:p-12 rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-300 font-sans tracking-wide uppercase">Full Name</label>
          <input
            {...register("name")}
            className="w-full p-4 bg-charcoal border border-white/10 rounded-md text-white focus:outline-none focus:border-rose-gold transition-colors font-sans"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-400 text-xs font-sans">{errors.name.message}</p>}
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-300 font-sans tracking-wide uppercase">Email Address</label>
          <input
            {...register("email")}
            className="w-full p-4 bg-charcoal border border-white/10 rounded-md text-white focus:outline-none focus:border-rose-gold transition-colors font-sans"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-400 text-xs font-sans">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-300 font-sans tracking-wide uppercase">Company</label>
          <input
            {...register("company")}
            className="w-full p-4 bg-charcoal border border-white/10 rounded-md text-white focus:outline-none focus:border-rose-gold transition-colors font-sans"
            placeholder="Acme Corp"
          />
          {errors.company && <p className="text-red-400 text-xs font-sans">{errors.company.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-300 font-sans tracking-wide uppercase">Industry</label>
          <select
            {...register("industry")}
            className="w-full p-4 bg-charcoal border border-white/10 rounded-md text-white focus:outline-none focus:border-rose-gold transition-colors font-sans appearance-none"
          >
            <option value="" disabled>Select your industry</option>
            {INDUSTRIES.map(ind => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
          {errors.industry && <p className="text-red-400 text-xs font-sans">{errors.industry.message}</p>}
        </div>
      </div>

      <div className="space-y-4">
        <label className="text-sm font-medium text-neutral-300 font-sans tracking-wide uppercase">Services of Interest</label>
        <div className="flex flex-wrap gap-3">
          {SERVICES.map((service) => {
            const isSelected = selectedServices.includes(service);
            return (
              <button
                type="button"
                key={service}
                onClick={() => toggleService(service)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-sans transition-all duration-300 border",
                  isSelected 
                    ? "bg-crimson text-white border-crimson" 
                    : "bg-transparent text-neutral-400 border-white/10 hover:border-white/30 hover:text-white"
                )}
              >
                {service}
              </button>
            );
          })}
        </div>
        {errors.services && <p className="text-red-400 text-xs font-sans">{errors.services.message}</p>}
      </div>

      <div className="space-y-4">
        <label className="text-sm font-medium text-neutral-300 font-sans tracking-wide uppercase">Project Budget</label>
        <div className="flex flex-wrap gap-4">
          {["<$5k", "$5k-$10k", "$10k-$25k", "$25k+"].map((budget) => (
            <label key={budget} className="cursor-pointer">
              <input
                type="radio"
                value={budget}
                {...register("budget")}
                className="hidden peer"
              />
              <span className="px-6 py-3 rounded-md border border-white/10 bg-charcoal text-neutral-400 peer-checked:border-rose-gold peer-checked:text-white transition-all font-sans inline-block hover:border-white/30">
                {budget}
              </span>
            </label>
          ))}
        </div>
        {errors.budget && <p className="text-red-400 text-xs font-sans">{errors.budget.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-neutral-300 font-sans tracking-wide uppercase">Project Details</label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full p-4 bg-charcoal border border-white/10 rounded-md text-white focus:outline-none focus:border-rose-gold transition-colors resize-none font-sans"
          placeholder="Tell us about your goals, timeline, and current challenges..."
        />
        {errors.message && <p className="text-red-400 text-xs font-sans">{errors.message.message}</p>}
      </div>

      <Button 
        type="submit" 
        variant="luxury" 
        className="w-full py-6 text-lg" 
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit Inquiry"
        )}
      </Button>
    </form>
  );
}
