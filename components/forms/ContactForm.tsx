"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  type: z.enum(["brand", "model"]),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  socialHandle: z.string().min(1, "Social handle is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "brand",
    },
  });

  const type = watch("type");

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
        className="bg-white p-12 rounded-sm shadow-xl text-center border-t-4 border-rose-gold"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-serif font-bold mb-4">Message Sent Successfully</h3>
        <p className="text-neutral-500 mb-8">
          Thank you for contacting Couture House Co. Our team will review your inquiry and get back to you within 24 hours.
        </p>
        <Button variant="outline" onClick={() => setIsSuccess(false)}>Send Another Message</Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white p-8 md:p-12 rounded-sm shadow-lg border border-neutral-100">
      <div className="flex gap-6 mb-8">
        <label className={cn(
          "flex-1 cursor-pointer border rounded-lg p-4 text-center transition-all duration-300",
          type === "brand" ? "border-rose-gold bg-rose-gold/5" : "border-neutral-200 hover:border-neutral-300"
        )}>
          <input 
            type="radio" 
            value="brand" 
            className="hidden" 
            {...register("type")} 
          />
          <span className={cn("font-serif font-bold block mb-1", type === "brand" ? "text-rose-gold-dark" : "text-neutral-600")}>I'm a Brand</span>
          <span className="text-xs text-neutral-400">Looking for models</span>
        </label>

        <label className={cn(
          "flex-1 cursor-pointer border rounded-lg p-4 text-center transition-all duration-300",
          type === "model" ? "border-rose-gold bg-rose-gold/5" : "border-neutral-200 hover:border-neutral-300"
        )}>
          <input 
            type="radio" 
            value="model" 
            className="hidden" 
            {...register("type")} 
          />
          <span className={cn("font-serif font-bold block mb-1", type === "model" ? "text-rose-gold-dark" : "text-neutral-600")}>I'm a Model</span>
          <span className="text-xs text-neutral-400">Applying to join</span>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">Full Name</label>
          <input
            {...register("name")}
            className="w-full p-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-rose-gold transition-colors"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">Email Address</label>
          <input
            {...register("email")}
            className="w-full p-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-rose-gold transition-colors"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            {type === "brand" ? "Company Name" : "Portfolio URL (Optional)"}
          </label>
          <input
            {...register("company")}
            className="w-full p-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-rose-gold transition-colors"
            placeholder={type === "brand" ? "Acme Fashion" : "https://portfolio.com"}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-neutral-700">
            {type === "brand" ? "Instagram / Website" : "Instagram Handle"}
          </label>
          <input
            {...register("socialHandle")}
            className="w-full p-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-rose-gold transition-colors"
            placeholder={type === "brand" ? "@brandname" : "@username"}
          />
          {errors.socialHandle && <p className="text-red-500 text-xs">{errors.socialHandle.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-neutral-700">Message</label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full p-3 border border-neutral-200 rounded-sm focus:outline-none focus:border-rose-gold transition-colors resize-none"
          placeholder="Tell us about your project or background..."
        />
        {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
      </div>

      <Button 
        type="submit" 
        variant="luxury" 
        className="w-full" 
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}

